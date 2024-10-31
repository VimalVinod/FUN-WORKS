const tasks = [
    "Take a picture of something blue.",
    "Write a haiku.",
    "Learn a quick fun fact.",
    "Draw a doodle of your favorite animal.",
    "Do 10 jumping jacks.",
];

let timer;
let timerRunning = false;
let seconds = 0;

// Get elements
const taskElement = document.getElementById('task');
const newTaskButton = document.getElementById('new-task-btn');
const startTimerButton = document.getElementById('start-timer-btn');
const resetTimerButton = document.getElementById('reset-timer-btn');
const timerElement = document.getElementById('timer');
const achievementsList = document.getElementById('achievements-list');
const reviewInput = document.getElementById('review-input');
const submitReviewButton = document.getElementById('submit-review-btn');
const evaluationElement = document.getElementById('evaluation');

// Function to get a new task and start the timer
function getNewTask() {
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
    taskElement.textContent = randomTask;
    reviewInput.value = ""; // Clear the input field
    evaluationElement.textContent = ""; // Clear previous evaluation
    startTimer(); // Start the timer automatically
}

// Function to start the timer
function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        seconds = 0; // Reset seconds when starting a new task
        timerElement.textContent = "00:00"; // Reset timer display
        timer = setInterval(() => {
            seconds++;
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
        }, 1000);
    }
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timer);
    timerRunning = false;
    seconds = 0;
    timerElement.textContent = "00:00";
}

// Function to add achievement with time taken
function addAchievement(task, timeTaken) {
    const achievementItem = document.createElement('li');
    achievementItem.textContent = `Completed: ${task} in ${timeTaken} seconds`;
    achievementsList.appendChild(achievementItem);
}

// Function to display review and update achievements
function displayReview(task, userReview) {
    if (userReview) {
        const timeTaken = seconds; // Time taken to complete the task
        evaluationElement.textContent = `Your review for the task "${task}": "${userReview}"`;
        addAchievement(task, timeTaken); // Update achievements with time taken
        resetTimer(); // Reset timer after submission
    } else {
        evaluationElement.textContent = "You didn't provide a review!";
    }
}

// Event listeners
newTaskButton.addEventListener('click', () => {
    getNewTask();
});

startTimerButton.addEventListener('click', startTimer);
resetTimerButton.addEventListener('click', resetTimer);

submitReviewButton.addEventListener('click', () => {
    displayReview(taskElement.textContent, reviewInput.value);
});
