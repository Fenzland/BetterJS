
Reflect.defineProperty( Object.prototype, '::', {
	get(){
		return new Proxy( ()=> {}, {
			get: ( instance, key, proxy, )=>
				bindTo( this, this[key], )
			,
			apply: ( instance, context, [ method, ], )=>
				bindTo( this, method, )
			,
		}, );
	},
}, );

function bindTo( context, method, )
{
	if( typeof method !== 'function' )
		throw new TypeError( `${method} is not a valid function or method name of ${this}`, );
	
	return method.bind( context, );
}
