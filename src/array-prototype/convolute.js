
Reflect.defineProperty( Array.prototype, 'convolute', {
	value: function convolute( filter, ){
		if( filter.length < 1 )
			return this.concat();
		else
		if( filter.length === 1 )
			return this.map( filter, );
		else
		if( filter.length > this.length )
			return [];
		else
		if( filter.length === this.length )
			return [ filter( ...this, ), ];
		
		const area= [];
		const result= [];
		
		for( const item of this )
		{
			area.push( item, );
			
			if( area.length > filter.length )
				area.shift( item, );
			
			if( area.length === filter.length )
				result.push( filter( ...area, ), );
		}
		
		return result;
	},
}, );
