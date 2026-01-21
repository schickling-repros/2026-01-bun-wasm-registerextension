# v2

Further-minimized loop. Repeatedly:
1. instantiates the module
2. opens an in-memory DB
3. calls `RegisterExtensionFunctions`

No close call.

## Run
```
bun repro.mjs
```

## Increase probability
```
ITERATIONS=100 bun repro.mjs
```

## Control (skip extensions)
```
DISABLE_EXTENSIONS=1 ITERATIONS=1000 bun repro.mjs
```
