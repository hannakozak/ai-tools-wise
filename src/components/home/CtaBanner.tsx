'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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

export function CtaBanner() {
	return (
		<section className="max-w-6xl mx-auto px-6 py-20">
			<motion.div
				variants={fadeUp}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-12 text-center"
			>
				<div
					className="absolute inset-0 opacity-10"
					style={{
						backgroundImage:
							'linear-gradient(white 1px, transparent 1px), linear-gradient(to right, white 1px, transparent 1px)',
						backgroundSize: '30px 30px',
					}}
				/>
				<div className="relative">
					<h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
						Stay ahead of the AI curve
					</h2>
					<p className="text-indigo-100 max-w-xl mx-auto mb-8 text-lg">
						Browse our curated collection of tools, courses and articles —
						updated regularly so you never miss what matters.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-3">
						<Link
							href="/tools"
							className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-indigo-600 font-medium text-sm hover:bg-indigo-50 transition-colors shadow-lg"
						>
							Explore AI Tools <ArrowRight size={16} />
						</Link>
						<Link
							href="/courses"
							className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-colors"
						>
							Browse Courses
						</Link>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
