import { test, } from '../Robberfly.js';
import '../../src/fp/pipeline-operator-hack.js';

test( 'FP: pipeline operator hack', async ( { assertBe, assertAs, }, )=> {
	
	assertBe(
		true['|>'](
			x=> !x, 
		),
		false,
	);
	
	assertBe(
		'M'['|>'](
			x=> `**${x}**`, 
			x=> [ 0, 1, ].join( x, ), 
		),
		'0**M**1',
	);
	
	assertBe(
		0['|>'](
			x=> x - 1, 
			x=> x ** 2, 
		),
		1,
	);
	
	assertBe(
		1n['|>'](
			x=> -x, 
		),
		-1n,
	);
	
	assertBe(
		Symbol( 'foo', )['|>'](
			x=> x.description, 
		),
		'foo',
	);
	
	assertBe(
		{ foo:1, }['|>'](
			x=> x.foo, 
		),
		1,
	);
	
	assertAs(
		[ 4, ]['|>'](
			x=> x.map( x=> x*2, ), 
		),
		[ 8, ],
	);
}, );

test( 'FP: async pipeline operator hack', async ( { assertBe, assertAs, }, )=> {
	
	assertBe(
		await 1['||>'](
			async x=> Promise.resolve( 1, ),
			x=> x*2,
		),
		2,
	);
	
}, );
