const task = document.getElementById("task");
const right = document.getElementById("right");

/*adding to list*/
function addTask() {
    if(task.value ===''){
        alert("Error, you have not written anything.")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = task.value;
        myUL.appendChild(li);
        let span = document.createElement("span"); /*adding the equis*/
        span.innerHTML = "\u00d7"; /*cross code*/
        li.appendChild(span); /*display cross*/
    }
    task.value = ""; /*clearing input after adding task*/
    saveData(); /*will save any task added*/
}

/*adding for click function*/
myUL.addEventListener("click", function(e){ /*if i click here, it will check all of myUL*/
    if(e.target.tagName === "LI"){ /*first will check here on LI*/
        e.target.classList.toggle("checked"); /*if clicked here, will check the task off*/
        saveData(); /*will also save here when task is crossed off*/
    }
    else if(e.target.tagName === "SPAN"){ /*if clicked on span, then will remove the parent element which is the li element*/
        e.target.parentElement.remove();
        saveData(); /*and when task is deleted*/
    }
}, false);
