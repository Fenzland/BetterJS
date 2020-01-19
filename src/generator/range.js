import './for.js';

Reflect.defineProperty( Generator, 'range', {
	value: function* range( start, to, step=1, ){
		const stepUnit= (
			step > 0? step:
			step < 0? -step:
			1
		);
		
		if( start > to )
			yield* Generator.for( start, $=> $ >= to, $=> $-= stepUnit, );
		else
			yield* Generator.for( start, $=> $ <= to, $=> $-=- stepUnit, );
	},
}, );
