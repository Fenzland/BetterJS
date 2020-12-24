import './map-and-set/getOrSet.js';
import './WeakRefMap.js';

const REAL_CONSTRUCTING= Symbol( 'REAL_CONSTRUCTING', );

class RecordKeyNode
{
	#children= new Map();
	
	getChild( key, entries, )
	{
		return this.#children.getOrSet( key, ()=> new RecordValueNode( entries, ), );
	}
}

class RecordValueNode
{
	tuple;
	
	#children= new WeakRefMap();
	
	constructor( entries=[], )
	{
		this.tuple= new Record( entries, REAL_CONSTRUCTING, );
	}
	
	getChild( key, )
	{
		return this.#children.getOrSet( key, ()=> new RecordKeyNode(), );
	}
}

class Record
{
	constructor( entries=[], flag=undefined, )
	{
		if(!( Symbol.iterator in entries && entries[Symbol.iterator] ))
			throw new TypeError( 'parameter for Record constructor must be iterable (with Symbol.iterator)', );
		
		if( flag !== REAL_CONSTRUCTING )
			return getFromTree( uniformEntries( entries, ), );
		
		for( const { 0:key, 1:value, } of entries )
		{
			if( typeof key !== 'string' )
				throw new TypeError( 'key for Record must be string', );
			
			this[key]= value;
		}
		
		Object.freeze( this, );
	}
	
	*[Symbol.iterator]()
	{
		yield* Object.entries( this, );
	}
	
	static from( object, )
	{
		return new this( Object.entries( object, ), );
	}
}

function uniformEntries( entries, )
{
	const uniquified= [ ...new Map( entries, ), ];
	const sorted= uniquified.sort( ( { 0:x, }, { 0:y, }, )=> (x > y) - 1, );
	
	return sorted;
}

function getFromTree( entries, )
{
	let node= treeRoot;
	let index= 0;
	
	for( const { 0:key, 1:value, } of entries )
	{
		node= node.getChild( key, ).getChild( value, entries.slice( 0, ++index, ), );
	}
	
	return node.tuple;
}

const treeRoot= new RecordValueNode();

if( 'WeakRefMap' in globalThis )
	Reflect.defineProperty( globalThis, 'Record', { value:Record, }, );
