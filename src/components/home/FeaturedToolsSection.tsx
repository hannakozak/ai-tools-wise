'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Wrench, ArrowRight } from 'lucide-react';
import { ai_tools } from '@/content/tools/tools-list';

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

export function FeaturedToolsSection() {
	return (
		<section className="bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
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
							Featured tools
						</h2>
						<p className="text-gray-500 dark:text-gray-400">
							The most valuable AI tools available right now.
						</p>
					</div>
					<Link
						href="/tools"
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
					{ai_tools.slice(0, 6).map((tool) => (
						<motion.a
							key={tool.id}
							variants={cardVariants}
							href={tool.affiliate}
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ y: -3, transition: { duration: 0.2 } }}
							className="group flex items-start gap-4 p-5 rounded-2xl border border-slate-100 dark:border-gray-800 shadow-sm hover:shadow-md bg-white dark:bg-gray-900 transition-all duration-200"
						>
							<div className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 shrink-0">
								<Wrench size={16} className="text-indigo-500" />
							</div>
							<div className="flex-1 min-w-0">
								<div className="flex items-center gap-2 mb-1">
									<h3 className="font-semibold text-[14px] text-gray-900 dark:text-gray-100 truncate">
										{tool.name}
									</h3>
									<ArrowRight
										size={13}
										className="text-indigo-400 opacity-0 group-hover:opacity-100 shrink-0 transition-opacity"
									/>
								</div>
								<p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
									{tool.tagline}
								</p>
							</div>
						</motion.a>
					))}
				</motion.div>

				<div className="mt-6 sm:hidden text-center">
					<Link
						href="/tools"
						className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400"
					>
						View all tools <ArrowRight size={14} />
					</Link>
				</div>
			</div>
		</section>
	);
}
