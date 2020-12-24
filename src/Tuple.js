import './WeakRefMap.js';

const REAL_CONSTRUCTING= Symbol( 'REAL_CONSTRUCTING', );

class TupleNode
{
	tuple;
	
	#children= new WeakRefMap();
	
	constructor( items=[], )
	{
		this.tuple= new Tuple( items, REAL_CONSTRUCTING, );
	}
	
	getChild( key, items, )
	{
		return this.#children.getOrSet( key, ()=> new TupleNode( items, ), );
	}
}

class Tuple extends Array
{
	constructor( items=[], flag=undefined, )
	{
		super();
		
		if( !Symbol.iterator in items )
			throw new TypeError( 'parameter for Tuple constructor must be iterable (with Symbol.iterator)', );
		
		if( flag !== REAL_CONSTRUCTING )
			return getFromTree( items, );
		
		this.push( ...items, );
		
		Object.freeze( this, );
	}
}

function getFromTree( items, )
{
	let node= treeRoot;
	let index= 0;
	
	for( const item of items )
		node= node.getChild( item, items.slice( 0, ++index, ), );
	
	return node.tuple;
}

const treeRoot= new TupleNode();

if( 'WeakRefMap' in globalThis )
	Reflect.defineProperty( globalThis, 'Tuple', { value:Tuple, }, );
