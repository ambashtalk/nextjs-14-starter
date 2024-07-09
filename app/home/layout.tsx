import { Metadata } from "next";
import { Header } from "@common/components/header";

export const metadata: Metadata = {
    title: "Title from CMS",
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
            <main>
                <div>Main</div>
                <div>{children}</div>
            </main>
            <footer>Footer</footer>
        </>
    );
}
