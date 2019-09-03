
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
