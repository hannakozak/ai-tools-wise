import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import PostContent from '@/components/PostContent';

interface Props {
	params: { slug: string };
}

export async function generateStaticParams() {
	return allPosts.map((post) => ({
		slug: post.slug,
	}));
}

export default async function BlogPostPage({ params }: Props) {
	const post = allPosts.find((p) => p.slug === params.slug);
	if (!post) notFound();

	return <PostContent post={post} />;
}
