import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export default function BlogPage() {
	const posts = allPosts.sort((a, b) =>
		compareDesc(new Date(a.date), new Date(b.date))
	);

	return (
		<main className="max-w-3xl mx-auto px-4 py-10">
			<h1 className="text-4xl font-bold mb-8">Blog</h1>
			<ul className="space-y-6">
				{posts.map((post) => (
					<li key={post._id}>
						<Link href={`/posts/${post.slug}`}>
							<h2 className="text-2xl font-semibold text-blue-700 hover:underline">
								{post.title}
							</h2>
						</Link>

						<p className="text-gray-700">{post.description}</p>
					</li>
				))}
			</ul>
		</main>
	);
}
