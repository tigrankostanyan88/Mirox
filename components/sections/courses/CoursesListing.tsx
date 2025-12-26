"use client";

import React, { useState } from "react";
import { COURSES_PAGE_DATA } from "@/lib/data";
import { CoursesFilter } from "./CoursesFilter";
import { CoursesGrid } from "./CoursesGrid";

export const CoursesListing = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const { courses } = COURSES_PAGE_DATA;

  const filteredCourses = courses.filter((course) => {
    if (activeFilter === "all") return true;
    return course.tags?.includes(activeFilter);
  });

  return (
    <>
      <CoursesFilter 
        activeFilter={activeFilter} 
        onFilterChange={setActiveFilter} 
      />
      <CoursesGrid courses={filteredCourses} />
    </>
  );
};
