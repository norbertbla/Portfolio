import * as React from "react";
import { Project } from "types";
import { Badge } from "./ui/badge";

interface ProjectSectionItemProps {
  item: Project;
}

export function ProjectSectionItem({ item }: ProjectSectionItemProps) {
  return (
    <>
      <div className="relative overflow-hidden rounded-lg border bg-background p-2">
        <div className="flex h-full flex-col justify-between rounded-md p-6">
          <div className="space-y-2 h-full flex flex-col">
            <h3 className="font-bold">{item.title}</h3>
            <div className="inline-block">
              {item.technologies.map((tag, index) => (
                <Badge
                  key={index}
                  className="mr-1 hover:bg-primary cursor-default"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="text-sm">{item.description}</p>
            <div className="grow"></div>
            {item.href && (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline underline-offset-4"
              >
                View Project
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
