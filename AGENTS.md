# Working on pi-glance

This is a standalone, personally maintained Pi input-surface extension. It contains only Glance, not the `pi-extensions`
bundle. Read `README.md` for current behavior, `UPSTREAM_SOURCE.md` for provenance, and
[maintenance](docs/maintenance.md) for development and installation.

## Scope and workflow

- You may make small UI fixes, tests, and matching documentation changes without asking. Ask before adding other
  extensions, subscription clients, runtime dependencies, npm publishing, or destructive history changes.
- Work on a branch cut from `main` and land changes through a PR. Do not force-push or delete published branches.
- Put task worktrees under the main checkout's `.worktrees/`. Git and Memtrace exclude that directory.
- Keep runtime state, credentials, package caches, generated tests, and local databases out of Git.
- This package is Git-installed and marked private to prevent accidental npm publication. No release automation is
  inherited from the old monorepo.

## Implementation

- Use Pi's public extension and TUI APIs. Do not patch Pi internals or install a second footer owner.
- Keep rendering free of filesystem, network, and process work. Preserve unknown and already-colored extension statuses.
- `@narumitw/pi-usage` supplies Codex quota data. Glance only renders its status; it does not read account credentials.
- Keep the live editor and settings preview on the same frame-rendering path. Preserve draft text and cursor placement.
- Preserve saved configuration during migrations, including the version-15 Follow Pi color default.
- Keep tests under `scripts/` with the component they cover. Run the full `pnpm check` before claiming completion.

## Documentation

- Keep the English and Simplified Chinese READMEs aligned. They describe current behavior and usage.
- Put maintenance decisions in `docs/`, not comments or the user-facing README.
- Preserve `LICENSE`, `UPSTREAM_LICENSE`, `UPSTREAM_README.md`, and the provenance record.
- Format only changed Markdown files with the global 120-column rumdl settings; preserve intentional HTML and examples.
