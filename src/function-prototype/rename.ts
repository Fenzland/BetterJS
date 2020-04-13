import '../../utils/fix_module.ts';

declare global
{
	interface Function
	{
		rename<T extends Function>( name:string, ):T;
	}
}

Reflect.defineProperty( Function.prototype, 'rename', {
	value<T extends Function>( name:string, ):T{
		Reflect.defineProperty( this, 'name', { value:name, }, );
		
		return this;
	},
}, );
