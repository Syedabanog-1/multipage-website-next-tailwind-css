// pages/contact.tsx
import type { NextPage } from 'next';
import Head from 'next/head';

const Contact: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Contact - My Next.js Website</title>
      </Head>
      <h1 className="text-4xl font-bold text-blue-500">Contact Us</h1>
      <p className="mt-4 text-lg text-gray-700">This is the contact page.</p>
    </div>
  );
};

export default Contact;
