# v1

Minimal loop using wa-sqlite's node build. Repeatedly:
1. instantiates the module
2. opens an in-memory DB
3. calls `RegisterExtensionFunctions`
4. closes the DB

## Run
```
bun repro.mjs
```

## Increase probability
```
ITERATIONS=1000 bun repro.mjs
```

## Control (skip extensions)
```
DISABLE_EXTENSIONS=1 ITERATIONS=1000 bun repro.mjs
```
