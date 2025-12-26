"use client";

import React from "react";
import { COURSES_PAGE_DATA } from "@/lib/data";
import { CourseCard } from "./CourseCard";

interface CoursesGridProps {
  courses: typeof COURSES_PAGE_DATA.courses;
}

export const CoursesGrid = ({ courses }: CoursesGridProps) => {
  return (
    <section className="container mx-auto px-4 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};
