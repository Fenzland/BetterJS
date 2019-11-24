
/**
 * A better join, with default separator='',
 * 
 * @param separator (string)
 * 
 * @return (string)
 */
Reflect.defineProperty( Array.prototype, 'implode', {
	value( separator='', ){
		return this.join( separator, );
	},
}, );

/**
 * Feed each item with separator and join together, or say join with trailling seprarator
 * 
 * @param separator (string)
 * 
 * @return (string)
 */
Reflect.defineProperty( Array.prototype, 'feed', {
	value( separator='\n', ){
		return `${this.join( separator, )}${separator}`;
	},
}, );
