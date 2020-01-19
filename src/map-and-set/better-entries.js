
const mapEntries= Map.prototype.entries;

Reflect.defineProperty( Map.prototype, 'entries', {
	value(){
		return [ ...mapEntries.call( this, ), ];
	},
}, );

const mapKeys= Map.prototype.keys;

Reflect.defineProperty( Map.prototype, 'keys', {
	value(){
		return [ ...mapKeys.call( this, ), ];
	},
}, );

const mapValues= Map.prototype.values;

Reflect.defineProperty( Map.prototype, 'values', {
	value(){
		return [ ...mapValues.call( this, ), ];
	},
}, );

const setEntries= Set.prototype.entries;

Reflect.defineProperty( Set.prototype, 'entries', {
	value(){
		return [ ...setEntries.call( this, ), ];
	},
}, );

const setKeys= Set.prototype.keys;

Reflect.defineProperty( Set.prototype, 'keys', {
	value(){
		return [ ...setKeys.call( this, ), ];
	},
}, );

const setValues= Set.prototype.values;

Reflect.defineProperty( Set.prototype, 'values', {
	value(){
		return [ ...setValues.call( this, ), ];
	},
}, );
