document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn load lại trang mặc định

    // Lấy thông tin từ form
    let studentInfo = {
        name: document.getElementById("fullname").value,
        dob: document.getElementById("dob").value,
        studentId: document.getElementById("studentId").value,
        studentClass: document.getElementById("classId").value
    };

    // Lưu thông tin vào localStorage
    localStorage.setItem("studentInfo", JSON.stringify(studentInfo));

    // Chuyển đến trang bài thi (Main.html)
    window.location.href = "Main.html";
});
