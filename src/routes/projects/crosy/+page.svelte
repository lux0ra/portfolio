<script lang="ts">
    import PageMeta from "#lib/components/PageMeta.svelte";
    import Link from "#lib/components/Link.svelte";
    import { downloadUrl, technologies } from "#lib/data/crosy.ts";
</script>

<PageMeta
    title="Crosy — luxora"
    description="A lightweight crosshair overlay for macOS, built with Swift and AppKit. Customize your crosshair and download Crosy for Apple Silicon and Intel."
/>

<main class="flex w-full min-w-0 flex-col gap-8 self-start py-4 sm:py-0">
    <div>
        <Link
            href="/projects"
            class="inline-flex items-center gap-1.5 text-sm text-neutral-600 dark:text-neutral-400"
        >
            ← Back to projects
        </Link>
    </div>

    <header class="flex flex-col gap-3">
        <div class="flex flex-wrap items-baseline justify-between gap-3">
            <div class="flex flex-wrap items-baseline gap-3">
                <h1
                    class="w-fit bg-linear-to-r from-[#7c3aed] to-[#2563eb] bg-clip-text text-3xl font-normal text-transparent sm:text-4xl dark:from-[#a78bfa] dark:to-[#60a5fa]"
                >
                    Crosy
                </h1>
                <Link
                    href="https://github.com/lux0ra/crosy"
                    class="text-xs text-neutral-500 dark:text-neutral-400"
                >
                    GitHub ↗
                </Link>
            </div>
            <span class="text-xs text-neutral-500 dark:text-neutral-400">
                2026
            </span>
        </div>
        <p
            class="max-w-3xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400"
        >
            A lightweight crosshair overlay for macOS that stays above your apps
            and lets mouse clicks pass through. Choose a shape, adjust its
            appearance with a live preview, and select which displays to use.
            Control the overlay from the menu bar; your preferences are saved
            between launches.
        </p>
        <p class="text-sm text-neutral-500 dark:text-neutral-400">
            AI was used in this project.
        </p>
    </header>

    <section
        class="flex flex-col gap-3 rounded-md border border-neutral-200 p-5 dark:border-neutral-800"
    >
        <h2 class="text-xl font-normal text-neutral-900 dark:text-neutral-100">
            Download
        </h2>
        <p
            class="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
        >
            Requires macOS 13 or later. One universal app for Apple Silicon and
            Intel Macs. Extract the ZIP and move Crosy.app to Applications.
        </p>
        <div class="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
            <Link href={downloadUrl} variant="accent" class="w-fit">
                Download for macOS ↓
            </Link>
            <Link
                href="https://github.com/lux0ra/crosy/releases/latest"
                variant="muted"
                class="w-fit"
            >
                Release notes ↗
            </Link>
        </div>
        <p
            class="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400"
        >
            For first-launch instructions, see the release notes. Some games
            with exclusive fullscreen rendering may hide the overlay; try a
            borderless window.
        </p>
    </section>

    <section class="flex flex-col gap-3">
        <h2 class="text-xl font-normal text-neutral-900 dark:text-neutral-100">
            Tech Stack
        </h2>
        <div class="flex flex-wrap gap-2 text-xs">
            {#each technologies as tech (tech)}
                <span
                    class="rounded-md border border-neutral-200 bg-neutral-100/60 px-3 py-1.5 text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300"
                >
                    {tech}
                </span>
            {/each}
        </div>
    </section>
</main>
