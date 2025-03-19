"use client";

import { Code2, Database, Wrench, Brain, Award, BookOpen, PenTool as Tool, Laptop } from "lucide-react";

import skills from "../../../data/skills";

import { Badge } from "../../../components/ui/Badge";
import { Progress } from "../../../components/ui/Progress";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/Card";

export default function SkillsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Header */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">Skills & Expertise</h1>
                    <p className="text-xl text-muted-foreground">
                        A comprehensive overview of my technical skills, tools, and professional capabilities.
                    </p>
                </div>

                {/* Frontend Skills */}
                <section className="space-y-6">
                    <div className="flex items-center gap-2">
                        <Code2 className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-semibold">Frontend Development</h2>
                    </div>

                    <div className="grid gap-4">
                        {skills.frontend.map((skill) => (
                            <div key={skill.name} className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="font-medium">{skill.name}</span>
                                    <span className="text-muted-foreground">{skill.level}%</span>
                                </div>
                                <Progress value={skill.level} className="h-2" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Backend Skills */}
                <section className="space-y-6">
                    <div className="flex items-center gap-2">
                        <Database className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-semibold">Backend Development</h2>
                    </div>

                    <div className="grid gap-4">
                        {skills.backend.map((skill) => (
                            <div key={skill.name} className="space-y-2">
                                <div className="flex justify-between">
                                <span className="font-medium">{skill.name}</span>
                                <span className="text-muted-foreground">{skill.level}%</span>
                                </div>
                                <Progress value={skill.level} className="h-2" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tools & Software */}
                <section className="space-y-6">
                    <div className="flex items-center gap-2">
                        <Tool className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-semibold">Tools & Software</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {skills.tools_software.map((category) => (
                            <Card key={category.category}>
                                <CardHeader>
                                    <CardTitle className="text-lg">{category.category}</CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {category.items.map((item) => (
                                            <Badge key={item} variant="secondary">
                                                {item}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Soft Skills */}
                <section className="space-y-6">
                    <div className="flex items-center gap-2">
                        <Brain className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-semibold">Soft Skills</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {skills.softSkills.map((skill) => (
                            <div
                                key={skill}
                                className="p-4 rounded-lg border bg-card flex items-center gap-2"
                            >
                                <span>{skill}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certifications */}
                {skills.certifications.length > 0 && (
                    <section className="space-y-6">
                        <div className="flex items-center gap-2">
                            <Award className="h-6 w-6 text-primary" />
                            <h2 className="text-2xl font-semibold">Certifications</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {skills.certifications.map((cert) => (
                                <Card key={cert.name}>
                                    <CardHeader>
                                        <CardTitle className="text-lg">{cert.name}</CardTitle>
                                    </CardHeader>

                                    <CardContent>
                                        <p className="text-muted-foreground">{cert.issuer}</p>
                                        <p className="text-sm">Completed: {cert.date}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>
                )}

                {/* Currently Learning */}
                {skills.ongoing.length > 0 && (
                    <section className="space-y-6">
                        <div className="flex items-center gap-2">
                            <BookOpen className="h-6 w-6 text-primary" />
                            <h2 className="text-2xl font-semibold">Currently Learning</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {skills.ongoing.map((course) => (
                                <Card key={course.name}>
                                    <CardHeader>
                                        <CardTitle className="text-lg">{course.name}</CardTitle>
                                    </CardHeader>

                                    <CardContent className="space-y-4">
                                        <p className="text-muted-foreground">{course.platform}</p>

                                        <div className="space-y-2">
                                            <div className="flex justify-between">
                                                <span className="text-sm text-muted-foreground">Progress</span>
                                                <span className="text-sm text-muted-foreground">{course.progress}%</span>
                                            </div>
                                            <Progress value={course.progress} className="h-2" />
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}