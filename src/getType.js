
/**
 * function instead of typeof
 * 
 * "array" for arraies
 * "null" for nulls
 */
globalThis.getType= value=> value === null? 'null': Array.isArray( value, )? 'array': typeof value;
