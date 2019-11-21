import './src/SyncPromise.js';
import './src/expressional-error-control.js'; // DEP: SyncPromise.js
import './src/promisive.js';
import './src/global-constructors.js';
import './src/async-function-prototype/limit.js'; // DEP: global-constructors.js
import './src/string-prototype/matchGroup.js';
import './src/string-prototype/toXXXCase.js';
import './src/string-prototype/find-index.js';
import './src/array-prototype/forEachAwait.js';
import './src/array-prototype/get-and-subArray.js';
import './src/array-prototype/set.js';
import './src/array-prototype/finding.js';
import './src/array-prototype/mapAndFilter.js';
import './src/array-prototype/implode-and-feed.js';
import './src/array-prototype/popped-pushed-shifted-unshifted.js';
import './src/array-prototype/spliced.js';
import './src/array-prototype/reversed.js';
import './src/array-prototype/sorted.js';
import './src/array-prototype/shuffle-and-shuffled.js';
import './src/map-and-set/map-from-and-to-object.js';
import './src/map-and-set/getOrSet.js';
import './src/map-and-set/pop.js';
import './src/map-and-set/map.js';
import './src/map-and-set/flatMap.js';
import './src/map-and-set/reduce.js';
import './src/map-and-set/forEachAwait.js';
import './src/map-and-set/mapAndFilter.js'; // DEP: map-and-set/reduce.js
import './src/event-target-prototype/listener-control.breaking-free.js'; // DEP: map-and-set/getOrSet.js
import './src/object/isObject-and-isPureObject.js';
import './src/object/areSame.js'; // DEP: object/isObject-and-isPureObject.js
import './src/object/haveOwnProperty.js';
import './src/object/bePrototypeOf.js';
import './src/object/propertyBeEnumerable.js';
import './src/object/deeplyGet-and-deeplySet.js'; // DEP: object/haveOwnProperty.js
import './src/object/deeplyAssign.js';
import './src/function/isXXX.js';
import './src/string/compare.js';
import './src/promise/any.js';
import './src/promise/try.js'; // DEP: SyncPromise.js
import './src/promise/make.js';
import './src/number.js';
import './src/math.js';
import './src/console.js';
import './src/types.js'; // DEP: function/isXXX.js
import './fp.js';
