import '../WeakTree.js';

const proxies= new WeakMap();

Reflect.defineProperty( Object.prototype, '::', {
	get(){
		return proxies.getOrSet( this, ()=>
			new Proxy( ()=> {}, {
				get: ( instance, key, proxy, )=>
					bindTo( this, this[key], )
				,
				apply: ( instance, context, [ method, ], )=>
					bindTo( this, method, )
				,
			}, )
		, )
	},
}, );

const bindings= new WeakTree();

function bindTo( context, method, )
{
	if( typeof method !== 'function' )
		throw new TypeError( `${method} is not a valid function or method name of ${context}`, );
	
	return bindings.getOrSet( [ context, method, ], ()=> method.bind( context, ), );
}
