import { test, } from '../Robberfly.js';
import '../../src/array/concat.js';

test( 'Array.concat', ( { assertAs, }, )=> {
	assertAs( Array.concat( [], [], ), [], );
	assertAs( Array.concat( [ 0, 1, ], 2, ), [ 0, 1, 2, ], );
	assertAs( Array.concat( [ 0, [ 1, ], ], 2, ), [ 0, [ 1, ], 2, ], );
}, );
