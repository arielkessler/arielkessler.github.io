window.onload = function () {

const input = document.getElementById("todo");
const  btn = document.querySelector("#btn");
const list = document.querySelector("#list");
var el = document.getElementsByTagName('li');

// this function will allow us to add elements when we click the button
console.log(btn);
console.log(input);

btn.onclick = function(){
    
    var txt = input.value;
    if(txt ==''){
        alert('you must write something');
    }else{
        li = document.createElement('li');
    li.innerHTML = txt;
    list.insertBefore(li,list.childNodes[0]);
    input.value = '';
    }
    
};

//this function will allow us to check the clicked elements
list.onclick = function(ev){
    if(ev.target.tagName == 'LI'){
         ev.target.classList.toggle('checked');
    }
};

}