document.addEventListener("DOMContentLoaded", function () {
    // Lấy dữ liệu từ localStorage
    let studentInfo = localStorage.getItem("studentInfo");

    if (studentInfo) {
        studentInfo = JSON.parse(studentInfo);

        // Hiển thị thông tin thí sinh trên trang bài thi
        document.getElementById("studentName").textContent = studentInfo.name;
        document.getElementById("studentDob").textContent = studentInfo.dob;
        document.getElementById("studentId").textContent = studentInfo.studentId;
        document.getElementById("studentClass").textContent = studentInfo.studentClass;
    } else {
        // Nếu không có thông tin, chuyển về trang đăng nhập
        window.location.href = "index.html";
    }
});


document.getElementById("submitBtn").addEventListener("click", function() {
    let score = 0;
    let totalQuestions = 40;

    // Đáp án mẫu
    let answers = {
        q1: "true", q2: "true", q3: "true", q4: "true", q5: "true",
        q6: "true", q7: "true", q8: "true", q9: "true", q10: "true", // Nhóm 1

        q11: "A", q12: "A", q13: "A", q14: "A", q15: "A", 
        q16: "A", q17: "A", q18: "A", q19: "A", q20: "A", // Nhóm 2

        q21: ["A"], q22: ["A"], q23: ["A"], q24: ["A"], 
        q25: ["A"], q26: ["A"], q27: ["A"], q28: ["A"], 
        q29: ["A"], q30: ["A"], // Nhóm 3

        q31: "có", q32: "có", q33: "có", 
        q34: "có", q35: "có", q36: "có", 
        q37: "có", q38: "có", q39: "có", 
        q40: "có" // Nhóm 4
    };

    // Chấm điểm nhóm 1 và nhóm 2 (chọn 1 đáp án đúng)
    for (let i = 1; i <= 20; i++) {
        let question = document.querySelector(`input[name="q${i}"]:checked`);
        if (question && question.value === answers[`q${i}`]) {
            score++;
        }
    }

    // Chấm điểm nhóm 3 (chọn nhiều đáp án)
    for (let i = 21; i <= 30; i++) {
        let selectedOptions = document.querySelectorAll(`input[name="q${i}"]:checked`);
        let selectedValues = Array.from(selectedOptions).map(option => option.value);
        
        if (JSON.stringify(selectedValues.sort()) === JSON.stringify(answers[`q${i}`].sort())) {
            score++;
        }
    }

    // Chấm điểm nhóm 4 (câu tự luận)
    for (let i = 31; i <= 40; i++) {
        let answer = document.querySelector(`textarea[name="q${i}"]`).value.trim();
        if (answer.toLowerCase() === answers[`q${i}`]) {
            score++;
        }
    }

    // Hiển thị kết quả
    window.location.href = `Result.html?score=${score}`;
});

document.querySelectorAll(".question-link").forEach(item => {
    item.addEventListener("click", function() {
        let questionId = this.getAttribute("data-question");
        let target = document.getElementById(questionId);
        
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});