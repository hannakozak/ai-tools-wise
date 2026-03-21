'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { useSidebar } from '../contexts/SidebarContext';
import { Menu } from 'lucide-react';

export const Header = () => {
	const { setOpen } = useSidebar();

	return (
		<header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
				<button
					onClick={() => setOpen(true)}
					className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
					aria-label="Open menu"
				>
					<Menu size={20} />
				</button>
				<Link href="/" className="text-xl font-bold flex-1 lg:flex-none">
					<h2 className="text-xl font-bold">AI Wise</h2>
					<p className="text-sm text-gray-500">Learn & explore AI tools</p>
				</Link>
				<div className="hidden lg:flex flex-1" />
				<ThemeToggle />
			</div>
		</header>
	);
};
