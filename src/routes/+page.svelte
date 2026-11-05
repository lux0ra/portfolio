<script lang="ts">
    import PageMeta from "#lib/components/PageMeta.svelte";
    import Link from "#lib/components/Link.svelte";
    import image from "#lib/assets/img-white.svg";
    import imageDark from "#lib/assets/img-black.svg";
</script>

<PageMeta
    title="luxora — Portfolio"
    description="luxora's portfolio: projects, experiments, and ways to get in touch."
/>

<main class="flex w-full min-w-0 items-center py-4 sm:py-0">
    <div class="w-full min-w-0">
        <h1
            class="group relative isolate block aspect-166/27 w-full max-w-166 rounded-sm dark:aspect-665/121"
        >
            <span
                aria-hidden="true"
                class="pointer-events-none absolute inset-x-2 -inset-y-4 -z-10 rounded-full bg-linear-to-r from-[#A12EF4]/35 via-[#FF5E61]/30 to-[#FF9509]/35 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-60 motion-reduce:transition-none"
            ></span>
            <picture class="block h-full w-full">
                <source
                    srcset={imageDark}
                    media="(prefers-color-scheme: dark)"
                />
                <img
                    src={image}
                    alt="luxora"
                    width="664"
                    height="108"
                    decoding="async"
                    fetchpriority="high"
                    class="h-full w-full object-contain transition-[opacity,transform,filter] duration-300 ease-out group-hover:filter-[drop-shadow(-6px_0_24px_rgba(161,46,244,0.12))_drop-shadow(0_0_28px_rgba(255,94,97,0.1))_drop-shadow(6px_0_24px_rgba(255,149,9,0.1))] motion-reduce:transform-none motion-reduce:transition-none"
                />
            </picture>
        </h1>
        <div
            class="mt-8 grid grid-cols-1 gap-8 min-[400px]:grid-cols-2 sm:flex sm:flex-wrap sm:gap-x-16"
        >
            <div class="flex flex-col">
                <h2
                    class="w-fit bg-linear-to-r from-[#8b21d4] to-[#c92d59] bg-clip-text text-[1.375rem] leading-7 font-normal text-transparent dark:from-[#b357f7] dark:to-[#ff5e82]"
                >
                    Links
                </h2>
                <div class="mt-2 flex flex-col gap-2 text-base leading-6">
                    <Link
                        href="https://discord.com/users/648181203257655296"
                        title="Discord: @lux0ra"
                        class="w-fit focus-visible:text-blue-500 dark:focus-visible:text-blue-400"
                        >Discord (@lux0ra)</Link
                    >
                    <Link
                        href="https://t.me/lux0ra"
                        class="w-fit focus-visible:text-blue-500 dark:focus-visible:text-blue-400"
                        >Telegram</Link
                    >
                    <Link
                        href="https://github.com/lux0ra"
                        class="w-fit focus-visible:text-blue-500 dark:focus-visible:text-blue-400"
                        >Github</Link
                    >
                </div>
            </div>
            <div class="flex flex-col">
                <h2
                    class="w-fit bg-linear-to-r from-[#7c3aed] to-[#2563eb] bg-clip-text text-[1.375rem] leading-7 font-normal text-transparent dark:from-[#a78bfa] dark:to-[#60a5fa]"
                >
                    About me
                </h2>
                <div class="mt-2 flex flex-col gap-2 text-base leading-6">
                    <Link
                        href="/projects"
                        class="w-fit focus-visible:text-blue-500 dark:focus-visible:text-blue-400"
                        >Projects</Link
                    >
                </div>
            </div>
            <div class="flex flex-col">
                <h2
                    class="w-fit bg-linear-to-r from-[#b85b00] to-[#c91e40] bg-clip-text text-[1.375rem] leading-7 font-normal text-transparent dark:from-[#fb923c] dark:to-[#ff5e82]"
                >
                    Donate
                </h2>
                <div class="mt-2 flex flex-col gap-2 text-base leading-6">
                    <Link
                        href="https://t.me/send?start=IVjqHxTD19N1"
                        class="w-fit focus-visible:text-blue-500 dark:focus-visible:text-blue-400"
                        >@CryptoBot</Link
                    >
                </div>
            </div>
        </div>
    </div>
</main>
