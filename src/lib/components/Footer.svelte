<script lang="ts">
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

<footer class={`w-full border-t border-neutral-300 pt-4 ${className}`}>
    <div
        class="flex flex-col items-start gap-3 text-[14px] sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6"
    >
        <p>Designed &amp; developed with ❤️ by me!</p>
        <button
            type="button"
            aria-label="Available for work — celebrate with confetti"
            class="flex cursor-pointer items-center gap-2 rounded-sm text-neutral-500 transition-colors duration-200 hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 motion-reduce:transition-none"
            onclick={celebrate}
        >
            <span
                class="size-2 shrink-0 rounded-full bg-emerald-500"
                aria-hidden="true"
            ></span>
            Available for work
        </button>
    </div>
</footer>

<ConfettiBurst bind:this={confetti} />
