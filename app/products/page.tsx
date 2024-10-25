"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  BadgeCheck,
  Scale,
  Leaf,
  Package,
  Heart,
  Factory,
  ShieldCheck,
  Boxes,
  Users,
  HeartHandshake,
  MessageSquare,
  Recycle,
  TreePine,
  Workflow,
  TestTube,
  Truck,
  Building2,
  DollarSign,
  ClipboardList,
  Ribbon as Certificate,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Particles = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  React.useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const particles = Array.from({ length: 50 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
          }}
          animate={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const products = [
  {
    icon: Package,
    title: "Whole Cashews",
    description:
      "Premium grade whole cashews perfect for retail and bulk distribution.",
    features: [
      "Premium quality",
      "Export grade",
      "Consistent size",
      "Natural color",
    ],
    image: "/api/placeholder/400/300",
  },
  {
    icon: Scale,
    title: "Cashew Splits",
    description:
      "High-quality split cashews ideal for food processing and snack manufacturing.",
    features: [
      "Uniform splits",
      "Preserved flavor",
      "Cost-effective",
      "Versatile use",
    ],
    image: "/api/placeholder/400/300",
  },
  {
    icon: Heart,
    title: "Cashew Pieces",
    description:
      "Carefully processed cashew pieces perfect for various food applications.",
    features: [
      "Consistent sizing",
      "Fresh taste",
      "Bulk available",
      "Quality assured",
    ],
    image: "/api/placeholder/400/300",
  },
  {
    icon: Certificate,
    title: "Custom Grades",
    description: "Tailored cashew grades meeting specific client requirements.",
    features: [
      "Custom specifications",
      "Quality grading",
      "Flexible packaging",
      "Client-focused",
    ],
    image: "/api/placeholder/400/300",
  },
];

function ProductHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <Particles />
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-700/20 mix-blend-overlay z-10" />
        <img
          src="/api/placeholder/2000/1000"
          alt="Premium Cashew Products"
          className="object-cover w-full h-full"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-center max-w-5xl px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <Sparkles className="w-20 h-20 text-amber-400 mx-auto animate-pulse" />
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">
          Premium Cashew Products
        </h1>

        <p className="text-2xl md:text-4xl text-amber-100 font-light tracking-wide mb-12">
          Quality Cashews for Global Markets
        </p>
      </motion.div>
    </section>
  );
}

function ProcessingSteps() {
  const steps = [
    {
      icon: Factory,
      title: "Ethical Sourcing",
      description: "Sustainably sourced from trusted farmers",
    },
    {
      icon: TestTube,
      title: "Quality Processing",
      description: "State-of-the-art processing facility",
    },
    {
      icon: ShieldCheck,
      title: "Testing",
      description: "Rigorous quality control measures",
    },
    {
      icon: Package,
      title: "Export Packaging",
      description: "Export-ready secure packaging",
    },
  ];

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-stone-950 to-stone-900 relative"
    >
      <Particles />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Manufacturing Process
          </h2>
          <p className="text-xl text-amber-100/60 mt-4 max-w-2xl mx-auto">
            State-of-the-art processing ensuring premium quality
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-amber-500/20 hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                  <CardContent className="p-8 text-center relative">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="inline-block mb-6 text-amber-400 bg-stone-900 rounded-full p-4"
                    >
                      <step.icon className="w-12 h-12" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-amber-100 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-amber-100/60">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BulkOrders() {
  const features = [
    {
      icon: Building2,
      title: "Wholesale Solutions",
      description: "Competitive bulk pricing for businesses",
      points: [
        "Volume-based pricing",
        "Flexible MOQ",
        "Regular supply",
        "Custom packaging",
      ],
    },
    {
      icon: Certificate,
      title: "Certifications",
      description: "International quality certifications",
      points: [
        "Food safety compliance",
        "Quality certifications",
        "Export standards",
        "Regular audits",
      ],
    },
    {
      icon: Package,
      title: "Customization",
      description: "Tailored solutions for your needs",
      points: [
        "Private labeling",
        "Custom packaging",
        "Grade selection",
        "Size specifications",
      ],
    },
  ];

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-stone-900 to-stone-950 relative"
    >
      <Particles />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Bulk Orders & Certifications
          </h2>
          <p className="text-xl text-amber-100/60 mt-4 max-w-2xl mx-auto">
            Global standards, competitive pricing, and customizable solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mb-6 text-amber-400"
                  >
                    <feature.icon className="w-12 h-12" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-amber-100 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-amber-100/60 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-amber-100/80"
                      >
                        <BadgeCheck className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="py-32 bg-gradient-to-b from-stone-900 to-stone-950 relative">
      <Particles />
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Ready to Order?
          </h2>
          <p className="text-xl text-amber-100/60 mb-12">
            Contact us today for premium cashew products and wholesale options
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xl px-12 py-8 rounded-full shadow-lg shadow-amber-500/25 w-full md:w-auto"
              >
                <HeartHandshake className="w-6 h-6 mr-2" />
                Request Quote
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-500 text-amber-400 hover:bg-amber-500/10 text-xl px-12 py-8 rounded-full w-full md:w-auto"
              >
                <MessageSquare className="w-6 h-6 mr-2" />
                Bulk Inquiries
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface Product {
  image: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface ProductsProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductsProps> = ({ products }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-stone-950 to-stone-900 relative"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Our Product Range
          </h2>
          <p className="text-xl text-amber-100/60 mt-4 max-w-2xl mx-auto">
            Premium quality cashew products for global markets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="bg-stone-900/80 backdrop-blur-sm p-2 rounded-full text-amber-400"
                      >
                        <product.icon className="w-6 h-6" />
                      </motion.div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-amber-100 mb-3">
                      {product.title}
                    </h3>
                    <p className="text-amber-100/60 mb-4 text-sm">
                      {product.description}
                    </p>
                    <div className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <BadgeCheck className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" />
                          <span className="text-sm text-amber-100/80">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-2">
            <Badge
              variant="outline"
              className="border-amber-500/50 text-amber-400"
            >
              Food Safety Certified
            </Badge>
            <Badge
              variant="outline"
              className="border-amber-500/50 text-amber-400"
            >
              Export Quality
            </Badge>
            <Badge
              variant="outline"
              className="border-amber-500/50 text-amber-400"
            >
              Custom Packaging
            </Badge>
            <Badge
              variant="outline"
              className="border-amber-500/50 text-amber-400"
            >
              Bulk Orders
            </Badge>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function ProductsPage() {
  return (
    <main className="bg-stone-950 min-h-screen">
      <ProductHero />
      <ProductGrid products={products} />
      <ProcessingSteps />
      <BulkOrders />
      <CallToAction />
    </main>
  );
}
