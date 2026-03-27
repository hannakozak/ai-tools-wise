'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Zap, Brain, Search } from 'lucide-react';

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

const features = [
	{
		icon: Zap,
		title: 'Curated, not scraped',
		desc: 'Every tool, course and article is hand-picked and reviewed — no filler, no affiliate spam.',
		color: 'text-amber-500',
		bg: 'bg-amber-50 dark:bg-amber-950',
	},
	{
		icon: Brain,
		title: 'Built for learners',
		desc: "Whether you're just starting with AI or building production systems, there's something here for you.",
		color: 'text-violet-500',
		bg: 'bg-violet-50 dark:bg-violet-950',
	},
	{
		icon: Search,
		title: 'Easy to navigate',
		desc: 'Browse by topic, filter by category, or search across all content to find exactly what you need.',
		color: 'text-indigo-500',
		bg: 'bg-indigo-50 dark:bg-indigo-950',
	},
];

export function WhySection() {
	return (
		<section className="max-w-6xl mx-auto px-6 py-20">
			<motion.div
				variants={fadeUp}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="text-center mb-12"
			>
				<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-3">
					Why AI Wise?
				</h2>
				<p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
					There are thousands of AI tools and tutorials. We make it easy to find
					what's actually worth your time.
				</p>
			</motion.div>

			<motion.div
				variants={stagger}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="grid grid-cols-1 sm:grid-cols-3 gap-5"
			>
				{features.map((f) => {
					const Icon = f.icon;
					return (
						<motion.div
							key={f.title}
							variants={cardVariants}
							className="flex flex-col gap-4 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-slate-100 dark:border-gray-800 shadow-md"
						>
							<div
								className={`w-10 h-10 rounded-xl flex items-center justify-center ${f.bg}`}
							>
								<Icon size={18} className={f.color} />
							</div>
							<div>
								<h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
									{f.title}
								</h3>
								<p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
									{f.desc}
								</p>
							</div>
						</motion.div>
					);
				})}
			</motion.div>
		</section>
	);
}
