
Reflect.defineProperty( Function.prototype, 'copy', {
	value: function(){
		const copied= copy( this, );
		
		Reflect.defineProperty( copied, 'name', { value:this.name, }, );
		Reflect.defineProperty( copied, 'length', { value:this.length, }, );
		
		return copied;
	},
}, );

const copy=f=>
	f.prototype?
		function( ...args ){ return f.call( this, ...args, ); }:
	( ...args )=> f( ...args, )
;
