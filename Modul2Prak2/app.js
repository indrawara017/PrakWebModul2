// app.js
function addActivity() {
    const activityInput = document.getElementById("newActivity");
    const activityText = activityInput.value;

    if (activityText) {
        const activityList = document.getElementById("activityList");
        const li = document.createElement("li");

        li.innerHTML = activityText;
        li.innerHTML += '<button class="edit" onclick="editActivity(this)"><i <span class="material-symbols-outlined">done_all</i></button>';
        li.innerHTML += '<button class="delete" onclick="deleteActivity(this)"><i class="material-symbols-outlined">delete_forever</i></button>';
        
        activityList.appendChild(li);
        activityInput.value = "";
    }
}

function editActivity(button) {
    const li = button.parentElement;
    const activityText = li.firstChild.textContent;
    const newActivityText = prompt("Edit activity:", activityText);

    if (newActivityText) {
        li.firstChild.textContent = newActivityText;
    }
}

function deleteActivity(button) {
    const li = button.parentElement;
    const activityList = document.getElementById("activityList");
    activityList.removeChild(li);
}
