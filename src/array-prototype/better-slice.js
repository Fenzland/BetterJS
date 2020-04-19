import './finding.js';

const slice= Array.prototype.slice;

Reflect.defineProperty( Array.prototype, 'slice', {
	value( start=undefined, end=undefined, ){
		const startNum= typeof start === 'function'? this.findIdx( start, )??-Infinity : start;
		const endNum= typeof end === 'function'? this.findIdx( end, )??Infinity : end;
		
		return slice.call( this, startNum, endNum, );
	},
}, );
