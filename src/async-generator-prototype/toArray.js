import '../global-constructors.js';

Reflect.defineProperty( AsyncGenerator.prototype, 'toArray', {
	value: async function toArray(){
		const items= [];
		
		for await( const item of this )
			items.push( item, );
		
		return items;
	},
}, );
