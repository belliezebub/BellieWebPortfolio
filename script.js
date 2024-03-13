document.addEventListener('DOMContentLoaded', function() {
    // Get the container element
    var container = document.querySelector('.home-content');

    // Get the h1 element
    var h1 = container.querySelector('h1');

    // Get the button element
    var btnGroup = container.querySelector('.btn-group');

    // Function to add 'show' class after typing animation completes
    function addShowClass() {
        // Add 'show' class to container
        container.classList.add('show');
        // Show the button
        btnGroup.classList.add('show');
    }

    // When the typing animation ends, call the function to add 'show' class
    h1.addEventListener('animationend', function(event) {
        // Check if the animation is the typing animation
        if (event.animationName === 'typing') {
            addShowClass();
        }
    });

    // In case the typing animation doesn't run (e.g., if animation is already complete)
    if (h1.offsetWidth === 0 && h1.offsetHeight === 0) {
        addShowClass();
    }
});
