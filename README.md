# Bun wasm RegisterExtensionFunctions repros

This repo contains versioned minimal repros for a Bun crash when calling
`RegisterExtensionFunctions` after repeated wa-sqlite instantiation.

## Versions
- `v1/` minimal open/close loop using wa-sqlite node build
- `v2/` further-minimized loop without close

## Quick start
1. `cd v1`
2. `bun repro.mjs`

## Notes
- Use `ITERATIONS=1000` to increase repro probability.
- Use `DISABLE_EXTENSIONS=1` to confirm stability when skipping
  `RegisterExtensionFunctions`.
