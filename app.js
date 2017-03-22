/* changeHue(rgb, degree)

hslToRgb(h, s, l)
rgbToHsl(r, g, b)



*/

"use strict"

var inDetailView = false;

$(document).ready( function(){
    var appWrapper = $( '#perfect-app-wrapper' );
    appWrapper.click( function(){
        if ( !inDetailView ) {
            appWrapper.addClass( 'inDetailView' );
            window.setTimeout( function(){
                appWrapper.addClass( 'transitionView' );
            }, 2050);
            inDetailView = true;
        } else {
            appWrapper.removeClass( 'inDetailView' );
            window.setTimeout( function(){
                appWrapper.removeClass( 'transitionView' );
            }, 2050);
            inDetailView = false;
        }
    })
});
