import { Header } from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SidebarProvider } from '@/contexts/SidebarContext';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
	title: 'AI Wise - Curated AI Tools, Resources, and Tutorials',
	description:
		'Curated AI tools, courses and articles for creators, freelancers and developers. Find the best AI tools, learn from world-class courses and stay updated with the latest in AI.',
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
						<div className="pt-16">{children}</div>
					</SidebarProvider>
				</ThemeProvider>

				<GoogleAnalytics gaId="G-EJ8FK97NXL" />
				<Analytics />
			</body>
		</html>
	);
}
