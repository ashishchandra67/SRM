
function select() {
    var n = document.getElementById("selct").value;

    var array = {
        James: { "AdmissionNumber": "001", "FatherName": "Mr.Josheph", "MotherName": "Mrs.Marie", "English": 79, "Hindi": 90, "Maths": 67, "Science": 80, "Social": 79 },
        Emily: { "AdmissionNumber": "002", "FatherName": "Mr.Smith", "MotherName": "Mrs.Grace", "English": 56, "Hindi": 69, "Maths": 88, "Science": 85, "Social": 74 },
        Michael: { "AdmissionNumber": "003", "FatherName": "Mr.Johnson", "MotherName": "Mrs.Mia", "English": 97, "Hindi": 89, "Maths": 91, "Science": 88, "Social": 94 },
        Olivia: { "AdmissionNumber": "004", "FatherName": "Mr.Williams", "MotherName": "Mrs.Emma", "English": 59, "Hindi": 39, "Maths": 47, "Science": 61, "Social": 74 },
        Aiden: { "AdmissionNumber": "005", "FatherName": "Mr.Brown", "MotherName": "Mrs.Sophia", "English": 44, "Hindi": 47, "Maths": 75, "Science": 68, "Social": 59 },
        Isabella: { "AdmissionNumber": "006", "FatherName": "Mr.Davis", "MotherName": "Mrs.Noah", "English": 78, "Hindi": 35, "Maths": 89, "Science": 84, "Social": 73 },
        Mason: { "AdmissionNumber": "007", "FatherName": "Mr.Miller", "MotherName": "Mrs.Olivia", "English": 57, "Hindi": 93, "Maths": 61, "Science": 89, "Social": 69 },
        Sophia: { "AdmissionNumber": "008", "FatherName": "Mr.Wilson", "MotherName": "Mrs.Logan", "English": 99, "Hindi": 95, "Maths": 90, "Science": 90, "Social": 89 },
        Ethan: { "AdmissionNumber": "009", "FatherName": "Mr.Moore", "MotherName": "Mrs.Ava", "English": 85, "Hindi": 79, "Maths": 87, "Science": 50, "Social": 69 },
        Chloe: { "AdmissionNumber": "010", "FatherName": "Mr.Anderson", "MotherName": "Mrs.Liam", "English": 79, "Hindi": 66, "Maths": 97, "Science": 90, "Social": 99 }
    };

    document.getElementById("adm_no").innerText = "Admission Number: " + array[n]["AdmissionNumber"];
    document.getElementById("fat_name").innerText = "Father's Name: " + array[n]["FatherName"];
    document.getElementById("mot_name").innerText = "Mother's Name: " + array[n]["MotherName"];

    document.getElementById("eng").innerText = "English: " + array[n]["English"];
    document.getElementById("hin").innerText = "Hindi: " + array[n]["Hindi"];
    document.getElementById("mat").innerText = "Maths: " + array[n]["Maths"];
    document.getElementById("sci").innerText = "Science: " + array[n]["Science"];
    document.getElementById("sst").innerText = "Social Studies: " + array[n]["Social"];

    var total = array[n]["English"] + array[n]["Hindi"] + array[n]["Maths"] + array[n]["Science"] + array[n]["Social"];

    document.getElementById("tot").innerText = "Total: " + total;
    document.getElementById("per").innerText = "Percentage: " + (total / 5).toFixed(2) + "%";
}

