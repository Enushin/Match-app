import { Card, CardContent, CardFooter, Avatar, Button } from "@/components/ui";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Plus,
  Users,
} from "lucide-react";
import { sampleProjects, sampleUsers } from "@/lib/data/sample";

function formatBudget(min?: number | null, max?: number | null): string {
  if (!min && !max) return "要相談";
  const fmt = (n: number) =>
    n >= 10000 ? `${(n / 10000).toFixed(0)}万円` : `${n.toLocaleString()}円`;
  if (min && max) return `${fmt(min)} 〜 ${fmt(max)}`;
  if (min) return `${fmt(min)} 〜`;
  if (max) return `〜 ${fmt(max)}`;
  return "要相談";
}

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">案件掲示板</h1>
          <p className="mt-1 text-neutral-500">
            {sampleProjects.length}件の案件が公開中
          </p>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4" />
          案件を投稿
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {sampleProjects.map((project) => {
          const owner = sampleUsers.find((u) => u.id === project.ownerId);
          return (
            <Card key={project.id} elevated>
              <CardContent>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                          project.status === "open"
                            ? "bg-green-50 text-green-700"
                            : project.status === "in_progress"
                              ? "bg-blue-50 text-blue-700"
                              : "bg-neutral-100 text-neutral-500"
                        }`}
                      >
                        {project.status === "open"
                          ? "募集中"
                          : project.status === "in_progress"
                            ? "進行中"
                            : "終了"}
                      </span>
                    </div>
                    <h2 className="mt-2 text-lg font-semibold text-neutral-900">
                      {project.title}
                    </h2>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-neutral-600 line-clamp-3">
                  {project.description}
                </p>

                {/* Skills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.requiredSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-primary-50 px-2 py-0.5 text-xs font-medium text-primary-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-neutral-500">
                  <span className="flex items-center gap-1">
                    <DollarSign className="h-3.5 w-3.5" />
                    {formatBudget(project.budget?.min, project.budget?.max)}
                  </span>
                  {project.duration && (
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {project.duration}
                    </span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="border-t border-neutral-100">
                {owner && (
                  <div className="flex flex-1 items-center gap-2">
                    <Avatar name={owner.name} size="sm" />
                    <div>
                      <p className="text-xs font-medium text-neutral-900">
                        {owner.name}
                      </p>
                      <p className="text-xs text-neutral-400">
                        {owner.title}
                      </p>
                    </div>
                  </div>
                )}
                <Button size="sm">応募する</Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
