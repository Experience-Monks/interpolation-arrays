var builder = require( 'interpolation-values' );

module.exports = function( values, interpolationFunc ) {

	interpolationFunc =  builder( values[ 0 ], interpolationFunc );

	return function( t ) {

		var idxT = ( values.length - 1 ) * t,
			sIdx = Math.floor( idxT ),
			eIdx = Math.ceil( idxT ),
			t = idxT - sIdx;

		return interpolationFunc( values[ sIdx ], values[ eIdx ], t );
	};
};