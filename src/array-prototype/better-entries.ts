import '../../utils/fix_module.ts';

declare global
{
	interface Array<T>
	{
		entries<T>():[ number, T, ][];
		keys<T>():number[];
		values<T>():T[];
	}
}

const entries:(<T>(this:T[])=>[ number, T, ][])= Array.prototype.entries;

Reflect.defineProperty( Array.prototype, 'entries', {
	value<T>():[ number, T, ][]{
		return [ ...entries.call( this, ), ];
	},
}, );

const keys:(<T>(this:T[])=>number[])= Array.prototype.keys;

Reflect.defineProperty( Array.prototype, 'keys', {
	value<T>():number[]{
		return [ ...keys.call( this, ), ];
	},
}, );

const values:(<T>(this:T[])=>T[])= Array.prototype.values;

Reflect.defineProperty( Array.prototype, 'values', {
	value<T>():T[]{
		return [ ...values.call( this, ), ];
	},
}, );
