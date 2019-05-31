
Array.prototype.findLastIndex= function( predicate, context, ){
	
	for( let I= this.length; --I >= 0; )
	{
		const predication= predicate.call( context, this[I], I, this, );
		
		if( predication )
			return I;
	}
	
	return -1;
};

Array.prototype.findLast= function( predicate, context, ){
	return this[this.findLastIndex( predicate, context, )];
};
