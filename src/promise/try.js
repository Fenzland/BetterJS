import '../SyncPromise.js';

Reflect.defineProperty( Promise, 'try', {
	value: callback=>
		new Promise( ( resolve, reject, )=>
			new SyncPromise( callback, ).then( resolve, reject, )
		, )
	,
}, );
