import '../index.js';
import Robberfly from './Robberfly.js';
import paths from './paths.js';

const tester= new Robberfly();

tester.addPath( ...paths, );

const $results= tester.run();

export default async function main()
{
	return (await $results).print();
}

if( import.meta.main )
	main();
