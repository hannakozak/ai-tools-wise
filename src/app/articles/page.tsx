'use client';

import { useRef, useState } from 'react';
import type { ReactElement } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ExternalLink, FileText, Search, Clock, Tag } from 'lucide-react';
import { ai_articles } from '../../content/articles/ai-articles';

type Article = {
	id: string;
	title: string;
	slug: string;
	tagline: string;
	excerpt: string;
	category: string;
	readTime: string;
	tags: string[];
	href: string;
	source: string;
	publishedAt: string;
};

type ArticleCardProps = {
	article: Article;
	index: number;
};

const categories = [
	'All',
	'Guides',
	'Comparisons',
	'Deep Dives',
	'Research',
	'Opinion',
	'Tools',
];

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

const categoryColors: Record<string, string> = {
	Guides:
		'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-400',
	Comparisons:
		'bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-400',
	'Deep Dives': 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400',
	Research:
		'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400',
	Opinion: 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400',
	Tools: 'bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-400',
};

function ArticleCard({ article, index }: ArticleCardProps): ReactElement {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: '-60px' });

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
						<FileText size={18} className="text-indigo-500" />
					</div>
					<span
						className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${categoryColors[article.category] ?? 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'}`}
					>
						{article.category}
					</span>
				</div>

				<div>
					<h3 className="font-semibold text-gray-900 dark:text-gray-100 text-[15px] leading-snug mb-1">
						{article.title}
					</h3>
					<p className="text-xs text-indigo-500 dark:text-indigo-400 font-medium">
						{article.tagline}
					</p>
				</div>

				<div className="border-t border-gray-100 dark:border-gray-800" />

				<p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
					{article.excerpt}
				</p>

				<div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
					<span className="flex items-center gap-1">
						<Clock size={11} />
						{article.readTime}
					</span>
					<span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
					<span className="flex items-center gap-1">
						<Tag size={11} />
						{article.source}
					</span>
				</div>

				<div className="flex flex-wrap gap-1.5">
					{article.tags.slice(0, 3).map((tag) => (
						<span
							key={tag}
							className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
						>
							{tag}
						</span>
					))}
				</div>

				<Link
					href={article.href}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-auto inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-950 hover:border-indigo-200 dark:hover:border-indigo-800 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all duration-200"
				>
					Read Article
					<ExternalLink size={14} />
				</Link>
			</div>
		</motion.div>
	);
}

export default function ArticlesPage(): ReactElement {
	const [query, setQuery] = useState('');
	const [category, setCategory] = useState('All');

	const filtered = ai_articles.filter((a) => {
		const q = query.trim().toLowerCase();
		const matchesQ =
			!q ||
			[a.title, a.tagline, a.excerpt, ...a.tags]
				.join(' ')
				.toLowerCase()
				.includes(q);
		const matchesCategory = category === 'All' || a.category === category;
		return matchesQ && matchesCategory;
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
						<FileText size={12} />
						Curated AI Reading
					</motion.div>

					<motion.h1
						custom={1}
						variants={heroVariants}
						initial="hidden"
						animate="visible"
						className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-50 tracking-tight mb-4"
					>
						The best{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500">
							AI articles
						</span>{' '}
						to read now
					</motion.h1>

					<motion.p
						custom={2}
						variants={heroVariants}
						initial="hidden"
						animate="visible"
						className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-8"
					>
						Hand-picked articles from trusted sources — guides, comparisons,
						deep dives and research to keep you sharp on AI.
					</motion.p>

					<motion.div
						custom={3}
						variants={heroVariants}
						initial="hidden"
						animate="visible"
						className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6"
					>
						<div className="relative w-full sm:w-[380px]">
							<Search
								className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
								size={16}
							/>
							<input
								aria-label="Search articles"
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								placeholder="Search articles, e.g. 'prompt engineering'"
								className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-700"
							/>
						</div>
					</motion.div>

					<motion.div
						custom={4}
						variants={heroVariants}
						initial="hidden"
						animate="visible"
						className="flex flex-wrap items-center justify-center gap-2"
					>
						{categories.map((cat) => (
							<button
								key={cat}
								onClick={() => setCategory(cat)}
								className={`px-4 py-2 rounded-xl text-sm font-medium border transition-colors ${
									category === cat
										? 'bg-indigo-600 text-white border-indigo-600'
										: 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:border-indigo-200'
								}`}
							>
								{cat}
							</button>
						))}
					</motion.div>

					<motion.div
						custom={5}
						variants={heroVariants}
						initial="hidden"
						animate="visible"
						className="flex items-center justify-center gap-6 text-sm text-gray-400 dark:text-gray-500 mt-8"
					>
						<span>
							<strong className="text-gray-700 dark:text-gray-300">
								{ai_articles.length}
							</strong>{' '}
							articles
						</span>
						<span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
						<span>
							<strong className="text-gray-700 dark:text-gray-300">
								{filtered.length}
							</strong>{' '}
							shown
						</span>
						<span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
						<span>From trusted sources</span>
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
						No articles match your search.
					</motion.p>
				) : (
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
					>
						{filtered.map((article, i) => (
							<ArticleCard key={article.id} article={article} index={i} />
						))}
					</motion.div>
				)}
			</div>
		</div>
	);
}
