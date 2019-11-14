import './detach.js';
import './curry.js';

Reflect.defineProperty( Function.prototype, 'detachCurry', {
	value( ...params ){
		return this.detachTail().curry( ...params, );
	},
}, );

Reflect.defineProperty( Function.prototype, 'detachYrruc', {
	value( ...params ){
		return this.detach().yrruc( ...params, );
	},
}, );
