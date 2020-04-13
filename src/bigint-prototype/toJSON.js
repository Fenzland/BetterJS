
Reflect.defineProperty( BigInt.prototype, 'toJSON', {
	value: function toJSON(){
		return this < Number.MAX_SAFE_INTEGER && this > Number.MIN_SAFE_INTEGER? Number( this, ): `0x${this.toString( 16, ).toUpperCase()}`;
	},
}, );
