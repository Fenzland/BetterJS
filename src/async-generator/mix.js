import '../promise/make.js';
import '../global-constructors.js';

Reflect.defineProperty( AsyncGenerator, 'mix', { value:mix, }, );

async function * mix( ...asyncGenerators )
{
	for ( const asyncGenerator of asyncGenerators )
		if(!( asyncGenerator instanceof AsyncGenerator ))
			throw new TypeError( 'every argument for AsyncGenerator.mix must be a instance of AsyncGenerator' );
	
	const queue= [];
	let i= 0;
	
	asyncGenerators.forEach( async asyncGenerators=> {
		while( true )
		{
			queue.push( Promise.make(), );
			
			const { value, done, }= await asyncGenerator.next();
			
			if( done )
				return queue.pop();
			
			queue[i++].resolve( value, );
		}
	}, );
	
	for await( const promise of queue )
		yield promise;
}
