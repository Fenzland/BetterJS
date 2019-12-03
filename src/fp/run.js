
const run= f=> f();

Reflect.defineProperty( Function, 'run', { value: run, }, );
