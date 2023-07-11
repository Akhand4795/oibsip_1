const Q = [];
const A = [];
var i=0

function Question(){
    // e.preventDefault();
    var ques = document.getElementById("screen").value;
    Q.push(ques);
    console.log(Q);
    return Q;
}

function Answer(){
    var ans = document.getElementById("screen").value;
    A.push(Q[i] + ' = ' + ans + '<br>');
    i+=1;
    console.log(A);
    return A;
}

function history(){
    // var qu = Question();
    // var an = Answer();

    document.getElementById("History").innerHTML = A;

}

function preventSubmit(evt){
    value = document.getElementById("screen").value;
    console.log(value);
    if (evt.keycode == 13) {
        value = eval(value);
        return false;
    }
    return true;
}

// value = document.getElementById("screen").value;
// $('#forms').find('.screen').keypress(function(e){
//     if (e.which == 13) {
//         value = eval(value);
//         return false;
//     }
// })
// document.addEventListener("keydown", function(event) {
//     value = document.getElementById("screen").value;
//     console.log(value);
//     if (event.keycode == 13) {
//         value = eval(value);
//         return false;
//     }
//   })

