
/**
 * Changes:
 * 
 * {EventTarget}.addEventListener returns the listener.
 * add {EventTarget}.removeEventListenersByType.
 * add {EventTarget}.removeAllEventListeners.
 */

/**
 * Relationship between target and stored listeners
 * 
 * @type {WeakMap}
 */
const listeners= new WeakMap();

const addEventListener= EventTarget.prototype.addEventListener;
const removeEventListener= EventTarget.prototype.removeEventListener;

Reflect.defineProperty( EventTarget.prototype, 'addEventListener', {
	value( type, listener, ...options ){
		const map= listeners.get( this, )|| (map=> (listeners.set( this, map, ), map))( new Map(), );
		const set= map.get( type, )|| (set=> (map.set( type, set, ), set))( new Set(), );
		
		set.add( listener, );
		
		addEventListener.call( this, type, listener, ...options, );
		
		return listener;
	},
}, );

Reflect.defineProperty( EventTarget.prototype, 'removeEventListener', {
	value( type, listener, ...options ){
		const map= listeners.get( this, )|| (map=> (listeners.set( this, map, ), map))( new Map(), );
		const set= map.get( type, )|| (set=> (map.set( type, set, ), set))( new Set(), );
		
		set.delete( listener, );
		
		return removeEventListener.call( this, type, listener, ...options, );
	},
}, );

Reflect.defineProperty( EventTarget.prototype, 'removeEventListenersByType', {
	value( type, ){
		const map= listeners.get( this, );
		if(!( map ))
			return;
		
		const set= map.get( type, );
		if(!( set ))
			return;
		
		set.forEach( listener=> {
			removeEventListener.call( this, type, listener, );
		}, );
		
		set.clear();
	},
}, );

Reflect.defineProperty( EventTarget.prototype, 'removeAllEventListeners', {
	value(){
		const map= listeners.get( this, );
		if(!( map ))
			return;
		
		map.forEach( ( set, type, )=> {
			set.forEach( listener=> {
				removeEventListener.call( this, type, listener, );
			}, );
			
			set.clear();
		}, );
	},
}, );

