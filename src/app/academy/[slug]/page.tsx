import { notFound } from "next/navigation";
import { COURSES } from "@/lib/academy";
import { CourseClient } from "./CourseClient";

export function generateStaticParams() {
  return COURSES.map((course) => ({ slug: course.slug }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = COURSES.find((item) => item.slug === slug);
  if (!course) notFound();
  return <CourseClient course={course} />;
}
