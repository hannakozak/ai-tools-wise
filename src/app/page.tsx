import type { ReactElement } from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { BrowseSection } from '@/components/home/BrowseSection';
import { FeaturedToolsSection } from '@/components/home/FeaturedToolsSection';
import { WhySection } from '@/components/home/WhySection';
import { LatestArticlesSection } from '@/components/home/LatestArticlesSection';
import { CtaBanner } from '@/components/home/CtaBanner';

export default function HomePage(): ReactElement {
	return (
		<div className="bg-gray-50 dark:bg-gray-950">
			<HeroSection />
			<BrowseSection />
			<FeaturedToolsSection />
			<WhySection />
			<LatestArticlesSection />
			<CtaBanner />
		</div>
	);
}
