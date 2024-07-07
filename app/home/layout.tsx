import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Title from CMS",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: LayoutProps) {
  return (
    <>
      <header>Header</header>
      <main>
        <div>Main</div>
        <div>{children}</div>
      </main>
      <footer>Footer</footer>
    </>
  );
}
