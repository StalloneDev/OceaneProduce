import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import CompanyProfile from "@/components/company-profile";
import ProductsSection from "@/components/products-section";
import AdvantagesSection from "@/components/advantages-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CompanyProfile />
      <ProductsSection />
      <AdvantagesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
