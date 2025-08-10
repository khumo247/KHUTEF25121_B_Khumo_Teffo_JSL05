🗂 Kanban Task Board
A simple, responsive Kanban-style task board that allows you to view, add, and edit tasks.
Tasks are organized into three columns:

TODO 📝

DOING ⏳

DONE ✅

✨ Features
Add New Task — Click the + Add New Task button to create a new task with title, description, and status.

Edit Existing Tasks — Click on any task card to open a modal and edit its details.

Dynamic Counters — Each column header shows the number of tasks in that category.

Responsive Design — Works on both desktop and mobile.

Smooth Modal Interaction — All add/edit actions happen inside clean modal popups.

📂 Project Structure
graphql
Copy
Edit
project/
│── index.html       # Main HTML layout  
│── style.css        # Styles for layout, modals, and button  
│── script.js        # JavaScript logic for rendering, adding, and editing tasks  
│── README.md        # This file  
🚀 Getting Started
1. Clone or Download
bash
Copy
Edit
git clone https://github.com/yourusername/kanban-board.git
cd kanban-board
2. Open in Browser
Simply open index.html in your preferred browser.
No build steps, no dependencies — pure HTML/CSS/JavaScript.

🖱 Usage
Add a Task
Click the + Add New Task button (top right).

Fill in the title, description, and status.

Click Create Task.

Your new task will appear in the selected column.

Edit a Task
Click any existing task card.

Update the title, description, or status in the modal.

Click Save Changes.

📸 Example Layout
sql
Copy
Edit
+-------------------------------+
| TODO (3)     + Add New Task   |
| [ ] Task 1                     |
| [ ] Task 2                     |
+-------------------------------+
| DOING (2)                     |
| [ ] Task 3                     |
+-------------------------------+
| DONE (2)                      |
| [ ] Task 4                     |
+-------------------------------+
🛠 Technologies Used
HTML5

CSS3 (Flexbox, Responsive Design)

Vanilla JavaScript (ES6+)

📌 Notes
This project uses in-memory task storage (initialTasks array).

If you refresh the page, tasks will reset.

To persist data, you could extend the project with localStorage or a backend API.

📄 License
This project is licensed under the MIT License — feel free to use and modify it for your own purposes.