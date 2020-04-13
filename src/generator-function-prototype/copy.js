import '../global-constructors.js';

Reflect.defineProperty( GeneratorFunction.prototype, 'copy', {
	value: function copy(){
		const copied= copy( this, );
		
		Reflect.defineProperty( copied, 'name', { value:this.name, }, );
		Reflect.defineProperty( copied, 'length', { value:this.length, }, );
		
		return copied;
	},
}, );

const copy=f=>
	function*( ...args ){ return f.call( this, ...args, ); }
;
