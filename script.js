function calculateCalories() {
    let age = parseInt(document.getElementById("age").value);
    let gender = document.getElementById("gender").value;
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let activity = parseFloat(document.getElementById("activity").value);
    let goal = document.getElementById("goal").value;

    if (!age || !height || !weight || !gender) {
        document.getElementById("resultText").innerText =
            "Please fill all fields.";
        return;
    }

    let bmr;

    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let calories = bmr * activity;

    if (goal === "lose") {
        calories -= 500;
    } else if (goal === "gain") {
        calories += 500;
    }

    document.getElementById("resultText").innerText =
        "Daily Calories: " + Math.round(calories) + " kcal";
}

/* Dark mode toggle */
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}
