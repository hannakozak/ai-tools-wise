import { defineDocumentType, makeSource } from 'contentlayer/source-files';

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
}));

export default makeSource({
	contentDirPath: 'src/content',
	documentTypes: [Post],
});
