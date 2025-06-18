import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';
import { format } from 'date-fns';

export default function HomePage() {
	const post = allPosts[0];

	return (
		<main className="max-w-3xl mx-auto py-12 px-6">
			{post ? (
				<article className="border p-6 rounded-xl shadow">
					<h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
					<p className="text-gray-600 mb-4">{post.description}</p>
					<p className="text-sm text-gray-500 mb-4">
						{format(new Date(post.date), 'MMMM dd, yyyy')}
					</p>
					<Link
						href={`/posts/${post.slug}`}
						className="text-blue-600 hover:underline"
					>
						Read more →
					</Link>
				</article>
			) : (
				<p>No posts found.</p>
			)}
		</main>
	);
}
