import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MainGrid from "@/components/MainGrid";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <MainGrid />
      </div>
      <Footer />
    </>
  );
}
