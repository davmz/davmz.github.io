"use client";

import { useState, useRef } from "react";
import { Button } from "../../../components/ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { projects } from "../../../data/projects";
import ProjectCard from "../../../components/ui/ProjectCard";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;

    // Ref for the project list container
    const projectListRef = useRef(null);

    // Calculate pagination
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);

        // Scroll to the top of the project list
        if (projectListRef.current) {
            projectListRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Header */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">Projects</h1>
                    <p className="text-xl text-muted-foreground">
                        A showcase of my recent work and personal projects.
                    </p>
                </div>

                {/* Main Content: Project Display and Sidebar */}
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Selected Project Display */}
                    <div className="w-full md:w-2/3">
                        <ProjectCard project={selectedProject} />
                    </div>

                    {/* Sidebar: Project List and Pagination */}
                    <div className="w-full md:w-1/3 flex flex-col gap-6">
                        {/* Project List */}
                        <div id="projects-list" ref={projectListRef}>
                            <h2 className="text-2xl font-semibold mb-6">All Projects</h2>
                            <div className="grid grid-cols-3 gap-4">
                                {currentProjects.map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                        isCompact={true} // Compact version for smaller cards
                                        onClick={() => setSelectedProject(project)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => paginate(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>

                                {[...Array(totalPages)].map((_, index) => (
                                    <Button
                                        key={index + 1}
                                        variant={currentPage === index + 1 ? "default" : "outline"}
                                        size="icon"
                                        onClick={() => paginate(index + 1)}
                                    >
                                        {index + 1}
                                    </Button>
                                ))}

                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => paginate(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}