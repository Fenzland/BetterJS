import './src/SyncPromise.ts';
import './src/expressional-error-control.ts'; // DEP: SyncPromise.ts
import './src/instanceof-types.ts';
import './src/lists-extend-array.ts';
import './src/promisive.ts';
import './src/global-constructors.ts';
import './src/function-prototype/new.ts';
import './src/function-prototype/rename.ts';
import './src/async-function-prototype/limit.ts'; // DEP: global-constructors.ts
import './src/generator-function/toIterator.ts'; // DEP: global-constructors.ts
import './src/string-prototype/matchGroup.ts';
import './src/string-prototype/toXXXCase.ts';
import './src/string-prototype/find-index.ts';
import './src/array-prototype/forEach-fix.ts';
import './src/array-prototype/forEachAwait.ts';
import './src/array-prototype/mapAwait.ts';
import './src/array-prototype/flatMapAwait.ts';
import './src/array-prototype/get-and-subArray.ts';
import './src/array-prototype/set.ts';
import './src/array-prototype/finding.ts';
import './src/array-prototype/mapAndFilter.ts';
import './src/array-prototype/implode-and-feed.ts';
import './src/array-prototype/better-reduce.ts';
import './src/array-prototype/better-entries.ts';
import './src/array-prototype/popped-pushed-shifted-unshifted.ts';
import './src/array-prototype/spliced.ts';
import './src/array-prototype/reversed.ts';
import './src/array-prototype/sorted.ts';
import './src/array-prototype/shuffle-and-shuffled.ts';
import './src/map-and-set/map-from-and-to-object.ts';
import './src/map-and-set/better-set-and-add.ts';
import './src/map-and-set/better-entries.ts';
import './src/map-and-set/getOrSet.ts';
import './src/map-and-set/pop.ts';
import './src/map-and-set/map.ts';
import './src/map-and-set/flatMap.ts';
import './src/map-and-set/reduce.ts';
import './src/map-and-set/forEachAwait.ts';
import './src/map-and-set/mapAwait.ts';
import './src/map-and-set/flatMapAwait.ts';
import './src/map-and-set/mapAndFilter.ts'; // DEP: map-and-set/reduce.ts
import './src/event-target-prototype/listener-control.ts'; // DEP: map-and-set/getOrSet.js
import './src/object/isObject-and-isPureObject.ts';
import './src/object/areSame.ts'; // DEP: object/isObject-and-isPureObject.js
import './src/object/haveOwnProperty.ts';
import './src/object/bePrototypeOf.ts';
import './src/object/propertyBeEnumerable.js';
import './src/object/get-and-set.js'; // DEP: object/haveOwnProperty.js
import './src/object/deeplyGet.ts';
import './src/object/deeplyAssign.ts';
import './src/object/haveOwnProperty.ts';
import './src/function/isXXX.ts';
import './src/string/compare.ts';
import './src/promise/any.ts';
import './src/number.ts';
import './src/math.ts';
import './src/types.ts'; // DEP: function/isXXX.ts
