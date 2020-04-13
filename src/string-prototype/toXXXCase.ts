import '../../utils/fix_module.ts';

declare global
{
	interface String
	{
		toCamelCase():string;
		toFlagCase():string;
		toSnakeCase():string;
		toBarbecueCase():string;
	}
}

/**
 * Convert sting to camelCase.
 * 
 * @return (string)
 */
Reflect.defineProperty( String.prototype, 'toCamelCase', {
	value():string{
		return this.split( /(?:[_-]|(?=[A-Z]))/, ).map( ( word:string, index:number, ):string=>
			index > 0?
				`${word.slice( 0, 1, ).toUpperCase()}${word.slice( 1, )}`:
			word
		, ).join( '', );
	},
}, );


/**
 * Convert sting to FlagCase.
 * 
 * @return (string)
 */
Reflect.defineProperty( String.prototype, 'toFlagCase', {
	value():string{
		return this.split( /(?:[_-]|(?=[A-Z]))/, ).map( ( word:string, index:number, ):string=>
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
	value():string{
		return this.split( /(?:[_-]|(?=[A-Z]))/, ).map( ( word:string, index:number, ):string=> word.toLowerCase(), ).join( '_', );
	},
}, );

/**
 * Convert sting to barbecue-case.
 * 
 * @return (string)
 */
Reflect.defineProperty( String.prototype, 'toBarbecueCase', {
	value():string{
		return this.split( /(?:[_-]|(?=[A-Z]))/, ).map( ( word:string, index:number, ):string=> word.toLowerCase(), ).join( '-', );
	},
}, );
