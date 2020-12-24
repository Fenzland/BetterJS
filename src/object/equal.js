
const equal= ( x, y, )=> [ x, ].includes( y, );

Reflect.defineProperty( Object, 'equal', { value:equal, }, );
