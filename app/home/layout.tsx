import { Metadata } from "next";
import { Header } from "@common/components/header";

export const metadata: Metadata = {
    title: "Home",
};

type LayoutProps = {
    children: React.ReactNode;
};

export default function PageLayout({ children }: LayoutProps) {
    return (
        <>
            <header>
                <Header />
            </header>
            <main className="bg-gray-50">
                <div className="container mx-auto">{children}</div>
            </main>
            <footer className="bg-blue-950 text-white">
                <div className="container mx-auto">Footer</div>
            </footer>
        </>
    );
}
