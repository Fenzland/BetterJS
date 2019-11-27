
Reflect.defineProperty( Function.prototype, 'new', {
	get(){
		const newer= ( ...args )=> new this( ...args, );
		
		Reflect.defineProperty( newer, 'length', { value:this.length, }, );
		Reflect.defineProperty( newer, 'name', { value:`${this.name}.new`, }, );
		
		return newer;
	},
}, );
