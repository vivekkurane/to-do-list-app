const inputEle = document.querySelector("input");

document.querySelector("#push").onclick = function ()
{
  if(inputEle.value === '') {
    alert("Please enter the task");
  }
  else {
    document.querySelector("#tasks").innerHTML += `
      <div id="task">
        <span id="taskName">
          ${inputEle.value}
        </span>

        <button id="delete">
          <img src="trash.png">
        </button>
      </div>
    
    `
    resetInput();

    let allCurrentTask = document.querySelectorAll("#delete");
    for (let i=0 ; i<allCurrentTask.length ; i++) {
      allCurrentTask[i].onclick = function () {
        this.parentNode.remove();
        hasChildNodes();
      }
    }

    let currentTaskName = document.querySelectorAll("#taskName");
    for (let i=0; i<currentTaskName.length; i++) {
      currentTaskName[i].onclick = function() {
        this.classList.toggle("complete");
      }
    }
  }

  hasChildNodes();
};

function hasChildNodes() {
  const hasChildNodes = document.querySelector("#tasks").contains(document.querySelector("#task"))
  
  if(!hasChildNodes) {
    document.querySelector("#tasks").innerHTML = `
      <div class="noData"> 
        <span> No Task Available </span>
      </div>
    `
  } else {
    document.querySelector("#tasks").removeChild(document.querySelector(".noData"))
  }
}

function resetInput () {
  document.querySelector("input").value = ''
}
hasChildNodes();
