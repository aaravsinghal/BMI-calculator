var weight, height, measure, bmi, error ;

function calculate() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	error = "Please enter some values";
	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);
    // Inside calculate function after determining BMI category
document.getElementById("results").style.transition = "background-color 0.5s ease";

if (bmi <= 18.4) {
    document.getElementById("results").style.backgroundColor = "#FF6347"; // Red for Underweight
    measure = "Your BMI is " + bmi + " which means " + "you are Underweight";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById("results").style.backgroundColor = "#32CD32"; // Green for Normal
    measure = "Your BMI is " + bmi + " which means " + "You are Normal";
} else if (bmi >= 25 && bmi <= 29.9) {
    document.getElementById("results").style.backgroundColor = "#FFD700"; // Yellow for Overweight
    measure = "Your BMI is " + bmi + " which means " + "You are Overweight";
} else if (bmi >= 30) {
    document.getElementById("results").style.backgroundColor = "#FF4500"; // Orange for Obese
    measure = "Your BMI is " + bmi + " which means " + "You are Obese";
}

    // Existing code...
    
    if (bmi <= 18.4) {
        document.getElementById("results").style.backgroundColor = "#FF6347"; // Red for Underweight
        measure = "Your BMI is " + bmi + " which means " + "you are Underweight. Here are some steps to gain weight: Eat more calories than your body burns, focus on nutrient-dense foods, and do strength training exercises regularly.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById("results").style.backgroundColor = "#32CD32"; // Green for Normal
        measure = "Your BMI is " + bmi + " which means " + "You are Normal. Keep up the good work!";
    } else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById("results").style.backgroundColor = "#FFD700"; // Yellow for Overweight
        measure = "Your BMI is " + bmi + " which means " + "You are Overweight. Here are some steps to reduce weight: Eat a balanced diet, exercise regularly, and monitor your portion sizes.";
    } else if (bmi >= 30) {
        document.getElementById("results").style.backgroundColor = "#FF4500"; // Orange for Obese
        measure = "Your BMI is " + bmi + " which means " + "You are Obese. Here are some steps to reduce weight: Consult with a healthcare professional for a personalized plan, focus on healthy eating habits, and incorporate regular physical activity into your routine.";
    }

    // Existing code...




	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = measure;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "Negative Values not Allowed";
	}
}
