<script lang="ts">
    import Link from "#lib/components/Link.svelte";

    let { class: className = "" }: { class?: string } = $props();
</script>

<header class={className}>
    <nav class="flex w-full flex-wrap items-center justify-between gap-4">
        <div class="text-[1.0625rem] leading-normal font-normal">
            <Link href="/" class="no-underline">luxora</Link>
        </div>
        <Link
            variant="muted"
            href="mailto:germiskiw@gmail.com"
            class="min-w-0 text-sm leading-5 font-normal break-all no-underline"
        >
            germiskiw@gmail.com
        </Link>
    </nav>
</header>
