'use client';

import { useEffect, useState } from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import type { Post } from 'contentlayer/generated';
import { getHeadingsFromMDX, Heading } from '@/helpers/getHeadingsFromMDX';
import MDXComponents from './MDXComponents';

interface PostContentProps {
	post: Post;
}

export default function PostContent({ post }: PostContentProps) {
	const MDXContent = useMDXComponent(post.body.code);
	const [headings, setHeadings] = useState<Heading[]>([]);

	useEffect(() => {
		const result = getHeadingsFromMDX(post.body.raw);
		setHeadings(result);
	}, [post.body.raw]);

	return (
		<div className="flex gap-8 p-10 lg:p-8 max-w-7xl mx-auto">
			<article className="w-full lg:w-3/4">
				<MDXContent components={MDXComponents} />
			</article>
		</div>
	);
}
