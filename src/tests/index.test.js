import { expect } from "chai";
import { rgbToHex, hexToRgb } from "../index.js";

describe( "Color Code Converter", () => {
    describe( "RGB to Hex conversion", () => {
        it( "converts the basic colors", () => {
            const redHex = rgbToHex( 255, 0, 0 ),
                greenHex = rgbToHex( 0, 255, 0 ),
                blueHex = rgbToHex( 0, 0, 255 );

            expect( redHex ).to.equal( "ff0000" );
            expect( greenHex ).to.equal( "00ff00" );
            expect( blueHex ).to.equal( "0000ff" );
        });
    });

    describe( "Hex to RGB conversion", () => {
        it( "converts the basic colors", () => {
            const red = hexToRgb( "ff0000" ),
                green = hexToRgb( "00ff00" ),
                blue = hexToRgb( "0000ff" );

            expect( red ).to.deep.equal([ 255, 0, 0 ]);
            expect( green ).to.deep.equal([ 0, 255, 0 ]);
            expect( blue ).to.deep.equal([ 0, 0, 255 ]);
        });
    });
});
