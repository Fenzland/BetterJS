
const entries= Array.prototype.entries;

Reflect.defineProperty( Array.prototype, 'entries', {
	value(){
		return [ ...entries.call( this, ), ];
	},
}, );

const keys= Array.prototype.keys;

Reflect.defineProperty( Array.prototype, 'keys', {
	value(){
		return [ ...keys.call( this, ), ];
	},
}, );

const values= Array.prototype.values;

Reflect.defineProperty( Array.prototype, 'values', {
	value(){
		return [ ...values.call( this, ), ];
	},
}, );
