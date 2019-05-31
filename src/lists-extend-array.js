
[
	'CSSRuleList',
	'DOMRectList',
	'DOMStringList',
	'DOMTokenList',
	'DataTransferItemList',
	'FileList',
	'MediaList',
	'MediaQueryList',
	'NodeList',
	'PerformanceObserverEntryList',
	'PresentationConnectionList',
	'RadioNodeList',
	'SVGAnimatedLengthList',
	'SVGAnimatedNumberList',
	'SVGAnimatedTransformList',
	'SVGLengthList',
	'SVGNumberList',
	'SVGPointList',
	'SVGStringList',
	'SVGTransformList',
	'SourceBufferList',
	'StyleSheetList',
	'TextTrackCueList',
	'TextTrackList',
	'TouchList',
	'SpeechGrammarList',
].forEach( List=> {
	if( globalThis[List] )
	{
		globalThis[List].__proto__= Array;
		globalThis[List].prototype.__proto__= Array.prototype;
	}
}, );
