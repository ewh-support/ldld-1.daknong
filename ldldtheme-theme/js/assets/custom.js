function layerSlider() {
          if ($('#layerslider').length && jQuery()) {
            $('#layerslider').layerSlider({
                width: '100%',
                height: '139px',
                responsive: true,
                //responsiveUnder: 940,
               // sublayerContainer: 940,
                autoStart: true,
                pauseOnHover: true,
                firstLayer: 1,
                animateFirstLayer: true,
                randomSlideshow: false,
                twoWaySlideshow: true,
                loops: 0,
                forceLoopNum: true,
                autoPlayVideos: false,
                autoPauseSlideshow: 'auto',
                keybNav: true,
                touchNav: true,
                navButtons: true,
                navStartStop: false,
                skin: '',
                skinsPath:'',
            });
          }
        }

jQuery(document).ready(function() {
    layerSlider();
});
