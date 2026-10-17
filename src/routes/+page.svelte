<script lang="ts">
    import image from "#lib/assets/img.png";

    let imageFailed = $state(false);
</script>

<main class="flex w-full min-w-0 items-center py-4 sm:py-0">
    <div class="w-full min-w-0">
        <div
            class="group relative isolate block aspect-`166/27` w-full max-w-166 rounded-sm"
        >
            <span
                aria-hidden="true"
                class="pointer-events-none absolute inset-x-2 -inset-y-4 -z-10 rounded-full bg-linear-to-r from-[#A12EF4]/35 via-[#FF5E61]/30 to-[#FF9509]/35 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-60 motion-reduce:transition-none"
            ></span>
            {#if !imageFailed}
                <img
                    src={image}
                    alt="luxora"
                    width="664"
                    height="108"
                    decoding="async"
                    fetchpriority="high"
                    class="h-full w-full object-contain transition-[opacity,transform,filter] duration-300 ease-out group-hover:filter-[drop-shadow(-6px_0_24px_rgba(161,46,244,0.12))_drop-shadow(0_0_28px_rgba(255,94,97,0.1))_drop-shadow(6px_0_24px_rgba(255,149,9,0.1))] motion-reduce:transform-none motion-reduce:transition-none"
                    onerror={() => (imageFailed = true)}
                />
            {:else}
                <h2
                    class="w-fit bg-linear-to-r from-[#A12EF4] via-[#FF5E61] to-[#FF9509] bg-clip-text text-6xl leading-none font-normal text-transparent sm:text-8xl"
                >
                    luxora
                </h2>
            {/if}
        </div>
        <div
            class="mt-8 grid grid-cols-1 gap-8 min-[400px]:grid-cols-2 sm:flex sm:flex-wrap sm:gap-x-16"
        >
            <div class="flex flex-col">
                <h2
                    class="w-fit bg-linear-to-r from-[#8b21d4] to-[#c92d59] bg-clip-text text-[1.375rem] leading-7 font-normal text-transparent"
                >
                    Contact me
                </h2>
                <div class="mt-2 flex flex-col gap-2 text-base leading-6">
                    <a
                        href="https://t.me/lux0ra"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="w-fit rounded-sm no-underline transition-colors duration-200 hover:text-blue-500 focus-visible:text-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 motion-reduce:transition-none"
                        >Telegram</a
                    >
                    <a
                        href="https://discord.com/users/648181203257655296"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Discord: @lux0ra"
                        class="w-fit rounded-sm no-underline transition-colors duration-200 hover:text-blue-500 focus-visible:text-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 motion-reduce:transition-none"
                        >Discord (@lux0ra)</a
                    >
                </div>
            </div>
            <div class="flex flex-col">
                <h2
                    class="w-fit bg-linear-to-r from-[#b85b00] to-[#c91e40] bg-clip-text text-[1.375rem] leading-7 font-normal text-transparent"
                >
                    Donate
                </h2>
                <div class="mt-2 flex flex-col gap-2 text-base leading-6">
                    <a
                        href="https://t.me/send?start=IVjqHxTD19N1"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="w-fit rounded-sm no-underline transition-colors duration-200 hover:text-blue-500 focus-visible:text-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 motion-reduce:transition-none"
                        >@CryptoBot</a
                    >
                </div>
            </div>
        </div>
    </div>
</main>
