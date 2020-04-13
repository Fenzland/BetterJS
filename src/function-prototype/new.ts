import '../../utils/fix_module.ts';

declare global
{
	interface Function
	{
		new: <T extends Object>( ...args:any[] )=>T;
	}
}

Reflect.defineProperty( Function.prototype, 'new', {
	get<T extends Object>():(( ...args:any[] )=>T){
		const newer:(( ...args:any[] )=>T)= ( ...args:any[] ):T=> new this( ...args, );
		
		Reflect.defineProperty( newer, 'length', { value:this.length, }, );
		Reflect.defineProperty( newer, 'name', { value:`${this.name}.new`, }, );
		
		return newer;
	},
}, );
