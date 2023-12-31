//your JS code here. If required.
 function updateSizeInfo() {
        // Get width and height of the window
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        // Update the content of the <h1> tag
        document.getElementById("widthValue").textContent = width;
        document.getElementById("heightValue").textContent = height;
    }

    // Initial update
    updateSizeInfo();

    // Add an event listener for window resize
    window.addEventListener("resize", updateSizeInfo);