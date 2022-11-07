// 변수 선언
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetings = document.querySelector("#greetings");
const logoutForm = document.querySelector("#logout-form");

const USERNAME_KEY = "username";

const username = localStorage.getItem(USERNAME_KEY);


// 로그인 버튼 누르면 실행할 함수
function loginButton(event){
    event.preventDefault();
    // submit 기본동작(새로고침) 제거
    const username = loginInput.value;
    // username <- submit 된 value

    localStorage.setItem(USERNAME_KEY, username);
    // 로컬스토리지에 username 기록
    loginSuccess(username);
    // 로그인 성공 함수에 username 삽입해 실행
}

// 로그인 성공시 실행할 함수
function loginSuccess(ID){
    loginForm.classList.add("hidden");
    // 로그인 폼 숨김
    
    greetings.innerText = "Hello, " + ID + "!";
    if (localStorage.getItem(USERNAME_KEY) === "민강"){
        greetings.innerText = "Love you, " + ID + "!";
    }
    greetings.classList.remove("hidden");
    logoutForm.classList.remove("hidden");
    //HTML 내에 인사말 삽입 및 숨길항목 조정
}

//로그아웃 버튼 누르면 실행할 함수
function logoutButton(){
    localStorage.removeItem(USERNAME_KEY);
}



// 이벤트 추가
loginForm.addEventListener("submit", loginButton);
logoutForm.addEventListener("submit", logoutButton);


// 이름이 저장되있는 경우/안되있는 경우
if ( username !== null){
    // username 존재
    loginSuccess(username);
} else {
    // username 부재
    loginForm.classList.remove("hidden");    
}
