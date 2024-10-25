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
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
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

// Hero Component
function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-neutral">
      <Particles />
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-dark/20 mix-blend-overlay z-10" />
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
          <Sparkles className="w-20 h-20 text-primary-light mx-auto animate-pulse" />
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary-dark">
          Premium Cashews from Ghana
        </h1>

        <p className="text-2xl md:text-4xl text-neutral-dark font-light tracking-wide mb-12">
          Delivering Excellence to Global Markets
        </p>

        <Link href="/contact" passHref>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-neutral px-12 py-8 rounded-full shadow-lg shadow-primary/25"
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

// Services Grid Component
function ServicesGrid() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-neutral-dark/50 to-neutral-dark relative"
    >
      <Particles />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
            Our Services
          </h2>
          <p className="text-xl text-neutral/60 mt-4 max-w-2xl mx-auto">
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
              <Card className="bg-neutral-dark/50 backdrop-blur-lg border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mb-6 text-primary"
                  >
                    <service.icon className="w-12 h-12" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-neutral mb-4">
                    {service.title}
                  </h3>
                  <p className="text-neutral/60 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-neutral/80"
                      >
                        <BadgeCheck className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
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

function CaseStudies() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-neutral-dark to-neutral-dark/90 relative"
    >
      <Particles />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
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
              <Card className="bg-neutral-dark/50 backdrop-blur-lg border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-8">
                  <Briefcase className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {study.title}
                  </h3>
                  <p className="text-neutral mb-4">{study.client}</p>
                  <p className="text-neutral/60 mb-6">{study.achievement}</p>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-neutral/80"
                      >
                        <CheckSquare className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
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
}

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
      className="py-24 bg-gradient-to-b from-neutral-dark/50 to-neutral-dark"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="bg-primary/10 text-primary mb-4">Our Promise</Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
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
              <Card className="bg-neutral-dark/50 backdrop-blur-lg border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <guarantee.icon className="w-12 h-12 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-neutral mb-4">
                    {guarantee.title}
                  </h3>
                  <p className="text-neutral/60">{guarantee.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
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

// Star Rating Component

interface StarRatingProps {
  rating: number; // You can change this to `number | undefined` if rating might be undefined
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-neutral-dark to-neutral-dark/90 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="bg-primary/10 text-primary mb-4">
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent mb-4">
            Trusted by Global Partners
          </h2>
          <p className="text-xl text-neutral/60 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience with our
            premium cashew export services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="bg-neutral-dark/50 backdrop-blur-lg border-primary/20">
            <CardContent className="p-8 md:p-12">
              <Quote className="w-16 h-16 text-primary/20 mb-6" />
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-2xl md:text-3xl text-neutral font-light italic mb-8 leading-relaxed">
                  "{testimonials[activeIndex].quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-neutral-dark">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary">
                      {testimonials[activeIndex].author}
                    </h4>
                    <p className="text-neutral/60">
                      {testimonials[activeIndex].role}
                    </p>
                    <p className="text-neutral/40 text-sm">
                      {testimonials[activeIndex].company}
                    </p>
                    <div className="mt-2">
                      <StarRating rating={testimonials[activeIndex].rating} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-primary scale-125"
                  : "bg-primary/20 hover:bg-primary/40"
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
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
      className="py-24 bg-gradient-to-b from-neutral-dark to-neutral-dark/90 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Badge className="bg-primary/10 text-primary mb-4">Get Started</Badge>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent mb-6">
            Ready to Export Premium Cashews?
          </h2>
          <p className="text-xl text-neutral/60 mb-8">
            Join our growing network of satisfied global partners
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary-dark text-neutral px-8 py-6 rounded-full text-lg"
            >
              Request Quote
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-full text-lg"
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

const PricingSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const pricingTiers = [
    {
      name: "Standard",
      description: "Perfect for small to medium businesses",
      price: "Contact for Quote",
      features: [
        "Minimum order: 1 container",
        "Standard packaging",
        "Basic quality certification",
        "Standard shipping",
        "Email support",
      ],
      icon: Package,
      recommended: false,
    },
    {
      name: "Premium",
      description: "Ideal for established importers",
      price: "Contact for Quote",
      features: [
        "Minimum order: 2 containers",
        "Custom packaging options",
        "Premium quality certification",
        "Priority shipping",
        "24/7 dedicated support",
        "Market-specific compliance",
        "Custom documentation",
      ],
      icon: Award,
      recommended: true,
    },
    {
      name: "Enterprise",
      description: "Tailored for large-scale operations",
      price: "Custom Quote",
      features: [
        "Flexible order quantity",
        "Bespoke packaging solutions",
        "Comprehensive certification",
        "Express shipping options",
        "Personal account manager",
        "Custom compliance handling",
        "Priority processing",
      ],
      icon: Building,
      recommended: false,
    },
  ];

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-neutral-dark to-neutral-dark/90 relative"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="bg-primary-light/10 text-primary-light mb-4">
            Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent mb-4">
            Flexible Pricing Plans
          </h2>
          <p className="text-xl text-neutral/60 max-w-2xl mx-auto">
            Transparent pricing structures tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <Badge className="bg-primary text-neutral">
                    Most Popular
                  </Badge>
                </div>
              )}
              <Card
                className={`bg-neutral-dark/50 backdrop-blur-lg border-primary/20 hover:border-primary/40 transition-all duration-300 ${
                  tier.recommended ? "ring-2 ring-primary/50" : ""
                }`}
              >
                <CardHeader className="text-center p-6">
                  <tier.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl font-bold text-neutral">
                    {tier.name}
                  </CardTitle>
                  <p className="text-neutral/60 mt-2">{tier.description}</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-3xl font-bold text-primary-light">
                      {tier.price}
                    </p>
                  </div>
                  <ul className="space-y-4">
                    {tier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-neutral/80"
                      >
                        <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-8 ${
                      tier.recommended
                        ? "bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary-dark"
                        : "bg-secondary hover:bg-secondary-light text-neutral"
                    }`}
                  >
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QualityAssuranceSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const qualityFeatures = [
    {
      icon: Shield,
      title: "Rigorous Testing",
      description: "Every batch undergoes comprehensive quality testing",
    },
    {
      icon: Award,
      title: "Certifications",
      description: "International food safety and quality certifications",
    },
    {
      icon: FileCheck,
      title: "Documentation",
      description: "Complete traceability and quality documentation",
    },
    {
      icon: Scale,
      title: "Standards",
      description: "Adherence to international quality standards",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Environmentally conscious processing methods",
    },
    {
      icon: Clock,
      title: "Freshness",
      description: "Guaranteed product freshness and shelf life",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-neutral-dark to-neutral-dark/90 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="bg-primary/10 text-primary-light mb-4">
            Quality Assurance
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent mb-4">
            Commitment to Excellence
          </h2>
          <p className="text-xl text-neutral/60 max-w-2xl mx-auto">
            Our comprehensive quality control ensures premium grade cashews for
            every order
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {qualityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-neutral-dark/50 backdrop-blur-lg border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-8">
                  <feature.icon className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-xl font-semibold text-neutral mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-neutral/60">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary-light">99.9%</p>
                  <p className="text-neutral/60 mt-2">Quality Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary-light">100%</p>
                  <p className="text-neutral/60 mt-2">Certified</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary-light">24/7</p>
                  <p className="text-neutral/60 mt-2">Monitoring</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary-light">0%</p>
                  <p className="text-neutral/60 mt-2">Defect Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
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
      className="py-24 bg-gradient-to-b from-neutral-dark to-neutral-dark/90 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                <stat.icon className="w-12 h-12 text-primary-light mx-auto mb-4 relative z-10 transition-transform duration-300 transform group-hover:scale-110" />
              </div>
              <h3 className="text-4xl font-bold text-neutral mb-2 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                {stat.number}
              </h3>
              <p className="text-neutral/60 font-medium">{stat.label}</p>
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
        "Our minimum order quantity varies by product line. For standard orders, we typically require a minimum of one container. Please contact our sales team for specific details based on your requirements.",
    },
    {
      question: "How do you ensure product quality?",
      answer:
        "We maintain strict quality control measures throughout our processing facilities, with regular testing and certification procedures. Our products meet international food safety standards and undergo rigorous quality checks.",
    },
    {
      question: "What are your shipping terms?",
      answer:
        "We offer flexible shipping arrangements including FOB, CIF, and DDP terms. Delivery times vary by destination and shipping method chosen. Our logistics team will work with you to determine the best shipping solution.",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-b from-neutral-dark to-neutral-dark/90 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="bg-primary/10 text-primary-light mb-4">FAQ</Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-neutral/60">
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
                className="bg-neutral-dark/50 backdrop-blur-lg border border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-all duration-300"
              >
                <AccordionTrigger className="text-neutral hover:text-primary-light transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral/60 prose prose-neutral">
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
      <TestimonialsSection />

      {/* Quality Assurance - Standards and processes */}
      <QualityAssuranceSection />

      {/* Guarantees - Service promises and commitments */}
      <GuaranteesSection />

      {/* Pricing - Service tiers and packages */}
      <PricingSection />

      {/* FAQ - Common questions and answers */}
      <FAQSection />

      {/* Call to Action - Final conversion section */}
      <CTASection />
    </main>
  );
}
