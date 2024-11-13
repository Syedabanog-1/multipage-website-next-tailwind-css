// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex justify-center space-x-4 text-white">
      <li><Link href="/">MyApp</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
