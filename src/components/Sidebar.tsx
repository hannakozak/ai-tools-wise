'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

type Heading = {
	id: string;
	text: string;
	level: number;
};

interface SidebarProps {
	headings: Heading[];
}

export default function Sidebar({ headings }: SidebarProps) {
	const [activeId, setActiveId] = useState<string>('');

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries.find((entry) => entry.isIntersecting);
				if (visible?.target?.id) {
					setActiveId(visible.target.id);
				}
			},
			{
				rootMargin: '0% 0% -80% 0%',
				threshold: 0.1,
			}
		);

		const headingElements = document.querySelectorAll('h1, h2, h3');

		headingElements.forEach((el) => observer.observe(el));

		return () => {
			headingElements.forEach((el) => observer.unobserve(el));
		};
	}, []);

	return (
		<aside className="sticky top-20 max-h-[80vh] overflow-auto pr-4">
			<ul className="space-y-2 text-sm">
				{headings.map((heading) => (
					<li
						key={heading.id}
						className={clsx(`ml-${(heading.level - 1) * 4}`)}
					>
						<a
							href={`#${heading.id}`}
							className={clsx(
								'block transition-colors hover:text-blue-500',
								activeId === heading.id
									? 'text-blue-600 font-bold'
									: 'text-gray-500'
							)}
						>
							{heading.text}
						</a>
					</li>
				))}
			</ul>
		</aside>
	);
}
