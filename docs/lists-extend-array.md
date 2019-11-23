# lists extend array (breaking)

_This feature makes breaking change, not included in *breaking-free* version_

There are various lists in DOM, the most frequently used is NodeList. Unfortunately, they are not Arrays as we wish. 
We have to use `Array.prototype.slice.call`, `Array.from` or `...` like idiots. 
With BetterJS, things become bright. We make these lists extend Array. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/lists-extend-array.js';

const doms= document.querySelectorAll( '.some-class', )

doms.reduce(/**/);
doms.every(/**/);
// ...
```

## avaliable lists

* CSSRuleList
* DOMRectList
* DOMStringList
* DOMTokenList
* DataTransferItemList
* FileList
* MediaList
* MediaQueryList
* NodeList
* PerformanceObserverEntryList
* PresentationConnectionList
* RadioNodeList
* SVGAnimatedLengthList
* SVGAnimatedNumberList
* SVGAnimatedTransformList
* SVGLengthList
* SVGNumberList
* SVGPointList
* SVGStringList
* SVGTransformList
* SourceBufferList
* StyleSheetList
* TextTrackCueList
* TextTrackList
* TouchList
* SpeechGrammarList
* HTMLAllCollection
* HTMLCollection
* HTMLFormControlsCollection
* HTMLOptionsCollection
