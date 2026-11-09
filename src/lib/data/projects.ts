export interface Project {
    slug: string;
    name: string;
    description: string;
    status?: string;
    year?: number;
    tech: string[];
}

export const projects: Project[] = [
    {
        slug: "crosy",
        name: "Crosy",
        description:
            "Lightweight crosshair overlay for macOS with a native SwiftUI editor.",
        tech: ["Swift", "SwiftUI", "AppKit", "Core Graphics"],
        year: 2026,
    },
    {
        slug: "bliq",
        name: "Bliq",
        description:
            "Custodial Gram crypto wallet in Discord with TON blockchain integration.",
        tech: [
            "TypeScript",
            "SvelteKit",
            "Fastify",
            "DrizzleORM",
            "PostgreSQL",
            "Docker",
            "Discord.js",
            "TON",
        ],
        status: "In development",
    },
    {
        slug: "portfolio",
        name: "Portfolio",
        description:
            "Personal website built with SvelteKit, Tailwind CSS and hosted on Cloudflare Workers.",
        tech: ["TypeScript", "SvelteKit", "Tailwind", "Cloudflare Workers"],
        year: 2026,
    },
];
