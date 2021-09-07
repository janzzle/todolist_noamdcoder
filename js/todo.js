const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

// const toDos = [];
let toDos = [];

function saveTodos(){
    localStorage.setItem("TODOS_KEY", JSON.stringify(toDos));
    // localStorage.setItem("TODOS_KEY", toDos)
    // console.log(localStorage.getItem("TODOS_KEY"));
}

function handleTodoDelete(event){
    const deleteTargetLi = event.target.parentElement; // 누른 버튼의 부모
    deleteTargetLi.remove();
   
    toDos = toDos.filter((todo) => todo.id !== parseInt(deleteTargetLi.id));
    saveTodos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");        // li 생성
    li.id = newTodo.id;
    const span = document.createElement("span");    // span 생성
    span.innerText = newTodo.text;                    // span 내용에 받아온 newTodo 넣기

    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", handleTodoDelete);

    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){ // 엔터 치면
    event.preventDefault();         // 새로고침 중지
    const newTodo = toDoInput.value; // 입력한 todo가 newTodo로 들어감
    toDoInput.value = "";           // input 공간 비움

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };

    toDos.push(newTodoObj); // 입력된 newTodo를 toDos 배열에 넣음
    paintToDo(newTodoObj); // 입력된 newTodo를 paintToDo로 보냄
    saveTodos();
}



toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("TODOS_KEY"); // 문자열을 savedTodos에 담기

if(savedToDos){ // localStorage에 저장된 값이 있나?
    const parsedToDos = JSON.parse(savedToDos); 
    // savedTodos에 담긴 문자열 -> 배열로 변환 후 parsedToDos에 담기
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); 
    // parsedToDos 배열 속 to do 내용을 paintToDo 함수에 넣어 실행
}