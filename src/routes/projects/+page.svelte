<svelte:head>
    <title>Projects — luxora</title>
</svelte:head>

<main class="flex w-full min-w-0 flex-col gap-8 py-4 sm:py-0">
    <div class="flex flex-col gap-2">
        <h1
            class="w-fit bg-linear-to-r from-[#7c3aed] to-[#2563eb] dark:from-[#a78bfa] dark:to-[#60a5fa] bg-clip-text text-3xl sm:text-4xl font-normal text-transparent"
        >
            Projects
        </h1>
        <p class="text-base text-neutral-600 dark:text-[#8B949E]">
            A showcase of things I've built and experimented with.
        </p>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div
            class="group rounded-md border border-neutral-200 dark:border-[#30363D] p-5 transition-colors duration-200 hover:border-neutral-400 dark:hover:border-neutral-600"
        >
            <div class="flex items-baseline justify-between gap-2">
                <h2 class="text-lg font-medium text-neutral-900 dark:text-[#F0F6FC]">
                    Portfolio
                </h2>
                <span class="text-xs text-neutral-500 dark:text-[#8B949E]">2026</span>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-[#8B949E]">
                Personal website built with SvelteKit, Tailwind CSS and hosted on Cloudflare Workers.
            </p>
            <div class="mt-4 flex gap-2 text-xs text-neutral-500 dark:text-[#8B949E]">
                <span>SvelteKit</span>
                <span>•</span>
                <span>Tailwind</span>
                <span>•</span>
                <span>Cloudflare</span>
            </div>
        </div>

        <div
            class="flex flex-col items-center justify-center rounded-md border border-dashed border-neutral-300 dark:border-[#30363D] p-5 text-center text-sm text-neutral-500 dark:text-[#8B949E]"
        >
            <p>More projects coming soon...</p>
        </div>
    </div>

    <div>
        <a
            href="/"
            class="w-fit rounded-sm text-sm text-neutral-600 dark:text-[#8B949E] transition-colors duration-200 hover:text-blue-500 dark:hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:focus-visible:outline-blue-400 motion-reduce:transition-none"
        >
            ← Back to home
        </a>
    </div>
</main>
