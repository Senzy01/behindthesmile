const submitContainer = document.getElementById("submitContainer");
const thoughts = [
  "You’re not behind. You’re becoming.",
  "Healing isn’t loud. Sometimes it just looks like not reacting anymore.",
  "In a world chasing loudness, silence becomes power.",
  "Don’t become what broke you — grow beyond it.",
  "If you’re not lost at least once, you never truly found anything.",
    "You're not behind. You're becoming.",
    "Healing isn’t loud. Sometimes it just looks like not reacting anymore.",
    "In a world chasing loudness, silence becomes power.",
    "Don’t become what broke you — grow beyond it.",
    "If you’re not lost at least once, you never truly found anything.",
    "Not everything needs a reaction. Some things just need peace.",
    "The loudest mind often hides the quietest hurt.",
    "Sometimes, disappearing is the loudest way to say 'I'm tired.'"

];

function toggleSubmitForm() {
  if (submitContainer.style.display === "none") {
    submitContainer.style.display = "block";
    setTimeout(() => {
      submitContainer.style.opacity = 1;
    }, 50); // Fade in
  } else {
    submitContainer.style.opacity = 0;
    setTimeout(() => {
      submitContainer.style.display = "none";
    }, 500); // Wait for fade-out animation
  }
}

function handleSubmit() {
  const input = document.getElementById("userThoughtInput");
  const userThought = input.value.trim();
  if (userThought !== "") {
    thoughts.push(userThought);
    newThought(); // Show new user-submitted thought
    input.value = "";
    toggleSubmitForm(); // Hide form after submit
  } else {
    alert("Please enter a thought.");
  }
}

function newThought() {
  const randomIndex = Math.floor(Math.random() * thoughts.length);
  const thoughtDisplay = document.getElementById("thought");
  thoughtDisplay.textContent = thoughts[randomIndex];
}

function react(emoji) {
  const display = document.getElementById("reactionDisplay");
  display.textContent = "You reacted with " + emoji;
}
