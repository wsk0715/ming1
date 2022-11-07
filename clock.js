const clock = document.querySelector("#clock")


// 현재 시간정보를 불러와 시,분,초로 저장
function getTime(){
    const date = new Date();

    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    // 00시 00분 00초로 표시되도록 문자열 삽입
    
    clock.innerText = `${hour} : ${minute} : ${second}`;
    // 완성된 시간 데이터를 문서에 삽입
}


getTime();      //초기 1회 직접 실행
setInterval(getTime, 1000); // 1000ms 마다 getTime 실행
