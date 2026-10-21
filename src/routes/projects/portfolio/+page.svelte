<svelte:head>
    <title>Portfolio — luxora</title>
</svelte:head>

<main class="flex w-full min-w-0 flex-col gap-8 py-4 sm:py-0">
    <div>
        <a
            href="/projects"
            class="inline-flex items-center gap-1.5 rounded-sm text-sm text-neutral-600 dark:text-neutral-400 transition-colors duration-200 hover:text-blue-500 dark:hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:focus-visible:outline-blue-400 motion-reduce:transition-none"
        >
            ← Back to projects
        </a>
    </div>

    <header class="flex flex-col gap-3">
        <div class="flex flex-wrap items-baseline justify-between gap-3">
            <h1
                class="w-fit bg-linear-to-r from-[#7c3aed] to-[#2563eb] dark:from-[#a78bfa] dark:to-[#60a5fa] bg-clip-text text-3xl sm:text-4xl font-normal text-transparent"
            >
                Portfolio
            </h1>
            <span
                class="text-xs font-normal text-neutral-500 dark:text-neutral-400"
            >
                2026
            </span>
        </div>
        <p
            class="max-w-3xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400"
        >
            Personal website built for speed, clean typography, and subtle
            micro-interactions. Zero bloated dependencies, 100% responsive and
            accessible.
        </p>
    </header>

    <section class="flex flex-col gap-3">
        <h2 class="text-xl font-normal text-neutral-900 dark:text-neutral-100">
            Overview
        </h2>
        <div
            class="rounded-md border border-neutral-200 dark:border-neutral-800 p-5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
        >
            <p>
                The portfolio was engineered as a lightweight, aesthetic hub to
                showcase projects, social links, and experiments. Built from
                scratch with modern web standards, it delivers near-instant page
                transitions, adaptive system theming, and smooth motion designed
                around reduced-motion accessibility guidelines.
            </p>
        </div>
    </section>

    <section class="flex flex-col gap-4">
        <h2 class="text-xl font-normal text-neutral-900 dark:text-neutral-100">
            How It Works
        </h2>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <article
                class="flex flex-col gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 p-5"
            >
                <span
                    class="text-xs font-medium text-neutral-400 dark:text-neutral-500"
                    >01 / Framework</span
                >
                <h3
                    class="text-base font-medium text-neutral-900 dark:text-neutral-100"
                >
                    SvelteKit &amp; Svelte 5 Runes
                </h3>
                <p
                    class="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
                >
                    Built using Svelte 5's fine-grained reactivity (<code
                        class="rounded bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 text-xs"
                        >$state</code
                    >,
                    <code
                        class="rounded bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 text-xs"
                        >$props</code
                    >). Compiles down to minimal JavaScript with zero virtual
                    DOM overhead.
                </p>
            </article>

            <article
                class="flex flex-col gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 p-5"
            >
                <span
                    class="text-xs font-medium text-neutral-400 dark:text-neutral-500"
                    >02 / Styling</span
                >
                <h3
                    class="text-base font-medium text-neutral-900 dark:text-neutral-100"
                >
                    Tailwind CSS v4 &amp; OLED Black
                </h3>
                <p
                    class="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
                >
                    Configured with Vite and Tailwind v4. The system
                    automatically responds to user OS preferences (<code
                        class="rounded bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 text-xs"
                        >prefers-color-scheme</code
                    >) using pure
                    <code
                        class="rounded bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 text-xs"
                        >#000000</code
                    > for deep black contrast.
                </p>
            </article>

            <article
                class="flex flex-col gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 p-5"
            >
                <span
                    class="text-xs font-medium text-neutral-400 dark:text-neutral-500"
                    >03 / Edge Delivery</span
                >
                <h3
                    class="text-base font-medium text-neutral-900 dark:text-neutral-100"
                >
                    Cloudflare Workers
                </h3>
                <p
                    class="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
                >
                    Hosted globally at Cloudflare's edge using <code
                        class="rounded bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 text-xs"
                        >@sveltejs/adapter-cloudflare</code
                    >. Pages and assets are cached and delivered with
                    millisecond latency worldwide.
                </p>
            </article>

            <article
                class="flex flex-col gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 p-5"
            >
                <span
                    class="text-xs font-medium text-neutral-400 dark:text-neutral-500"
                    >04 / Micro-interactions</span
                >
                <h3
                    class="text-base font-medium text-neutral-900 dark:text-neutral-100"
                >
                    Canvas Physics Confetti
                </h3>
                <p
                    class="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
                >
                    A completely custom HTML5 canvas particle simulation built
                    without external libraries. Automatically accounts for
                    device pixel ratios and respects reduced-motion preferences.
                </p>
            </article>
        </div>
    </section>

    <section class="flex flex-col gap-3">
        <h2 class="text-xl font-normal text-neutral-900 dark:text-neutral-100">
            Tech Stack
        </h2>
        <div class="flex flex-wrap gap-2 text-xs">
            {#each ["TypeScript", "SvelteKit", "Svelte 5", "Tailwind CSS v4", "Cloudflare Workers", "Vite", "Wrangler"] as tech}
                <span
                    class="rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/60 px-3 py-1.5 text-neutral-700 dark:text-neutral-300"
                >
                    {tech}
                </span>
            {/each}
        </div>
    </section>
</main>
