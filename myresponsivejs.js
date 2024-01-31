// Wait for the HTML content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Get references to various elements in the document
    const scrollContainer = document.querySelector(".card-scroll-container");
    const scrollButtons = document.querySelector(".scroll-buttons");
    const scrollLeftButton = document.querySelector(".scroll-left");
    const scrollRightButton = document.querySelector(".scroll-right");

    // Variable to store the interval for auto-scrolling
    let autoScrollInterval;

    // Function to start the auto-scrolling interval
    function startAutoScroll() {
        // Set up an interval to auto-scroll every 3000 milliseconds (3 seconds)
        autoScrollInterval = setInterval(() => {
            // Check if at the end of the container
            if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
                // If at the end, reset to the start
                scrollContainer.scrollLeft = 0;
            } else {
                // Otherwise, continue scrolling to the right
                scrollContainer.scrollBy({
                    left: scrollContainer.clientWidth,
                    behavior: "smooth",
                });
            }
        }, 3000);
    }

    // Function to stop the auto-scrolling interval
    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // Event listeners for mouseover and mouseout to control auto-scrolling
    scrollContainer.addEventListener("mouseover", stopAutoScroll);
    scrollContainer.addEventListener("mouseout", startAutoScroll);

    // Event listener for the right scroll button
    scrollRightButton.addEventListener("click", function () {
        // Scroll to the right by the width of the container
        scrollContainer.scrollBy({
            left: scrollContainer.clientWidth,
            behavior: "smooth",
        });
    });

    // Event listener for the left scroll button
    scrollLeftButton.addEventListener("click", function () {
        // Scroll to the left by the width of the container
        scrollContainer.scrollBy({
            left: -scrollContainer.clientWidth,
            behavior: "smooth",
        });
    });

    // Event listener for mouse wheel scrolling
    scrollContainer.addEventListener("wheel", function (event) {
        // Prevent the default page scroll behavior
        event.preventDefault();

        // Scroll to the right or left based on the direction of the wheel
        if (event.deltaY > 0) {
            scrollContainer.scrollBy({
                left: scrollContainer.clientWidth,
                behavior: "smooth",
            });
        } else {
            scrollContainer.scrollBy({
                left: -scrollContainer.clientWidth,
                behavior: "smooth",
            });
        }
    });

    // Start the auto-scrolling when the page is loaded
    startAutoScroll();
});
