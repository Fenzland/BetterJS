
/**
 * Find contents from this string by regex group.
 * 
 * @param regexp {RegExp}
 * @param group  <group>
 * 
 * @return <result>
 * 
 * @typedef <group> <(number)|(string)|[]<group>|{<group>:(string)}>
 * @typedef <result> <(string)|[]<result>|{:<result>}>
 * 
 * @example
 *       'How are you'.matchGroup( /\w+/, );
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
 */
String.prototype.matchGroup= function( regexp, group=0, ){
	return getFromMatches( this.match( regexp, ), group, );
};

const getFromMatches= ( matches, group, )=> {
	
	if( Array.isArray( group, ) )
		return group.map( group=> getFromMatches( matches, group, ), );
	else
	if( group instanceof Object )
	{
		const result= {};
		
		for( let key in group )
			result[key]= getFromMatches( matches, group[key], );
		
		return result;
	}
	else
	if( typeof group === 'number' )
		return matches&& matches[group];
	else
		return matches&& matches.groups&& matches.groups[group];
}
