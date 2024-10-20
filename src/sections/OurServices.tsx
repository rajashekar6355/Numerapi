"use client";
import { cn } from "@/utils/utils";
import {
  IconAdjustmentsBolt,
  IconCloudComputing,
  IconCurrencyDollar,
  IconEaseInOut,
  IconGitBranch,
  IconBug,
  IconRocket,
  IconSettings,
  IconTerminal,
  IconUserCheck,
} from "@tabler/icons-react";

export function OurServices() {
  const features = [
    {
      title: "Seamless GitHub Integration",
      description:
        "Easily link and initialize your GitHub repositories with our platform.",
      icon: <IconGitBranch />, // Updated icon
    },
    {
      title: "Instant Repository Initialization",
      description:
        "Quickly set up your coding workspace with your existing GitHub repos.",
      icon: <IconRocket />, // Updated icon
    },
    {
      title: "Cloud-Based Coding Workspace",
      description:
        "Run your projects on Azure, no local GPU needed for high performance.",
      icon: <IconCloudComputing />, // Updated icon
    },
    {
      title: "Run Large AI Models Effortlessly",
      description:
        "Deploy and execute extensive AI models without local hardware constraints.",
      icon: <IconCurrencyDollar />, // Updated icon
    },
    {
      title: "AI-Powered Code Analysis",
      description:
        "Automatically identify and fix errors in your code repositories with AI assistance.",
      icon: <IconBug />, // Updated icon
    },
    {
      title: "Automated Virtual Environment Setup",
      description:
        "Create virtual environments based on requirements.txt without errors.",
      icon: <IconSettings />, // Updated icon
    },
    {
      title: "User-Friendly Development Experience",
      description:
        "Perform high-performance coding tasks from anywhere with a GitHub account.",
      icon: <IconUserCheck />, // Updated icon
    },
    {
      title: "Integrated Terminal and Prompting Tools",
      description:
        "Monitor changes and manage your code directly within our interface.",
      icon: <IconTerminal />, // Updated icon
    },
  ];

  return (
    <div id="OurServices" className="flex flex-col items-center">
      <h2 className="text-3xl py-2">Empower Your Development with Advanced Cloud Solutions</h2>
      <p>
        Streamline your coding workflow with our AI-driven, cloud-based platform, optimized for GitHub integration.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
}
