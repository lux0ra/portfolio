<script lang="ts">
    import "./layout.css";
    import { onMount } from "svelte";
    import { afterNavigate } from "$app/navigation";
    import Navbar from "#lib/components/Navbar.svelte";
    import Footer from "#lib/components/Footer.svelte";
    import favicon from "#lib/assets/favicon.jpeg";
    import type { LayoutProps } from "./$types";

    let { children }: LayoutProps = $props();

    const titles = [
        "luxora.exe is vibing",
        "I LOVE ALISA!!",
        "404: sleep not found",
        "just one more commit...",
    ];

    let titleIndex = $state(0);
    let content = $state<HTMLDivElement>();
    let entrance: Animation | undefined;

    afterNavigate(({ from, to }) => {
        // Hash and query changes should not replay the page entrance.
        if (from?.url.pathname === to?.url.pathname) return;
        entrance?.cancel();
        if (
            !content ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        )
            return;

        entrance = content.animate(
            [
                { opacity: 0, transform: "translateY(8px)" },
                { opacity: 1, transform: "none" },
            ],
            { duration: 280, easing: "ease-out" },
        );
    });

    onMount(() => {
        const timer = setInterval(() => {
            if (document.hidden) return;
            titleIndex = (titleIndex + 1) % titles.length;
        }, 3000);

        return () => {
            clearInterval(timer);
            entrance?.cancel();
        };
    });
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <title>{titles[titleIndex]}</title>
</svelte:head>

<div class="px-5">
    <div class="mx-auto flex min-h-dvh w-full max-w-7xl flex-col gap-8 py-6">
        <Navbar class="shrink-0 motion-safe:animate-(--reveal)" />
        <div bind:this={content} class="flex min-w-0 flex-1 items-center">
            {@render children()}
        </div>
        <Footer
            class="shrink-0 motion-safe:animate-(--reveal) motion-safe:[animation-delay:160ms]"
        />
    </div>
</div>
