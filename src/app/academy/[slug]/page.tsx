import { notFound } from "next/navigation";
import { COURSES } from "@/lib/academy";
import { EV_COURSES } from "@/lib/academy-ev";
import { CourseClient } from "./CourseClient";

const ALL = [...COURSES, ...EV_COURSES];

export function generateStaticParams() {
  return ALL.map((course) => ({ slug: course.slug }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = ALL.find((item) => item.slug === slug);
  if (!course) notFound();
  return <CourseClient course={course} />;
}
