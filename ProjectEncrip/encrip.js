//function encrip
function encrip() {
        var text = document.getElementById("textarea").value.toLowerCase();
        
        var textencryption = text.replace(/e/img, "enter").replace(/i/img, "imes").replace(/a/img, "ai").replace(/o/img, "ober").replace(/u/img, "ufat");
        addElement(textencryption);
    }
    
//function descrip        
function descrip (){ 
        var text = document.querySelector("textarea").value.toLowerCase();
        var textdecoded = text.replace(/enter/img, "e").replace(/imes/img, "i").replace(/ai/img, "a").replace(/ober/img, "o").replace(/ufat/img, "u"); 
        addElement(textdecoded);
    }
    
//function add div + string encrip or descrip and btn copy
function addElement (encrip) {
    const divs = document.querySelectorAll('.box');
    divs.forEach(div => {  div.remove();});

    const btn = document.querySelectorAll('.copy');
    btn.forEach(div => {  div.remove();});

    const area = document.querySelectorAll('.area');
    area.forEach(div => {  div.remove();});
    // new div
    // and add content
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class","box");
    // add element create and element the dom
    var currentDiv = document.querySelector("box");
    document.body.insertBefore(newDiv, currentDiv);

    //create btn copy and texarea for copy
    if (encrip) {
        
        document.querySelector(".imageRigt").style.display = "none";
        
        let button = document.createElement('button');
        button.setAttribute("class","copy");
        button.setAttribute("onclick","copy()");  
        button.type = 'button'; 
        button.innerText = 'Copiar'; 
        newDiv.appendChild(button); 

        let area = document.createElement('textarea');
        area.setAttribute("class","area");
        area.setAttribute("readonly","readonly");
        area.innerText = encrip; 
        newDiv.appendChild(area);
    }
  }

//function copy 
function copy() {
    let content =  document.querySelector(".area");
    content.select();
    document.execCommand('copy');
}




