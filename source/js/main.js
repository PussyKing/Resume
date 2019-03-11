//Smooth scrolling//

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

$('.owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    nav : true,
    dots: false,
    pagination: true
});




/*-------------------- ScrollMagic ---------------------------------------*/

var controller = new ScrollMagic.Controller();

/* Instruction Section */

new ScrollMagic.Scene({triggerElement: ".instructions"})
    .setClassToggle(".instructions", "show")
    .addTo(controller);

/* Slider Section */

new ScrollMagic.Scene({triggerElement: ".slider"})
    .setClassToggle(".slider", "show")
    .addTo(controller);

/* Business-card section */

new ScrollMagic.Scene({triggerElement: ".business-card"})
    .setClassToggle(".business-card", "show")
    .addTo(controller);

/* Resume section */

new ScrollMagic.Scene({triggerElement: ".resume"})
    .setClassToggle(".resume", "show")
    .addTo(controller);

/* About section */

new ScrollMagic.Scene({triggerElement: ".about"})
    .setClassToggle(".about", "show")
    .addTo(controller);

/* My work section */

new ScrollMagic.Scene({triggerElement: ".work"})
    .setClassToggle(".work", "show")
    .addTo(controller);
