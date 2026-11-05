<script lang="ts">
    import PageMeta from "#lib/components/PageMeta.svelte";
    import { projects } from "#lib/data/projects.ts";
    import Link from "#lib/components/Link.svelte";

    let revealed = $state(false);
</script>

<PageMeta
    title="Projects — luxora"
    description="Explore luxora's projects, from a Discord crypto wallet to this SvelteKit portfolio."
/>

<main class="flex w-full min-w-0 flex-col gap-8 py-4 sm:py-0">
    <div class="flex flex-col gap-2">
        <h1
            class="w-fit bg-linear-to-r from-[#7c3aed] to-[#2563eb] bg-clip-text text-3xl font-normal text-transparent sm:text-4xl dark:from-[#a78bfa] dark:to-[#60a5fa]"
        >
            Projects
        </h1>
        <p class="text-base text-neutral-600 dark:text-neutral-400">
            A showcase of things I've built and experimented with.
        </p>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {#each projects as project (project.slug)}
            <!-- eslint-disable svelte/no-navigation-without-resolve -->
            <a
                href={`/projects/${project.slug}`}
                class="group block rounded-md border border-neutral-200 p-5 focus-ring transition-colors duration-200 hover:border-neutral-400 motion-reduce:transition-none dark:border-neutral-800 dark:hover:border-neutral-700"
            >
                <div class="flex items-baseline justify-between gap-2">
                    <div class="flex items-center gap-2">
                        <h2
                            class="text-lg font-medium text-neutral-900 transition-colors duration-200 group-hover:text-blue-500 dark:text-neutral-100 dark:group-hover:text-blue-400"
                        >
                            {project.name}
                        </h2>
                        <span
                            aria-hidden="true"
                            class="text-sm text-neutral-400 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
                            >→</span
                        >
                    </div>
                    <span
                        class={project.status
                            ? "text-xs font-normal text-amber-600 dark:text-amber-400"
                            : "text-xs text-neutral-500 dark:text-neutral-400"}
                        >{project.status ?? project.year}</span
                    >
                </div>
                <p
                    class="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
                >
                    {project.description}
                </p>
                <div
                    class="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400"
                >
                    {#each project.tech as tech, index (tech)}
                        {#if index > 0}<span>•</span>{/if}
                        <span>{tech}</span>
                    {/each}
                </div>
            </a>
            <!-- eslint-enable svelte/no-navigation-without-resolve -->
        {/each}

        <button
            type="button"
            onclick={() => (revealed = true)}
            class="flex cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-neutral-300 p-5 text-center text-sm text-neutral-500 focus-ring sm:col-span-2 dark:border-neutral-800 dark:text-neutral-400"
        >
            <span aria-live="polite"
                >{revealed
                    ? "Люблю Алису!!!"
                    : "More projects coming soon..."}</span
            >
        </button>
    </div>

    <div>
        <Link
            href="/"
            class="w-fit text-sm text-neutral-600 dark:text-neutral-400"
        >
            ← Back to home
        </Link>
    </div>
</main>
