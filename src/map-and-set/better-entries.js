
const mapEntries= Map.prototype.entries;

Reflect.defineProperty( Map.prototype, 'entries', {
	value( callback, ){
		return [ ...mapEntries.call( this, ), ];
	},
}, );

const mapKeys= Map.prototype.keys;

Reflect.defineProperty( Map.prototype, 'keys', {
	value( callback, ){
		return [ ...mapKeys.call( this, ), ];
	},
}, );

const mapValues= Map.prototype.values;

Reflect.defineProperty( Map.prototype, 'values', {
	value( callback, ){
		return [ ...mapValues.call( this, ), ];
	},
}, );

const setEntries= Set.prototype.entries;

Reflect.defineProperty( Set.prototype, 'entries', {
	value( callback, ){
		return [ ...setEntries.call( this, ), ];
	},
}, );

const setKeys= Set.prototype.keys;

Reflect.defineProperty( Set.prototype, 'keys', {
	value( callback, ){
		return [ ...setKeys.call( this, ), ];
	},
}, );

const setValues= Set.prototype.values;

Reflect.defineProperty( Set.prototype, 'values', {
	value( callback, ){
		return [ ...setValues.call( this, ), ];
	},
}, );
