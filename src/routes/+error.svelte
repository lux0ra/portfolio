<script lang="ts">
    import { page } from "$app/state";
</script>

<main class="w-full py-8">
    <h1 class="text-5xl font-semibold">{page.status}</h1>

    <p class="mt-4 text-base leading-6 text-neutral-600">
        {page.status === 404
            ? "This page doesn't exist."
            : "Something went wrong."}
        (<a
            href="/"
            aria-label="Go to homepage"
            class="rounded-sm text-blue-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            >click!</a
        >)
    </p>
</main>
