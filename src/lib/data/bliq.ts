export interface ArchitectureNode {
    id: string;
    label: string;
    sublabel: string;
    tech: string;
    security: string;
    description: string;
}

export const transferNodes: ArchitectureNode[] = [
    {
        id: "bot",
        label: "Discord Bot",
        sublabel: "Interface Layer",
        tech: "Discord.js / Node.js",
        security:
            "Ephemeral responses, zero private key access, user permission checks",
        description:
            "Receives slash commands (/profile, /withdraw) and interaction clicks. Formats the request, generates an idempotency key, and forwards payload to the Fastify API.",
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

export const depositNodes: ArchitectureNode[] = [
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

export const technologies = [
    "TypeScript",
    "SvelteKit",
    "Fastify",
    "DrizzleORM",
    "PostgreSQL",
    "Docker",
    "Discord.js",
    "TON Blockchain",
    "Gram Token",
];
