"use client";

import { useState, useEffect } from "react";
import { Briefcase, Calendar, MapPin, ExternalLink, X, BookOpen } from "lucide-react";

import experiences from "../../../data/experiences";

import { Badge } from "../../../components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/Card";

export default function Experiences() {
    const [selectedExperience, setSelectedExperience] = useState(null);

    // Lock or unlock scrolling based on `selectedExperience`
    useEffect(() => {
        if (selectedExperience) {
            document.body.style.overflow = "hidden"; // Disable scrolling
        } else {
            document.body.style.overflow = ""; // Enable scrolling
        }

        // Cleanup function to reset scroll behavior when the component unmounts
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedExperience]);

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-6xl mx-auto space-y-8">
                {/* Header */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">Professional Experience</h1>
                    <p className="text-xl text-muted-foreground">
                        My journey through different roles and companies in the tech industry.
                    </p>
                </div>
    
                {/* Experience Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {experiences.map((exp) => (
                        <Card
                            key={exp.id}
                            className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                            onClick={() => setSelectedExperience(exp)}
                        >
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Briefcase className="h-5 w-5 text-primary" />
                                    <span className="text-lg">{exp.position}</span>
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <p className="font-medium">{exp.company}</p>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar className="h-4 w-4" />
                                        <span>{exp.period}</span>
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <MapPin className="h-4 w-4" />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech) => (
                                        <Badge key={tech} variant="secondary">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                  {/* Education */}
                <section className="space-y-6 w-full">
                    <div className="flex items-center gap-2">
                        <BookOpen className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-semibold">Education</h2>
                    </div>
                
                    <div className="w-full">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Red River College Polytechnic</CardTitle>
                                <p className="text-muted-foreground text-sm">Business Information Technology</p>
                            </CardHeader>
                
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground text-sm">
                                    <strong>Date:</strong> September 2020 - June 2023
                                </p>
                                <p className="text-muted-foreground text-sm">
                                    <strong>Location:</strong> Winnipeg, Manitoba, Canada
                                </p>
                
                                <div className="space-y-2">
                                    <h3 className="text-sm font-semibold">Skills & Experience</h3>
                                    <ul className="list-disc list-inside text-muted-foreground text-sm">
                                        <li>Developed full-stack web applications using React, Node.js, and MongoDB.</li>
                                        <li>Gained hands-on experience with Agile methodologies and project management tools.</li>
                                        <li>Collaborated with peers on group projects, enhancing teamwork and communication skills.</li>
                                        <li>Learned database design and optimization using PostgreSQL and MySQL.</li>
                                        <li>Built responsive and accessible user interfaces with HTML5, CSS3, and Tailwind CSS.</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
    
                {/* Detailed Experience Modal */}
                {selectedExperience && (
                    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-card w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg border p-6 relative">
                            <button
                                onClick={() => setSelectedExperience(null)}
                                className="absolute right-4 top-4 p-2 hover:bg-muted rounded-full"
                            >
                                <X className="h-5 w-5" />
                            </button>
                
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold">{selectedExperience.position}</h2>
                                    <p className="text-lg text-primary">{selectedExperience.company}</p>
                                    <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            <span>{selectedExperience.period}</span>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4" />
                                            <span>{selectedExperience.location}</span>
                                        </div>
                                    </div>
                                </div>
                
                                <div>
                                    <h3 className="font-semibold mb-2">Technologies</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedExperience.technologies.map((tech) => (
                                            <Badge key={tech} variant="secondary">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                
                                <div>
                                    <h3 className="font-semibold mb-2">Key Responsibilities</h3>
                                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                        {selectedExperience.responsibilities.map((resp, index) => (
                                            <li key={index}>{resp}</li>
                                        ))}
                                    </ul>
                                </div>
                
                                <div>
                                    <h3 className="font-semibold mb-2">Key Achievements</h3>
                                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                        {selectedExperience.achievements.map((achievement, index) => (
                                            <li key={index}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                
                                <div>
                                    <h3 className="font-semibold mb-2">Notable Projects</h3>
                                    <div className="grid gap-4">
                                        {selectedExperience.projects.map((project, index) => (
                                            <div key={index} className="p-4 rounded-lg border">
                                                <h4 className="font-medium flex items-center gap-2">
                                                    <ExternalLink className="h-4 w-4 text-primary" />
                                                    {project.name}
                                                </h4>
                                                <p className="mt-1 text-muted-foreground">{project.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}