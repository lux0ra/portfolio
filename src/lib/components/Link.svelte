<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLAnchorAttributes } from "svelte/elements";
    type Props = Omit<HTMLAnchorAttributes, "children"> & {
        variant?: "default" | "muted" | "accent";
        children: Snippet;
    };
    let {
        href,
        variant = "default",
        class: className = "",
        children,
        ...rest
    }: Props = $props();
    const variants = {
        default: "hover:text-blue-500 dark:hover:text-blue-400",
        muted: "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100",
        accent: "text-blue-600 dark:text-blue-400",
    };
    let external = $derived(/^https?:\/\//i.test(href ?? ""));
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
    {...rest}
    {href}
    target={external ? "_blank" : rest.target}
    rel={external ? "noopener noreferrer" : rest.rel}
    class={`rounded-sm focus-ring transition-colors duration-200 motion-reduce:transition-none ${variants[variant]} ${className}`}
>
    {@render children()}
</a>

<!-- eslint-enable svelte/no-navigation-without-resolve -->
