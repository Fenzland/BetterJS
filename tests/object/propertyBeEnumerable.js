import { test, } from '../Robberfly.js';
import '../../src/object/propertyBeEnumerable.js';

test( 'Object.propertyBeEnumerable', ( { assertBe, }, )=> {
	const foo= Object.assign( Object.create( { protoProp:1, }, { innu:{ value:0, enumerable:false, }, }, ), { prop:2, }, );
	
	assertBe( Object.propertyBeEnumerable( foo, 'prop', ), true, );
	assertBe( Object.propertyBeEnumerable( foo, 'innu', ), false, );
	assertBe( Object.propertyBeEnumerable( foo, 'protoProp', ), false, );
	assertBe( Object.propertyBeEnumerable( null, 'prop', ), false, );
	assertBe( Object.propertyBeEnumerable( undefined, 'prop', ), false, );
}, );
