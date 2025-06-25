import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Package, Calendar, Star, Flame, Sprout, Award, Shield } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Cassava Flour (Gari)",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
    features: [
      { icon: Leaf, text: "Naturally dried, no additives", color: "text-green-500" },
      { icon: Package, text: "100 kg bags", color: "text-amber-500" },
      { icon: Calendar, text: "12 months shelf life", color: "text-blue-500" }
    ],
    price: "$95+",
    priceUnit: "FOB per bag"
  },
  {
    id: 2,
    name: "Fresh Coconuts",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
    features: [
      { icon: Star, text: "Large size, Benin origin", color: "text-amber-500" },
      { icon: Package, text: "50 pieces per bag", color: "text-amber-500" },
      { icon: Calendar, text: "Up to 60 days shelf life", color: "text-blue-500" }
    ],
    price: "Quote",
    priceUnit: "FOB pricing"
  },
  {
    id: 3,
    name: "Charcoal",
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
    features: [
      { icon: Flame, text: "Hardwood, long-burning", color: "text-red-500" },
      { icon: Package, text: "20 kg bags or customized", color: "text-amber-500" },
      { icon: Award, text: "Premium quality", color: "text-blue-500" }
    ],
    price: "$55+",
    priceUnit: "FOB per bag"
  },
  {
    id: 4,
    name: "Crude Palm Oil",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
    features: [
      { icon: Sprout, text: "Traditional cold-pressed", color: "text-green-500" },
      { icon: Package, text: "25L drums / 200L barrels", color: "text-amber-500" },
      { icon: Calendar, text: "12-18 months shelf life", color: "text-blue-500" }
    ],
    price: "$70+",
    priceUnit: "FOB per bag"
  },
  {
    id: 5,
    name: "Raw Cashew Nuts",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
    features: [
      { icon: Award, text: "High-grade, Benin origin", color: "text-amber-500" },
      { icon: Package, text: "80 kg bags or custom", color: "text-amber-500" },
      { icon: Star, text: "Premium quality", color: "text-blue-500" }
    ],
    price: "Quote",
    priceUnit: "FOB pricing"
  },
  {
    id: 6,
    name: "Soybeans",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
    features: [
      { icon: Shield, text: "Non-GMO, high protein", color: "text-green-500" },
      { icon: Package, text: "50 or 100 kg bags", color: "text-amber-500" },
      { icon: Leaf, text: "Premium grade", color: "text-blue-500" }
    ],
    price: "Quote",
    priceUnit: "FOB pricing"
  },
  {
    id: 7,
    name: "Raw Cocoa Beans",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
    features: [
      { icon: Sprout, text: "Naturally fermented", color: "text-amber-600" },
      { icon: Package, text: "60 kg bags or custom", color: "text-amber-500" },
      { icon: Award, text: "Premium grade", color: "text-blue-500" }
    ],
    price: "Quote",
    priceUnit: "FOB pricing"
  }
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold oceane-blue font-playfair mb-4">
            Our Premium Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            High-quality agricultural products from Benin, carefully processed and packaged for international export
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="oceane-blue">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <feature.icon className={`${feature.color} mr-2 h-4 w-4`} />
                      {feature.text}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold oceane-blue">{product.price}</span>
                  <span className="text-sm text-gray-500">{product.priceUnit}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
