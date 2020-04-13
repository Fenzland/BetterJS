import '../../utils/fix_module.ts';

type Group= number|string|Group[]|{ [key:string]:Group; };
type Result= string|Result[]|{ [key:string]:Result; };

declare global
{
	interface String
	{
		matchGroup( regexp:(RegExp|string), group?:Group, ):Result;
	}
}

/**
 * Find contents from this string by regex group.
 * 
 * @param pattern <{RegExp}|string>
 * @param group   <group>
 * 
 * @return <result>
 * 
 * @typedef <group> <(number)|(string)|[]<group>|{<group>:(string)}>
 * @typedef <result> <(string)|[]<result>|{:<result>}>
 * 
 * @example
 *       'How are you'.matchGroup( /\w+/, 0, );
 *    returns
 *       'How'
 * 
 * @example
 *       'How are you'.matchGroup( /\s(\w+)\s/, 1, );
 *    returns
 *       'are'
 * 
 * @example
 *       'How are you'.matchGroup( /\s(?<who>\w+)$/, 'who', );
 *    returns
 *       'you'
 * 
 * @example
 *       'How are you'.matchGroup( /\w+\s(\w+)\s(?<who>\w+)$/, [ 1, 'who', 0, ], );
 *    returns
 *       [ 'are', 'you', 'How are you', ]
 * 
 * @example
 *       'How are you'.matchGroup( /\w+\s(\w+)\s(?<who>\w+)$/, { entirety:0, predicate:1, object:'who', }, );
 *    returns
 *       { entirety:'How are you', predicate:'are', object:'you', }
 * 
 * @example
 *       'How are you'.matchGroup( /\w+\s(\w+)\s(?<who>\w+)$/, );
 *    returns
 *       { 0:'How are you', 1:'are', 2:'you', who:'you', }
 */
Reflect.defineProperty( String.prototype, 'matchGroup', {
	value( pattern:(RegExp|string), group:Group=undefined, ):Result{
		const nativeMatches:([]&{ groups?:object })= this.match( pattern, )|| [];
		const matches:Result= { ...[ ...nativeMatches, ], ...(nativeMatches.groups|| {}), };
		
		if( group === undefined )
			return matches;
		else
			return getFromMatches( matches, group, );
	},
}, );

const getFromMatches= ( matches:{}, group:Group, ):Result=> {
	
	if( Array.isArray( group, ) )
		return group.map( ( group:Group, ):Result=> getFromMatches( matches, group, ), );
	else
	if( group instanceof Object )
	{
		const result:Result= {};
		
		for( const key in group )
			result[key]= getFromMatches( matches, group[key], );
		
		return result;
	}
	else
		return matches&& matches[group];
}
