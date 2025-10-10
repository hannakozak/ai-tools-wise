import { Header } from '../components/Header';
import { ThemeProvider } from '../components/ThemeProvider';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
	title: 'AI Tools Stack',
	description: 'Cool AI tools blog',
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
					<Header />
					{children}
					<GoogleAnalytics gaId="G-EJ8FK97NXL" />
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	);
}
