'use client';

import React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import MDXComponents from './MDXComponents';

interface PostContentProps {
	post: {
		title: string;
		date: string;
		body: {
			code: string;
		};
	};
}

export default function PostContent({ post }: PostContentProps) {
	const MDXContent = useMDXComponent(post.body.code);

	return (
		<article className="max-w-3xl mx-auto px-6 py-12 prose prose-blue">
			<h1 className="text-5xl font-bold mb-6">{post.title}</h1>
			<p className="text-gray-500 text-sm mb-8">
				{new Date(post.date).toLocaleDateString()}
			</p>
			<MDXContent components={MDXComponents} />
		</article>
	);
}
