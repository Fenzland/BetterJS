
/**
 * A better join, with default separator='',
 * 
 * @param separator (string)
 * 
 * @return (string)
 */
Object.defineProperty( Array.prototype, 'implode', {
	value( separator='', ){
		return this.join( separator, );
	},
}, );
