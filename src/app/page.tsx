import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';
import { format } from 'date-fns';

export default function HomePage() {
	const post = allPosts[0];

	return (
		<main className="px-6 py-12 max-w-5xl mx-auto ">
			<section className="text-center mb-16  dark:text-white">
				<h1 className="text-black text-4xl md:text-6xl font-bold mb-4 dark:text-amber-50">
					AI Tools Stack
				</h1>
				<p className="text-xl text-gray-600 mb-6">
					Discover AI tools for creators, freelancers, and solopreneurs.
				</p>
				<a
					href="/tools"
					className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition"
				>
					Browse Tools
				</a>
			</section>

			<section id="tools" className="mb-20">
				<h2 className="text-2xl font-semibold mb-6">Featured Tools</h2>
				<div className="grid md:grid-cols-2 gap-6">
					<div className="border p-5 rounded-xl shadow-sm">
						<h3 className="font-bold text-lg">Jasper AI</h3>
						<p className="text-sm text-gray-600 mb-2">
							AI copywriting assistant
						</p>
						<a href="#" className="text-blue-600 hover:underline">
							Try Jasper →
						</a>
					</div>
					<div className="border p-5 rounded-xl shadow-sm">
						<h3 className="font-bold text-lg">Canva Magic Design</h3>
						<p className="text-sm text-gray-600 mb-2">
							AI-powered design templates
						</p>
						<a href="#" className="text-blue-600 hover:underline">
							Explore Canva →
						</a>
					</div>
				</div>
			</section>

			<section className="mb-20">
				<h2 className="text-2xl font-semibold mb-4">Latest Post</h2>
				{post ? (
					<div className="border rounded-xl p-6">
						<h3 className="text-xl font-bold mb-1">{post.title}</h3>
						<p className="text-sm text-gray-500 mb-2">
							{format(new Date(post.date), 'MMMM dd, yyyy')}
						</p>
						<p className="text-gray-700 mb-4">{post.description}</p>
						<Link
							href={`/posts/${post.slug}`}
							className="text-blue-600 hover:underline"
						>
							Read more →
						</Link>
					</div>
				) : (
					<p>No post found.</p>
				)}
			</section>

			<footer className="text-sm text-gray-500 text-center">
				© 2025 AI Tools Stack · Built with Next.js & Contentlayer
			</footer>
		</main>
	);
}
