import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import PostContent from '@/components/PostContent';

interface PageProps {
	params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
	const { slug } = await params;
	const post = allPosts.find((p) => p.slug === slug);

	if (!post) {
		notFound();
	}

	return <PostContent post={post} />;
}
