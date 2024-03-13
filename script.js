document.addEventListener('DOMContentLoaded', function() {
    // Get the container element
    var container = document.querySelector('.home-content');

    // Get the h1 element
    var h1 = container.querySelector('h1');

    // Get the button element
    var btnGroup = container.querySelector('.btn-group');

    // When the typing animation ends
    h1.addEventListener('animationend', function() {
        // Add 'show' class to container
        container.classList.add('show');
        // Show the button
        btnGroup.classList.add('show');
    });
});
