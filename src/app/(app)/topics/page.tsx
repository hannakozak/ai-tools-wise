'use client';

import { useRef, useState } from 'react';
import type { ReactElement } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
	Zap,
	PenLine,
	Brain,
	Briefcase,
	Image,
	Search,
	Rocket,
	Code2,
	Database,
	GitCompare,
	Sparkles,
	Cpu,
	Layers,
	BookOpen,
	Wrench,
	FileText,
} from 'lucide-react';
import { ai_topics } from '../../../content/topics/ai-topics';

type Topic = {
	id: string;
	name: string;
	desc: string;
	icon: string;
	color: string;
	tag: string;
	articleCount: number;
	toolCount: number;
	courseCount: number;
};

type TopicCardProps = {
	topic: Topic;
	index: number;
};

const iconMap: Record<string, ReactElement> = {
	Zap: <Zap size={20} />,
	PenLine: <PenLine size={20} />,
	Brain: <Brain size={20} />,
	Briefcase: <Briefcase size={20} />,
	Image: <Image size={20} />,
	Search: <Search size={20} />,
	Rocket: <Rocket size={20} />,
	Code2: <Code2 size={20} />,
	Database: <Database size={20} />,
	GitCompare: <GitCompare size={20} />,
	Sparkles: <Sparkles size={20} />,
	Cpu: <Cpu size={20} />,
};

const colorMap: Record<string, { icon: string; badge: string; hover: string }> =
	{
		indigo: {
			icon: 'bg-indigo-50 dark:bg-indigo-950 text-indigo-500',
			badge:
				'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-400',
			hover: 'group-hover:from-indigo-400',
		},
		violet: {
			icon: 'bg-violet-50 dark:bg-violet-950 text-violet-500',
			badge:
				'bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-400',
			hover: 'group-hover:from-violet-400',
		},
		blue: {
			icon: 'bg-blue-50 dark:bg-blue-950 text-blue-500',
			badge: 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400',
			hover: 'group-hover:from-blue-400',
		},
		emerald: {
			icon: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-500',
			badge:
				'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400',
			hover: 'group-hover:from-emerald-400',
		},
		pink: {
			icon: 'bg-pink-50 dark:bg-pink-950 text-pink-500',
			badge: 'bg-pink-50 text-pink-700 dark:bg-pink-950 dark:text-pink-400',
			hover: 'group-hover:from-pink-400',
		},
		amber: {
			icon: 'bg-amber-50 dark:bg-amber-950 text-amber-500',
			badge: 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400',
			hover: 'group-hover:from-amber-400',
		},
		teal: {
			icon: 'bg-teal-50 dark:bg-teal-950 text-teal-500',
			badge: 'bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-400',
			hover: 'group-hover:from-teal-400',
		},
		slate: {
			icon: 'bg-slate-100 dark:bg-slate-800 text-slate-500',
			badge:
				'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400',
			hover: 'group-hover:from-slate-400',
		},
		cyan: {
			icon: 'bg-cyan-50 dark:bg-cyan-950 text-cyan-500',
			badge: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-400',
			hover: 'group-hover:from-cyan-400',
		},
		rose: {
			icon: 'bg-rose-50 dark:bg-rose-950 text-rose-500',
			badge: 'bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-400',
			hover: 'group-hover:from-rose-400',
		},
		fuchsia: {
			icon: 'bg-fuchsia-50 dark:bg-fuchsia-950 text-fuchsia-500',
			badge:
				'bg-fuchsia-50 text-fuchsia-700 dark:bg-fuchsia-950 dark:text-fuchsia-400',
			hover: 'group-hover:from-fuchsia-400',
		},
		green: {
			icon: 'bg-green-50 dark:bg-green-950 text-green-500',
			badge: 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400',
			hover: 'group-hover:from-green-400',
		},
	};

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.08 },
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

function TopicCard({ topic, index }: TopicCardProps): ReactElement {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: '-60px' });
	const colors = colorMap[topic.color] ?? colorMap.indigo;
	const icon = iconMap[topic.icon] ?? <Layers size={20} />;

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
					<div
						className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0 ${colors.icon}`}
					>
						{icon}
					</div>
					<span
						className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${colors.badge}`}
					>
						Topic
					</span>
				</div>

				<div>
					<h3 className="font-semibold text-gray-900 dark:text-gray-100 text-[15px] leading-snug mb-1">
						{topic.name}
					</h3>
				</div>

				<div className="border-t border-gray-100 dark:border-gray-800" />

				<p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
					{topic.desc}
				</p>

				<div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
					{topic.articleCount > 0 && (
						<span className="flex items-center gap-1">
							<FileText size={11} />
							{topic.articleCount} articles
						</span>
					)}
					{topic.toolCount > 0 && (
						<span className="flex items-center gap-1">
							<Wrench size={11} />
							{topic.toolCount} tools
						</span>
					)}
					{topic.courseCount > 0 && (
						<span className="flex items-center gap-1">
							<BookOpen size={11} />
							{topic.courseCount} courses
						</span>
					)}
				</div>

				<Link
					href={`/articles?tag=${encodeURIComponent(topic.tag)}`}
					className="mt-auto inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-950 hover:border-indigo-200 dark:hover:border-indigo-800 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all duration-200"
				>
					Explore Topic
					<Layers size={14} />
				</Link>
			</div>
		</motion.div>
	);
}

export default function TopicsPage(): ReactElement {
	const [query, setQuery] = useState('');

	const filtered = ai_topics.filter((t) => {
		const q = query.trim().toLowerCase();
		return !q || [t.name, t.desc, t.tag].join(' ').toLowerCase().includes(q);
	});

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
						<Layers size={12} />
						Browse by Topic
					</motion.div>

					<motion.h1
						custom={1}
						variants={heroVariants}
						initial="hidden"
						animate="visible"
						className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-50 tracking-tight mb-4"
					>
						Explore AI by{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500">
							topic
						</span>
					</motion.h1>

					<motion.p
						custom={2}
						variants={heroVariants}
						initial="hidden"
						animate="visible"
						className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-8"
					>
						Browse articles, tools and courses organised by subject — find
						exactly what you need, faster.
					</motion.p>

					<motion.div
						custom={3}
						variants={heroVariants}
						initial="hidden"
						animate="visible"
						className="flex items-center justify-center"
					>
						<div className="relative w-full sm:w-[380px]">
							<Search
								className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
								size={16}
							/>
							<input
								aria-label="Search topics"
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								placeholder="Search topics, e.g. 'productivity'"
								className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-700"
							/>
						</div>
					</motion.div>

					<motion.div
						custom={4}
						variants={heroVariants}
						initial="hidden"
						animate="visible"
						className="flex items-center justify-center gap-6 text-sm text-gray-400 dark:text-gray-500 mt-8"
					>
						<span>
							<strong className="text-gray-700 dark:text-gray-300">
								{ai_topics.length}
							</strong>{' '}
							topics
						</span>
						<span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
						<span>
							<strong className="text-gray-700 dark:text-gray-300">
								{filtered.length}
							</strong>{' '}
							shown
						</span>
						<span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
						<span>Articles, tools & courses</span>
					</motion.div>
				</div>
			</div>

			<div className="max-w-6xl mx-auto px-6 py-16">
				{filtered.length === 0 ? (
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="text-center text-gray-400 dark:text-gray-500 py-20"
					>
						No topics match your search.
					</motion.p>
				) : (
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
					>
						{filtered.map((topic, i) => (
							<TopicCard key={topic.id} topic={topic} index={i} />
						))}
					</motion.div>
				)}
			</div>
		</div>
	);
}
