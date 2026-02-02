let mouseOut = document.querySelector("button")
mouseOut.addEventListener("mouseout", function(e){
    console.log("MouseOut is on");
    console.log(e);

})

let keypress = document.querySelector("input")
keypress.addEventListener("keypress", function(e){
    console.log("input is on");
    console.log(e);

})

let p =document.querySelector("p")
let scrollTimeout;
    window.addEventListener('scroll', function () {
        if (scrollTimeout) return; 

        scrollTimeout = setTimeout(() => {
            console.log('Scroll position:', p.scrollTop);
            scrollTimeout = null; 
        }, 100); 
    });

    window.addEventListener('load', function () {
    console.log('Page fully loaded');

    // Select the scrollable element
    const p = document.querySelector('.p');

    if (!p) {
        console.error('p is not found!');
        return;
    }
})

    const button = document.createElement("button");
    button.textContent = "Click Me";
    button.className = "my-button";

    // Add click event listener to change color to green
    button.addEventListener("click", function () {
        button.style.backgroundColor = "green";
        button.style.color = "white"; // Optional: make text white for contrast
    });

    // Append the button to the body
    document.body.appendChild(button);

  
    const input = document.getElementById('name');
    
    input.addEventListener('#name', function () {
        
        const filteredValue = this.value.replace(/[^a-zA-Z\s]/g, '');
        
        // If user typed invalid characters, reset input value
        if (this.value !== filteredValue) {
            this.value = filteredValue;
        }

        // Update heading dynamically
        heading.textContent = filteredValue;
    });

