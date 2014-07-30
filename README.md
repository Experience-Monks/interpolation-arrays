interpolation-arrays
==================

This module will interpolate between many values in an Array.

Example:
--------
```javascript
var numberValuesToInterpolate = [ 0, 1, 2 ];

var arrayPointValuesToInterpolate = [  
										[ 0, 0 ], 
										[ 1, 1 ], 
										[ 2, 2 ] 
									];

var objectPointValuesToInterpolate = [  
										{ x: 0, y: 0 }, 
										{ x: 1, y: 1 }, 
										{ x: 2, y: 2 } 
									];

var numberInterpolate = require( '../index' )( numberValuesToInterpolate );
var arrayPointInterpolate = require( '../index' )( arrayPointValuesToInterpolate );
var objectPointValuesToInterpolate = require( '../index' )( objectPointValuesToInterpolate );


console.log( numberInterpolate( 0.5 ) ); // 1
console.log( numberInterpolate( 0.75 ) ); // 1.5

console.log( arrayPointInterpolate( 0.5 ) ); // [ 1, 1 ]
console.log( arrayPointInterpolate( 0.75 ) ); // [ 1.5, 1.5 ]

console.log( objectPointValuesToInterpolate( 0.5 ) ); // { x: 1, y: 1 }
console.log( objectPointValuesToInterpolate( 0.75 ) ); // { x: 1.5, y: 1.5 }
```