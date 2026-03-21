'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { X, Wrench, BookOpen, FileText, Layers } from 'lucide-react';
import { useSidebar } from '@/contexts/SidebarContext';

const navItems = [
	{ label: 'Tools', href: '/tools', icon: Wrench },
	{ label: 'Courses', href: '/courses', icon: BookOpen },
	{ label: 'Articles', href: '/articles', icon: FileText },
	{ label: 'Topics', href: '/topics', icon: Layers },
];

export default function Sidebar() {
	const { open, setOpen } = useSidebar();

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	useEffect(() => {
		const handler = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
		window.addEventListener('keydown', handler);
		return () => window.removeEventListener('keydown', handler);
	}, []);

	return (
		<>
			{open && (
				<div
					className="fixed inset-0 bg-black/40 z-40 lg:hidden"
					onClick={() => setOpen(false)}
					aria-hidden="true"
				/>
			)}

			<aside
				aria-label="Sidebar navigation"
				className={`
          fixed lg:static z-50 top-0 left-0 h-full w-64
          bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-5
          transform transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
			>
				<div className="flex items-center justify-between mb-6 lg:hidden">
					<span className="font-semibold">Menu</span>
					<button onClick={() => setOpen(false)} aria-label="Close menu">
						<X size={20} />
					</button>
				</div>
				<nav className="space-y-2">
					{navItems.map((item) => {
						const Icon = item.icon;
						return (
							<Link
								key={item.href}
								href={item.href}
								onClick={() => setOpen(false)}
								className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
							>
								<Icon size={18} />
								<span>{item.label}</span>
							</Link>
						);
					})}
				</nav>
			</aside>
		</>
	);
}
