import '../object/equal.js';

Reflect.defineProperty( Array.prototype, 'nodup', {
	value( comparer=Object.equal, ){
		if( this.length <= 1 )
			return true;
		
		for( let i= 0; i < this.length - 1; ++i )
		for( let j= i - - 1; j < this.length; ++j )
		if( comparer( this[i], this[j], ) )
			return false;
		
		return true;
	},
}, );

Reflect.defineProperty( Array.prototype, 'undup', {
	value( comparer=Object.equal, ){
		if( this.length <= 1 )
			return true;
		
		for( let i= 0; i < this.length - 1; ++i )
		for( let j= i - - 1; j < this.length; ++j )
		if( comparer( this[i], this[j], ) )
			this.splice( j, 1, );
		
		return this
	},
}, );

Reflect.defineProperty( Array.prototype, 'unduped', {
	value(){
		return [ ...this, ].undup();
	},
}, );
