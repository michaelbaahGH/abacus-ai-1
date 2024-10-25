"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Package,
  ShieldCheck,
  TrendingUp,
  Users,
  ChevronRight,
  Sparkles,
  BadgeCheck,
  Scale,
  Truck,
  PhoneCall,
  MessageSquare,
  BookOpen,
  Heart,
  Globe,
  Box,
  CheckSquare,
  DollarSign,
  FileText,
  Star,
  Award,
  Briefcase,
  Shield,
  Clock,
  Badge,
  CheckCircle,
  ExternalLink,
  Quote,
  Building,
  FileCheck,
  Leaf,
} from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Services Data
const services = [
  {
    icon: Globe,
    title: "Export Services",
    description: "Delivering Excellence from Ghana to the World",
    features: [
      "Expertise in international logistics",
      "Timely and reliable delivery",
      "Comprehensive customs support",
      "End-to-end export management",
    ],
  },
  {
    icon: Box,
    title: "Custom Packaging & Labeling",
    description: "Tailored Solutions for Global Markets",
    features: [
      "Customizable packaging options",
      "Compliance with international standards",
      "Retail packaging solutions",
      "Bulk packaging options",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Commitment to Excellence",
    features: [
      "Rigorous quality control process",
      "Global food safety certifications",
      "Freshness guarantee",
      "Uniform product standards",
    ],
  },
  {
    icon: DollarSign,
    title: "Pricing Information",
    description: "Transparent and Competitive Rates",
    features: [
      "Flexible pricing structures",
      "Value-based packages",
      "Custom quotations",
      "Budget-friendly options",
    ],
  },
];

// Case Studies Data
const caseStudies = [
  {
    title: "European Market Entry",
    client: "Major EU Distributor",
    achievement: "Successfully exported 500MT of premium cashews",
    results: [
      "99.8% quality satisfaction rate",
      "On-time delivery performance",
      "Custom packaging solution",
    ],
  },
  {
    title: "Asian Market Expansion",
    client: "Regional Retail Chain",
    achievement: "Established continuous supply chain",
    results: [
      "Weekly delivery schedule",
      "Specialized retail packaging",
      "Zero quality complaints",
    ],
  },
];

// Testimonials Data

// FAQ Data
const faqs = [
  {
    question: "What are your minimum order quantities?",
    answer:
      "We offer flexible order quantities to meet different business needs. Contact our sales team for specific details.",
  },
  {
    question: "How do you ensure product quality during shipping?",
    answer:
      "We use climate-controlled containers and proper packaging to maintain freshness and quality throughout transit.",
  },
  {
    question: "What documentation do you provide for exports?",
    answer:
      "We handle all necessary export documentation including certificates of origin, phytosanitary certificates, and customs documentation.",
  },
];

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

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <Particles />
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-700/20 mix-blend-overlay z-10" />
        <img
          src="/api/placeholder/2000/1000"
          alt="Cashew Export"
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
          Premium Cashews from Ghana
        </h1>

        <p className="text-2xl md:text-4xl text-amber-100 font-light tracking-wide mb-12">
          Delivering Excellence to Global Markets
        </p>
        <Link href="/contact" passHref>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xl px-12 py-8 rounded-full shadow-lg shadow-amber-500/25"
            >
              Request Export Quote
              <ChevronRight className="ml-2 h-6 w-6" />
            </Button>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}

function ServicesGrid() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-stone-900/50 to-stone-950/50 relative"
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
            Our Services
          </h2>
          <p className="text-xl text-amber-100/60 mt-4 max-w-2xl mx-auto">
            Comprehensive export solutions for premium cashews
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
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
                    <service.icon className="w-12 h-12" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-amber-100 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-amber-100/60 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-amber-100/80"
                      >
                        <BadgeCheck className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
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

const CaseStudies = () => {
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
            Success Stories
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                <CardContent className="p-8">
                  <Briefcase className="w-12 h-12 text-amber-400 mb-6" />
                  <h3 className="text-xl font-semibold text-amber-400 mb-2">
                    {study.title}
                  </h3>
                  <p className="text-amber-100 mb-4">{study.client}</p>
                  <p className="text-amber-100/60 mb-6">{study.achievement}</p>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-amber-100/80"
                      >
                        <CheckSquare className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{result}</span>
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
};

const GuaranteesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const guarantees = [
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "Premium grade cashews or full refund",
    },
    {
      icon: Clock,
      title: "Delivery Promise",
      description: "On-time delivery or compensation",
    },
    {
      icon: Star,
      title: "Satisfaction Assured",
      description: "100% satisfaction guarantee",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-b from-stone-900/50 to-stone-950/50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="bg-amber-500/10 text-amber-400 mb-4">
            Our Promise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Our Guarantees
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <guarantee.icon className="w-12 h-12 text-amber-400 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-amber-100 mb-4">
                    {guarantee.title}
                  </h3>
                  <p className="text-amber-100/60">{guarantee.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const faqs = [
    {
      question: "What are your minimum order quantities?",
      answer:
        "Our minimum order quantity varies by product type. Please contact our sales team for specific details about your requirements.",
    },
    {
      question: "How do you ensure product quality?",
      answer:
        "We maintain strict quality control measures throughout our processing chain and are certified by international food safety standards.",
    },
    {
      question: "What are your shipping terms?",
      answer:
        "We offer various shipping options including FOB, CIF, and DDP. Terms can be discussed based on your specific requirements.",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-b from-stone-950 to-stone-900"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="bg-amber-500/10 text-amber-400 mb-4">FAQ</Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-amber-100/60">
            Find answers to common questions about our services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-stone-900/50 backdrop-blur-lg border border-amber-500/20 rounded-lg px-6"
              >
                <AccordionTrigger className="text-amber-100 hover:text-amber-400 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-amber-100/60">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

const StatisticsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { number: "5000+", label: "Tons Exported", icon: Package },
    { number: "50+", label: "Global Partners", icon: Award },
    { number: "99.9%", label: "Quality Rate", icon: CheckCircle },
    { number: "24/7", label: "Support", icon: MessageSquare },
  ];

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-stone-900 to-stone-800 relative"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 h-full">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-amber-400 mb-6 inline-block"
                  >
                    <stat.icon className="w-12 h-12" />
                  </motion.div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-amber-100/60">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-stone-950 to-stone-900 relative overflow-hidden"
    >
      {/* Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Badge className="bg-amber-500/10 text-amber-400 mb-4 border-amber-500/20">
            Get Started
          </Badge>

          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-6">
            Ready to Export Premium Cashews?
          </h2>

          <p className="text-xl text-amber-100/60 mb-8">
            Join our growing network of satisfied global partners
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Request Quote
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-amber-500 text-amber-400 hover:bg-amber-500/10 px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Learn More
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    quote:
      "Their commitment to quality and timely delivery has made them our preferred cashew supplier. The premium grade cashews consistently exceed our expectations.",
    author: "Michael Chang",
    role: "Import Manager, Asian Markets",
    company: "Global Foods Distribution",
    rating: 5,
    image: "/api/placeholder/100/100",
  },
  {
    quote:
      "Outstanding service and premium quality cashews consistently delivered. Their attention to detail in packaging and documentation makes international trade seamless.",
    author: "Elena Rodriguez",
    role: "Procurement Director",
    company: "European Retail Chain",
    rating: 5,
    image: "/api/placeholder/100/100",
  },
  {
    quote:
      "Their export expertise made international sourcing seamless. The quality control processes and certification standards they maintain are impressive.",
    author: "Hans Weber",
    role: "European Distribution Partner",
    company: "Weber & Sons Trading",
    rating: 5,
    image: "/api/placeholder/100/100",
  },
  {
    quote:
      "The custom packaging solutions and attention to market-specific requirements have helped us streamline our distribution process significantly.",
    author: "Sarah Johnson",
    role: "Supply Chain Manager",
    company: "Premium Foods Inc.",
    rating: 5,
    image: "/api/placeholder/100/100",
  },
];

interface StarRatingProps {
  rating: number;
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-green-100">
      {/* Hero Section - Top section with main value proposition */}
      <Hero />

      {/* Services Grid - Core service offerings */}
      <ServicesGrid />

      {/* Statistics - Key metrics and achievements */}
      <StatisticsSection />

      {/* Case Studies - Success stories and implementations */}
      <CaseStudies />

      {/* Testimonials - Client feedback and reviews */}
      {/* <TestimonialsSection /> */}

      {/* Quality Assurance - Standards and processes */}
      {/* <QualityAssuranceSection /> */}

      {/* Guarantees - Service promises and commitments */}
      <GuaranteesSection />

      {/* Pricing - Service tiers and packages */}
      {/* <PricingSection /> */}

      {/* FAQ - Common questions and answers */}
      <FAQSection />

      {/* Call to Action - Final conversion section */}
      <CTASection />
    </main>
  );
}
