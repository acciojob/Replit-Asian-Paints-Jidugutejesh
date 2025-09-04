    const changeBtn = document.getElementById("change_button");
    const resetBtn = document.getElementById("reset_button");

    // Reset all blocks to transparent
    function resetGrid() {
      const blocks = document.querySelectorAll(".grid-item");
      blocks.forEach(block => block.style.backgroundColor = "transparent");
    }

    // Change color of selected block
    changeBtn.addEventListener("click", () => {
      const blockId = document.getElementById("block_id").value;
      const color = document.getElementById("colour_id").value;

      resetGrid(); // reset before applying new color

      const targetBlock = document.getElementById(blockId);
      if (targetBlock) {
        targetBlock.style.backgroundColor = color;
      } else {
        alert("Invalid Block ID! Please enter 1–9.");
      }
    });

    // Reset button event
    resetBtn.addEventListener("click", resetGrid);