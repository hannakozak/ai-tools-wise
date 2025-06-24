'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
	{ href: '/', label: 'Home' },
	{ href: '/tools', label: 'Tools' },
	{ href: '/posts', label: 'Blog' },
	{ href: '/reviews', label: 'Reviews' },
	{ href: '/about', label: 'About' },
	{ href: '/courses', label: 'Courses' },
];

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold">
					AI Tools Stack
				</Link>

				<nav className="hidden md:flex items-center space-x-6">
					{navItems.map(({ href, label }) => (
						<Link
							key={href}
							href={href}
							className="hover:underline text-gray-800 dark:text-gray-100"
						>
							{label}
						</Link>
					))}
					<ThemeToggle />
				</nav>

				<button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
				</button>
			</div>

			{isOpen && (
				<div className="md:hidden px-4 pb-4 space-y-2">
					{navItems.map(({ href, label }) => (
						<Link
							key={href}
							href={href}
							className="block text-gray-800 dark:text-gray-100 hover:underline"
						>
							{label}
						</Link>
					))}
					<ThemeToggle />
				</div>
			)}
		</header>
	);
};
