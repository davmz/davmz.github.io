"use client";

import Image from "next/image";
import { Badge } from "./Badge";
import { Card, CardContent } from "./Card";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ project, onClick, isCompact = false }) {
    if (isCompact) {
        return (
            <Card
                className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                onClick={onClick}
            >
                <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <CardContent className="p-3">
                    <h3 className="font-semibold text-sm mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                            </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                                +{project.technologies.length - 3}
                            </Badge>
                        )}
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="bg-card rounded-lg overflow-hidden border">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                />
            </div>

            <div className="p-4 space-y-4">
                <div className="space-y-2">
                    <h2 className="text-xl font-bold">{project.title}</h2>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>

                <div className="space-y-2">
                    <h3 className="font-semibold text-sm">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>

                <div className="space-y-2">
                    <h3 className="font-semibold text-sm">Features</h3>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                        {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>

                <div className="flex gap-4">
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:underline text-sm"
                    >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                    </a>
                    <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:underline text-sm"
                    >
                        <Github className="h-4 w-4" />
                        Source Code
                    </a>
                </div>
            </div>
        </div>
    );
}