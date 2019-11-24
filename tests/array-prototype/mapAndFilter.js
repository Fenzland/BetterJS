import { test, } from '../Robberfly.js';
import '../../src/array-prototype/mapAndFilter.js';

test( '{Array}.mapAndFilter', ( { assertAs, }, )=> {
	assertAs(
		[ 0, 1, 2, 3, ].mapAndFilter( x=> x*2, x=> x > 3, ),
		[ 4, 6, ],
	);
}, );
