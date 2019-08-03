
export function isReservedKey( key, )
{
	return (
		key === 'constructor'
	||
		key === 'prototype'
	||
		(key.startsWith( '__', ) && key.endsWith( '__', ))
	);
}
