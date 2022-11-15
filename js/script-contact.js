// copy e-mail //

function copyEmail() {
    // Get the text field
    var copyText = document.getElementById("myInput");
    const btnTxt = document.getElementById("btn-txt");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    document.execCommand("copy")
  
    // Alert the copied text
  //   btnTxt.textContent="Copied!"
  //   setTimeout(() => {
  //   btnTxt.textContent="Copy E-mail"
  //  }, 5000)
    alert("Copied the text: " + copyText.value);
  }
  


