#!/usr/bin/env -S deno --allow-net --allow-read
import isolateTest from './isolate.js';
import unionTest from './union.js';

export default async function main()
{
	console.log( '----------------------------------------------------------------', );
	console.log( 'union test:', );
	console.log( '----------------', );
	await unionTest();
	
	console.log( '----------------------------------------------------------------', );
	console.log( 'isolate test:', );
	console.log( '----------------', );
	await isolateTest();
	
	console.log( '----------------------------------------------------------------', );
}

if( import.meta.main )
	main();
