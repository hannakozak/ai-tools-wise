// app/layout.tsx
import { Header } from '../components/Header';
import { ThemeProvider } from '../components/ThemeProvider';
import './globals.css';

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
				</ThemeProvider>
			</body>
		</html>
	);
}
