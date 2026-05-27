const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const clearBtn = document.getElementById("clearBtn");
const taskCount = document.getElementById("taskCount");
const themeBtn = document.getElementById("themeBtn");
const dateTime = document.getElementById("dateTime");

let count = 0;

// Add Task
function addTask() {

  const taskText = taskInput.value.trim();

  if(taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.classList.add("task-text");

  // Complete Task
  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    li.remove();
    count--;
    updateCount();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  taskInput.value = "";

  count++;
  updateCount();
}

// Update Counter
function updateCount() {
  taskCount.textContent = count;
}

// Button Event
addBtn.addEventListener("click", addTask);

// Enter Key Event
taskInput.addEventListener("keypress", function(e) {
  if(e.key === "Enter") {
    addTask();
  }
});

// Clear All
clearBtn.addEventListener("click", () => {
  taskList.innerHTML = "";
  count = 0;
  updateCount();
});

// Dark Mode
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Live Date & Time
function updateDateTime() {

  const now = new Date();

  dateTime.textContent =
    now.toLocaleDateString() + " | " +
    now.toLocaleTimeString();
}

setInterval(updateDateTime, 1000);
updateDateTime();
