import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
        <Link href="/" className="link">Home
        </Link>
        </li>
        <li>
        <Link href="/about" className="link">About</Link>
        </li>
      </ul>
    </nav>
  );
}