<script lang="ts">
    let { class: className = "" }: { class?: string } = $props();
</script>

<header class={className}>
    <nav class="flex w-full flex-wrap items-center justify-between gap-4">
        <h1 class="text-[1.0625rem] leading-5.5 font-normal">
            <a
                href="https://www.youtube.com/watch?v=ALIzKOQLolk"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-sm no-underline transition-colors duration-200 hover:text-blue-500 dark:hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:focus-visible:outline-blue-400"
                >luxora</a
            >
        </h1>
        <a
            href="mailto:germiskiw@gmail.com"
            class="min-w-0 break-all text-sm leading-5 font-normal no-underline text-neutral-600 dark:text-[#8B949E] transition-colors duration-200 hover:text-neutral-900 dark:hover:text-[#F0F6FC] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:focus-visible:outline-blue-400"
        >
            germiskiw@gmail.com
        </a>
    </nav>
</header>
