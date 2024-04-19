import { FaHome, FaUser } from 'react-icons/fa';
import Link from 'next/link';

export function BottomNav() {
    return (
        <div className="fixed inset-x-0 bottom-0 bg-blue-500 text-white flex justify-around items-center py-2 px-4">
            <Link href="/" aria-label="Home">
                <FaHome size="20" />
            </Link>
            <Link href="/dashboard" aria-label="Recipes">
                <FaHome size="20" />
            </Link>
            <Link href="/profile" aria-label="Profile">
                <FaUser size="20" />
            </Link>
            <Link href="/profile" aria-label="Profile">
                <FaUser size="20" />
            </Link>
        </div>
    );
}