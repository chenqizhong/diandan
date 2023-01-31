var btn = document.querySelector('.btnClass');
var call = document.querySelector('.btnCall');
function saveName(e){
  //宣告一個變數，綁定輸入欄，讀取&紀錄使用者輸入的文字
  var str = document.querySelector('.textContent').value;
  localStorage.setItem('myName',str); //把輸入的內容存在瀏覽器 
}
function callName(e){
  str = localStorage.getItem('myName'); //取出已存在瀏覽器的資料
  alert('你的名字叫做' + str);
}

btn.addEventListener('click',saveName)
call.addEventListener('click',callName)