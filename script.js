






function calculateCalories() {
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const activity = parseFloat(document.getElementById("activity").value);
    const goal = document.getElementById("goal").value;

    if (!age || !height || !weight) {
        alert("Please fill all fields.");
        return;
    }

    let bmr;

    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let calories = bmr * activity;

    if (goal === "lose") calories -= 400;
    if (goal === "gain") calories += 400;

    calories = Math.round(calories);

    document.getElementById("resultText").innerText =
        "Your daily calorie need: " + calories + " kcal";
}


function toggleTheme() {
    document.body.classList.toggle("dark");
}
