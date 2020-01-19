
Reflect.defineProperty( Map.prototype, 'put', {
	value: function put( entries, ){
		for( const [ key, value, ] of entries )
			this.set( key, value, );
	},
}, );

Reflect.defineProperty( Set.prototype, 'put', {
	value: function put( items, ){
		for( const item of items )
			this.add( item, );
	},
}, );

Reflect.defineProperty( WeakMap.prototype, 'put', {
	value: function put( entries, ){
		for( const [ key, value, ] of entries )
			this.set( key, value, );
	},
}, );

Reflect.defineProperty( WeakSet.prototype, 'put', {
	value: function put( items, ){
		for( const item of items )
			this.add( item, );
	},
}, );
