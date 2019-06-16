
/**
 * Convert sting to camel case.
 * 
 * @param ucfirst (boolean)  upcase the first character
 * 
 * @return (string)
 */
Object.defineProperty( String.prototype, 'toCamelCase', {
	value( ucfirst=false, wordDelimiter='_', ){
		return this.toLowerCase().split( wordDelimiter, ).map( ( word, index, )=> {
			if( index > 0 || ucfirst )
				return `${word.slice( 0, 1, ).toUpperCase()}${word.slice( 1, )}`;
			else
				return word;
		}, ).join( '', );
	},
}, );
