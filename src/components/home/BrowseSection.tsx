'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Wrench, BookOpen, FileText, Layers, ArrowRight } from 'lucide-react';

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
		},
	},
};

const stagger: Variants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
		},
	},
};

const navCards = [
	{
		href: '/tools',
		icon: Wrench,
		label: 'AI Tools',
		desc: 'The best AI tools reviewed and compared',
		color: 'from-indigo-500 to-violet-500',
		bg: 'bg-indigo-50 dark:bg-indigo-950',
		iconColor: 'text-indigo-500',
	},
	{
		href: '/courses',
		icon: BookOpen,
		label: 'Courses',
		desc: 'Learn AI from world-class instructors',
		color: 'from-violet-500 to-fuchsia-500',
		bg: 'bg-violet-50 dark:bg-violet-950',
		iconColor: 'text-violet-500',
	},
	{
		href: '/articles',
		icon: FileText,
		label: 'Articles',
		desc: 'Curated reading from trusted sources',
		color: 'from-fuchsia-500 to-pink-500',
		bg: 'bg-fuchsia-50 dark:bg-fuchsia-950',
		iconColor: 'text-fuchsia-500',
	},
	{
		href: '/topics',
		icon: Layers,
		label: 'Topics',
		desc: 'Browse all content by subject',
		color: 'from-pink-500 to-rose-500',
		bg: 'bg-pink-50 dark:bg-pink-950',
		iconColor: 'text-pink-500',
	},
];

export function BrowseSection() {
	return (
		<section className="max-w-6xl mx-auto px-6 pt-20 pb-20">
			<motion.div
				variants={fadeUp}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="text-center mb-12"
			>
				<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-3">
					Browse by section
				</h2>
				<p className="text-gray-500 dark:text-gray-400">
					Find exactly what you need across tools, courses, articles and topics.
				</p>
			</motion.div>

			<motion.div
				variants={stagger}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch"
			>
				{navCards.map((card) => {
					const Icon = card.icon;
					return (
						<motion.div
							key={card.href}
							variants={cardVariants}
							className="h-full"
						>
							<Link
								href={card.href}
								className="group flex flex-col gap-4 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-slate-100 dark:border-gray-800 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-full"
							>
								<div
									className={`w-10 h-10 rounded-xl flex items-center justify-center ${card.bg}`}
								>
									<Icon size={18} className={card.iconColor} />
								</div>
								<div className="flex-1">
									<div className="font-semibold text-gray-900 dark:text-gray-100 mb-1 flex items-center gap-2">
										{card.label}
										<ArrowRight
											size={14}
											className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 text-indigo-500"
										/>
									</div>
									<p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">
										{card.desc}
									</p>
								</div>
								<div
									className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${card.color} transition-all duration-300 rounded-full`}
								/>
							</Link>
						</motion.div>
					);
				})}
			</motion.div>
		</section>
	);
}
