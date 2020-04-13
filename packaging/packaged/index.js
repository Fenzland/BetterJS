{
	class SyncPromise
	{
		#status= 'pending';
		#value;
		#reason;
		#caught= false;
		constructor( callback, )
		{
			try
			{
				this.#value= callback();
				this.#status= 'resolved';
			}
			catch( error )
			{
				this.#reason= error;
				this.#status= 'rejected';
			}
			if( this.#value instanceof Promise )
				return this.#value;
			Promise.resolve().then( ()=> {
				if( this.#status === 'rejected' && !this.#caught )
					throw this.#reason;
			}, );
		}
		then( callback=undefined, catchCallback=undefined, )
		{
			if( this.#status === 'resolved' )
			{
				if( callback && typeof callback === 'function' )
					return this.constructor.resolve( callback( this.#value, ), );
				else
					return this.constructor.resolve( this.#value, );
			}
			else
			if( this.#status === 'rejected' )
			{
				this.#caught= true;
				if( catchCallback && typeof catchCallback === 'function' )
					return this.constructor.resolve( catchCallback( this.#reason, ), );
				else
					return this.constructor.reject( this.#reason, );
			}
			else
				throw new Error( 'cannot call .then(), .catch() or .finally() on a pending SyncPromise.', );
		}
		catch( callback=undefined, )
		{
			return this.then( undefined, callback, );
		}
		finally( callback=undefined, )
		{
			if( callback && typeof callback === 'function' )
				callback();
			return this.then();
		}
		static resolve( value, )
		{
			return new this( ()=> value, );
		}
		static reject( reason, )
		{
			return new this( ()=> { throw reason; }, );
		}
	}
	Reflect.defineProperty( globalThis, 'SyncPromise', { value:SyncPromise, }, );
}
{
	Reflect.defineProperty( globalThis, 'throws', { value( e=(new Error()), ){ throw e; }, }, );
	Reflect.defineProperty( globalThis, 'tries', { value:callback=> new SyncPromise( callback, ), }, );
}
{
	const hasInstance= Object[Symbol.hasInstance];
	function hasInstanceOfType( instance, ){
		return hasInstance.call( this, instance, ) || (typeof instance === this.name.toLowerCase() && instance !== null);
	};
	[
		'Object',
		'String',
		'Number',
		'Symbol',
		'Boolean',
		'Function',
		'BigInt',
	].forEach(
		constructor=> {
			if( globalThis[constructor] )
				Reflect.defineProperty( globalThis[constructor], Symbol.hasInstance, {
					value: hasInstanceOfType,
				}, );
		},
	);
	Reflect.defineProperty( Array, Symbol.hasInstance, {
		value( instance, ){
			return hasInstance.call( this, instance, ) || Array.isArray( instance, );
		}
	}, );
	Reflect.defineProperty( Reflect, 'hasInstance', {
		value( constructor, instance, ){
			return hasInstance.call( constructor, instance, );
		},
	}, );
}
{
	[
		'CSSRuleList',
		'DOMRectList',
		'DOMStringList',
		'DOMTokenList',
		'DataTransferItemList',
		'FileList',
		'MediaList',
		'MediaQueryList',
		'NodeList',
		'PerformanceObserverEntryList',
		'PresentationConnectionList',
		'RadioNodeList',
		'SVGAnimatedLengthList',
		'SVGAnimatedNumberList',
		'SVGAnimatedTransformList',
		'SVGLengthList',
		'SVGNumberList',
		'SVGPointList',
		'SVGStringList',
		'SVGTransformList',
		'SourceBufferList',
		'StyleSheetList',
		'TextTrackCueList',
		'TextTrackList',
		'TouchList',
		'SpeechGrammarList',
		'HTMLAllCollection',
		'HTMLCollection',
		'HTMLFormControlsCollection',
		'HTMLOptionsCollection',
	].forEach( List=> {
		if( globalThis[List] )
		{
			globalThis[List].__proto__= Array;
			globalThis[List].prototype.__proto__= Array.prototype;
		}
	}, );
}
{
	Reflect.defineProperty( globalThis, 'then', {
		value: async ( onresolved=undefined, )=> Promise.resolve().then( onresolved, ),
	}, );
	Reflect.defineProperty( globalThis, 'timeout', {
		value: async ( time, value, )=>
			new Promise( resolve=> void setTimeout( ()=> void resolve( value, ), time, ), )
		,
	}, );
	Reflect.defineProperty( globalThis, 'nextFrame', { value:
		globalThis.requestAnimationFrame?
			async value=> new Promise( resolve=> void requestAnimationFrame( ()=> resolve( value, ), ), ):
		async value=> timeout( 1000/60, value, )
	, }, );
	if( globalThis.window )
		Reflect.defineProperty( window, 'loaded', {
			value: new Promise( resolve=> void window.addEventListener( 'load', resolve, ), ),
		}, );
	if( globalThis.window )
		Reflect.defineProperty( window, 'beforeunloaded', {
			value: new Promise( resolve=> void window.addEventListener( 'beforeunload', resolve, ), ),
		}, );
	if( globalThis.window )
		Reflect.defineProperty( window, 'unloaded', {
			value: new Promise( resolve=> void window.addEventListener( 'unload', resolve, ), ),
		}, );
}
{
	Reflect.defineProperty( globalThis, 'AsyncFunction', { value:(async ()=>{}).constructor, }, );
	Reflect.defineProperty( globalThis, 'GeneratorFunction', { value:(function *(){}).constructor, }, );
	Reflect.defineProperty( globalThis, 'AsyncGeneratorFunction', { value:(async function *(){}).constructor, }, );
}
{
	Reflect.defineProperty( Function.prototype, 'new', {
		get(){
			const newer= ( ...args )=> new this( ...args, );
			Reflect.defineProperty( newer, 'length', { value:this.length, }, );
			Reflect.defineProperty( newer, 'name', { value:`${this.name}.new`, }, );
			return newer;
		},
	}, );
}
{
	Reflect.defineProperty( AsyncFunction.prototype, 'limit', {
		value( limit=1, ){
			let counter= 0;
			const limitted= async ( ...args )=> {
				let result= undefined;
				if( counter < limit )
				{
					++counter;
					result= await this( ...args, )
						.finally( ()=> --counter, )
					;
				}
				return result;
			};
			Reflect.defineProperty( limitted, 'length', { value:this.length, }, );
			return limitted;
		},
	}, );
}
{
	const toIterator= value=>
		value === null || value === undefined? [][Symbol.iterator]():
		value instanceof GeneratorFunction? value():
		value[Symbol.iterator]? value[Symbol.iterator]():
		[ value, ][Symbol.iterator]()
	;
	Reflect.defineProperty( GeneratorFunction, 'toIterator', { value:toIterator, }, );
}
{
	Reflect.defineProperty( String.prototype, 'matchGroup', {
		value( pattern, group=undefined, ){
			const nativeMatches= this.match( pattern, )|| [];
			const matches= { ...[ ...nativeMatches, ], ...(nativeMatches.groups|| {}), };
			if( group === undefined )
				return matches;
			else
				return getFromMatches( matches, group, );
		},
	}, );
	const getFromMatches= ( matches, group, )=> {
		if( Array.isArray( group, ) )
			return group.map( group=> getFromMatches( matches, group, ), );
		else
		if( group instanceof Object )
		{
			const result= {};
			for( const key in group )
				result[key]= getFromMatches( matches, group[key], );
			return result;
		}
		else
			return matches&& matches[group];
	}
}
{
	const splitWords= string=> string.split( string.match( /^[_A-Z]+$/, )? '_': /(?:[_-]|(?=[A-Z]))/, );
	Reflect.defineProperty( String.prototype, 'toCamelCase', {
		value(){
			return splitWords( this, ).map( ( word, index, )=>
				index > 0?
					`${word.slice( 0, 1, ).toUpperCase()}${word.slice( 1, ).toLowerCase()}`:
				word.toLowerCase()
			, ).join( '', );
		},
	}, );
	Reflect.defineProperty( String.prototype, 'toFlagCase', {
		value(){
			return splitWords( this, ).map( ( word, index, )=>
				`${word.slice( 0, 1, ).toUpperCase()}${word.slice( 1, ).toLowerCase()}`
			, ).join( '', );
		},
	}, );
	Reflect.defineProperty( String.prototype, 'toSnakeCase', {
		value(){
			return splitWords( this, ).map( ( word, index, )=> word.toLowerCase(), ).join( '_', );
		},
	}, );
	Reflect.defineProperty( String.prototype, 'toPythonCase', {
		value(){
			return splitWords( this, ).map( ( word, index, )=> word.toUpperCase(), ).join( '_', );
		},
	}, );
	Reflect.defineProperty( String.prototype, 'toBarbecueCase', {
		value(){
			return splitWords( this, ).map( ( word, index, )=> word.toLowerCase(), ).join( '-', );
		},
	}, );
}
{
	Reflect.defineProperty( String.prototype, 'idxOf', {
		value( searchString, position=0, ){
			const index= this.indexOf( searchString, position, );
			return index === -1? NaN: index;
		},
	}, );
	Reflect.defineProperty( String.prototype, 'lastIdxOf', {
		value( searchString, position=Infinity, ){
			const index= this.lastIndexOf( searchString, position, );
			return index === -1? NaN: index;
		},
	}, );
	Reflect.defineProperty( String.prototype, 'searchIdx', {
		value( searcher, ){
			const index= this.search( searcher, );
			return index === -1? NaN: index;
		},
	}, );
}
{
	Reflect.defineProperty( Array.prototype, 'forEach', {
		value( callback, context=undefined, ){
			let index= 0;
			for( const item of this )
				callback.call( context, item, index++, this, );
		},
	}, );
}
{
	Reflect.defineProperty( Array.prototype, 'forEachAwait', {
		async value( callback, context=undefined, ){
			let index= 0;
			for( const item of this )
				await callback.call( context, item, index++, this, );
		},
	}, );
}
{
	Reflect.defineProperty( Array.prototype, 'mapAwait', {
		async value( callback, context=undefined, ){
			let index= 0;
			const result= [];
			for( const item of this )
				result.push( await callback.call( context, item, index++, this, ), );
			return result;
		},
	}, );
}
{
	Reflect.defineProperty( Array.prototype, 'flatMapAwait', {
		async value( callback, context=undefined, ){
			let index= 0;
			const result= [];
			for( const item of this )
			{
				const pieces= await callback.call( context, item, index++, this, );
				if( Array.isArray( pieces, ) )
					result.push( ...pieces, )
				else
					result.push( pieces, )
			}
			return result;
		},
	}, );
}
{
	Reflect.defineProperty( Array.prototype, 'subArray', {
		value( start, length=Infinity, ){
			const x= start;
			const y= start < 0 && length >= -start? Infinity: start - - length;
			return this.slice(
				Math.min( x, y, ),
				Math.max( x, y, ),
			);
		},
	}, );
	Reflect.defineProperty( Array.prototype, 'get', {
		value( index, ){
			return this[index < 0? this.length - - index: index];
		},
	}, );
}
{
	Reflect.defineProperty( Array.prototype, 'set', {
		value( index, value, ){
			const length= this.length;
			if( index > length || index < -length )
				return value;
			else
			if( index < 0 )
				return this[length - - index]= value;
			else
				return this[index]= value;
		},
	}, );
}
{
	Reflect.defineProperty( Array.prototype, 'findLastIndex', {
		value( predicate, context=undefined, ){
			for( let I= this.length; --I >= 0; )
			{
				const predication= predicate.call( context, this[I], I, this, );
				if( predication )
					return I;
			}
			return -1;
		},
	}, );
	Reflect.defineProperty( Array.prototype, 'findLast', {
		value( predicate, context, ){
			return this[this.findLastIndex( predicate, context, )];
		},
	}, );
	Reflect.defineProperty( Array.prototype, 'idxOf', {
		value( searchElement, fromIndex=0, ){
			const index= this.indexOf( searchElement, fromIndex, );
			return index === -1? NaN: index;
		},
	}, );
	Reflect.defineProperty( Array.prototype, 'lastIdxOf', {
		value( searchElement, fromIndex=Infinity, ){
			const index= this.lastIndexOf( searchElement, fromIndex, );
			return index === -1? NaN: index;
		},
	}, );
	Reflect.defineProperty( Array.prototype, 'findIdx', {
		value( predicate, ){
			const index= this.findIndex( predicate, );
			return index === -1? NaN: index;
		},
	}, );
	Reflect.defineProperty( Array.prototype, 'findLastIdx', {
		value( predicate, ){
			const index= this.findLastIndex( predicate, );
			return index === -1? NaN: index;
		},
	}, );
	Reflect.defineProperty( Array.prototype, 'seek', {
		value( predicate, deflt=undefined, ){
			const idx= this.findIdx( predicate, );
			return Number.isNaN( idx, )? deflt: this[idx];
		},
	}, );
	Reflect.defineProperty( Array.prototype, 'seekLast', {
		value( predicate, deflt=undefined, ){
			const idx= this.findLastIdx( predicate, );
			return Number.isNaN( idx, )? deflt: this[idx];
		},
	}, );
	Reflect.defineProperty( Array.prototype, 'dig', {
		value( callback, deflt=undefined, ){
			for( let I= 0; I < this.length; ++I )
			{
				const result= callback( this[I], I, this, );
				if( result !== undefined )
					return result;
			}
			return deflt;
		},
	}, );
	Reflect.defineProperty( Array.prototype, 'digLast', {
		value( callback, deflt=undefined, ){
			for( let I= this.length; --I >= 0; )
			{
				const result= callback( this[I], I, this, );
				if( result !== undefined )
					return result;
			}
			return deflt;
		},
	}, );
}
{
	Reflect.defineProperty( Array.prototype, 'mapAndFilter', {
		value( mapper, filter=(item=> item !== undefined), ){
			return this.reduce( ( result, item, ...rest )=> {
				const mapped= mapper( item, ...rest, );
				if( filter( mapped, ...rest, ) )
					result.push( mapped, );
				return result;
			}, [], );
		},
	}, );
}
{
	Reflect.defineProperty( Array.prototype, 'implode', {
		value( separator='', ){
			return this.join( separator, );
		},
	}, );
	Reflect.defineProperty( Array.prototype, 'feed', {
		value( separator='\n', ){
			return `${this.join( separator, )}${separator}`;
		},
	}, );
}
{
	{
		Reflect.defineProperty( Array.prototype, 'reduce', {
			value( callback, initialValue=undefined, ){
				let value= initialValue;
				let index= 0;
				for( const item of this )
					value= callback( value, item, index++, this, );
				return value;
			},
		}, );
	}
}
{
	const entries= Array.prototype.entries;
	Reflect.defineProperty( Array.prototype, 'entries', {
		value( callback, ){
			return [ ...entries.call( this, ), ];
		},
	}, );
	const keys= Array.prototype.keys;
	Reflect.defineProperty( Array.prototype, 'keys', {
		value( callback, ){
			return [ ...keys.call( this, ), ];
		},
	}, );
	const values= Array.prototype.values;
	Reflect.defineProperty( Array.prototype, 'values', {
		value( callback, ){
			return [ ...values.call( this, ), ];
		},
	}, );
}
{
	Reflect.defineProperty( Array.prototype, 'popped', {
		value(){
			const newbee= [ ...this, ];
			newbee.pop();
			return newbee;
		},
	}, );
	Reflect.defineProperty( Array.prototype, 'pushed', {
		value( ...items ){
			return [ ...this, ...items, ];
		},
	}, );
	Reflect.defineProperty( Array.prototype, 'shifted', {
		value(){
			const newbee= [ ...this, ];
			newbee.shift();
			return newbee;
		},
	}, );
	Reflect.defineProperty( Array.prototype, 'unshifted', {
		value( ...items ){
			return [ ...items, ...this, ];
		},
	}, );
}
{
	Reflect.defineProperty( Array.prototype, 'spliced', {
		value( start, deleteCount=Infinity, ...items ){
			const newbee= [ ...this, ];
			newbee.splice( start, deleteCount, ...items, );
			return newbee;
		},
	}, );
}
{
	Reflect.defineProperty( Array.prototype, 'reversed', {
		value(){
			return [ ...this, ].reverse();
		},
	}, );
}
{
	Reflect.defineProperty( Array.prototype, 'sorted', {
		value( comparer=undefined, ){
			return [ ...this, ].sort( comparer, );
		},
	}, );
}
{
	Reflect.defineProperty( Array.prototype, 'shuffle', {
		value(){
			const length= this.length;
			for( let k= 0; k < length; ++k )
			{
				const j= (length - Math.random()*(length - k))<<0;
				if( j !== k )
					[ this[j], this[k], ]= [ this[k], this[j], ];
			}
			return this;
		},
	}, );
	Reflect.defineProperty( Array.prototype, 'shuffled', {
		value(){
			return [ ...this, ].shuffle();
		},
	}, );
}
{
	Reflect.defineProperty( Map, 'fromObject', {
		value( object, ){
			return new Map( Object.entries( object, ), );
		},
	}, );
	Reflect.defineProperty( Map.prototype, 'toObject', {
		value(){
			return [ ...this, ].reduce( ( result, [ key, value, ], )=> {
				if( typeof key === 'string' )
					result[key]= value;
				return result;
			}, {}, );
		},
	}, );
}
{
	{
		const origin= Map.prototype.set;
		Reflect.defineProperty( Map.prototype, 'set', {
			value( key, value, ){
				origin.call( this, key, value, );
				return value;
			},
		}, );
	}
	{
		const origin= WeakMap.prototype.set;
		Reflect.defineProperty( WeakMap.prototype, 'set', {
			value( key, value, ){
				origin.call( this, key, value, );
				return value;
			},
		}, );
	}
	{
		const origin= Set.prototype.add;
		Reflect.defineProperty( Set.prototype, 'add', {
			value( value, ){
				origin.call( this, value, );
				return value;
			},
		}, );
	}
	{
		const origin= WeakSet.prototype.add;
		Reflect.defineProperty( WeakSet.prototype, 'add', {
			value( value, ){
				origin.call( this, value, );
				return value;
			},
		}, );
	}
}
{
	const mapEntries= Map.prototype.entries;
	Reflect.defineProperty( Map.prototype, 'entries', {
		value( callback, ){
			return [ ...mapEntries.call( this, ), ];
		},
	}, );
	const mapKeys= Map.prototype.keys;
	Reflect.defineProperty( Map.prototype, 'keys', {
		value( callback, ){
			return [ ...mapKeys.call( this, ), ];
		},
	}, );
	const mapValues= Map.prototype.values;
	Reflect.defineProperty( Map.prototype, 'values', {
		value( callback, ){
			return [ ...mapValues.call( this, ), ];
		},
	}, );
	const setEntries= Set.prototype.entries;
	Reflect.defineProperty( Set.prototype, 'entries', {
		value( callback, ){
			return [ ...setEntries.call( this, ), ];
		},
	}, );
	const setKeys= Set.prototype.keys;
	Reflect.defineProperty( Set.prototype, 'keys', {
		value( callback, ){
			return [ ...setKeys.call( this, ), ];
		},
	}, );
	const setValues= Set.prototype.values;
	Reflect.defineProperty( Set.prototype, 'values', {
		value( callback, ){
			return [ ...setValues.call( this, ), ];
		},
	}, );
}
{
	Reflect.defineProperty( Map.prototype, 'getOrSet', {
		value( key, generator, afterSetted=undefined, ){
			if( this.has( key, ) )
				return this.get( key, );
			else
			{
				const value= generator();
				this.set( key, value, );
				if( afterSetted )
					afterSetted( value, );
				return value;
			}
		},
	}, );
	Reflect.defineProperty( WeakMap.prototype, 'getOrSet', {
		value( key, generator, afterSetted=undefined, ){
			if( this.has( key, ) )
				return this.get( key, );
			else
			{
				const value= generator();
				this.set( key, value, );
				if( afterSetted )
					afterSetted( value, );
				return value;
			}
		},
	}, );
}
{
	Reflect.defineProperty( Map.prototype, 'pop', {
		value( key, ){
			if( this.has( key, ) )
			{
				const value= this.get( key, );
				this.delete( key, );
				return value;
			}
			else
				return undefined;
		},
	}, );
	Reflect.defineProperty( WeakMap.prototype, 'pop', {
		value( key, ){
			if( this.has( key, ) )
			{
				const value= this.get( key, );
				this.delete( key, );
				return value;
			}
			else
				return undefined;
		},
	}, );
}
{
	Reflect.defineProperty( Map.prototype, 'map', {
		value( callback, ){
			const result= new Map();
			this.forEach( ( item, key, map, )=> result.set( key, callback( item, key, map, ), ), );
			return result;
		},
	}, );
	Reflect.defineProperty( Set.prototype, 'map', {
		value( callback, ){
			const result= new Set();
			this.forEach( ( item, key, set, )=> result.add( callback( item, key, set, ), ), );
			return result;
		},
	}, );
}
{
	Reflect.defineProperty( Map.prototype, 'flatMap', {
		value( callback, ){
			const result= new Map();
			this.forEach( ( item, key, map, )=> {
				const pieces= callback( item, key, map, );
				if( pieces instanceof Map )
					pieces.forEach( ( item, key, )=> result.set( key, item, ), );
				else
					result.set( key, pieces, );
			}, );
			return result;
		},
	}, );
	Reflect.defineProperty( Set.prototype, 'flatMap', {
		value( callback, ){
			const result= new Set();
			this.forEach( ( item, key, set, )=> {
				const pieces= callback( item, key, set, );
				if( pieces instanceof Set )
					pieces.forEach( item=> result.add( item, ), );
				else
					result.add( pieces, );
			}, );
			return result;
		},
	}, );
}
{
	Reflect.defineProperty( Map.prototype, 'reduce', {
		value( callback, initialValue=undefined, ){
			let result= initialValue;
			this.forEach( ( ...args )=> result= callback( initialValue, ...args, ), );
			return result;
		},
	}, );
	Reflect.defineProperty( Set.prototype, 'reduce', {
		value( callback, initialValue=undefined, ){
			let result= initialValue;
			this.forEach( ( ...args )=> result= callback( initialValue, ...args, ), );
			return result;
		},
	}, );
}
{
	Reflect.defineProperty( Map.prototype, 'forEachAwait', {
		async value( callback, context=undefined, ){
			for( const [ key, value, ] of this )
				await callback.call( context, value, key, this, );
		},
	}, );
	Reflect.defineProperty( Set.prototype, 'forEachAwait', {
		async value( callback, context=undefined, ){
			for( const value of this )
				await callback.call( context, value, value, this, );
		},
	}, );
}
{
	Reflect.defineProperty( Map.prototype, 'mapAwait', {
		async value( callback, context=undefined, ){
			const result= new Map();
			for( const [ key, value, ] of this )
				result.set( key, await callback.call( context, value, key, this, ), );
			return result;
		},
	}, );
	Reflect.defineProperty( Set.prototype, 'mapAwait', {
		async value( callback, context=undefined, ){
			const result= new Set();
			for( const value of this )
				result.add( await callback.call( context, value, value, this, ), );
			return result;
		},
	}, );
}
{
	Reflect.defineProperty( Map.prototype, 'flatMapAwait', {
		async value( callback, context=undefined, ){
			const result= new Map();
			for( const [ key, value, ] of this )
			{
				const pieces= await callback.call( context, value, key, this, );
				if( pieces instanceof Map )
					pieces.forEach( ( item, key, )=> result.set( key, item, ), )
				else
					result.set( key, pieces, );
			}
			return result;
		},
	}, );
	Reflect.defineProperty( Set.prototype, 'flatMapAwait', {
		async value( callback, context=undefined, ){
			const result= new Set();
			for( const value of this )
			{
				const pieces= await callback.call( context, value, value, this, );
				if( pieces instanceof Set )
					pieces.forEach( item=> result.add( item, ), )
				else
					result.add( pieces, );
			}
			return result;
		},
	}, );
}
{
	Reflect.defineProperty( Map.prototype, 'mapAndFilter', {
		value( mapper, filter=(item=> item !== undefined), ){
			return this.reduce( ( result, item, key, self, )=> {
				const mapped= mapper( item, key, self, );
				if( filter( mapped, key, self, ) )
					result.set( key, mapped, );
				return result;
			}, new Map(), );
		},
	}, );
	Reflect.defineProperty( Set.prototype, 'mapAndFilter', {
		value( mapper, filter=(item=> item !== undefined), ){
			return this.reduce( ( result, item, key, self, )=> {
				const mapped= mapper( item, key, self, );
				if( filter( mapped, key, self, ) )
					result.add( mapped, );
				return result;
			}, new Set(), );
		},
	}, );
}
{
	const listeners= new WeakMap();
	const addEventListener= EventTarget.prototype.addEventListener;
	const removeEventListener= EventTarget.prototype.removeEventListener;
	Reflect.defineProperty( EventTarget.prototype, 'addEventListener', {
		value( type, listener, ...options ){
			const context= this|| globalThis;
			const map= listeners.getOrSet( context, ()=> new Map(), );
			const set= map.getOrSet( type, ()=> new Set(), );
			set.add( listener, );
			addEventListener.call( context, type, listener, ...options, );
			return listener;
		},
	}, );
	Reflect.defineProperty( EventTarget.prototype, 'removeEventListener', {
		value( type, listener, ...options ){
			const context= this|| globalThis;
			const map= listeners.getOrSet( context, ()=> new Map(), );
			const set= map.getOrSet( type, ()=> new Set(), );
			set.delete( listener, );
			removeEventListener.call( context, type, listener, ...options, );
			return listener;
		},
	}, );
	Reflect.defineProperty( EventTarget.prototype, 'removeEventListenersByType', {
		value( type, ){
			const context= this|| globalThis;
			const map= listeners.get( context, );
			if(!( map ))
				return;
			const set= map.get( type, );
			if(!( set ))
				return;
			set.forEach( listener=> {
				removeEventListener.call( context, type, listener, );
			}, );
			set.clear();
		},
	}, );
	Reflect.defineProperty( EventTarget.prototype, 'removeAllEventListeners', {
		value(){
			const context= this|| globalThis;
			const map= listeners.get( context, );
			if(!( map ))
				return;
			map.forEach( ( set, type, )=> {
				set.forEach( listener=> {
					removeEventListener.call( context, type, listener, );
				}, );
				set.clear();
			}, );
			map.clear();
		},
	}, );
}
{
	Reflect.defineProperty( Object, 'isObject', {
		value: value=> (typeof value === 'object' && value !== null) || typeof value === 'function',
	}, );
	Reflect.defineProperty( Object, 'isPureObject', {
		value: value=> (
			Object.isObject( value, )
		&&
			new Set( [ Object, undefined, null, ], ).has( value.constructor, )
		&&
			new Set( [ Object.prototype, undefined, null, ] ).has( Reflect.getPrototypeOf( value, ), )
		),
	}, );
}
{
	Reflect.defineProperty( Object, 'areSame', {
		value: ( x, y, )=> (
			x === y
		||
			(x !== x && y !== y)
		||
			(
				Array.isArray( x, )
			&&
				Array.isArray( y, )
			&&
				x.length === y.length
			&&
				[ ...x, ].every( ( item, index, )=> Object.areSame( y[index], item, ), )
			)
		||
			(
				Object.isPureObject( x, )
			&&
				Object.isPureObject( y, )
			&&
				(( keysX, keysY, )=> (
					keysX.length === keysY.length
				&&
					new Set( [ ...keysX, ...keysY, ], ).size === keysX.length
				&&
					keysX.every( key=> Object.areSame( x[key], y[key], ), )
				))( Object.keys( x, ), Object.keys( y, ) )
			)
		||
			(
				x instanceof Set
			&&
				y instanceof Set
			&&
				x.size === y.size
			&&
				[ ...x, ].every( item=> y.has( item, ), )
			)
		||
			(
				x instanceof Map
			&&
				y instanceof Map
			&&
				x.size === y.size
			&&
				[ ...x, ].every( ( [ key, value, ], )=> y.has( key, ) && Object.areSame( y.get( key, ), value, ), )
			)
		),
	}, );
}
{
	const haveOwnProperty= Object.prototype.hasOwnProperty;
	Reflect.defineProperty( Object, 'haveOwnProperty', {
		value: ( object, property, )=>
			object !== null
		&&
			object !== undefined
		&&
			haveOwnProperty.call( object, property, )
		,
	}, );
}
{
	const bePrototypeOf= Object.prototype.isPrototypeOf;
	Reflect.defineProperty( Object, 'bePrototypeOf', {
		value: ( property, object, )=>
			property === undefined? object === undefined:
			property === null? object === null:
			object === null || object === undefined? false:
			bePrototypeOf.call( property, Object (object), )
		,
	}, );
}
{
	const propertyBeEnumerable= Object.prototype.propertyIsEnumerable;
	Reflect.defineProperty( Object, 'propertyBeEnumerable', {
		value: ( object, property, )=>
			object !== null
		&&
			object !== undefined
		&&
			propertyBeEnumerable.call( object, property, )
		,
	}, );
}
{
	const get= ( object, property, )=> Object.haveOwnProperty( object, property, )? object[property]: undefined;
	const set= ( object, property, value, )=> Object.isObject( object, )? object[property]= value: value;
	Reflect.defineProperty( Object, 'get', { value:get, }, );
	Reflect.defineProperty( Object, 'set', { value:set, }, );
}
{
	Reflect.defineProperty( Object, 'deeplyGet', { value:deeplyGet, }, );
	Reflect.defineProperty( Object, 'deeplySet', { value:deeplySet, }, );
	function deeplyGet( object, [ ...keys ], )
	{
		const currentKey= keys.shift();
		if(!( Object.haveOwnProperty( object, currentKey, ) ))
			return undefined;
		const currentValue= currentKey? object[currentKey]: object;
		if( keys.length && currentValue )
			return deeplyGet( currentValue, keys, );
		else
			return currentValue;
	}
	function deeplySet( object, [ ...keys ], value, )
	{
		const currentKey= keys.shift();
		if(!( keys.length ))
			return object[currentKey]= value;
		if(!( Object.haveOwnProperty( object, currentKey, ) ))
		{
			const nextKey= keys[0];
			const nextObject= object[currentKey]=
				typeof nextKey === 'number' || nextKey instanceof Number? []: {}
			;
			return deeplySet( nextObject, keys, value, );
		}
		return deeplySet( object[currentKey], keys, value, );
	}
}
{
	Reflect.defineProperty( Object, 'deeplyAssign', {
		value( target, ...sources ){
			if(!( Object.isObject( target, ) ))
				target= Object.assign( target, );
			const cache= new WeakMap();
			for( const source of sources )
			{
				if(!( Object.isObject( source, ) ))
					continue;
				cache.set( source, target, );
				assign( cache, target, source, );
			}
			return target;
		},
	}, );
	function assign( cache, target, source, )
	{
		for( const [ key, value, ] of Object.entries( source, ) )
			if( Object.isObject( value, ) )
				target[key]= cache.getOrSet( value, ()=> initFor( value, target[key], ), target=> assign( cache, target, value, ), );
			else
				target[key]= value;
		return target;
	}
	function initFor( model, target, )
	{
		if( Array.isArray( model, ) )
			return Array.isArray( target, )? target: [];
		else
			return Object.isObject( target, )? target: {};
	}
}
{
	Reflect.defineProperty( Function, 'isFunction', {
		value( value, ){
			if( typeof value !== 'function' )
				return false;
			const code= value.toString();
			return !(code.startsWith( 'class', ) || code.startsWith( 'async class', ));
		},
	}, );
	Reflect.defineProperty( Function, 'isClass', {
		value( value, ){
			if( typeof value !== 'function' )
				return false;
			const code= value.toString();
			return code.startsWith( 'class', ) || code.startsWith( 'async class', );
		},
	}, );
	Reflect.defineProperty( Function, 'isAsync', {
		value( value, ){
			if( typeof value !== 'function' )
				return false;
			const code= value.toString();
			return code.startsWith( 'async', );
		},
	}, );
}
{
	Reflect.defineProperty( String, 'compare', {
		value( stringX='', stringY='', ){
			const x= String (stringX);
			const y= String (stringY);
			const length= Math.min( x.length, y.length, );
			const unify= value=> value > 0? 1: value < 0? -1: 0;
			for( let index= 0; index < length; ++index )
			{
				const diff= x.charCodeAt( index, ) - y.charCodeAt( index, );
				if( diff )
					return unify( diff, );
			}
			return unify( x.length - y.length, );
		},
	}, );
}
{
	Reflect.defineProperty( Promise, 'resolve', { value: Promise.resolve.bind( Promise, ), }, );
	Reflect.defineProperty( Promise, 'reject', { value: Promise.reject.bind( Promise, ), }, );
	Reflect.defineProperty( Promise, 'all', { value: Promise.all.bind( Promise, ), }, );
	Reflect.defineProperty( Promise, 'race', { value: Promise.race.bind( Promise, ), }, );
}
{
	const allSettled= Promise.allSettled.bind( Promise, );
	Reflect.defineProperty( Promise, 'allSettled', {
		value: values=>
			allSettled( values, ).then( settleds=> settleds.map(
				settled=> (settled.rejected= !(
					settled.resolved= settled.status === 'fulfilled' || settled.status === 'resolved'
				), settled),
			), )
		,
	}, );
}
{
	Reflect.defineProperty( Promise, 'any', {
		value: promises=>
			new Promise( ( resolve, reject, )=> {
				let isResolved= false;
				let reajectedCount= 0;
				const length= promises.length;
				const reasons= promises.map( ()=> undefined, );
				promises.forEach( ( promise, index, )=> promise.then(
					value=> {
						if( !isResolved )
						{
							isResolved= true;
							resolve( value, )
						}
					},
					reason=> {
						if( isResolved )
							return;
						reasons[index]= reason;
						if( ++reajectedCount === promises.length )
							reject( new AggregateError( reasons, ), );
					}
				), );
			}, )
		,
	}, );
	class AggregateError extends Error
	{
		#errors;
		constructor( errors, )
		{
			super();
			this.#errors= [ ...errors, ];
		}
		*[Symbol.iterator]()
		{
			yield* this.#errors;
		}
	}
}
{
	Reflect.defineProperty( Promise, 'try', {
		value: callback=>
			new Promise( ( resolve, reject, )=>
				new SyncPromise( callback, ).then( resolve, reject, )
			, )
		,
	}, );
}
{
	Reflect.defineProperty( Promise, 'make', {
		value: ()=> {
			let resolve, reject;
			const promise= new Promise( ( toResolve, toReject, )=> {
				resolve= toResolve;
				reject= toReject;
			}, );
			return Object.create( Promise.prototype, {
				promise: { value:promise },
				resolve: { value:resolve, },
				reject: { value:reject, },
				then: { value:( ...args )=> promise.then( ...args, ), },
				catch: { value:( ...args )=> promise.catch( ...args, ), },
				finally: { value:( ...args )=> promise.finally( ...args, ), },
			}, );
		},
	}, );
}
{
	Reflect.defineProperty( Number, 'ε', { value:Number.EPSILON, }, );
	Reflect.defineProperty( Number, 'isInfinite', {
		value: number=> !Number.isFinite( number, ) && !Number.isNaN( number, ),
	}, );
	Reflect.defineProperty( Number, 'equal', {
		value: ( x, y, )=> (
			(typeof x === 'number' && typeof x === 'number')
		&&
			(
				x === y
			||
				(x === Infinity && y === -Infinity)
			||
				(x === -Infinity && y === Infinity)
			||
				(
					x - y < Number.ε
				&&
					y - x < Number.ε
				)
			)
		),
	}, )
	Reflect.defineProperty( Number, 'or', {
		value: ( ...numbers )=> {
			for( const number of numbers )
				if(
					number !== null
				&&
					number !== ''
				&&
					!Number.isNaN( number, )
				)
					return Number (number);
			return NaN;
		},
	}, );
}
{
	Reflect.defineProperty( Math, 'mod', {
		value: ( dividend, divisor, )=> (dividend%divisor - - divisor)%divisor,
	}, );
	Reflect.defineProperty( Math, 'π', { value:Math.PI, }, );
	Reflect.defineProperty( Math, 'Π', { value:Math.PI*2, }, );
	Reflect.defineProperty( Math, 'e', { value:Math.E, }, );
}
{
	const log= console.log;
	const info= console.info;
	const warn= console.warn;
	const error= console.error;
	const dirxml= console.dirxml;
	const assert= console.assert;
	const table= console.table;
	const dir= console.dir;
	Reflect.defineProperty( console, 'log', {
		value: ( data, ...rest )=> (log( data, ...rest, ), data),
	}, );
	Reflect.defineProperty( console, 'info', {
		value: ( data, ...rest )=> (info( data, ...rest, ), data),
	}, );
	Reflect.defineProperty( console, 'warn', {
		value: ( data, ...rest )=> (warn( data, ...rest, ), data),
	}, );
	Reflect.defineProperty( console, 'error', {
		value: ( data, ...rest )=> (error( data, ...rest, ), data),
	}, );
	Reflect.defineProperty( console, 'dirxml', {
		value: ( data, ...rest )=> (dirxml( data, ...rest, ), data),
	}, );
	Reflect.defineProperty( console, 'assert', {
		value: ( condition=false, ...data )=> (assert( condition, ...data, ), condition),
	}, );
	Reflect.defineProperty( console, 'table', {
		value: ( data, columns=undefined, )=> (table( data, columns, ), data),
	}, );
	Reflect.defineProperty( console, 'dir', {
		value: ( data, options=undefined, )=> (dir( data, options, ), data),
	}, );
}
{
	const typeLabel= ( value, type, )=>
		value === null? 'null':
		type === 'function'? (
			value.constructor === AsyncFunction? (
				Function.isClass( value, )? 'object:async:class':
				'object:async:function'
			):
			value.constructor === GeneratorFunction? 'object:generatorfunction:function':
			value.constructor === AsyncGeneratorFunction? 'object:async:generatorfunction:function':
			Function.isClass( value, )? 'object:class':
			'object:function'
		):
		type === 'object'? (
			value instanceof Boolean? 'object:boolean':
			value instanceof String? 'object:string':
			value instanceof Number? 'object:number':
			value instanceof BigInt? 'object:bigint':
			value instanceof Symbol? 'object:symbol':
			value instanceof RegExp? 'object:regexp':
			value instanceof Promise? 'object:promise':
			Array.isArray( value, )? 'object:array':
			value instanceof Map? 'object:map':
			value instanceof Set? 'object:set':
			value instanceof WeakMap? 'object:weakmap':
			value instanceof WeakSet? 'object:weakset':
			globalThis.WeakRef && value instanceof WeakRef? 'object:weakref':
			value.constructor.constructor? (
				value.constructor.constructor === AsyncFunction? 'object:promise':
				value.constructor.constructor === GeneratorFunction? 'object:generator':
				value.constructor.constructor === AsyncGeneratorFunction? 'object:async:generator':
				'object'
			):
			'object'
		):
		type
	;
	Reflect.defineProperty( globalThis, 'typeOf', { value: value=> typeLabel( value, typeof value, ), }, );
	Reflect.defineProperty( globalThis, 'typesOf', { value: value=> typeLabel( value, typeof value, ).split( ':', ), }, );
	Reflect.defineProperty( globalThis, 'withType', {
		value: ( value, ...types )=> types.every( (types=> type=> types.includes( type, ))( typesOf( value, ), ), ),
	}, );
}