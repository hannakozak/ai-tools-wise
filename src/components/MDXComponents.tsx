import React from 'react';
import PricingTable from './PricingTable';

const MDXComponents = {
	h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
		const id = props.children
			?.toString()
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[?!]/g, '');
		return (
			<h1
				id={id}
				className="text-3xl font-semibold my-5 scroll-mt-24"
				{...props}
			/>
		);
	},

	h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
		const id = props.children
			?.toString()
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[?!]/g, '');

		return (
			<h2
				id={id}
				className="text-3xl font-semibold my-5 scroll-mt-24"
				{...props}
			/>
		);
	},
	h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
		const id = props.children
			?.toString()
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[?!]/g, '');
		return (
			<h3
				id={id}
				className="text-3xl font-semibold my-5 scroll-mt-24"
				{...props}
			/>
		);
	},
	p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
		<p className="text-gray-700 leading-relaxed mb-4" {...props} />
	),
	a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
		<a
			className="text-blue-600 underline hover:text-blue-800"
			target="_blank"
			rel="noopener noreferrer"
			{...props}
		/>
	),
	blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
		<blockquote
			className="border-l-4 border-blue-400 pl-4 italic text-gray-600 my-6"
			{...props}
		/>
	),
	ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
		<ul className="list-disc list-inside mb-4" {...props} />
	),
	ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
		<ol className="list-decimal list-inside mb-4" {...props} />
	),
	code: (props: React.HTMLAttributes<HTMLElement>) => (
		<code className="bg-gray-100 px-1 rounded text-sm font-mono" {...props} />
	),
	pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
		<pre
			className="bg-gray-900 text-gray-100 p-4 rounded mb-6 overflow-x-auto"
			{...props}
		/>
	),
	PricingTable,
};

export default MDXComponents;
