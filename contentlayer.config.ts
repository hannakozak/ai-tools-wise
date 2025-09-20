import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

export const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: `posts/*.mdx`,
	contentType: 'mdx',
	fields: {
		title: { type: 'string', required: true },
		description: { type: 'string', required: true },
		slug: { type: 'string', required: true },
		date: { type: 'date', required: true },
		layout: { type: 'string', required: false },
	},
	computedFields: {
		url: {
			type: 'string',
			resolve: (post) => `/posts/${post.slug}`,
		},
	},
}));

export default makeSource({
	contentDirPath: 'src/content',
	documentTypes: [Post],
	mdx: {
		rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
	},
});
