
/**
 * Convert sting to camelCase.
 * 
 * @return (string)
 */
Reflect.defineProperty( String.prototype, 'toCamelCase', {
	value(){
		return this.split( /(?:[_-]|(?=[A-Z]))/, ).map( ( word, index, )=>
			index > 0?
				`${word.slice( 0, 1, ).toUpperCase()}${word.slice( 1, )}`:
			word.toLowerCase()
		, ).join( '', );
	},
}, );
