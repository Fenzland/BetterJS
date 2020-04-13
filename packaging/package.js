#!/usr/bin/env -S deno --allow-net --allow-read --allow-write
import '../index.js';
import { dirname, resolve, } from 'https://oxo.fenzland.com/OsO/0.1/path.js';
import { read_file, } from 'https://dragonfly.fenz.land/utils/fs.js';
import { encode, } from 'https://oxo.fenzland.com/OsO/0.1/text-encoder.js';

const entries= [ 'index.js', 'fp.js', 'breaking-free.js', ];

const targetDir= 'packaging/packaged';

const readImports= Function.asyncPipe(
	read_file,
	$=> $.split( '\n', ),
	$=> $.mapAndFilter(
		$=> $.matchGroup( /^import (?:.+? from)?'(?<path>[^']+)';( \/\/.*)?$/, 'path', ),
		Boolean,
	),
);

const collectImports= async file=>
	readImports( file, )['||>'](
		$=> $.map( resolve.prepare( dirname( file, ), ).valve(), ),
	)
;

const buildMap= async entry=> [ entry, ]['|>'](
	(async $=>
		$.map(
			( item, index, array, )=> item['||>'](
				collectImports,
				$=> array.push( ...$, ),
			),
		)['|>']( Promise.all, )
	).awaitThrough(),
);

const isValidLine= line=> !line.match( /^\s*$|^import|^\s*(?:\/\/|\/\*| \* | \*\/)|^#!/, );

const packageFiles= async files=> files.map(
	Function.asyncPipe(
		read_file,
		$=> $.split( '\n', ),
		$=> $.filter( isValidLine, ),
		$=> $.map( $=> `\t${$}`, ),
		$=> $.length? [ '{', ...$, '}', ]: [],
	),
)['||>'](
	Promise.all,
	$=> $.flat().join( '\n', ),
);

const getPath= import.meta.url['|>'](
	$=> $.replace( /^file:\/\//, '', ),
	dirname,
	dirname,
	$=> resolve.prepare( $, ),
);

const writeToFile= name=>
	content=> Deno.writeFile( getPath( `${targetDir}/${name}`, ), encode( content, ), )
;

entries.map(
	entry=> entry['||>'](
		getPath,
		buildMap,
		packageFiles,
		writeToFile( entry, ),
	),
);
