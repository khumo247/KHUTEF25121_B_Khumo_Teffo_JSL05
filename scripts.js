// ======= Initial Task Data =======
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Conquer React ⚛️",
    description: "Understand how to build UIs with components",
    status: "todo",
  },
  {
    id: 3,
    title: "Understand Databases ⚙️",
    description: "Learn how back-end data storage works",
    status: "todo",
  },
  {
    id: 4,
    title: "Crush Frameworks 🖼️",
    description: "Get comfortable using frontend frameworks",
    status: "todo",
  },
  {
    id: 5,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 6,
    title: "Never Give Up 🏆",
    description: "You're almost there",
    status: "doing",
  },
  {
    id: 7,
    title: "Explore ES6 Features 🚀",
    description: "Learn modern JavaScript syntax",
    status: "done",
  },
  {
    id: 8,
    title: "Have fun 🥳",
    description: "Celebrate your progress!",
    status: "done",
  },
];

// ======= Globals =======
let modalOverlay = null;

const columnContainers = {
  todo: document.querySelector('[data-status="todo"] .tasks-container'),
  doing: document.querySelector('[data-status="doing"] .tasks-container'),
  done: document.querySelector('[data-status="done"] .tasks-container'),
};

// ======= Functions =======

function renderTasks() {
  Object.values(columnContainers).forEach(container => (container.innerHTML = ""));

  initialTasks.forEach(task => {
    const card = document.createElement("div");
    card.classList.add("task-div");
    card.textContent = task.title;
    card.addEventListener("click", () => openTaskModal(task));
    columnContainers[task.status].appendChild(card);
  });

  updateColumnHeaders();
}

function updateColumnHeaders() {
  document.getElementById("toDoText").textContent = `TODO (${columnContainers.todo.children.length})`;
  document.getElementById("doingText").textContent = `DOING (${columnContainers.doing.children.length})`;
  document.getElementById("doneText").textContent = `DONE (${columnContainers.done.children.length})`;
}

function openTaskModal(task) {
  closeTaskModal();

  modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay");

  const modal = document.createElement("div");
  modal.classList.add("modal");

  modal.innerHTML = `
    <div class="modal-header">
      <h2>Task</h2>
      <button class="modal-close-btn">❌</button>
    </div>

    <label for="task-title">Title</label>
    <input type="text" id="task-title" value="${task.title}" />

    <label for="task-desc">Description</label>
    <textarea id="task-desc" rows="4">${task.description}</textarea>

    <label for="task-status">Status</label>
    <select id="task-status">
      <option value="todo" ${task.status === "todo" ? "selected" : ""}>todo</option>
      <option value="doing" ${task.status === "doing" ? "selected" : ""}>doing</option>
      <option value="done" ${task.status === "done" ? "selected" : ""}>done</option>
    </select>

    <button class="modal-save-btn">Save Changes</button>
  `;

  modalOverlay.appendChild(modal);
  document.body.appendChild(modalOverlay);

  // Event listeners
  modal.querySelector(".modal-close-btn").addEventListener("click", closeTaskModal);

  modal.querySelector(".modal-save-btn").addEventListener("click", () => {
    task.title = modal.querySelector("#task-title").value;
    task.description = modal.querySelector("#task-desc").value;
    task.status = modal.querySelector("#task-status").value;
    closeTaskModal();
    renderTasks();
  });
}

function closeTaskModal() {
  if (modalOverlay) {
    modalOverlay.remove();
    modalOverlay = null;
  }
}

// ======= Add New Task Modal =======
function openNewTaskModal() {
  closeTaskModal(); // Close any open modal first

  modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay");

  const modal = document.createElement("div");
  modal.classList.add("modal");

  modal.innerHTML = `
    <div class="modal-header">
      <h2>Add New Task</h2>
      <button class="modal-close-btn">❌</button>
    </div>

    <label for="task-title">Title</label>
    <input type="text" id="task-title" placeholder="e.g. Take coffee break" />

    <label for="task-desc">Description</label>
    <textarea id="task-desc" rows="4" placeholder="Describe the task..."></textarea>

    <label for="task-status">Status</label>
    <select id="task-status">
      <option value="todo">todo</option>
      <option value="doing">doing</option>
      <option value="done">done</option>
    </select>

    <button class="modal-save-btn">Create Task</button>
  `;

  modalOverlay.appendChild(modal);
  document.body.appendChild(modalOverlay);

  // Close modal
  modal.querySelector(".modal-close-btn").addEventListener("click", closeTaskModal);

  // Save task
  modal.querySelector(".modal-save-btn").addEventListener("click", () => {
    const title = modal.querySelector("#task-title").value.trim();
    const description = modal.querySelector("#task-desc").value.trim();
    const status = modal.querySelector("#task-status").value;

    if (!title) {
      alert("Please enter a title for the task.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      status
    };

    initialTasks.push(newTask);
    closeTaskModal();
    renderTasks();
  });
}

// ======= Initialize =======
document.addEventListener("DOMContentLoaded", () => {
  renderTasks();

  // Bind Add Task button
  const addTaskBtn = document.getElementById("add-task-btn");
  if (addTaskBtn) {
    addTaskBtn.addEventListener("click", openNewTaskModal);
  }
});
