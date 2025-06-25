import { Button } from "@/components/ui/button";
import { Sprout, Phone } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative hero-bg text-white">
      <div 
        className="absolute inset-0 bg-black bg-opacity-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay"
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6">
            Premium Agricultural Exports from{" "}
            <span className="text-yellow-400">Benin</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Connecting global markets with high-quality agricultural products through sustainable farming and reliable export services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("products")}
              className="bg-oceane-gold hover:bg-amber-600 text-white px-8 py-4 text-lg font-semibold"
              size="lg"
            >
              <Sprout className="mr-2 h-5 w-5" />
              View Our Products
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-blue-600"
              size="lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
