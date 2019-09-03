
/**
 * timeout()
 * 
 * @param time  (number)
 * @param value <any#value>
 * 
 * @return <any#value>
 */
globalThis.timeout= ( time, value, )=> new Promise( resolve=> setTimeout( ()=> resolve( value, ), time, ), );

/**
 * nextFrame()
 * 
 * @param value <any#value>
 * 
 * @return <any#value>
 */
if( globalThis.requestAnimationFrame )
	globalThis.nextFrame= value=> new Promise( resolve=> requestAnimationFrame( ()=> resolve( value, ), ), );

/**
 * window.loaded()
 *  a window will only load once, so it should be a promise rather than an event
 * 
 * @return {Event}  the event of window.onload
 */
if( globalThis.window )
	window.loaded= new Promise( resolve=> window.addEventListener( 'load', resolve, ), );
