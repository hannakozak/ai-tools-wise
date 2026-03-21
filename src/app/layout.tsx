import Sidebar from '@/components/Sidebar';
import { Header } from '../components/Header';
import { ThemeProvider } from '../components/ThemeProvider';
import { SidebarProvider } from '@/contexts/SidebarContext';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
	title: 'AI Wise - Curated AI Tools, Resources, and Tutorials',
	description:
		'AI Tools Stack - Curated list of AI tools, resources, and tutorials to learn and explore the world of artificial intelligence. Discover the best AI tools for your projects and stay updated with the latest trends in AI technology.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
				<ThemeProvider>
					<SidebarProvider>
						<div className="fixed top-0 left-0 right-0 z-50">
							<Header />
						</div>
						<div className="pt-16 flex h-[calc(100vh-4rem)]">
							<Sidebar />
							<main className="flex-1 h-full overflow-y-auto p-6">
								{children}
							</main>
						</div>
					</SidebarProvider>
				</ThemeProvider>

				<GoogleAnalytics gaId="G-EJ8FK97NXL" />
				<Analytics />
			</body>
		</html>
	);
}
