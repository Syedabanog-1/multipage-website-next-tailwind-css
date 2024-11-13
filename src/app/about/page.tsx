// pages/about.tsx
import type { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>About - My Next.js Website</title>
      </Head>
      <h1 className="text-4xl font-bold text-blue-500">About Us</h1>
      <p className="mt-4 text-lg text-gray-700">This is the about page.</p>
    </div>
  );
};

export default About;
