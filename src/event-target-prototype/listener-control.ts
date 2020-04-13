import '../map-and-set/getOrSet.ts';

/**
 * Changes:
 * 
 * {EventTarget}.addEventListener returns the listener.
 * add {EventTarget}.removeEventListenersByType.
 * add {EventTarget}.removeAllEventListeners.
 */

type Listener= ( event:Event, )=>void;
type EventMapToListeners= Map<string,Set<Listener>>;

/**
 * Relationship between target and stored listeners
 * 
 * @type {WeakMap}
 */
const listeners:WeakMap<EventTarget,EventMapToListeners>= new WeakMap();

const addEventListener:(( eventName:string, listener:Listener, options?:any )=>void)= EventTarget.prototype.addEventListener;
const removeEventListener:(( eventName:string, listener:Listener, options?:any )=>void)= EventTarget.prototype.removeEventListener;

Reflect.defineProperty( EventTarget.prototype, 'addEventListener', {
	value( type:string, listener:Listener, options?:any ):Listener{
		const context:EventTarget= this|| globalThis;
		
		const map:EventMapToListeners= listeners.getOrSet( context, ():EventMapToListeners=> new Map(), );
		const set:Set<Listener>= map.getOrSet( type, ():Set<Listener>=> new Set(), );
		
		set.add( listener, );
		
		addEventListener.call( context, type, listener, options, );
		
		return listener;
	},
}, );

Reflect.defineProperty( EventTarget.prototype, 'removeEventListener', {
	value( type:string, listener:Listener, options?:any ):Listener{
		const context:EventTarget= this|| globalThis;
		
		const map:EventMapToListeners= listeners.getOrSet( context, ():EventMapToListeners=> new Map(), );
		const set:Set<Listener>= map.getOrSet( type, ():Set<Listener>=> new Set(), );
		
		set.delete( listener, );
		
		removeEventListener.call( context, type, listener, options, );
		
		return listener;
	},
}, );

Reflect.defineProperty( EventTarget.prototype, 'removeEventListenersByType', {
	value( type:string, ):void{
		const context:EventTarget= this|| globalThis;
		
		const map:EventMapToListeners= listeners.get( context, );
		if(!( map ))
			return;
		
		const set:Set<Listener>= map.get( type, );
		if(!( set ))
			return;
		
		set.forEach( ( listener:Listener, ):void=> {
			removeEventListener.call( context, type, listener, );
		}, );
		
		set.clear();
	},
}, );

Reflect.defineProperty( EventTarget.prototype, 'removeAllEventListeners', {
	value():void{
		const context:EventTarget= this|| globalThis;
		
		const map:EventMapToListeners= listeners.get( context, );
		if(!( map ))
			return;
		
		map.forEach( ( set:Set<Listener>, type:string, ):void=> {
			set.forEach( ( listener:Listener, ):void=> {
				removeEventListener.call( context, type, listener, );
			}, );
			
			set.clear();
		}, );
		
		map.clear();
	},
}, );
