"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface Entry {
    firstName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

const ToDo: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<Entry>();
    const [entries, setEntries] = useState<Entry[]>([]);
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data: Entry) => {
        if (data.password !== data.confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        if (entries.some(entry => entry.email === data.email)) {
            alert('This Email is already exist.');
            return;
        }

        setEntries(prevEntries => [...prevEntries, data]);
        reset();
    };

    const handleDelete = (email: string) => {
        setEntries(entries.filter(entry => entry.email !== email));
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-900 relative">
            <div className="max-w-2xl mx-auto mt-10 p-5 border w-full border-gray-300 bg-white rounded-lg">
                <h2 className="text-2xl font-bold mb-4 mx-auto text-center">To-Do Form</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                    <input {...register('firstName', { required: 'First name is required' })} type="text" placeholder="First Name"
                        className={`mb-3 px-4 rounded-lg py-3 border border-gray-700 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`} />
                    {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}

                    <input {...register('email', { required: 'Email is required' })} type="email" placeholder="Email"
                        className={`mb-3 px-4 rounded-lg py-3 border border-gray-700 ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                    <input {...register('phone', { required: 'Phone number is required' })} type="text" placeholder="Phone"
                        className={`mb-3 px-4 rounded-lg py-3 border border-gray-700 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`} />
                    {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

                    <input {...register('password', { required: 'Password is required' })} type={showPassword ? 'text' : 'password'} placeholder="Password"
                        className={`mb-3 px-4 rounded-lg py-3 border border-gray-700 ${errors.password ? 'border-red-500' : 'border-gray-300'}`} />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                    <input  {...register('confirmPassword', {
                        required: 'Please confirm your password', validate: (value) => {
                            const { password } = watch();
                            return password === value || 'Passwords do not match';
                        }
                    })} type={showPassword ? 'text' : 'password'} placeholder="Confirm Password"
                        className={`mb-3 px-4 rounded-lg py-3 border border-gray-700 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`} />
                    {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}

                    <label className="flex items-center mb-2">
                        <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} className="mr-2" />
                        Show Password
                    </label>

                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
                </form>

                <h3 className="text-xl font-bold mb-2">Entries</h3>
                <div className='overflow-x-scroll'>
                    {entries.length === 0 ? (
                        <p>No entries submitted.</p>
                    ) : (
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 p-2">First Name</th>
                                    <th className="border border-gray-300 p-2">Email</th>
                                    <th className="border border-gray-300 p-2">Phone</th>
                                    <th className="border border-gray-300 p-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {entries.map((entry, index) => (
                                    <tr key={index}>
                                        <td className="border border-gray-300 p-2">{entry.firstName}</td>
                                        <td className="border border-gray-300 p-2">{entry.email}</td>
                                        <td className="border border-gray-300 p-2">{entry.phone}</td>
                                        <td className="border border-gray-300 p-2 flex justify-center">
                                            <button onClick={() => handleDelete(entry.email)} className="bg-red-500 text-white p-1 rounded">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ToDo;