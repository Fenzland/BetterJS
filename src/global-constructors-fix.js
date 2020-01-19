import './global-constructors.js';

Reflect.defineProperty( Generator, 'name', { value:'Generator', }, );
Reflect.defineProperty( AsyncGenerator, 'name', { value:'AsyncGenerator', }, );

Reflect.defineProperty( Generator, Symbol.hasInstance, { value:hasInstance, }, );
Reflect.defineProperty( AsyncGenerator, Symbol.hasInstance, { value:hasInstance, }, );

function hasInstance( instance, )
{
	for( let proto= instance; instance; Reflect.getPrototypeOf( instance, ) )
	if( instance.constructor === this )
		return true;
	
	return false;
}
