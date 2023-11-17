"use client";
import SingleProject from "@/components/single-project/single-project";
import "@/styles/single-project/project.css";
export default function ProjectPage({
  params,
}: {
  params: { projId: number };
}) {
  return (
    <>
      <SingleProject currentID={params.projId} />
    </>
  );
}
