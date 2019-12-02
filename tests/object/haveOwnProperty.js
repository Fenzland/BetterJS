import { test, } from '../Robberfly.js';
import '../../src/object/haveOwnProperty.js';

test( 'Object.haveOwnProperty', ( { assertBe, }, )=> {
	const foo= Object.assign( Object.create( { protoProp:1, }, ), { prop:2, }, );
	
	assertBe( Object.haveOwnProperty( foo, 'prop', ), true, );
	assertBe( Object.haveOwnProperty( foo, 'protoProp', ), false, );
	assertBe( Object.haveOwnProperty( null, 'prop', ), false, );
	assertBe( Object.haveOwnProperty( undefined, 'prop', ), false, );
}, );
