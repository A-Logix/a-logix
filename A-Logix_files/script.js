// ----- To-Do List Functionality -----
function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const task = todoInput.value.trim();
    if (task === "") {
      alert("Please enter a task!");
      return;
    }
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(task);
    localStorage.setItem("todos", JSON.stringify(todos));
    todoInput.value = "";
    displayTodos();
  }
  
  function displayTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    todos.forEach((task, index) => {
      const div = document.createElement("div");
      div.className = "todo-item";
      div.innerHTML = `<span>${task}</span>
        <button class="delete-btn" onclick="deleteTodo(${index})">X</button>`;
      todoList.appendChild(div);
    });
  }
  
  function deleteTodo(index) {
    const todos = JSON.parse(localStorage.getItem("todos"));
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    displayTodos();
  }
  
  // ----- Learning Hub Notes Functionality -----
  function addNote() {
    const noteInput = document.getElementById("note-input");
    const noteText = noteInput.value.trim();
    if (noteText === "") {
      alert("Please enter a note!");
      return;
    }
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));
    noteInput.value = "";
    displayNotes();
  }
  
  function displayNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const notesContainer = document.getElementById("notes-container");
    notesContainer.innerHTML = "";
    notes.forEach((note, index) => {
      const div = document.createElement("div");
      div.className = "note-item";
      div.innerHTML = `<p>${note}</p>
        <button class="delete-btn" onclick="deleteNote(${index})">X</button>`;
      notesContainer.appendChild(div);
    });
  }
  
  function deleteNote(index) {
    const notes = JSON.parse(localStorage.getItem("notes"));
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
  }
  
  // ----- Simple Quiz Functionality -----
  function checkQuiz() {
    const answerInput = document.getElementById("quiz-answer").value.trim();
    const feedback = document.getElementById("quiz-feedback");
    // Simple quiz: What is 2 + 2?
    if (answerInput === "4") {
      feedback.textContent = "Correct!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "Incorrect, try again.";
      feedback.style.color = "red";
    }
  }
  
  // ----- Initialize Displays on Page Load -----
  window.onload = function() {
    displayTodos();
    displayNotes();
  };
 