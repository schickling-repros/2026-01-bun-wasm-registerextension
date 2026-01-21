# v3

Minimal loop using direct call to `Module._RegisterExtensionFunctions`.
Repeatedly:
1. instantiates the module
2. opens an in-memory DB
3. calls `Module._RegisterExtensionFunctions` directly

## Run
```
bun repro.mjs
```

## Increase probability
```
ITERATIONS=300 bun repro.mjs
```
