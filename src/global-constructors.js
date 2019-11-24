
Reflect.defineProperty( globalThis, 'AsyncFunction', { value:(async ()=>{}).constructor, }, );
Reflect.defineProperty( globalThis, 'GeneratorFunction', { value:(function *(){}).constructor, }, );
Reflect.defineProperty( globalThis, 'AsyncGeneratorFunction', { value:(async function *(){}).constructor, }, );
