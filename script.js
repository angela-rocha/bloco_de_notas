const noteInput = document.getElementById("noteInput");
const saveNoteBtn = document.getElementById("saveNote");
const clearNoteBtn = document.getElementById("clearNote");
const noteList = document.getElementById("noteList");

// Carregar notas do localStorage
let notes = JSON.parse(localStorage.getItem("notes")) || [];

function renderNotes() {
  noteList.innerHTML = "";
  notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.textContent = note;
    li.addEventListener("click", () => {
      noteInput.value = note;
    });
    noteList.appendChild(li);
  });
}

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Salvar nota
saveNoteBtn.addEventListener("click", () => {
  const text = noteInput.value.trim();
  if (text) {
    notes.push(text);
    saveNotes();
    renderNotes();
    noteInput.value = "";
  }
});

// Apagar nota do textarea
clearNoteBtn.addEventListener("click", () => {
  noteInput.value = "";
});

// Renderizar ao carregar
renderNotes();
