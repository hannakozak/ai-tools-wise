'use client';

import React from 'react';

export interface Heading {
	id: string;
	text: string;
	level: number;
}

interface TableOfContentsSidebarProps {
	headings: Heading[];
}

export default function TableOfContentsSidebar({
	headings,
}: TableOfContentsSidebarProps) {
	return (
		<aside className="hidden lg:block w-1/4 sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto border-l pl-4 text-sm">
			<h2 className="font-semibold mb-3 text-gray-900">Table of Contents</h2>
			<ul className="space-y-1 text-gray-700">
				{headings.map((heading) => (
					<li
						key={heading.id}
						className={`ml-${(heading.level - 2) * 4} hover:text-blue-600`}
					>
						<a href={`#${heading.id}`} className="hover:underline block">
							{heading.text}
						</a>
					</li>
				))}
			</ul>
		</aside>
	);
}
