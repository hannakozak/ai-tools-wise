'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
	Wrench,
	BookOpen,
	FileText,
	Layers,
	ArrowRight,
	Sparkles,
} from 'lucide-react';
import { ai_tools } from '@/content/tools/tools-list';
import { ai_courses } from '@/content/courses/ai-courses';
import { ai_articles } from '@/content/articles/ai-articles';

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 24 },
	visible: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.1,
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
		},
	}),
};

const stats = [
	{ label: 'AI Tools', value: ai_tools.length + '+', icon: Wrench },
	{ label: 'Courses', value: ai_courses.length + '+', icon: BookOpen },
	{ label: 'Articles', value: ai_articles.length + '+', icon: FileText },
	{ label: 'Topics', value: '12+', icon: Layers },
];

export function HeroSection() {
	return (
		<section className="relative overflow-hidden bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
			<div
				className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
				style={{
					backgroundImage:
						'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)',
					backgroundSize: '40px 40px',
				}}
			/>
			<motion.div
				animate={{ scale: [1, 1.15, 1], opacity: [0.07, 0.13, 0.07] }}
				transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
				className="absolute top-[-80px] left-[-80px] w-[500px] h-[500px] rounded-full bg-indigo-400 blur-3xl"
			/>
			<motion.div
				animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: 'easeInOut',
					delay: 2,
				}}
				className="absolute bottom-[-100px] right-[-60px] w-[400px] h-[400px] rounded-full bg-violet-400 blur-3xl"
			/>
			<motion.div
				animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.08, 0.04] }}
				transition={{
					duration: 12,
					repeat: Infinity,
					ease: 'easeInOut',
					delay: 4,
				}}
				className="absolute top-[30%] left-[50%] w-[300px] h-[300px] rounded-full bg-fuchsia-400 blur-3xl"
			/>

			<div className="relative max-w-5xl mx-auto px-6 py-28 text-center">
				<motion.div
					custom={0}
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 px-3 py-1.5 rounded-full mb-8"
				>
					<Sparkles size={12} />
					Your AI learning hub
				</motion.div>

				<motion.h1
					custom={1}
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-6 leading-[1.1]"
				>
					Everything AI. <br className="hidden sm:block" />
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500">
						All in one place.
					</span>
				</motion.h1>

				<motion.p
					custom={2}
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
				>
					Curated AI tools, courses and articles for creators, freelancers and
					developers. Cut through the noise — find what actually works.
				</motion.p>

				<motion.div
					custom={3}
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
				>
					<Link
						href="/tools"
						className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-colors shadow-lg shadow-indigo-200 dark:shadow-indigo-900"
					>
						Browse AI Tools
						<ArrowRight size={16} />
					</Link>
					<Link
						href="/topics"
						className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium text-sm hover:border-indigo-200 dark:hover:border-indigo-800 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
					>
						Explore Topics
					</Link>
				</motion.div>

				<motion.div
					custom={4}
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
				>
					{stats.map(({ label, value, icon: Icon }) => (
						<div
							key={label}
							className="flex flex-col items-center gap-1 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
						>
							<Icon size={16} className="text-indigo-400 mb-1" />
							<span className="text-2xl font-bold text-gray-900 dark:text-gray-50">
								{value}
							</span>
							<span className="text-xs text-gray-400 dark:text-gray-500">
								{label}
							</span>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
