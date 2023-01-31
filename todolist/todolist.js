localStorage.removeItem('editorLastConnected'); //用stackblitz的localStorage會有一段亂碼，把它移調
let ToDoList = document.getElementById('ToDoList'); //#ToDoList取得輸入內容
let aryNumber = localStorage.length;
let unDel = true;
let pickNumber = 0;
$(document).ready(function () {
    const DBKey = Object.keys(localStorage).sort();//物件轉陣列+排序
    //   console.log(DBKey.sort());//排序過的陣列
    //   console.log(DBKey.length);//總長度
    for (let DBKeyArry = 0; DBKeyArry < DBKey.length; DBKeyArry++) {
        //  console.log(DBData);//取出每一個陣列
        const DBData = DBKey[DBKeyArry];
        $('#seconfBlock').prepend(
            '<div id="list' + DBData + '" class="input-group mb-3">'
            + '<div class="input-group-prepend">'
            + '<div class="input-group-text">'
            + '<button id="ReviseBnt' + DBData + '" class="ReviseBnt btn btn-outline-secondary" type="submit"  onclick=Revise(' + '"' + DBData + '"' + ')>編輯</button>' //編輯鈕
            + '<button id="SaveBnt' + DBData + '" style="display:none;" class="SaveBnt ReviseBnt btn btn-outline-secondary" type="submit"  onclick=Save(' + '"' + DBData + '"' + ')>儲存</button>' //儲存鈕
            + '</div></div>'
            + '<textarea id="'+DBData+'" rows="auto"  style="resize:none;font-size:20px" class="form-control" aria-label="Text input with checkbox" readonly=false>' + localStorage.getItem(DBData) + '</textarea>'
            + '<div class="input-group-prepend">'
            + '<div class="input-group-text">'
            + '<button id="DelListBnt' + DBData + '" class="DelBnt ReviseBnt btn btn-outline-secondary" type="submit"  onclick=DelList(' + '"' + DBData + '"' + ')>刪除</button>' //刪除鈕
            + '</div></div>'
            + '</div>'
        );
    }
    $('#ToDoList').keyup(function (event) {
        //Enter觸發送出
        if (event.keyCode === 13) {
            $('#button-addon2').click();
        }
    });
//console.log($("#"+"mylist2").val());
});

function AddToDo() {
    let str = '';
    let SubmitValue = ToDoList.value;
    str = SubmitValue;
    if (str == '') {
        //如果輸入的內容是空白，就提醒
        alertOut();
    } else if (str !== '') {
        localStorage.setItem('mylist' + aryNumber, str); //這個是存進去暫存資料庫，但設計格式我要在想一下
        $('#ToDoList').val(''); //清空輸入的內容
        location.reload(true); //刷新f5
        aryNumber++; //每增加一筆明細aryNumber就+1
    }
}
function Revise(y){//編輯
    $("#"+y).removeAttr("readonly");
    $("#ReviseBnt"+y).css('display','none');
    $("#SaveBnt"+y).css('display','block');
}
function Save(y){//儲存
    $("#"+y).attr("readonly","readonly");  
    $("#ReviseBnt"+y).css('display','block');
    $("#SaveBnt"+y).css('display','none');
    localStorage.setItem(y,$("#"+y).val());
    location.reload(true); //刷新f5
}
function DelList(x) {//刪除
    localStorage.removeItem(x);
    location.reload(true); //刷新f5
}
console.log(localStorage);

function reset() {
    //測試用
    localStorage.clear(); //歸零localStorage
    location.reload(true); //刷新f5
}
function alertOut() {
    $('#alert').slideDown('slow');
}
function alertIn() {
    $('#alert').slideUp('slow');
}
