<script lang="ts">
    type FlowType = "transfer" | "deposit";

    interface ArchitectureNode {
        id: string;
        label: string;
        sublabel: string;
        tech: string;
        security: string;
        description: string;
    }

    let activeFlow = $state<FlowType>("transfer");
    let selectedNodeId = $state<string>("api");

    const transferNodes: ArchitectureNode[] = [
        {
            id: "bot",
            label: "Discord Bot",
            sublabel: "Interface Layer",
            tech: "Discord.js / Node.js",
            security:
                "Ephemeral responses, zero private key access, user permission checks",
            description:
                "Receives slash commands (/tip, /balance) and interaction clicks. Formats the request, generates an idempotency key, and forwards payload to the Fastify API.",
        },
        {
            id: "api",
            label: "Fastify API",
            sublabel: "Core Gateway",
            tech: "Fastify / TypeScript",
            security:
                "HMAC-SHA256 request verification, timestamp drift check, rate limiting",
            description:
                "Validates signatures and authorization headers. Enforces idempotency via unique request tokens before passing execution to the ledger engine.",
        },
        {
            id: "ledger",
            label: "Double-Entry Ledger",
            sublabel: "Accounting Core",
            tech: "DrizzleORM / Pure Logic",
            security:
                "Double-entry invariant (Debits = Credits), negative balance prevention",
            description:
                "Constructs balanced journal entries for every transfer. Ensures funds are neither created nor destroyed, maintaining a strict internal audit trail.",
        },
        {
            id: "db",
            label: "PostgreSQL",
            sublabel: "Persistence Layer",
            tech: "PostgreSQL 16",
            security:
                "Atomic ACID transactions, SELECT ... FOR UPDATE row locks, unique constraints",
            description:
                "Executes the transfer in an atomic transaction. Locks sender and receiver rows to prevent race conditions and concurrent double-spend attempts.",
        },
    ];

    const depositNodes: ArchitectureNode[] = [
        {
            id: "blockchain",
            label: "TON Blockchain",
            sublabel: "Decentralized Network",
            tech: "TON / Gram Jetton",
            security:
                "Decentralized consensus, irreversible cryptographic block finality",
            description:
                "Users broadcast on-chain transfers of TON or Gram to Bliq's custodial deposit address with a unique memo assigned to their Discord account.",
        },
        {
            id: "watcher",
            label: "Deposit Watcher",
            sublabel: "Chain Ingestion",
            tech: "TON RPC / Indexer Worker",
            security:
                "Block confirmation threshold, payload parsing validation, replay defense",
            description:
                "Continuously polls TON RPC nodes for incoming transactions. Parses incoming comment memos to identify the recipient Discord user.",
        },
        {
            id: "api",
            label: "Fastify API",
            sublabel: "Core Gateway",
            tech: "Fastify / TypeScript",
            security:
                "Internal mTLS/bearer auth, double-credit verification against existing tx_hash",
            description:
                "Receives verified transaction notifications from the watcher. Confirms block depth and initiates balance crediting through the ledger.",
        },
        {
            id: "db",
            label: "PostgreSQL",
            sublabel: "Persistence Layer",
            tech: "PostgreSQL 16",
            security:
                "Unique (tx_hash, lt) index constraint, single-credit state machine",
            description:
                "Records the deposit record and credits the user balance in one atomic transaction. The unique constraint makes duplicate crediting mathematically impossible.",
        },
    ];

    let currentNodes = $derived(
        activeFlow === "transfer" ? transferNodes : depositNodes,
    );

    let activeNode = $derived(
        currentNodes.find((n) => n.id === selectedNodeId) || currentNodes[0],
    );

    function selectFlow(flow: FlowType) {
        activeFlow = flow;
        selectedNodeId = flow === "transfer" ? "api" : "watcher";
    }
</script>

<svelte:head>
    <title>Bliq — Architecture &amp; Security</title>
</svelte:head>

<main class="flex w-full min-w-0 flex-col gap-10 py-4 sm:py-0">
    <div>
        <a
            href="/projects"
            class="inline-flex items-center gap-1.5 rounded-sm text-sm text-neutral-600 dark:text-neutral-400 transition-colors duration-200 hover:text-blue-500 dark:hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:focus-visible:outline-blue-400 motion-reduce:transition-none"
        >
            ← Back to projects
        </a>
    </div>

    <header class="flex flex-col gap-3">
        <div class="flex flex-wrap items-baseline justify-between gap-3">
            <div class="flex flex-wrap items-baseline gap-3">
                <h1
                    class="w-fit bg-linear-to-r from-[#7c3aed] to-[#2563eb] dark:from-[#a78bfa] dark:to-[#60a5fa] bg-clip-text text-3xl sm:text-4xl font-normal text-transparent"
                >
                    Bliq
                </h1>
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-xs text-neutral-500 dark:text-neutral-400 no-underline transition-colors duration-200 hover:text-blue-500 dark:hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:focus-visible:outline-blue-400 motion-reduce:transition-none"
                >
                    GitHub ↗
                </a>
            </div>
            <span
                class="text-xs font-normal text-amber-600 dark:text-amber-400"
            >
                In development
            </span>
        </div>
        <p
            class="max-w-3xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400"
        >
            A custodial cryptocurrency wallet operating natively inside Discord
            for the TON ecosystem and Gram token. Built with an asynchronous,
            double-entry ledger backend to handle real-time community
            microtransactions, off-chain tipping, and automated on-chain deposit
            tracking.
        </p>
    </header>

    <section class="flex flex-col gap-3">
        <h2
            class="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400"
        >
            Implementation Scope
        </h2>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div
                class="flex flex-col gap-3 rounded-md border border-neutral-200 dark:border-neutral-800 p-5"
            >
                <div class="flex items-center gap-2">
                    <span
                        class="size-2 rounded-full bg-emerald-500"
                        aria-hidden="true"
                    ></span>
                    <h3
                        class="text-sm font-medium text-neutral-900 dark:text-neutral-100"
                    >
                        Implemented &amp; Operating
                    </h3>
                </div>
                <ul
                    class="flex flex-col gap-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400"
                >
                    <li class="flex items-start gap-2">
                        <span class="text-neutral-400">―</span>
                        <span
                            ><strong
                                class="font-medium text-neutral-900 dark:text-neutral-200"
                                >Discord Slash Commands:</strong
                            >
                            Native tipping, off-chain user transfers, and live balance
                            inquiries inside Discord servers.</span
                        >
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="text-neutral-400">―</span>
                        <span
                            ><strong
                                class="font-medium text-neutral-900 dark:text-neutral-200"
                                >Off-Chain Ledger:</strong
                            >
                            Immutable double-entry book keeping. Atomic commits with
                            zero rounding drifts and instant execution.</span
                        >
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="text-neutral-400">―</span>
                        <span
                            ><strong
                                class="font-medium text-neutral-900 dark:text-neutral-200"
                                >TON &amp; Gram Deposits:</strong
                            >
                            Automated deposit ingestion via continuous RPC polling
                            with dedicated user memo routing.</span
                        >
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="text-neutral-400">―</span>
                        <span
                            ><strong
                                class="font-medium text-neutral-900 dark:text-neutral-200"
                                >HMAC Secured API:</strong
                            >
                            Decoupled architecture. Discord bot worker and private
                            ledger API authenticate via signed payloads.</span
                        >
                    </li>
                </ul>
            </div>

            <div
                class="flex flex-col gap-3 rounded-md border border-neutral-200 dark:border-neutral-800 p-5"
            >
                <div class="flex items-center gap-2">
                    <span
                        class="size-2 rounded-full bg-amber-500"
                        aria-hidden="true"
                    ></span>
                    <h3
                        class="text-sm font-medium text-neutral-900 dark:text-neutral-100"
                    >
                        Planned &amp; Roadmap
                    </h3>
                </div>
                <ul
                    class="flex flex-col gap-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400"
                >
                    <li class="flex items-start gap-2">
                        <span class="text-neutral-400">―</span>
                        <span
                            ><strong
                                class="font-medium text-neutral-900 dark:text-neutral-200"
                                >On-Chain Withdrawals:</strong
                            >
                            Automated hot-wallet payout pipeline with batching, gas
                            estimation, and manual review triggers.</span
                        >
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="text-neutral-400">―</span>
                        <span
                            ><strong
                                class="font-medium text-neutral-900 dark:text-neutral-200"
                                >Web Dashboard:</strong
                            >
                            Standalone SvelteKit dashboard with Discord OAuth2 for
                            transaction histories and exportable CSV statements.</span
                        >
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="text-neutral-400">―</span>
                        <span
                            ><strong
                                class="font-medium text-neutral-900 dark:text-neutral-200"
                                >Jetton Swaps:</strong
                            >
                            Direct DeDust / STON.fi DEX integration for in-chat token
                            swapping without leaving Discord.</span
                        >
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="text-neutral-400">―</span>
                        <span
                            ><strong
                                class="font-medium text-neutral-900 dark:text-neutral-200"
                                >Hardware Multisig Payouts:</strong
                            >
                            Cold-storage reserve rebalancing via TonConnect multisignature
                            approvals.</span
                        >
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section class="flex flex-col gap-5">
        <div
            class="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between"
        >
            <div>
                <h2
                    class="text-xl font-normal text-neutral-900 dark:text-neutral-100"
                >
                    Architecture &amp; Security
                </h2>
                <p class="text-sm text-neutral-600 dark:text-neutral-400">
                    Click any node in the pipeline to inspect data flow and
                    security guarantees.
                </p>
            </div>

            <div
                class="grid grid-cols-2 w-full sm:w-auto rounded-md border border-neutral-200 dark:border-neutral-800 p-0.5 text-xs"
            >
                <button
                    type="button"
                    class={`cursor-pointer rounded px-3 py-1.5 sm:py-1 text-center transition-colors duration-150 ${
                        activeFlow === "transfer"
                            ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-medium"
                            : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                    }`}
                    onclick={() => selectFlow("transfer")}
                >
                    Internal Transfer Flow
                </button>
                <button
                    type="button"
                    class={`cursor-pointer rounded px-3 py-1.5 sm:py-1 text-center transition-colors duration-150 ${
                        activeFlow === "deposit"
                            ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-medium"
                            : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                    }`}
                    onclick={() => selectFlow("deposit")}
                >
                    TON Deposit Flow
                </button>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-2 sm:grid-cols-4">
            {#each currentNodes as node, index}
                <div class="flex flex-col items-center sm:flex-row">
                    <button
                        type="button"
                        class={`w-full text-left cursor-pointer rounded-md border p-4 transition-colors duration-150 ${
                            selectedNodeId === node.id
                                ? "border-blue-500 dark:border-blue-500"
                                : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700"
                        }`}
                        onclick={() => (selectedNodeId = node.id)}
                    >
                        <span
                            class="font-mono text-xs text-neutral-400 dark:text-neutral-500"
                        >
                            0{index + 1}
                        </span>
                        <h3
                            class="mt-1 text-sm font-medium text-neutral-900 dark:text-neutral-100"
                        >
                            {node.label}
                        </h3>
                        <p
                            class="text-xs text-neutral-500 dark:text-neutral-400"
                        >
                            {node.sublabel}
                        </p>
                    </button>

                    {#if index < currentNodes.length - 1}
                        <span
                            class="my-1 text-neutral-400 dark:text-neutral-600 sm:my-0 sm:mx-1.5 rotate-90 sm:rotate-0"
                            aria-hidden="true"
                        >
                            →
                        </span>
                    {/if}
                </div>
            {/each}
        </div>

        {#if activeNode}
            <div
                class="flex flex-col gap-3 rounded-md border border-neutral-200 dark:border-neutral-800 p-5"
            >
                <div
                    class="flex flex-wrap items-baseline justify-between gap-2 border-b border-neutral-100 dark:border-neutral-800/80 pb-3"
                >
                    <div class="flex items-center gap-2">
                        <span
                            class="font-mono text-xs text-blue-600 dark:text-blue-400"
                        >
                            NODE
                        </span>
                        <span class="text-neutral-300 dark:text-neutral-700"
                            >/</span
                        >
                        <h4
                            class="text-sm font-semibold text-neutral-900 dark:text-neutral-100"
                        >
                            {activeNode.label}
                        </h4>
                    </div>
                    <span
                        class="rounded bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 font-mono text-[11px] text-neutral-600 dark:text-neutral-400"
                    >
                        {activeNode.tech}
                    </span>
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-1">
                    <div>
                        <span
                            class="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500"
                        >
                            Function &amp; Role
                        </span>
                        <p
                            class="mt-1 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400"
                        >
                            {activeNode.description}
                        </p>
                    </div>
                    <div>
                        <span
                            class="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400"
                        >
                            Security Boundary
                        </span>
                        <p
                            class="mt-1 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400"
                        >
                            {activeNode.security}
                        </p>
                    </div>
                </div>
            </div>
        {/if}
    </section>

    <section class="flex flex-col gap-4">
        <div>
            <h2
                class="text-xl font-normal text-neutral-900 dark:text-neutral-100"
            >
                Core Security Mechanisms
            </h2>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
                Foundational safeguards protecting balances and state
                transitions against theft, replays, and race conditions.
            </p>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div
                class="flex flex-col gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 p-4"
            >
                <span
                    class="font-mono text-xs text-neutral-400 dark:text-neutral-500"
                >
                    01 / AUTHENTICATION
                </span>
                <h3
                    class="text-sm font-medium text-neutral-900 dark:text-neutral-100"
                >
                    HMAC-SHA256 Signatures
                </h3>
                <p
                    class="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400"
                >
                    Inter-service traffic between the bot worker and Fastify API
                    is signed with timestamped HMAC payloads, discarding
                    replayed or tampered commands.
                </p>
            </div>

            <div
                class="flex flex-col gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 p-4"
            >
                <span
                    class="font-mono text-xs text-neutral-400 dark:text-neutral-500"
                >
                    02 / AUTHORIZATION
                </span>
                <h3
                    class="text-sm font-medium text-neutral-900 dark:text-neutral-100"
                >
                    Scoped API Boundaries
                </h3>
                <p
                    class="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400"
                >
                    The core ledger API rejects external public traffic. Only
                    authenticated internal workers with explicitly scoped
                    credentials can initiate transfer jobs.
                </p>
            </div>

            <div
                class="flex flex-col gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 p-4"
            >
                <span
                    class="font-mono text-xs text-neutral-400 dark:text-neutral-500"
                >
                    03 / CONSISTENCY
                </span>
                <h3
                    class="text-sm font-medium text-neutral-900 dark:text-neutral-100"
                >
                    Atomic Ledger Transactions
                </h3>
                <p
                    class="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400"
                >
                    Transfers use database-level atomic blocks (<code
                        class="rounded bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 font-mono text-[11px]"
                        >SELECT ... FOR UPDATE</code
                    >) preventing concurrency anomalies and partial state
                    commits.
                </p>
            </div>

            <div
                class="flex flex-col gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 p-4"
            >
                <span
                    class="font-mono text-xs text-neutral-400 dark:text-neutral-500"
                >
                    04 / RELIABILITY
                </span>
                <h3
                    class="text-sm font-medium text-neutral-900 dark:text-neutral-100"
                >
                    Strict Idempotency Keys
                </h3>
                <p
                    class="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400"
                >
                    Every mutation carries a deterministic idempotency key.
                    Network dropouts or Discord button spam never result in
                    duplicate debit/credit actions.
                </p>
            </div>

            <div
                class="flex flex-col gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 p-4"
            >
                <span
                    class="font-mono text-xs text-neutral-400 dark:text-neutral-500"
                >
                    05 / ISOLATION
                </span>
                <h3
                    class="text-sm font-medium text-neutral-900 dark:text-neutral-100"
                >
                    Secret &amp; Key Isolation
                </h3>
                <p
                    class="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400"
                >
                    The Discord bot process has zero database credentials or
                    on-chain keys. Hot-wallet seeds and sensitive signing
                    infrastructure remain strictly air-gapped from the
                    front-facing bot.
                </p>
            </div>

            <div
                class="flex flex-col gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 p-4"
            >
                <span
                    class="font-mono text-xs text-neutral-400 dark:text-neutral-500"
                >
                    06 / REPLAY DEFENSE
                </span>
                <h3
                    class="text-sm font-medium text-neutral-900 dark:text-neutral-100"
                >
                    Double-Credit Protection
                </h3>
                <p
                    class="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400"
                >
                    TON on-chain deposits are guarded by unique constraints on <code
                        class="rounded bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 font-mono text-[11px]"
                        >tx_hash</code
                    >
                    and logical time (<code
                        class="rounded bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 font-mono text-[11px]"
                        >lt</code
                    >), making duplicate crediting impossible.
                </p>
            </div>
        </div>
    </section>

    <section class="flex flex-col gap-3">
        <h2 class="text-xl font-normal text-neutral-900 dark:text-neutral-100">
            Tech Stack
        </h2>
        <div class="flex flex-wrap gap-2 text-xs">
            {#each ["TypeScript", "SvelteKit", "Fastify", "DrizzleORM", "PostgreSQL", "Docker", "Discord.js", "TON Blockchain", "Gram Token"] as tech}
                <span
                    class="rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/60 px-3 py-1.5 text-neutral-700 dark:text-neutral-300"
                >
                    {tech}
                </span>
            {/each}
        </div>
    </section>
</main>
