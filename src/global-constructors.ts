import '../utils/fix_module.ts';

declare global
{
	interface AsyncFunction extends Function
	{
		apply( this:Function, thisArg:any, argArray?:any, ):Promise<any>;
		call( this:Function, thisArg:any, ...argArray:any[] ):Promise<any>;
		bind( this:Function, thisArg:any, ...argArray:any[] ):Promise<any>;
		( ...args:any[] ):Promise<any>;
	}
	
	interface AsyncFunctionConstructor
	{
		new(...args:string[]):AsyncFunction;
		(...args:string[]):AsyncFunction;
		readonly prototype:AsyncFunction;
	}
	
	const AsyncFunction:AsyncFunctionConstructor;
	const GeneratorFunction:GeneratorFunctionConstructor;
	const AsyncGeneratorFunction:AsyncGeneratorFunctionConstructor;
}

Reflect.defineProperty( globalThis, 'AsyncFunction', { value:(async ()=>{}).constructor, }, );
Reflect.defineProperty( globalThis, 'GeneratorFunction', { value:(function *(){}).constructor, }, );
Reflect.defineProperty( globalThis, 'AsyncGeneratorFunction', { value:(async function *(){}).constructor, }, );
