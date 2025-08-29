//your JS code here. If required.

const changeBtn = document.getElementById("change_button");
    const resetBtn = document.getElementById("Reset");

    changeBtn.addEventListener("click", () => {
      // Step 1: Reset all grid items
      document.querySelectorAll(".grid-item").forEach(item => {
        item.style.backgroundColor = "transparent";
      });

      // Step 2: Get inputs
      const blockId = document.getElementById("block_id").value;
      const colour = document.getElementById("colour_id").value;

      // Step 3: Apply color if valid
      const block = document.getElementById(blockId);
      if (block) {
        block.style.backgroundColor = colour;
      } else {
        alert("Invalid Block ID! Enter a number between 1 and 9.");
      }
    });

    resetBtn.addEventListener("click", () => {
      document.querySelectorAll(".grid-item").forEach(item => {
        item.style.backgroundColor = "transparent";
      });
    });