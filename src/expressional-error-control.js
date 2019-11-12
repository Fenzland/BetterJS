import './SyncPromise.js';

/**
 * expressional throw
 */
Reflect.defineProperty( globalThis, 'throws', { value( e=(new Error()), ){ throw e; }, }, );

/**
 * expressional tries
 */
Reflect.defineProperty( globalThis, 'tries', { value:callback=> new SyncPromise( callback, ), }, );
