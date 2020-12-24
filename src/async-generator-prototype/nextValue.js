import '../global-constructors.js';

Reflect.defineProperty( AsyncGenerator.prototype, 'nextValue', {
	value: async function nextValue(){
		const next= await this.next();
		
		return next.value;
	},
}, );
