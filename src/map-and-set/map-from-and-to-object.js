
/**
 * Construct map from an object.
 * 
 * @return Map{}
 */
Reflect.defineProperty( Map, 'fromObject', {
	value( object, ){
		const map= new Map();
		
		Object.entries( object, ).forEach( ( [ key, value, ], )=> void map.set( key, value, ), );
		
		return map;
	},
}, );

/**
 * Convert map to primeval object. Only string key items will be included.
 * 
 * @return {}
 */
Reflect.defineProperty( Map.prototype, 'toObject', {
	value(){
		return [ ...this, ].reduce( ( result, [ key, value, ], )=> {
			if( typeof key === 'string' )
				result[key]= value;
			
			return result;
		}, {}, );
	},
}, );
