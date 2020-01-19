import '../global-constructors.js';

Reflect.defineProperty( Generator.prototype, 'toArray', {
	value: function toArray(){
		return [ ...this, ];
	},
}, );
