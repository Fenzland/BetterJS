
const log= console.log;
const info= console.info;
const warn= console.warn;
const error= console.error;
const dirxml= console.dirxml;
const assert= console.assert;
const table= console.table;
const dir= console.dir;

Reflect.defineProperty( console, 'log', {
	value: ( data, ...rest )=> (log( data, ...rest, ), data),
}, );

Reflect.defineProperty( console, 'info', {
	value: ( data, ...rest )=> (info( data, ...rest, ), data),
}, );

Reflect.defineProperty( console, 'warn', {
	value: ( data, ...rest )=> (warn( data, ...rest, ), data),
}, );

Reflect.defineProperty( console, 'error', {
	value: ( data, ...rest )=> (error( data, ...rest, ), data),
}, );

Reflect.defineProperty( console, 'dirxml', {
	value: ( data, ...rest )=> (dirxml( data, ...rest, ), data),
}, );

Reflect.defineProperty( console, 'assert', {
	value: ( condition=false, ...data )=> (assert( condition, ...data, ), condition),
}, );

Reflect.defineProperty( console, 'table', {
	value: ( data, columns=undefined, )=> (table( data, columns, ), data),
}, );

Reflect.defineProperty( console, 'dir', {
	value: ( data, options=undefined, )=> (dir( data, options, ), data),
}, );
