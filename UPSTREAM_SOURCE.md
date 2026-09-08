# Upstream source

## Standalone repository

`kessriga/pi-glance` is a standalone, personally maintained repository. Its initial history is the 23 Glance-only
commits ending at `b641ccfb54c3c28960284dec52b97eda714ff78d`, exported from `kessriga/pi-extensions`. That tree matches
`packages/pi-glance` in the approved source merge `145d74f8d8b74efaf2c83aab9f844e94c33b8624`.

The export retains the Glance code and tests from `zhcsyncer/pi-extensions` plus the personal footer and editor-layout
changes. It does not import the monorepo's unrelated extensions or rewrite the Glance commit IDs. The original MIT
licenses and attribution remain unchanged.

## Original upstream

This package was forked from `pi-glance` 0.5.3.

- Repository: https://github.com/LinYS77/pi-glance
- Tag: `v0.5.3`
- Commit: `c342ebebfac20db5059c5017d5a6dc0052b5174c`
- npm package: `pi-glance@0.5.3`
- License: MIT

The production source and upstream tests were copied from that tag before local modifications.

## Local differences

- Preserve statuses published by other extensions while permanently replacing Pi's built-in informational footer rows.
- Add a responsive context progress mode to the input surface bottom-right.
- Add a plain/Nerd Font auto-compaction marker with semantic color highlighting.
- Add a switchable, theme-aware Claude-inspired working indicator for activity, current-cycle output, and elapsed time.
- Add a theme-aware Git Working Tree summary that defaults into the Git status line, with an optional bottom-right
  border placement, tracked diff statistics, resilient refresh scheduling, and `/diff` revdiff review handoff.
- Add a separately highlighted `main↓N` when HEAD is behind the last local `origin/main` snapshot, without changing the
  branch upstream.
- Add a single-slot editor stash with restore/discard shortcuts and a left-border mark for unrestored drafts.
