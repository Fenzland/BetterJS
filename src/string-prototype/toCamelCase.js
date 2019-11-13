
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


/**
 * Convert sting to FlagCase.
 * 
 * @return (string)
 */
Reflect.defineProperty( String.prototype, 'toFlagCase', {
	value(){
		return this.split( /(?:[_-]|(?=[A-Z]))/, ).map( ( word, index, )=>
			`${word.slice( 0, 1, ).toUpperCase()}${word.slice( 1, )}`
		, ).join( '', );
	},
}, );

/**
 * Convert sting to snake_case.
 * 
 * @return (string)
 */
Reflect.defineProperty( String.prototype, 'toSnakeCase', {
	value(){
		return this.split( /(?:[_-]|(?=[A-Z]))/, ).map( ( word, index, )=> word.toLowerCase(), ).join( '_', );
	},
}, );

/**
 * Convert sting to barbecue-case.
 * 
 * @return (string)
 */
Reflect.defineProperty( String.prototype, 'toBarbecueCase', {
	value(){
		return this.split( /(?:[_-]|(?=[A-Z]))/, ).map( ( word, index, )=> word.toLowerCase(), ).join( '-', );
	},
}, );
