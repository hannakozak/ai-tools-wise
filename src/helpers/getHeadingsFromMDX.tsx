// lib/getHeadingsFromMDX.ts
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { visit } from 'unist-util-visit';
import type { Root, Heading as MdastHeading, Text } from 'mdast';

export interface Heading {
	text: string;
	id: string;
	level: number;
}

export function getHeadingsFromMDX(mdx: string): Heading[] {
	const tree = unified().use(remarkParse).parse(mdx) as Root;

	const headings: Heading[] = [];

	visit(tree, 'heading', (node: MdastHeading) => {
		const text = node.children
			.filter((n): n is Text => n.type === 'text')
			.map((n) => n.value)
			.join('');

		const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[?!]/g, '');

		headings.push({
			text,
			id,
			level: node.depth,
		});
	});

	return headings;
}
