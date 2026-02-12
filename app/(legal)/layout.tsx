import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="pt-[80px]">{children}</div>
      <Footer />
    </>
  );
}
