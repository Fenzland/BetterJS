
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
