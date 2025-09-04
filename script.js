  const changeBtn = document.getElementById("change_button");
    const resetBtn = document.getElementById("Reset");

    function resetGrid() {
      const blocks = document.querySelectorAll(".grid-item");
      blocks.forEach(block => block.style.backgroundColor = "transparent");
    }

    changeBtn.addEventListener("click", () => {
      const blockId = document.getElementById("block_id").value;
      const color = document.getElementById("colour_id").value;

      resetGrid();

      const targetBlock = document.getElementById(blockId);
      if (targetBlock) {
        targetBlock.style.backgroundColor = color;
      } else {
        alert("Invalid Block ID! Please enter 1–9.");
      }
    });

    resetBtn.addEventListener("click", resetGrid);