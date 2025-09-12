import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Github, ExternalLink, Play } from "lucide-react";
import Markdown from "react-markdown";

interface DetailedProjectCardProps {
  title: string;
  description: string;
  longDescription?: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  features?: readonly string[];
  techStack?: readonly string[];
}

export function DetailedProjectCard({
  title,
  description,
  longDescription,
  dates,
  tags,
  image,
  video,
  links,
  features,
  techStack,
}: DetailedProjectCardProps) {
  return (
    <Card className={`overflow-hidden border-0 shadow-lg bg-white ${(video || image) ? 'pt-0' : ''}`}>
      {/* Media Section */}
      {(video || image) && (
        <div className="relative">
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-64 object-cover"
            />
          )}
          {image && !video && (
            <img
              src={image}
              alt={title}
              className="w-full h-64 object-cover"
            />
          )}
        </div>
      )}

      <CardHeader className={`p-6 ${(video || image) ? 'pt-0' : ''}`}>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-[24px] font-[600] mb-2">{title}</CardTitle>
            <time className="text-[14px] text-gray-500 font-[300]">{dates}</time>
          </div>
          
          {/* Action Links */}
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {links.map((link, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  size="sm"
                  asChild
                  className="text-[12px]"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                    {link.type}
                  </a>
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[12px] font-[300] bg-black text-white"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>

      <CardContent className="p-6 pt-0">
        {/* Description */}
        <div className="prose max-w-none text-[16px] text-gray-700 font-[300] mb-6">
          <Markdown>
            {description}
          </Markdown>
        </div>

        {/* Long Description */}
        {longDescription && (
          <div className="prose max-w-none text-[16px] text-gray-700 font-[300] mb-6">
            <Markdown>
              {longDescription}
            </Markdown>
          </div>
        )}

        {/* Features */}
        {features && features.length > 0 && (
          <div className="mb-6">
            <h3 className="text-[18px] font-[500] mb-3">Key Features</h3>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="text-[14px] text-gray-700 font-[300]">
                  • {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        {techStack && techStack.length > 0 && (
          <div>
            <h3 className="text-[18px] font-[500] mb-3">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-[12px] font-[300]"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}