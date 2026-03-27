import Sidebar from '@/components/Sidebar';
import { Footer } from '@/components/Footer';

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-[calc(100vh-4rem)]">
			<Sidebar />
			<main className="flex-1 overflow-y-auto">
				{children}
				<Footer />
			</main>
		</div>
	);
}
