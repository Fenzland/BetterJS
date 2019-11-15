
/**
 * set an item to an array, fix strange behavior of over length index, support negative index
 * 
 * if 0 <= index < length :   set the item of [index]
 * if -length <= index < 0 :  set the item of [length + index]
 * if index = length :        push the item to the tail of array
 * if index < -length :       noop
 * if length < index :        noop
 * 
 * @param index (number)
 * 
 * @return <any>
 */
Reflect.defineProperty( Array.prototype, 'set', {
	value( index, value, ){
		const length= this.length;
		
		if( index > length || index < -length )
			return value;
		else
		if( index < 0 )
			return this[length - - index]= value;
		else
			return this[index]= value;
	},
}, );
