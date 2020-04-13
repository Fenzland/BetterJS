import '../global-constructors.js';

Reflect.defineProperty( AsyncGeneratorFunction.prototype, 'copy', {
	value: function copy(){
		const copied= copy( this, );
		
		Reflect.defineProperty( copied, 'name', { value:this.name, }, );
		Reflect.defineProperty( copied, 'length', { value:this.length, }, );
		
		return copied;
	},
}, );

const copy=f=>
	async function*( ...args ){ return f.call( this, ...args, ); }
;
