let a, b, c, i = 0;
let stack = [];
let flag = true


const reader = document.querySelector(".read");
const code = document.querySelector("main");
const send = document.querySelector("#send");
const res = document.querySelector(".res");
send.addEventListener("click", run);


function add() {
    a += b
}
function sub() {
    a -= b
}
function mul() {
    a *= b
}
function div() {
    a /= b
}

function inc() {
    c++;
}

function push(x) {
    stack.push(x);
}
function pull() {
    return stack.pop();
}
function read() {

    b = Math.floor(Math.random() * 10);
    reader.innerText +=  ++i +". "+ b + "\n"
}
function loop(stack) {
    if(c == 0){
        while(flag){
            action(stack)
        }
    }
    else{
    for (c; c > 0 && flag; c--) {
        action(stack)
    }
}
}
function clear(){
    a = 0
}

function exit() {
    return a == b;
}
function print() {
    res.innerHTML += a + "<br>";
}

// function finish()

// --------------------
function action(arr){
    for(let i = 0; i< arr.length;i++){
    
    switch (arr[i].trim()) {
        case "PUSH A":
            push(a)
            break
        case "PUSH B":
            push(b)
            break
        case "PUSH C":
            push(c)
            break
        case "PULL A":
            a = pull()
            break
        case "PULL B":
            b = pull()
            break
        case "PULL C":
            c = pull()
            break
        case "ADD":
            add()
            break
        case "SUB":
            sub()
            break
        case "MUL":
            mul()
            break
        case "DIV":
            div()
            break
        case "INC":
            inc()
            break
        case "PRINT":
            print()
            break
        case "EXIT IF":
            flag = !exit()
            break
        case "READ":
            read()
            break
        case "CLEAR":
            clear()
            break    
        case "LOOP":
            flag = true
              let loopStack = [];
             i++
            for(;arr[i] != 'END LOOP';i++){
              loopStack.push(arr[i])
              }
                
            loop(loopStack)
            break
            }

    }
}
function run() {
    reader.innerText = ""
    i = 0
    res.innerHTML = ""
    a = parseInt(document.querySelector("#a").value)
    b = parseInt(document.querySelector("#b").value)
    c = parseInt(document.querySelector("#c").value)

    let arr = code.innerText.split("\n")
    action(arr)
   
}