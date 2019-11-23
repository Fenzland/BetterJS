# mathematic constants: π, Π, e

Some people (like myself), well prefer to use `π` and `e` rather then `Math.PI` and `Math.E`. 
So we make a little trick to let you use `Math.π` and `Math.e`. 

The π is only a half of circle, the 2π is essential then π, so we add a `Math.Π` for 2π. 

## Usage

```javascript
const { Π, cos, e, }= Math;

cos( Π/8, ) === Math.sqrt( 1/2, );

e**3;
```
