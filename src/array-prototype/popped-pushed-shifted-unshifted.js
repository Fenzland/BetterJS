
/**
 * works like popped, but return a new array rather then modify this array.
 */
Reflect.defineProperty( Array.prototype, 'popped', {
	value(){
		const newbee= [ ...this, ];
		
		newbee.pop();
		
		return newbee;
	},
}, );

/**
 * works like pushed, but return a new array rather then modify this array.
 */
Reflect.defineProperty( Array.prototype, 'pushed', {
	value( ...items ){
		return [ ...this, ...items, ];
	},
}, );

/**
 * works like shifted, but return a new array rather then modify this array.
 */
Reflect.defineProperty( Array.prototype, 'shifted', {
	value(){
		const newbee= [ ...this, ];
		
		newbee.shift();
		
		return newbee;
	},
}, );

/**
 * works like unshifted, but return a new array rather then modify this array.
 */
Reflect.defineProperty( Array.prototype, 'unshifted', {
	value( ...items ){
		return [ ...items, ...this, ];
	},
}, );
