<script lang="ts">
    import PageMeta from "#lib/components/PageMeta.svelte";
    import Link from "#lib/components/Link.svelte";
    import { page } from "$app/state";
</script>

<PageMeta
    title={page.status === 404 ? "404 — luxora" : "Error — luxora"}
    description={page.status === 404
        ? "This page could not be found. Explore luxora's portfolio and projects."
        : "An unexpected error occurred while loading luxora's portfolio."}
/>

<main class="w-full py-8">
    <h1 class="text-5xl font-semibold">{page.status}</h1>

    <p class="mt-4 text-base leading-6 text-neutral-600 dark:text-neutral-400">
        {page.status === 404
            ? "This page doesn't exist."
            : "Something went wrong."}
        (<Link
            variant="accent"
            href="/"
            aria-label="Go to homepage"
            class="hover:underline">click!</Link
        >)
    </p>
</main>
