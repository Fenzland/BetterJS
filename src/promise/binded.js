
Reflect.defineProperty( Promise, 'resolve', { value: Promise.resolve.bind( Promise, ), }, );
Reflect.defineProperty( Promise, 'reject', { value: Promise.reject.bind( Promise, ), }, );
Reflect.defineProperty( Promise, 'all', { value: Promise.all.bind( Promise, ), }, );
Reflect.defineProperty( Promise, 'race', { value: Promise.race.bind( Promise, ), }, );
