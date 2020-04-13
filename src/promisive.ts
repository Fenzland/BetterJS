import '../utils/fix_module.ts';

declare global
{
	function then( onresolved?:(( value:void, )=>void|Promise<void>) ):Promise<void>;
	function timeout( time?:number, value?:void ):Promise<void>;
	function nextFrame( value:void ):Promise<void>;
	
	interface Window
	{
		loaded: Promise<void>;
	}
}

/**
 * then()
 * 
 * @usage
 *     await then();
 *     then( ()=> { what to do at next micro task }, );
 * 
 * @param time  (number)
 * @param value <any#value>
 * 
 * @return <any#value>
 */
globalThis.then= async ( onresolved:(( value:void, )=>void|Promise<void>)=undefined, ):Promise<void>=> onresolved? Promise.resolve().then( onresolved, ): Promise.resolve();

/**
 * timeout()
 * 
 * @usage
 *     await timeout();
 *     await timeout( milliseconds, );
 *     timeout().then( ()=> { what to do at next macro task }, );
 *     timeout( x, ).then( ()=> { what to do after x milliseconds }, );
 * 
 * @param time  (number)
 * @param value <any#value>
 * 
 * @return <any#value>
 */
globalThis.timeout= ( time:number=undefined, value:void=undefined, )=> new Promise( ( resolve:( value:void, )=>void ):void=> void setTimeout( ():void=> void resolve( value, ), time, ), );

/**
 * nextFrame()
 * 
 * @usage
 *     await nextFrame();
 *     nextFrame().then( ()=> { what to do at next animation frame }, );
 * 
 * @param value <any#value>
 * 
 * @return <any#value>
 */
if( globalThis.requestAnimationFrame )
	globalThis.nextFrame= ( value:void, ):Promise<void>=> new Promise( resolve=> globalThis.requestAnimationFrame( ()=> resolve( value, ), ), );
else
	globalThis.nextFrame= ( value:void, ):Promise<void>=> timeout( 1000/60, value, );

/**
 * window.loaded()
 *  a window will only load once, so it should be a promise rather than an event
 * 
 * @usage
 *     await window.loaded;
 *     window.loaded.then( ()=> { what to do after the window has loaded }, );
 * 
 * @return {Event}  the event of window.onload
 */
if( (<any>globalThis).window )
	window.loaded= new Promise( resolve=> window.addEventListener( 'load', ()=> void resolve(), ), );
