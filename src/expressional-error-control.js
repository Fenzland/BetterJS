
/**
 * expressional throw
 */
globalThis.throws= ( e=(new Error()), )=> {
	throw e;
};

/**
 * expressional tries
 */
globalThis.tries= ( callback, )=> new SyncPromise( callback, );
