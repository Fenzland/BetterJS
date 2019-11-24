
Reflect.defineProperty( Function.prototype, 'prepare', {
	value( ...params ){
		return ( ...moreParams )=> this( ...params, ...moreParams, );
	},
}, );

Reflect.defineProperty( Function.prototype, 'postpare', {
	value( ...params ){
		return ( ...moreParams )=> this( ...moreParams, ...params, );
	},
}, );
