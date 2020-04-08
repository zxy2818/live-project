var EventUtil = {
    //跨浏览器添加事件处理程序
    addHandler: function(element, type, handler){
        if(element.addEventListener){
            element.addEventListener(type, handler, false);
        }else if(element.attachEvent){
            element.attachEvent("on"+type,handler);
        }else{
            element["on"+handler] = handler;
        }

    },
    //跨浏览器移除事件处理程序
    removeHandler: function(element,type,handler){
        if(element.addEventListener){
            element.removeEventListener(type, handler, false);
        }else if (element.detachEvent){
            element.detachEvent("on"+type,handler);
        }else{
            element["on"+type] = null;
        }
    },
    //跨浏览器的事件对象
    getEvent: function(event){
        return event ? event : window.event;
    },
    getTarget: function(event){
        return event.target || event.srcElement;
    },
    preventDefault: function(event){
        if (event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
    },
    stopPropagation: function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else {
            event.cancelBubble = true;
        }
    }
};
var oForm = document.getElementById('form');
var oId = document.getElementById('id');
var oName = document.getElementById('name');
var oInt = document.getElementById('inttime');
var oOut = document.getElementById('outtime');
var oContent = document.getElementById('content');

EventUtil.addHandler(oForm,'submit',submitForm);
function submitForm(event){
    var event = EventUtil.getEvent(event);
    EventUtil.preventDefault(event);

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState==4 && xhr.status==200)
        {
            var str = xhr.responseText;

            str = str.replace(/Array/g,'');

            str = str.slice(2,-2);
            str = str.replace(/\s/g,'');
            str = str.replace(/\[\D+?\]=>[^\[]+/g,',');
            console.log(str);
            str = str.replace(/\[\d\]=>/g,'');
            str = str.slice(0,-1);
            console.log(str);
            var arr = str.split(',');
            var oDiv = document.createElement('div');
            oDiv.innerHTML = "学号："+arr[0]+" 姓名："+arr[1]+" 进入时间："+arr[2]+" 出来时间："+arr[3];
            // str = str.replace(/\[\d\]=>/g,'^%$^');
            // str = str.slice(1,-1);
            // var arr1 = str.split(')^%$^(');
            // for(var i = 0; i < arr1.length; i++){
            //
            // }
        }
    }
    xhr.open("post","insert.php",true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send("id="+oId.value+"&name="+oName.value+"&intime="+oInt.value+"&outtime="+oOut.value);
}
