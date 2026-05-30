function nextPage() {
    let studentInput = document.getElementById("studentId");
    
    if (!studentInput) {
        alert("ไม่พบการกรอกหมายเลขประจำตัวนักเรียน");
        return;
    }
    
    let studentId = studentInput.value;
    
    if (studentId.trim() == "") {
        alert("กรุณากรอกหมายเลขประจำตัวนักเรียน");
        return ;    
    }
    
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";

}

document.getElementById("surveyForm").addEventListener("submit", function(event){
    event.preventDefault();
    // ดำเนินการส่งแบบฟอร์ม
    
    for (let i = 1; i <= 5; i++) {
        let answer = document.querySelector('input[name="q'+ i +'"]:checked');
        
        if (answer == null) {
            alert("กรุณาตอบคำถามให้ครบทุกข้อ");
            return;
        }
    }
    
    alert("ขอบคุณสำหรับการตอบแบบสอบถาม kub!");
});
