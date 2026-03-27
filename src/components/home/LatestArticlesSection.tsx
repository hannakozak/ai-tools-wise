'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import { ai_articles } from '@/content/articles/ai-articles';

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

export function LatestArticlesSection() {
	return (
		<section className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
			<div className="max-w-6xl mx-auto px-6 py-20">
				<motion.div
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="flex items-end justify-between mb-10"
				>
					<div>
						<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
							Latest articles
						</h2>
						<p className="text-gray-500 dark:text-gray-400">
							Hand-picked reads from trusted sources.
						</p>
					</div>
					<Link
						href="/articles"
						className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
					>
						View all <ArrowRight size={14} />
					</Link>
				</motion.div>

				<motion.div
					variants={stagger}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
				>
					{ai_articles.slice(0, 6).map((article) => (
						<motion.a
							key={article.id}
							variants={cardVariants}
							href={article.href}
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ y: -3, transition: { duration: 0.2 } }}
							className="group flex flex-col gap-3 p-5 rounded-2xl border border-slate-100 dark:border-gray-800 shadow-sm hover:shadow-md bg-white dark:bg-gray-900 transition-all duration-200"
						>
							<div className="flex items-center justify-between">
								<span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-400">
									{article.category}
								</span>
								<span className="text-xs text-gray-400 dark:text-gray-500">
									{article.readTime}
								</span>
							</div>
							<div>
								<h3 className="font-semibold text-[14px] text-gray-900 dark:text-gray-100 leading-snug mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
									{article.title}
								</h3>
								<p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
									{article.tagline}
								</p>
							</div>
							<div className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 mt-auto">
								<FileText size={11} />
								{article.source}
							</div>
						</motion.a>
					))}
				</motion.div>
			</div>
		</section>
	);
}
