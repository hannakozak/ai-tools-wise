import React from 'react';

const data = [
	{
		feature: 'Access',
		free: 'Browser, iOS, Android, Mac apps',
		plus: 'All platforms with priority performance',
	},
	{
		feature: 'Model',
		free: 'GPT-3.5',
		plus: 'GPT-4o (faster, smarter, multimodal)',
	},
	{ feature: 'Browsing', free: 'Included', plus: 'Included' },
	{ feature: 'Custom GPTs', free: 'Available', plus: 'Available' },
	{ feature: 'File Uploads', free: 'Available', plus: 'Enhanced capabilities' },
	{
		feature: 'Image Generation',
		free: 'Up to 2–3 images per 24h',
		plus: '50 images per 3h (can drop to 20 at peak)',
	},
	{
		feature: 'Image Editing / Inpainting',
		free: 'Not available',
		plus: 'Supported',
	},
	{
		feature: 'Memory & Custom Instructions',
		free: 'Basic',
		plus: 'Full memory and persistent settings',
	},
	{ feature: 'Speed', free: 'Standard', plus: 'Faster and higher limits' },
	{
		feature: 'Ideal For',
		free: 'Casual use, light experimentation',
		plus: 'Writers, marketers, developers, power users',
	},
];

export default function PricingTable() {
	return (
		<table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
			<thead>
				<tr className="bg-gray-100">
					<th className="border border-gray-300 px-4 py-2 text-left">
						Feature
					</th>
					<th className="border border-gray-300 px-4 py-2 text-left">
						Free Plan
					</th>
					<th className="border border-gray-300 px-4 py-2 text-left">
						ChatGPT Plus ($20/mo)
					</th>
				</tr>
			</thead>
			<tbody>
				{data.map(({ feature, free, plus }) => (
					<tr key={feature} className="even:bg-gray-50">
						<td className="border border-gray-300 px-4 py-2 font-semibold">
							{feature}
						</td>
						<td className="border border-gray-300 px-4 py-2">{free}</td>
						<td className="border border-gray-300 px-4 py-2">{plus}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
