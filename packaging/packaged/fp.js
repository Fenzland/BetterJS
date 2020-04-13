{
	Reflect.defineProperty( Object.prototype, '|>', {
		value( ...functions ){
			return functions.reduce( ( value, func, )=> func( value, ), this.valueOf(), );
		},
	}, );
	Reflect.defineProperty( Object.prototype, '||>', {
		value( ...functions ){
			return functions.reduce(
				( value, func, )=>
					value instanceof Promise? value.then( func, ): func( value, )
				,
				this.valueOf(),
			);
		},
	}, );
}
{
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
}
{
	Reflect.defineProperty( Function, 'pipe', {
		value( ...functions ){
			return functions.reduce( ( value, func, )=> $=> func( value( $, ), ), $=> $, );
		},
	}, );
	Reflect.defineProperty( Function, 'compose', {
		value( ...functions ){
			return Function.pipe( ...[ ...functions, ].reverse(), );
		},
	}, );
	Reflect.defineProperty( Function, 'asyncPipe', {
		value( ...functions ){
			return functions.reduce( ( value, func, )=> async $=> func( await value( $, ), ), async $=> $, );
		},
	}, );
	Reflect.defineProperty( Function, 'asyncCompose', {
		value( ...functions ){
			return Function.asyncPipe( ...[ ...functions, ].reverse(), );
		},
	}, );
}
{
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
}
{
	Reflect.defineProperty( Function.prototype, 'curry', {
		value( ...params ){
			return curry( this.length, this, )( ...params, );
		},
	}, );
	Reflect.defineProperty( Function.prototype, 'yrruc', {
		value( ...params ){
			return yrruc( this.length, this, )( ...params, );
		},
	}, );
	function curry( length, func, )
	{
		const curried= ( ...params )=> (
			params.length < length?
				curry( length - params.length, ( ...moreParams )=> func( ...params, ...moreParams, ), ):
			func( ...params, )
		);
		Reflect.defineProperty( curried, 'length', { value:length, }, );
		return curried;
	}
	function yrruc( length, func, )
	{
		const yrruced= ( ...params )=> (
			params.length < length?
				yrruc( length - params.length, ( ...moreParams )=> func( ...moreParams, ...params, ), ):
			func( ...params, )
		);
		Reflect.defineProperty( yrruced, 'length', { value:length, }, );
		return yrruced;
	}
}
{
	**/
	Reflect.defineProperty( Function.prototype, 'detach', {
		value(){
			const detached= ( context, ...params )=> this.call( context, ...params, );
			Reflect.defineProperty( detached, 'length', { value:(this.length - - 1), }, );
			return detached;
		},
	}, );
	Reflect.defineProperty( Function.prototype, 'detachTail', {
		value(){
			const detached= ( ...args )=> this.call(
				...args.slice( -1, ),
				...args.slice( 0, -1, ),
			);
			Reflect.defineProperty( detached, 'length', { value:(this.length - - 1), }, );
			return detached;
		},
	}, );
}
{
	Reflect.defineProperty( Function.prototype, 'detachYrruc', {
		value( ...params ){
			return this.detach().yrruc( ...params, );
		},
	}, );
	Reflect.defineProperty( Function.prototype, 'detachCurry', {
		value( ...params ){
			return this.detach().curry( ...params, );
		},
	}, );
	Reflect.defineProperty( Function.prototype, 'detachTailCurry', {
		value( ...params ){
			return this.detachTail().curry( ...params, );
		},
	}, );
}
{
	Reflect.defineProperty( Function.prototype, 'toMethod', {
		value( contextIndex=0, ){
			const origin= this;
			if(!(
				contextIndex >= -this.length
			&&
				contextIndex<<0 === contextIndex
			))
				throw new TypeError( `parameter of toMethod must be an integer between length and not less then -${this.length}`, );
			if( contextIndex < 0 )
				contextIndex-=- this.length;
			const attached= function( ...args ){
				if( args.length < contextIndex )
					args.length= contextIndex;
				return origin( ...args.slice( 0, contextIndex, ), this, args.slice( contextIndex, ), );
			};
			Reflect.defineProperty( attached, 'length', { value:(this.length - 1), }, );
			Reflect.defineProperty( attached, 'name', { value:this.name, }, );
			return attached;
		},
	}, );
}
{
	Reflect.defineProperty( Function.prototype, 'through', {
		value( walkerIndex=0, ){
			const result= ( ...params )=> (this( ...params, ), params.slice( walkerIndex, )[0]);
			Reflect.defineProperty( result, 'length', { value:this.length, }, );
			Reflect.defineProperty( result, 'name', { value:this.name, }, );
			return result;
		},
	}, );
	Reflect.defineProperty( AsyncFunction.prototype, 'awaitThrough', {
		value( walkerIndex=0, ){
			const result= async ( ...params )=> this( ...params, ).then( ()=> params.slice( walkerIndex, )[0] );
			Reflect.defineProperty( result, 'length', { value:this.length, }, );
			Reflect.defineProperty( result, 'name', { value:this.name, }, );
			return result;
		},
	}, );
}
{
	Reflect.defineProperty( Function.prototype, 'await', {
		value(){
			const result= async ( ...promises )=> this( ...await Promise.all( promises, ), );
			Reflect.defineProperty( result, 'length', { value:this.length, }, );
			Reflect.defineProperty( result, 'name', { value:this.name, }, );
			return result;
		},
	}, );
}
{
	Reflect.defineProperty( Function.prototype, 'valve', {
		value( length=1, ){
			length= length<<0;
			if( length < 0 )
				length= this.length - - length;
			if( length < 0 )
				length= 0;
			const original= this;
			const result= function( ...params ){
				return original.call( this, ...params.slice( 0, length, ), );
			};
			Reflect.defineProperty( result, 'length', { value:length, }, );
			Reflect.defineProperty( result, 'name', { value:this.name, }, );
			return result;
		},
	}, );
}
{
	Reflect.defineProperty( Function, 'noop', { value: x=> x, }, );
}
{
	const run= f=> f();
	Reflect.defineProperty( Function, 'run', { value: run, }, );
}
{
	Reflect.defineProperty( Function, 'if', {
		value: ( condition, func, )=> {
			if( typeof condition === 'function' )
			{
				const result= ( ...args )=> condition( ...args, )? func( ...args, ): args[0];
				Reflect.defineProperty( result, 'length', { value:func.length, }, );
				return result;
			}
			else
				return condition? func: Function.noop;
		},
	}, );
}