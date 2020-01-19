import '../global-constructors.js';

Reflect.defineProperty( Generator, 'for', {
	value:{
		for: function*( init, check, next, ){
			let value= init;
			
			while( check( value, ) )
				yield value, value= next( value, );
		},
	}['for'], 
}, );
