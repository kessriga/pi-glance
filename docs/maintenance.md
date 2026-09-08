# Maintenance

## Repository boundary

`kessriga/pi-glance` is a standalone repository initialized from the existing Glance-only Git history. It has no
`packages/` or `providers/` workspace and needs no subtree export. The old `kessriga/pi-extensions` repository is not a
runtime or build dependency. Upstream changes are reviewed and ported manually; see `UPSTREAM_SOURCE.md` for lineage.

Production TypeScript files live at the root. `index.ts` is the only Pi entrypoint. `scripts/` holds tests and
development commands; `.tmp-git-dev/` is generated test output. The package remains Git-only and is marked private to
prevent accidental npm publication.

## Development

Use the pnpm version declared in `package.json`:

```sh
pnpm install --frozen-lockfile --ignore-scripts
pnpm check
pnpm pack --dry-run
```

If pnpm is not installed, prefix each command with `npm exec --yes --package=pnpm@11.11.0 --`. CI runs the same checks
on Node 24. Runtime support remains the Pi and Node versions declared in the package manifest. No dependency lifecycle
scripts are required for these checks.

`pnpm check` typechecks the extension, compiles tests, and runs every test script. Focused `test:*` commands remain
available, but do not replace the full gate. UI changes also need a Pi terminal check with an isolated agent directory;
do not use a smoke test to overwrite live settings or request a real subscription snapshot.

## Dotfiles installation

Install reviewed commits from this repository directly. There is no distribution branch to regenerate. From a Dotfiles
task worktree:

```sh
mise run add-pi "git:github.com/kessriga/pi-glance@<commit>"
```

When moving from another Glance source, install the replacement first and remove the old source with
`mise run remove-pi <old-source>` before reloading Pi. Review the recorded package-list diff and land it through a PR.
Keep `@narumitw/pi-usage` separate and retain the existing Glance settings path so border, height, theme, and stash
preferences carry over. Live configuration symlinks must continue to point to the main Dotfiles checkout.

After merging, pull `main`, deploy the affected Dotfiles packages, run `mise run verify`, and reload Pi. Do not archive
or delete the old repository without the owner's approval.
