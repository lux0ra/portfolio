<script lang="ts">
    import "./layout.css";
    import { onMount } from "svelte";
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

    onMount(() => {
        const timer = setInterval(() => {
            if (document.hidden) return;
            titleIndex = (titleIndex + 1) % titles.length;
        }, 3000);

        return () => clearInterval(timer);
    });
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <title>{titles[titleIndex]}</title>
</svelte:head>

<div class="px-5">
    <div class="mx-auto flex min-h-dvh w-full max-w-7xl flex-col gap-8 py-6">
        <Navbar class="shrink-0 motion-safe:animate-(--reveal)" />
        <div class="flex min-w-0 flex-1 items-center">
            {@render children()}
        </div>
        <Footer
            class="shrink-0 motion-safe:animate-(--reveal) motion-safe:[animation-delay:160ms]"
        />
    </div>
</div>
