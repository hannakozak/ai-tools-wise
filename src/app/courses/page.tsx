'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ExternalLink, CheckCircle2, XCircle, BookOpen } from 'lucide-react';
import { ai_courses } from '../../content/courses/ai-courses';

type Course = {
	id: string;
	name: string;
	tagline: string;
	desc: string;
	pros: string[];
	cons: string[];
	href: string;
};

type CourseCardProps = {
	course: Course;
	index: number;
};

const FREE_IDS = new Set([
	'ai-for-everyone',
	'fast-ai',
	'prompt-engineering-deeplearning',
	'huggingface-nlp',
	'google-ml-crash-course',
	'langchain-llm-apps',
	'cs229-stanford',
	'rag-deeplearning',
]);

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.08,
		},
	},
};

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 32 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
		},
	},
};

const heroVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.12,
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
		},
	}),
};

function CourseCard({ course, index }: CourseCardProps): React.JSX.Element {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: '-60px' });
	const isFree = FREE_IDS.has(course.id);

	return (
		<motion.div
			ref={ref}
			variants={cardVariants}
			initial="hidden"
			animate={inView ? 'visible' : 'hidden'}
			custom={index}
			whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
			className="group relative flex flex-col bg-white dark:bg-gray-900 border border-slate-100 dark:border-gray-800 rounded-2xl overflow-hidden shadow-md"
		>
			<div className="h-1 w-full bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

			<div className="flex flex-col flex-1 p-6 gap-4">
				<div className="flex items-start justify-between gap-3">
					<div className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 shrink-0">
						<BookOpen size={18} className="text-indigo-500" />
					</div>
					<span
						className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${
							isFree
								? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400'
								: 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400'
						}`}
					>
						{isFree ? 'Free' : 'Paid'}
					</span>
				</div>

				<div>
					<h3 className="font-semibold text-gray-900 dark:text-gray-100 text-[15px] leading-snug mb-1">
						{course.name}
					</h3>
					<p className="text-xs text-indigo-500 dark:text-indigo-400 font-medium">
						{course.tagline}
					</p>
				</div>
				<div className="border-t border-gray-100 dark:border-gray-800" />
				<p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
					{course.desc}
				</p>
				<ul className="flex flex-col gap-1.5">
					{course.pros.map((pro) => (
						<li
							key={pro}
							className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300"
						>
							<CheckCircle2
								size={13}
								className="text-emerald-500 mt-0.5 shrink-0"
							/>
							{pro}
						</li>
					))}
				</ul>
				<ul className="flex flex-col gap-1.5">
					{course.cons.map((con) => (
						<li
							key={con}
							className="flex items-start gap-2 text-xs text-gray-400 dark:text-gray-500"
						>
							<XCircle size={13} className="text-rose-400 mt-0.5 shrink-0" />
							{con}
						</li>
					))}
				</ul>
				<Link
					href={course.href}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-auto inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-950 hover:border-indigo-200 dark:hover:border-indigo-800 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all duration-200"
				>
					View Course
					<ExternalLink size={14} />
				</Link>
			</div>
		</motion.div>
	);
}

export default function CoursesPage(): React.JSX.Element {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-950">
			<div className="relative overflow-hidden border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
				<div
					className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
					style={{
						backgroundImage:
							'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)',
						backgroundSize: '40px 40px',
					}}
				/>

				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-indigo-400/10 blur-3xl rounded-full" />

				<div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
					<motion.div
						custom={0}
						variants={heroVariants}
						initial="hidden"
						animate="visible"
						className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 px-3 py-1.5 rounded-full mb-6"
					>
						<BookOpen size={12} />
						Curated AI Learning
					</motion.div>

					<motion.h1
						custom={1}
						variants={heroVariants}
						initial="hidden"
						animate="visible"
						className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-50 tracking-tight mb-4"
					>
						Learn AI from the{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500">
							best courses
						</span>
					</motion.h1>

					<motion.p
						custom={2}
						variants={heroVariants}
						initial="hidden"
						animate="visible"
						className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-8"
					>
						Hand-picked courses from world-class instructors — from zero to
						building production AI systems.
					</motion.p>

					<motion.div
						custom={3}
						variants={heroVariants}
						initial="hidden"
						animate="visible"
						className="flex items-center justify-center gap-6 text-sm text-gray-400 dark:text-gray-500"
					>
						<span>
							<strong className="text-gray-700 dark:text-gray-300">
								{ai_courses.length}
							</strong>{' '}
							courses
						</span>
						<span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
						<span>
							<strong className="text-gray-700 dark:text-gray-300">
								{FREE_IDS.size}
							</strong>{' '}
							free
						</span>
						<span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
						<span>All skill levels</span>
					</motion.div>
				</div>
			</div>
			<div className="max-w-6xl mx-auto px-6 py-16">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
				>
					{ai_courses.map((course, i) => (
						<CourseCard key={course.id} course={course} index={i} />
					))}
				</motion.div>
			</div>
		</div>
	);
}
