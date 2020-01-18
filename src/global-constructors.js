
Reflect.defineProperty( globalThis, 'AsyncFunction', { value:(async ()=>{}).constructor, }, );
Reflect.defineProperty( globalThis, 'GeneratorFunction', { value:(function *(){}).constructor, }, );
Reflect.defineProperty( globalThis, 'AsyncGeneratorFunction', { value:(async function *(){}).constructor, }, );

Reflect.defineProperty( globalThis, 'Generator', { value:(function *(){})().constructor, }, );
Reflect.defineProperty( globalThis, 'AsyncGenerator', { value:(async function *(){})().constructor, }, );
