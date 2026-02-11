import { projects } from "@/lib/projects"
import { notFound } from "next/navigation"
import ProjectDetailClient from "./project-detail-client"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
