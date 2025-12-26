import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { CourseHeader } from "@/components/sections/course-details/CourseHeader";
import { VideoPlayer } from "@/components/sections/course-details/VideoPlayer";
import { CourseSidebar } from "@/components/sections/course-details/CourseSidebar";
import { WhatYouWillLearn } from "@/components/sections/course-details/WhatYouWillLearn";
import { Curriculum } from "@/components/sections/course-details/Curriculum";
import { Instructor } from "@/components/sections/course-details/Instructor";
import { FAQ } from "@/components/sections/course-details/FAQ";

export default function CourseDetailsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] relative overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-400">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative z-10">
        <Navbar />
        
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="flex flex-col lg:flex-row gap-8 relative">
            {/* Main Content Column */}
            <div className="flex-1 min-w-0">
              <CourseHeader />
              <VideoPlayer />
              
              <div className="mt-12 space-y-12">
                <WhatYouWillLearn />
                <Curriculum />
                <Instructor />
                <FAQ />
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:w-[380px] shrink-0">
              <div className="sticky top-28 space-y-6">
                <CourseSidebar />
              </div>
            </div>
          </div>
        </div>

        <Footer />
        <MobileNav />
      </div>
    </main>
  );
}
