import { test, } from '../Robberfly.js';
import '../../src/string-prototype/matchGroup.js';

test( '{String}.matchGroup', ( { assertBe, assertAs, }, )=> {
	{
		const string= '<a href="https://better-js.fenz.land/">BetterJS</a>';
		const regex= /href="([^"]*)"/;
		
		assertBe( string.matchGroup( regex, 0, ), 'href="https://better-js.fenz.land/"', );
		assertBe( string.matchGroup( regex, 1, ), 'https://better-js.fenz.land/', );
	}
	{
		const string= '<a href="https://better-js.fenz.land/">BetterJS</a>';
		const regex= /href="(?<link>[^"]*)"[^<>]*>(?<label>.*?)<\/a>/;
		
		assertBe( string.matchGroup( regex, 0, ), 'href="https://better-js.fenz.land/">BetterJS</a>', );
		assertBe( string.matchGroup( regex, 'link', ), 'https://better-js.fenz.land/', );
		assertBe( string.matchGroup( regex, 1, ), 'https://better-js.fenz.land/', );
		assertBe( string.matchGroup( regex, 'label', ), 'BetterJS', );
		assertBe( string.matchGroup( regex, 2, ), 'BetterJS', );
		
		const { link, label, }= string.matchGroup( regex, );
		assertBe( link, 'https://better-js.fenz.land/', );
		assertBe( label, 'BetterJS', );
		
		assertAs( string.matchGroup( regex, ), {
			0: 'href="https://better-js.fenz.land/">BetterJS</a>',
			1: 'https://better-js.fenz.land/',
			2: 'BetterJS',
			link: 'https://better-js.fenz.land/',
			label: 'BetterJS',
		}, );
		
		const data= string.matchGroup( regex, [ { name:'label', href:'link', }, ], );
		
		assertAs( data, [
			{
				name: 'BetterJS',
				href: 'https://better-js.fenz.land/',
			},
		], );
	}
}, );
