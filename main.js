let school = "ABC School";  // Global variable

function localDemo() {
    let student = "Ravi";   // Local variable

    document.getElementById("result").innerHTML =
        "Student: " + student;
}

function globalDemo() {
    document.getElementById("result").innerHTML =
        "School: " + school;
}