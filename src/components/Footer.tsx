import { Sparkles } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
	{ href: '/tools', label: 'Tools' },
	{ href: '/courses', label: 'Courses' },
	{ href: '/articles', label: 'Articles' },
	{ href: '/topics', label: 'Topics' },
];

export const Footer = () => {
	return (
		<footer className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
			<div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
				<div className="flex items-center gap-2">
					<Sparkles size={16} className="text-indigo-500" />
					<span className="font-semibold text-gray-900 dark:text-gray-100">
						AI Wise
					</span>
					<span className="text-gray-400 dark:text-gray-500 text-sm">
						— Your AI learning hub
					</span>
				</div>

				<nav aria-label="Footer navigation">
					<ul className="flex items-center gap-6 text-sm text-gray-400 dark:text-gray-500">
						{navLinks.map(({ href, label }) => (
							<li key={href}>
								<Link
									href={href}
									className="hover:text-indigo-500 transition-colors"
								>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<p className="text-xs text-gray-400 dark:text-gray-500">
					© {new Date().getFullYear()} AI Wise
				</p>
			</div>
		</footer>
	);
};
