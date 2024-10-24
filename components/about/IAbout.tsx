"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Waves,
  Heart,
  Users,
  Building,
  Sparkles,
  Mountain,
  ArrowRight,
  Factory,
  Scale,
  CheckCircle2,
  Briefcase,
  Gift,
  Leaf,
  ShieldCheck,
  Trophy,
  Star,
  MessageSquare,
  PackageCheck,
  Award,
  Ribbon as Certificate,
} from "lucide-react";

// Keep existing Particles component unchanged
const Particles = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
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

const values = [
  {
    icon: <Scale className="w-12 h-12" />,
    title: "Quality",
    description: "We never compromise on the quality of our cashews",
  },
  {
    icon: <Leaf className="w-12 h-12" />,
    title: "Sustainability",
    description: "Supporting local farmers and eco-friendly practices",
  },
  {
    icon: <ShieldCheck className="w-12 h-12" />,
    title: "Integrity",
    description: "Transparency and reliability in all business operations",
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Customer Satisfaction",
    description: "Building long-term relationships with global clients",
  },
];

function Hero() {
  const { scrollYProgress } = useScroll();
  const springScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const heroOpacity = useTransform(springScrollProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(springScrollProgress, [0, 0.3], [1, 1.1]);
  const textY = useTransform(springScrollProgress, [0, 0.3], [0, -50]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <Particles />
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-700/20 mix-blend-overlay z-10" />
        <img
          src="/api/placeholder/2000/1000"
          alt="Quality Food Distributors Facility"
          className="object-cover w-full h-full"
        />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="relative z-20 text-center max-w-5xl px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.5,
          }}
          className="mb-6"
        >
          <Sparkles className="w-20 h-20 text-amber-400 mx-auto animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"
        >
          About Quality Food Distributors
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl md:text-4xl text-amber-100 font-light tracking-wide mb-12"
        >
          Your Trusted Partner in Premium Cashew Processing
        </motion.p>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 to-transparent" />
    </section>
  );
}

function Story() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-stone-950 to-stone-900 relative"
    >
      <Particles />
      <div className="container mx-auto px-4">
        <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 overflow-hidden">
          <CardContent className="p-12">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"
            >
              Our Story
            </motion.h2>

            <div className="space-y-8 text-amber-100/80">
              <motion.p
                variants={fadeInUpVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={0}
                className="text-lg md:text-xl leading-relaxed"
              >
                Founded in Drobo, Bono Region, Quality Food Distributors Ghana
                Ltd has evolved into a leading exporter of premium processed
                cashews. Our journey began with a vision to connect Ghanaian
                farmers with global markets while maintaining the highest
                standards of quality and sustainability.
              </motion.p>
              <motion.p
                variants={fadeInUpVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={1}
                className="text-lg md:text-xl leading-relaxed"
              >
                Our mission is clear: to be a trusted partner in the global
                cashew supply chain by delivering high-quality processed cashews
                while supporting sustainable farming practices and contributing
                to the local Ghanaian economy. We're dedicated to ethical
                sourcing, state-of-the-art processing, and timely delivery to
                international markets.
              </motion.p>
              <motion.p
                variants={fadeInUpVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={2}
                className="text-lg md:text-xl leading-relaxed"
              >
                Today, we foster a collaborative work environment that
                prioritizes excellence, innovation, and sustainability. Our
                success is measured not just in export volumes, but in the
                positive impact we make on local farmers, our employees, and the
                global customers we serve.
              </motion.p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Values() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-stone-800 to-stone-950 relative"
    >
      <Particles />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <p className="text-xl text-amber-100/60 mt-4 max-w-2xl mx-auto">
            The principles that guide our commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
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
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-amber-100 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-amber-100/60">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const teamMembers = [
    {
      name: "John Doe",
      role: "Chief Executive Officer",
      description:
        "With over 15 years in the cashew industry, John leads our vision for sustainable processing and global distribution. His expertise in international trade has been instrumental in establishing our global presence.",
      icon: <Briefcase className="w-16 h-16" />,
    },
    {
      name: "Sarah Smith",
      role: "Operations Director",
      description:
        "Sarah brings 12 years of food processing experience, ensuring excellence in our processing facilities and maintaining the highest quality standards in the industry.",
      icon: <Factory className="w-16 h-16" />,
    },
    {
      name: "Michael Johnson",
      role: "Global Sales Manager",
      description:
        "With a decade of experience in international sales, Michael has successfully built lasting relationships with clients across Europe and Asia.",
      icon: <Users className="w-16 h-16" />,
    },
  ];

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-stone-900 to-stone-800 relative"
    >
      <Particles />
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-16"
        >
          Our Leadership Team
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <img
                      src={`/api/placeholder/150/150`}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="text-amber-400 inline-block"
                    >
                      {member.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold text-amber-100 mb-2">
                    {member.name}
                  </h3>
                  <h4 className="text-lg text-amber-400 mb-4">{member.role}</h4>
                  <p className="text-amber-100/60">{member.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Culture() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const testimonials = [
    {
      quote:
        "Working at Quality Food Distributors has been a rewarding experience, as we prioritize quality and sustainability in everything we do.",
      author: "Emma Wilson",
      position: "Quality Control Specialist",
    },
    {
      quote:
        "The company's commitment to both environmental sustainability and employee growth makes this a truly special place to work.",
      author: "David Chen",
      position: "Production Supervisor",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-stone-800 to-stone-900 relative"
    >
      <Particles />
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-16"
        >
          Our Culture
        </motion.h2>

        <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 mb-16">
          <CardContent className="p-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-lg text-amber-100/80 text-center mb-12"
            >
              At Quality Food Distributors, we foster a culture of integrity,
              collaboration, and sustainability, ensuring a positive work
              environment that supports our team and the community.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="bg-stone-800/50 border-amber-500/10">
                    <CardContent className="p-6">
                      <MessageSquare className="w-8 h-8 text-amber-400 mb-4" />
                      <p className="text-amber-100/80 italic mb-4">
                        "{testimonial.quote}"
                      </p>
                      <p className="text-amber-400 font-semibold">
                        {testimonial.author}
                      </p>
                      <p className="text-amber-100/60">
                        {testimonial.position}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function USP() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: <PackageCheck className="w-12 h-12" />,
      title: "Premium Quality",
      description:
        "State-of-the-art processing ensuring the finest cashew quality",
    },
    {
      icon: <Scale className="w-12 h-12" />,
      title: "Ethical Sourcing",
      description:
        "Direct partnerships with local farmers ensuring fair practices",
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Custom Solutions",
      description: "Tailored packaging and delivery options for every client",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-stone-900 to-stone-800 relative"
    >
      <Particles />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-amber-100/60 max-w-3xl mx-auto">
            We stand out in the market through our commitment to ethical
            sourcing, stringent quality control, and personalized customer
            service.
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
              <Card className="bg-stone-900/50 backdrop-blur-lg border-amber-500/20 h-full">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-amber-400 mb-6 inline-block"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-amber-100 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-amber-100/60">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Awards() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const achievements = [
    {
      icon: <Certificate className="w-12 h-12" />,
      title: "ISO 22000:2018",
      description: "Certified for Food Safety Management Systems",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "HACCP Certified",
      description: "Meeting international food safety standards",
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "Best Exporter 2023",
      description: "Ghana Export Promotion Authority Award",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-stone-800 to-stone-950 relative"
    >
      <Particles />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-6">
            Awards & Certifications
          </h2>
          <p className="text-xl text-amber-100/60 max-w-3xl mx-auto">
            Our commitment to excellence has been recognized through multiple
            certifications and awards
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
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
                    {achievement.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-amber-100 mb-4">
                    {achievement.title}
                  </h3>
                  <p className="text-amber-100/60">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-stone-950 min-h-screen">
      <Hero />
      <Story />
      <Team />
      <Culture />
      <USP />
      <Values />
      <Awards />
    </main>
  );
}
