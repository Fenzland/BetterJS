
const entries= Array.prototype.entries;

Reflect.defineProperty( Array.prototype, 'entries', {
	value( callback, ){
		return [ ...entries.call( this, ), ];
	},
}, );

const keys= Array.prototype.keys;

Reflect.defineProperty( Array.prototype, 'keys', {
	value( callback, ){
		return [ ...keys.call( this, ), ];
	},
}, );

const values= Array.prototype.values;

Reflect.defineProperty( Array.prototype, 'values', {
	value( callback, ){
		return [ ...values.call( this, ), ];
	},
}, );
