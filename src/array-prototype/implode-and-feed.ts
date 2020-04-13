import '../../utils/fix_module.ts';

declare global
{
	interface Array<T>
	{
		implode<T>( separator?:string, ):string;
		feed<T>( separator?:string, ):string;
	}
}

/**
 * A better join, with default separator='',
 * 
 * @param separator (string)
 * 
 * @return (string)
 */
Reflect.defineProperty( Array.prototype, 'implode', {
	value<T>( separator:string='', ):string{
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
	value<T>( separator:string='\n', ):string{
		return `${this.join( separator, )}${separator}`;
	},
}, );
