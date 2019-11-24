import { test, } from '../Robberfly.js';
import '../../src/array-prototype/implode-and-feed.js';

test( '{Array}.implode', ( { assertBe, }, )=> {
	assertBe( [ 'A', 'B', 'C', ].implode(), 'ABC', );
	assertBe( [ 'A', 'B', 'C', ].implode( ' ', ), 'A B C', );
}, );

test( '{Array}.feed', ( { assertBe, }, )=> {
	assertBe( [ 'A', 'B', 'C', ].feed(), 'A\nB\nC\n', );
	assertBe( [ 'A', 'B', 'C', ].feed( ' ', ), 'A B C ', );
}, );

