import { SITE } from '../lib/site'

export const FREEDOM_LIST_SYNC_CASE_STUDY = {
  kind: 'public' as const,
  name: 'Freedom List Sync',
  plainEnglish:
    'A CLI that pulls large domain blocklists from the web (or a local file) and keeps them in sync with Freedom, the distraction-blocker. It diffs what is missing, shards oversized lists, and writes in batches so you are not stuck adding sites fifty at a time.',
  tagline:
    'TypeScript CLI with Playwright browser login, hosts/CSV/JSON parsers, additive sync, sharding, checkpoints, and CSRF-aware Freedom API writes.',
  tags: ['TypeScript', 'CLI', 'Playwright', 'Node.js', 'Vitest'],
  listDescription:
    'CLI for synchronizing large remote domain blocklists into Freedom. It handles strict parsing, sharding, dry-run diffs, and batched CSRF-aware writes.',
  repo: SITE.freedomListSyncRepo,
  role: {
    title: 'Solo build',
    context: 'Portfolio project',
    status: 'Public on GitHub',
  },
  summary: [
    'Freedom List Sync is a Node CLI for people who already use Freedom and want community or custom blocklists without hand-editing filter lists. Point it at a hosts file, plain domain list, CSV, or simple JSON source, name a Freedom list, and it inspects, diffs, and syncs.',
    'Auth never stores a Freedom password. login opens Chromium, you complete MFA in a real browser, and the tool saves a local Playwright session for later inspect, diff, and sync runs.',
  ],
  problem: [
    'Freedom is great for blocking distractions, but its bulk-add path tops out at fifty sites and large custom lists quickly become painful to maintain by hand.',
    'I wanted a small tool that treats blocklist sync like any other integration: strict source parsing, preview before write, resumable batches, and credentials that stay out of config files.',
  ],
  architectureIntro:
    'The CLI owns the workflow. Source parsers normalize domains. The Freedom client reads lists and writes through the same CSRF-protected filter-list API the product uses in the browser.',
  architecture: [
    {
      label: 'Sources:',
      body: 'Hosts, plain domains, CSV, and simple JSON behind a SourceParser interface. Unknown or ambiguous shapes fail instead of being guessed.',
    },
    {
      label: 'Auth:',
      body: 'Playwright login saves storageState locally. Session probes distinguish authenticated, expired, unavailable, and invalid without treating list-API 500s as logout.',
    },
    {
      label: 'Sync:',
      body: 'Diff missing domains, shard across Base / Base 2 / Base 3 when needed, create missing shards, and PATCH adds in paced batches with checkpoint resume.',
    },
    {
      label: 'Safety:',
      body: 'Additive-only writes, dry-run mode, size caps on source bodies and domain counts, and timeout recovery that re-reads Freedom before resending.',
    },
  ],
  constraints: [
    {
      constraint: 'No passwords in config or env',
      response: 'Browser login + local Playwright session file only',
    },
    {
      constraint: 'Do not invent formats',
      response: 'Strict parsers for hosts, domains, CSV, and simple JSON; everything else fails',
    },
    {
      constraint: 'Freedom list size limits',
      response: 'Shard large sources across numbered lists and create missing shards on sync',
    },
    {
      constraint: 'Unreliable bulk writes',
      response: 'Batched PATCH with CSRF, adaptive pacing, and re-read after timeouts',
    },
    {
      constraint: 'Preview before damage',
      response: 'inspect, diff, and --dry-run before live sync',
    },
  ],
  decisions: [
    {
      title: 'Browser session instead of API keys',
      body: 'Freedom does not expose a first-class sync API key. Login through Chromium matches how humans authenticate, keeps MFA intact, and avoids putting credentials in .env files.',
    },
    {
      title: 'Fail closed on source shape',
      body: 'Adblock filters, Excel, and odd JSON are out of scope. Guessing formats silently would corrupt blocklists. Parsers care about content shape, not file extensions.',
    },
    {
      title: 'Additive sync first',
      body: 'Mirror and removal sync are harder and riskier against a live blocker. v0.1 adds missing domains only, with checkpoints so long runs can resume.',
    },
    {
      title: 'Separate session probe from list health',
      body: '/filter_lists/ can 500 when a list is oversized even though the account is still signed in. Auth status uses a lighter probe so users get the right recovery path.',
    },
  ],
  quality: [
    'npm run check: Vitest, ESLint, TypeScript, Prettier, and build',
    'Unit coverage for parsers, diff/batch, shards, auth status, HTTP writer, and timeout recovery',
    'Dry-run path for every sync before live writes',
    'README with auth model, source formats, and write API notes from live probes',
  ],
  ownership: [
    'CLI design: login, auth status, inspect, diff, sync',
    'Source parsers and domain normalization',
    'Freedom client: CSRF reads/writes, list create, sharding, checkpoints',
    'Playwright session login without stored passwords',
    'Tests, CI-ready check script, and documentation',
  ],
} as const
