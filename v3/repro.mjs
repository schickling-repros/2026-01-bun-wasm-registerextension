import WaSqliteNodeFactory from './wa-sqlite.node.mjs'

const iterations = Number.parseInt(process.env.ITERATIONS ?? '300', 10)

const runIteration = async () => {
  const module = await WaSqliteNodeFactory()
  const register = module._RegisterExtensionFunctions
  if (typeof register !== 'function') {
    throw new Error('Missing Module._RegisterExtensionFunctions')
  }

  const dbPtr = module._malloc(4)
  try {
    module.setValue(dbPtr, 0, '*')
    const rc = module.ccall(
      'sqlite3_open_v2',
      'number',
      ['string', 'number', 'number', 'string'],
      [':memory:', dbPtr, 0x00000002 | 0x00000004, null]
    )
    if (rc !== 0) {
      throw new Error(`sqlite3_open_v2 failed: ${rc}`)
    }
    const db = module.getValue(dbPtr, '*')
    register(db)
  } finally {
    module._free(dbPtr)
  }
}

for (let i = 0; i < iterations; i += 1) {
  try {
    await runIteration()
  } catch (error) {
    console.error(`Error at iteration ${i + 1}:`, error)
    process.exit(1)
  }
}
