import '../../utils/fix_module.ts';

declare global
{
	interface MapConstructor
	{
		fromObject<K,V>( object:{ [key:string]:V; }, ):Map<string,V>;
	}
	
	interface Map<K,V>
	{
		toObject<K,V>():({ [key:string]:V; });
	}
}

/**
 * Construct map from an object.
 * 
 * @return Map{}
 */
Reflect.defineProperty( Map, 'fromObject', {
	value<K,V>( object:{ [key:string]:V; }, ):Map<string,V>{
		const map:Map<string,V>= new Map();
		
		Object.entries( object, ).forEach( ( [ key, value, ]:[ string, V, ], ):void=> void map.set( key, value, ), );
		
		return map;
	},
}, );

/**
 * Convert map to primeval object. Only string key items will be included.
 * 
 * @return {}
 */
Reflect.defineProperty( Map.prototype, 'toObject', {
	value<K,V>():({ [key:string]:V; }){
		return [ ...this, ].reduce( ( result:{ [key:string]:V; }, [ key, value, ]:[ K, V, ], )=> {
			if( typeof key === 'string' )
				result[key]= value;
			
			return result;
		}, {}, );
	},
}, );
