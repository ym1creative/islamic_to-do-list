function addItem() {
    var newItemText = document.getElementById("newItem").value;
    
    if (newItemText.trim() !== "") {
      var newDiv = document.createElement("div");
      newDiv.className = "wow";
      
      var newLabel = document.createElement("label");
      newLabel.textContent = newItemText;
      
      var newCheckbox = document.createElement("input");
      newCheckbox.type = "checkbox";
      
      newDiv.appendChild(newLabel);
      newDiv.appendChild(newCheckbox);
      
      // Find the container using getElementById instead of querySelector
      var container = document.getElementById("mission");
      
      // Append the newDiv to the container
      container.appendChild(newDiv);
      
      // Clear the input field after adding the item
      document.getElementById("newItem").value = "";
    }
  }

  function deleteItem() {
    var checkboxes = document.querySelectorAll(".wow input[type='checkbox']:checked");

    checkboxes.forEach(function (checkbox) {
      // Remove the parent div (wow) of the checked checkbox
      checkbox.parentNode.remove();
    });
  }

  function setAsBackground() {
    var input = document.getElementById('imageInput');
    var output = document.getElementById('bod');

    if (input.files.length > 0) {
      var file = input.files[0];
      var reader = new FileReader();

      reader.onload = function (e) {
        // Set the background image using CSS
        output.style.backgroundImage = `url('${e.target.result}')`;
        // Display the image preview (optional)
        
      };

      reader.readAsDataURL(file);
    } else {
      alert("Please select an image first.");
    }
  }
  const option=document.querySelector(".options")
  const slider=document.querySelector(".slider-option")

  slider.addEventListener("click", ()=>{
    const visiblity=option.getAttribute("data-visible");
    if(visiblity=="false"){
      option.setAttribute("data-visible",true);
      slider.setAttribute("aria-expanded",true);
    }
    else if(visiblity=="true"){
      option.setAttribute("data-visible",false);
      slider.setAttribute("aria-expanded",false);
    }
  });

   function changeRootColor() {
      var colorPicker = document.getElementById('colorPicker');
      document.documentElement.style.setProperty('--color', colorPicker.value)
      
      var colorPicker1 = document.getElementById('colorPicker1');
      document.documentElement.style.setProperty('--secolor', colorPicker1.value)
      
      var colorPicker2 = document.getElementById('colorPicker2');
      document.documentElement.style.setProperty('--btcolor', colorPicker2.value)
    }

