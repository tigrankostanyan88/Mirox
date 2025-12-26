import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { CoursesHero } from "@/components/sections/courses/CoursesHero";
import { CoursesListing } from "@/components/sections/courses/CoursesListing";
import { Testimonials } from "@/components/sections/courses/Testimonials";
import { CoursesCTA } from "@/components/sections/courses/CoursesCTA";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] relative overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-400">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative z-10">
        <Navbar />
        <CoursesHero />
        <CoursesListing />
        <Testimonials />
        <CoursesCTA />
        <Footer />
        <MobileNav />
      </div>
    </main>
  );
}
