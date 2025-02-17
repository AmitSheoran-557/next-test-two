"use client";  
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-semibold mb-8 text-gray-800">Welcome to the Dashboard</h1>
      <div className="flex flex-col space-y-4">
        <button onClick={() => router.push('/test/question-one/dashboard')}
          className="px-6 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 hover:shadow-xl transition-all duration-300 ease-linear">
          Dashboard One
        </button>
        <button onClick={() => router.push('/test/question-two/dashboard')}
          className="px-6 py-3 rounded-lg text-white bg-green-600 hover:bg-green-700 hover:shadow-xl transition-all duration-300 ease-linear0">
          Dashboard Two
        </button>
      </div>
    </div>
  );
}