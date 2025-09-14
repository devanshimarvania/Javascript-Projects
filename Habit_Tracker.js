let taskList = [
    { title: "Morning Exercise", desc: "30 min jogging", category: "Health", date: "2025-09-11", state: "completed" },
    { title: "Complete Assignment", desc: "Finish JS project", category: "Study", date: "2025-09-16", state: "pending" },
    { title: "Team Meeting", desc: "Zoom call at 11 AM", category: "Work", date: "2025-09-10", state: "overdue" }
];

class TaskItem {
    constructor(title, desc, category, date, state) {
        this.title = title;
        this.desc = desc;
        this.category = category;
        this.date = date;
        this.state = state;
    }
}

function createTask(e) {
    e.preventDefault();
    let title = document.getElementById("taskTitle").value;
    let desc = document.getElementById("taskDesc").value;
    let category = document.getElementById("taskCategory").value;
    let date = document.getElementById("taskDate").value;
    let state = document.getElementById("taskState").value;

    if (!title || !desc || !category || !date) {
        alert("⚠️ Please fill all fields!");
        return;
    }

    let newTask = new TaskItem(title, desc, category, date, state);
    taskList.push(newTask);
    renderTasks();
    document.querySelector("form").reset();
}

function renderTasks(filtered = taskList) {
    let container = document.getElementById("taskContainer");
    container.innerHTML = "";

    filtered.forEach((task, i) => {
        let card = document.createElement("div");
        card.className = "task-card card p-3 m-2";
        card.innerHTML = `
          <h5 class="fw-bold">${task.title}</h5>
          <p>${task.desc}</p>
          <p><span class="text-muted">${task.category}</span> | <span class="text-muted">${task.date}</span></p>
          <div class="d-flex justify-content-between align-items-center">
            <p class="fw-bold ${task.state === "completed" ? "text-success" : task.state === "overdue" ? "text-danger" : "text-primary"}">Status: ${task.state}</p>
            <div>
              <button class="btn btn-success btn-sm me-2" onclick="markDone(${i})"><i class="bi bi-check-lg"></i></button>
              <button class="btn btn-danger btn-sm" onclick="removeTask(${i})"><i class="bi bi-trash"></i></button>
            </div>
          </div>
        `;
        container.appendChild(card);
    });
    updateSummary();
}

function searchTasks() {
    let query = document.getElementById("searchBar").value.toLowerCase();
    let result = taskList.filter(t =>
        t.title.toLowerCase().includes(query) ||
        t.desc.toLowerCase().includes(query) ||
        t.category.toLowerCase().includes(query) ||
        t.date.toLowerCase().includes(query)
    );
    renderTasks(result);
}

function filterTasks() {
    let selected = document.getElementById("statusFilter").value;
    let result = taskList.filter(t => selected === "all" || t.state === selected);
    renderTasks(result);
}

function markDone(index) {
    taskList[index].state = "completed";
    renderTasks();
}

function removeTask(index) {
    taskList.splice(index, 1);
    renderTasks();
}

function updateSummary() {
    let total = taskList.length;
    let done = taskList.filter(t => t.state === "completed").length;
    let pending = taskList.filter(t => t.state === "pending").length;
    let overdue = taskList.filter(t => t.state === "overdue").length;
    let percent = total === 0 ? 0 : Math.round((done / total) * 100);

    document.getElementById("totalTasks").innerText = `Total Tasks : ${total}`;
    document.getElementById("doneTasks").innerText = `Completed : ${done}`;
    document.getElementById("waitingTasks").innerText = `Pending : ${pending}`;
    document.getElementById("lateTasks").innerText = `Overdue : ${overdue}`;
    document.getElementById("progressBar").style.width = percent + "%";
    document.getElementById("progressBar").innerText = percent + "%";
}

window.onload = () => renderTasks();