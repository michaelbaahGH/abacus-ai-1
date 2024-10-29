"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  Truck,
  Ship,
  Plane,
  Compass,
  Globe,
  Map,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Enhanced 3D Card component with parallax effect
// interface ParallaxCardProps {
//   children: React.ReactNode;
// }

// const ParallaxCard: React.FC<ParallaxCardProps> = ({ children }) => {
//   const cardRef = useRef<HTMLDivElement | null>(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [rotation, setRotation] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     const centerX = rect.left + rect.width / 2;
//     const centerY = rect.top + rect.height / 2;
//     const mouseX = e.clientX - centerX;
//     const mouseY = e.clientY - centerY;

//     setMousePosition({ x: mouseX, y: mouseY });
//     setRotation({
//       x: (mouseY / rect.height) * 20,
//       y: -(mouseX / rect.width) * 20,
//     });
//   };

//   return (
//     <motion.div
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={() => setRotation({ x: 0, y: 0 })}
//       style={{
//         transformStyle: "preserve-3d",
//         transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
//       }}
//       transition={{ type: "spring", stiffness: 300, damping: 30 }}
//       className="relative w-full h-full"
//     >
//       {children}
//     </motion.div>
//   );
// };

// // Enhanced FreightParticles with 3D perspective and interactive elements
// const FreightParticles = () => {
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     setWindowSize({
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });

//     const handleResize = () => {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };

//     // Use native MouseEvent here
//     const handleMouseMove = (e: MouseEvent) => {
//       if (!containerRef.current) return;
//       const rect = containerRef.current.getBoundingClientRect();
//       setMousePosition({
//         x: (e.clientX - rect.left) / rect.width,
//         y: (e.clientY - rect.top) / rect.height,
//       });
//     };

//     window.addEventListener("resize", handleResize);
//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   // Create dynamic routes based on mouse position
//   const generateRoutes = () => {
//     const routes = [];
//     const numRoutes = 30;

//     for (let i = 0; i < numRoutes; i++) {
//       const startX = Math.random() * windowSize.width;
//       const startY = Math.random() * windowSize.height;
//       const endX = mousePosition.x * windowSize.width;
//       const endY = mousePosition.y * windowSize.height;

//       routes.push({
//         id: i,
//         start: { x: startX, y: startY },
//         end: { x: endX, y: endY },
//         duration: Math.random() * 10 + 20,
//       });
//     }

//     return routes;
//   };

//   const routes = generateRoutes();

//   return (
//     <div
//       ref={containerRef}
//       className="absolute inset-0 overflow-hidden pointer-events-none perspective-1000"
//     >
//       {/* Interactive route lines */}
//       {routes.map((route) => (
//         <motion.div
//           key={route.id}
//           className="absolute h-px bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-500/10"
//           style={{
//             width: Math.random() * 300 + 100,
//             transformStyle: "preserve-3d",
//             translateZ: Math.random() * 50,
//           }}
//           animate={{
//             x: [route.start.x, route.end.x],
//             y: [route.start.y, route.end.y],
//             opacity: [0, 0.6, 0],
//             scale: [1, 1.2, 1],
//           }}
//           transition={{
//             duration: route.duration,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />
//       ))}

//       {/* Enhanced vehicles with 3D movement and glow effects */}
//       <AnimatePresence>
//         {Array.from({ length: 8 }).map((_, i) => (
//           <motion.div
//             key={`vehicle-${i}`}
//             className="absolute"
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{
//               scale: 1,
//               opacity: 1,
//               x: [0, windowSize.width],
//               y: [
//                 Math.random() * windowSize.height,
//                 Math.random() * windowSize.height,
//               ],
//               rotateY: [0, 360],
//               z: [0, 100, 0],
//             }}
//             exit={{ scale: 0, opacity: 0 }}
//             transition={{
//               duration: Math.random() * 20 + 30,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           >
//             <div className="relative">
//               <div className="absolute inset-0 bg-cyan-500/20 blur-xl" />
//               {i % 3 === 0 ? (
//                 <Truck className="w-8 h-8 text-cyan-400" />
//               ) : i % 3 === 1 ? (
//                 <Ship className="w-10 h-10 text-blue-400" />
//               ) : (
//                 <Plane className="w-8 h-8 text-purple-400" />
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </AnimatePresence>

//       {/* Global trade routes visualization */}
//       <motion.div
//         className="absolute inset-0"
//         style={{
//           background:
//             "radial-gradient(circle at center, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
//           transform: `translate(${mousePosition.x * 20}px, ${
//             mousePosition.y * 20
//           }px)`,
//         }}
//       />
//     </div>
//   );
// };

// // Enhanced Story component with premium features
// function Story() {
//   const { ref, inView } = useInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });

//   const { scrollYProgress } = useScroll();
//   const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
//   const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

//   return (
//     <section
//       ref={ref}
//       className="py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
//     >
//       <FreightParticles />
//       <div className="container mx-auto px-4">
//         <ParallaxCard>
//           <Card className="bg-slate-900/50 backdrop-blur-xl border-cyan-500/20 overflow-hidden shadow-2xl shadow-cyan-500/10 transition-all duration-500">
//             <CardContent className="p-8 md:p-12 relative">
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5"
//                 animate={{
//                   backgroundPosition: ["0% 0%", "100% 100%"],
//                 }}
//                 transition={{
//                   duration: 20,
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                 }}
//               />

//               <motion.h2
//                 style={{ scale, y }}
//                 className="text-4xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
//               >
//                 Our Story
//               </motion.h2>

//               <div className="space-y-8 text-cyan-100/80 relative z-10">
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={inView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.8, delay: 0.2 }}
//                   className="relative p-6 backdrop-blur-xl rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg" />
//                   <p className="text-lg md:text-xl leading-relaxed">
//                     Founded in Drobo, Bono Region, Quality Food Distributors
//                     Ghana Ltd has evolved into a leading exporter of premium
//                     processed cashews. Our journey began with a vision to
//                     connect Ghanaian farmers with global markets while
//                     maintaining the highest standards of quality and
//                     sustainability.
//                   </p>
//                 </motion.div>

//                 {/* Additional story sections with similar premium styling */}
//                 {/* ... */}
//               </div>
//             </CardContent>
//           </Card>
//         </ParallaxCard>
//       </div>
//     </section>
//   );
// }

interface ParallaxCardProps {
  children: React.ReactNode;
}

const ParallaxCard: React.FC<ParallaxCardProps> = ({ children }) => (
  <div className="relative w-full h-full">
    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-8 rounded-xl shadow-lg">
      {children}
    </div>
  </div>
);

// Subtle Freight Particles (without strong parallax effects)
const FreightParticles = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateRoutes = () => {
    const routes = [];
    const numRoutes = 10;

    for (let i = 0; i < numRoutes; i++) {
      routes.push({
        id: i,
        duration: Math.random() * 10 + 20,
        width: Math.random() * 200 + 50,
      });
    }

    return routes;
  };

  const routes = generateRoutes();

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {routes.map((route) => (
        <motion.div
          key={route.id}
          className="absolute h-px bg-gradient-to-r from-cyan-400/20 to-purple-500/10"
          style={{
            width: route.width,
            top: Math.random() * windowSize.height,
            left: Math.random() * windowSize.width,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: route.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

function Story() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden"
    >
      <FreightParticles />
      <div className="container mx-auto px-4">
        <ParallaxCard>
          <div className="p-8 md:p-12 bg-slate-900/60 backdrop-blur-lg rounded-lg shadow-xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600"
            >
              Our Story
            </motion.h2>

            <div className="space-y-8 text-cyan-100/80">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="leading-relaxed"
              >
                Founded in Drobo, Bono Region, Quality Food Distributors Ghana
                Ltd has grown to become a leading exporter of premium processed
                cashews. Our journey began with a vision to connect Ghanaian
                farmers with global markets while maintaining the highest
                standards of quality and sustainability.
              </motion.p>
            </div>
          </div>
        </ParallaxCard>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-slate-950 min-h-screen overflow-hidden">
      {/* <Hero /> */}
      <Story />
      {/* <Team />
      <Culture />
      <USP />
      <Values />
      <Awards /> */}
    </main>
  );
}
