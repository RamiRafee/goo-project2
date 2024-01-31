/*---------------- For the Reveal during the Scrolling ----------------*/

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      
      }
    }
  }
  
window.addEventListener("scroll", reveal);
/*--------------------------------------------------------------------*/




/*---------------- Upload Button js ----------------*/
const dropArea = document.querySelector(".drop_box"),
  button = dropArea.querySelector("button"),
  dragText = dropArea.querySelector("header"),
  input = dropArea.querySelector("input");
let file;
var filename;

button.onclick = () => {
  input.click();
};

input.addEventListener("change", function (e) {
  const fileName = e.target.files[0].name;
  const filedata = `
    
    <header>
      <h3 >${fileName}</h3>
    </header>
    <p>Selected File: ${fileName}</p>
    `;
  dropArea.innerHTML = filedata;
});
/*--------------------------------------------------------------------*/




/*---------------- Showing the  order form ----------------*/
document.addEventListener("DOMContentLoaded", function () {
    //-----Code for showing the form with the Signups buttons------

    // Get all signup buttons
    const signupButtons = document.querySelectorAll('.sign-up');
  
    // Add click event listener to each signup button
    signupButtons.forEach(function (button) {
      button.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        // Get the service value from the data-service attribute
        const service = button.getAttribute('data-service');
  
        // Show and scroll to the PlaceOrder section
        document.getElementById('servicesOptionsID').value = service;
        displayFunc(document.getElementById('servicesOptionsID'));
        const placeOrderSection = document.getElementById('PlaceOrder');
        placeOrderSection.style.display = 'block';
        placeOrderSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
    const customRadio = document.getElementById('customRadio');
    const customLeadsOption = document.getElementById('customleadschange');
    const customRequirementsOption = document.getElementById('customRequirementsOption');



    //-------Code for showing the cusotm form with the radio button------

    // Add change event listener to the radio button
    customRadio.addEventListener('change', function () {
      
      if (customRadio.checked) {
        console.log("checked")
        // If Custom Service is selected, make the options visible
        customLeadsOption.style.display = 'block';
        customRequirementsOption.style.display = 'block';
        document.getElementById('servicesOptionsID').value = 'customLeads';
        displayFunc(document.getElementById('servicesOptionsID'));
        const placeOrderSection = document.getElementById('PlaceOrder');
        placeOrderSection.style.display = 'block';
        placeOrderSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // If Custom Service is not selected, hide the options
        customLeadsOption.style.display = 'none';
        customRequirementsOption.style.display = 'none';
      }
    });

  });
/*--------------------------------------------------------------------*/