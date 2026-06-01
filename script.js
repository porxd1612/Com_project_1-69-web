function nextPage(pageNumber) {
    if(pageNumber === 2) {
        let studentId = document.getElementById("studentId").value;
        if(studentId.trim() === "") {
            showPopup("เกิดข้อผิดพลาด", "กรุณากรอกเลขประจำตัวนักเรียน");
            return;
        }

        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "block";

    }

    if(pageNumber === 3) {
        for(let i = 1; i <= 5; i++){

            let answer = document.querySelector(
                'input[name="q' + i + '"]:checked'
            );

            if(answer == null){

                showPopup(
                    "เกิดข้อผิดพลาด",
                    "กรุณาตอบคำถามหน้าแรกให้ครบทุกข้อ"
                );
                
                return;
            }
        }
        
        document.getElementById("page2").style.display = "none";
        document.getElementById("page3").style.display = "block";
        
    }
    
    if(pageNumber === 4) {
        for(let i = 1; i <= 10; i++){

            let answer = document.querySelector(
                'input[name="q' + i + '"]:checked'
            );

            if(answer == null){

                showPopup(
                    "เกิดข้อผิดพลาด",
                    "กรุณาตอบคำถามหน้าที่สองให้ครบทุกข้อ"
                  );

                return;
            }
        }
        
        document.getElementById("page3").style.display = "none";
        document.getElementById("page4").style.display = "block";

    }

    if(pageNumber === 5) {
        for(let i = 1; i <= 15; i++){

            let answer = document.querySelector(
                'input[name="q' + i + '"]:checked'
            );

            if(answer == null){

                showPopup(
                    "เกิดข้อผิดพลาด",
                    "กรุณาตอบคำถามหน้าที่สามให้ครบทุกข้อ"
                );
                
                return;
            }
        }
        
        document.getElementById("page4").style.display = "none";
        document.getElementById("page5").style.display = "block";
        
    }

    if(pageNumber === 6) {
        for(let i = 1; i <= 20; i++){

            let answer = document.querySelector(
                'input[name="q' + i + '"]:checked'
            );

            if(answer == null){

                showPopup(
                    "เกิดข้อผิดพลาด",
                    "กรุณาตอบคำถามหน้าที่สี่ให้ครบทุกข้อ"
                );
                
                return;
            }
        }
        
        document.getElementById("page5").style.display = "none";
        document.getElementById("page6").style.display = "block";
        
    }

}

function prevPage(pageNumber) {

    if(pageNumber === 1) {
        document.getElementById("page2").style.display = "none";
        document.getElementById("page1").style.display = "block";
    }

    if(pageNumber === 2) {
        document.getElementById("page3").style.display = "none";
        document.getElementById("page2").style.display = "block";
    }

    if(pageNumber === 3) {
        document.getElementById("page4").style.display = "none";
        document.getElementById("page3").style.display = "block";
    }
    if(pageNumber === 4) {
        document.getElementById("page5").style.display = "none";
        document.getElementById("page4").style.display = "block";
    }
    if(pageNumber === 5) {
        document.getElementById("page6").style.display = "none";
        document.getElementById("page5").style.display = "block";
    }

}


document.getElementById("surveyFormPage6").addEventListener("submit", function(event){
    console.log("submit ทำงาน");
    
    event.preventDefault();
    // ดำเนินการส่งแบบฟอร์ม
    
    for (let i = 1; i <= 25; i++) {
        let answer = document.querySelector(
            'input[name="q'+ i +'"]:checked'
        );
        
        if (answer == null) {
            showPopup("เกิดข้อผิดพลาด", "กรุณาตอบคำถามให้ครบทุกข้อ");
            return;
        }
    }
    
    document.getElementById("page6").style.display = "none";
    document.getElementById("thankyouPage").style.display = "block";
});

function showPopup(title, message) {
    document.getElementById("popuptitle").innerText = title;
    document.getElementById("popupmessage").innerText = message;

    document.getElementById("popup").style.display = "flex";

}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

event.target.querySelector(
    'button[type="submit"]'
).disabled = true;
