'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ExternalLink, Star } from 'lucide-react';
import { ai_tools } from '@/content/tools/tools-list';

export default function AiToolsShowcase({ className = '' }) {
	const [query, setQuery] = useState('');
	const [filter, setFilter] = useState('all');

	const filtered = ai_tools.filter((t) => {
		const q = query.trim().toLowerCase();
		const matchesQ =
			!q || [t.name, t.tagline, t.desc].join(' ').toLowerCase().includes(q);
		const matchesFilter =
			filter === 'all' ||
			(filter === 'recurring' &&
				t.pros.join(' ').toLowerCase().includes('recurring'));
		return matchesQ && matchesFilter;
	});

	return (
		<section className={`prose prose-slate mx-auto px-4 py-10 ${className}`}>
			<div className="max-w-4xl mx-auto text-center">
				<motion.h1
					initial={{ opacity: 0, y: -8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45 }}
					className="text-3xl sm:text-4xl font-extrabold leading-tight"
				>
					Popular AI tools — quick guides & comparisons
				</motion.h1>
				<p className="mt-3 text-slate-600 max-w-2xl mx-auto">
					Practical, beginner-friendly overviews of the top AI tools you can
					start using today. Each card includes pros, cons and a call-to-action
					so you can test tools quickly.
				</p>

				<div className="mt-6 flex items-center gap-3 justify-center flex-col sm:flex-row">
					<div className="relative w-full sm:w-[420px]">
						<Search
							className="absolute left-3 top-3 text-slate-400"
							size={18}
						/>
						<input
							aria-label="Search AI tools"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							placeholder="Search tools, e.g. 'seo' or 'copywriter'"
							className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
						/>
					</div>

					<div className="flex gap-2">
						<button
							onClick={() => setFilter('all')}
							className={`px-4 py-2 rounded-lg border ${
								filter === 'all'
									? 'bg-indigo-600 text-white'
									: 'bg-white text-slate-700'
							}`}
						>
							All
						</button>
						<button
							onClick={() => setFilter('recurring')}
							className={`px-4 py-2 rounded-lg border ${
								filter === 'recurring'
									? 'bg-indigo-600 text-white'
									: 'bg-white text-slate-700'
							}`}
						>
							Recurring Payouts
						</button>
					</div>
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.08 }}
				className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
			>
				{filtered.map((tool) => (
					<motion.article
						key={tool.id}
						whileHover={{ y: -6 }}
						className="bg-white rounded-2xl shadow-md border border-slate-100 p-5 flex flex-col"
					>
						<div className="flex items-start justify-between gap-3">
							<div>
								<h3 className="text-lg font-semibold">{tool.name}</h3>
								<p className="text-sm text-slate-500 mt-1">{tool.tagline}</p>
							</div>
							<div className="flex items-center gap-2">
								<span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
									<Star size={14} className="mr-1" /> Recommended
								</span>
							</div>
						</div>

						<p className="mt-4 text-slate-600 flex-1">{tool.desc}</p>

						<ul className="mt-4 text-sm text-slate-700 space-y-2">
							<li>
								<strong>Pros:</strong> {tool.pros.join(' • ')}
							</li>
							<li>
								<strong>Cons:</strong> {tool.cons.join(' • ')}
							</li>
						</ul>

						<div className="mt-5 flex items-center gap-3">
							<a
								href={tool.affiliate}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium shadow-sm hover:opacity-95"
							>
								Try {tool.name}
								<ExternalLink size={14} />
							</a>

							<a
								href={`#learn-${tool.id}`}
								className="text-sm text-slate-500 underline hover:text-slate-700"
							>
								Learn more
							</a>
						</div>
					</motion.article>
				))}
			</motion.div>

			<div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-indigo-50 to-slate-50 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 shadow-sm border border-slate-100">
				<div className="flex-1">
					<h4 className="font-semibold text-lg">Ready to test an AI tool?</h4>
					<p className="text-slate-600 mt-1">
						Pick one of the tools above and try the free trial — experiment,
						tweak prompts and keep notes for future posts.
					</p>
				</div>
			</div>
		</section>
	);
}
