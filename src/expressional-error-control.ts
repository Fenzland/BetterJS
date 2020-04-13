import '../utils/fix_module.ts';

declare global
{
	function throws( any, ):never;
}

/**
 * expressional throw
 */
globalThis.throws= ( e:any=(new Error()), ):never=> {
	throw e;
};
