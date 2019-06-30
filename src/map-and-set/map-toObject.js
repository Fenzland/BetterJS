
/**
 * Convert map to primeval object. Only string key items will be included.
 * 
 * @return {}
 */
Object.defineProperty( Map.prototype, 'toObject', {
	value(){
		return [ ...this, ].reduce( ( result, [ key,value, ], )=> {
			if( typeof key === 'string' )
				result[key]= value;
			
			return result;
		}, {}, );
	},
}, );
