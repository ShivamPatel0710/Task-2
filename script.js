document.getElementById("addTaskBtn").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const deadlineInput = document.getElementById("deadlineInput");

  const taskText = taskInput.value.trim();
  const deadline = deadlineInput.value;

  if (taskText === "") return;

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");

  // Create task content
  const content = document.createElement("div");
  content.textContent = taskText;

  // Add deadline if provided
  const deadlineText = document.createElement("div");
  if (deadline) {
    const formattedDeadline = new Date(deadline).toLocaleString();
    deadlineText.textContent = "Deadline: " + formattedDeadline;
    deadlineText.className = "deadline";
  }

  // Completed time (hidden initially)
  const completedTime = document.createElement("div");
  completedTime.className = "completed-time";

  // Toggle completion
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
    if (li.classList.contains("completed")) {
      const now = new Date();
      completedTime.textContent = "Completed at: " + now.toLocaleString();
    } else {
      completedTime.textContent = "";
    }
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    taskList.removeChild(li);
  });

  // Structure task
  const taskWrapper = document.createElement("div");
  taskWrapper.appendChild(content);
  if (deadline) taskWrapper.appendChild(deadlineText);
  taskWrapper.appendChild(completedTime);

  li.appendChild(taskWrapper);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
  deadlineInput.value = "";
});
