
addEventListener('load', func);
function func(){
  const $elem = document.querySelector('p');
    var text = $elem.textContent;
    var len = text.length;
  if(len > 8){
   var str1 = text.slice(0, 8);
   var str2 = text.slice(8,len);
  var symb = " ";
  for (var count = -1, index = 0; index != -1; count++){
    index = str2.indexOf(symb, index + 1);
  }
  console.log("There is " + count + " words");
let nSt = str2.replace(/[.]/gi,".<br>");
   let sSt = nSt.replace(/[?]/gi,
"&#128559");
  let a = document.createElement("span");
  a.style.backgroundColor = "yellow";
  a.innerHTML = sSt.replace(/[!]/gi,
"&#129300");
   document.querySelector('p').innerHTML = str1;
   aaa.append(a);
   let b = document.createElement("a");
   b.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html";
   b.appendChild(document.createTextNode('Source'));
   document.body.append(b);
 }
}
