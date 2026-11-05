<script lang="ts">
    import Link from "#lib/components/Link.svelte";
    import ConfettiBurst from "./ConfettiBurst.svelte";

    let { class: className = "" }: { class?: string } = $props();
    let confetti = $state<ReturnType<typeof ConfettiBurst> | undefined>();

    function celebrate(event: MouseEvent) {
        const target = event.currentTarget as HTMLButtonElement;
        target.focus({ preventScroll: true });
        const bounds = target.getBoundingClientRect();
        confetti?.burst(
            event.detail ? event.clientX : bounds.left + bounds.width / 2,
            event.detail ? event.clientY : bounds.top + bounds.height / 2,
        );
    }
</script>

<footer
    class={`w-full border-t border-neutral-300 pt-4 dark:border-neutral-800 ${className}`}
>
    <div
        class="flex flex-col items-start gap-3 text-[14px] sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6"
    >
        <p>
            <Link href="/license"
                >&copy; 2026 luxora &middot; Designed with &hearts;&#xfe0f; by
                me!</Link
            >
        </p>
        <button
            type="button"
            aria-label="Available for work — celebrate with confetti"
            class="flex cursor-pointer items-center gap-2 rounded-sm text-neutral-500 focus-ring transition-colors duration-200 hover:text-blue-500 motion-reduce:transition-none dark:text-neutral-400 dark:hover:text-blue-400"
            onclick={celebrate}
        >
            Available for work
        </button>
    </div>
</footer>

<ConfettiBurst bind:this={confetti} />
