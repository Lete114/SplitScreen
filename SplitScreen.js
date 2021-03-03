// 监听键盘弹起事件
document.onkeyup=function(e){ 
    // 获取输入的值
    var left = document.getElementById('left').value;
    var right = document.getElementById('right').value;

    /*
    * left.indexOf("http")
    * right.indexOf("http")
    * 判断是否以HTTP协议开头的链接
    */
    if(left!=""){
        if(left.indexOf("http")!=0){
            document.getElementById('alert').style.display="block";
            return
        }else{
            document.getElementById('alert').style.display="none";
        }
    }
    if(right!=""){
        if(right.indexOf("http")!=0){
            document.getElementById('alert').style.display="block";
            return
        }else{
            document.getElementById('alert').style.display="none";
        }
    }
    document.getElementById('alert').style.display="none";
}

document.getElementById('SplitScreen').addEventListener('click', function(e) {
    // 获取输入的值
    var left = document.getElementById('left').value;
    var right = document.getElementById('right').value;
    /*
    * left.indexOf("http")
    * right.indexOf("http")
    * 判断是否以HTTP协议开头的链接
    */
    if(left!=""){
        if(left.indexOf("http")!=0){
            document.getElementById('alert').style.display="block";
            return
        }else{
            document.getElementById('alert').style.display="none";
        }
    }
    if(right!=""){
        if(right.indexOf("http")!=0){
            document.getElementById('alert').style.display="block";
            return
        }else{
            document.getElementById('alert').style.display="none";
        }
    }
    document.getElementById('alert').style.display="none";
    // 定义变量
    var data = "";
    // 当前打开的网址
    if(left==""&&right==""){
        data = `document.write('<title>'+document.title+'</title><frameset cols="50%,*"><frame id="left" src='+location.href+'><frame id="right" src='+location.href+'></frameset>')}`
        data = `if(document.getElementById("left")!=null){document.getElementById("left").src=location.href;document.getElementById("right").src=location.href}else{`+data
    }
    // 自定义-左侧分屏网址 / 右侧分屏网址
    if(left!=""&&right!=""){
        data = `document.write('<title>'+document.title+'</title><frameset cols="50%,*"><frame id="right" src='+left+'><frame id="right" src='+right+'></frameset>')}`
        data = `if(document.getElementById("left")!=null){document.getElementById("left").src=left;document.getElementById("right").src=right}else{`+data
        data = "var left = "+`'${left}';`+data
        data = "var right = "+`'${right}';`+data
    }else
    // 自定义-左侧网址 / 当前网址地址
    if(!left==""){
        data = `document.write('<title>'+document.title+'</title><frameset cols="50%,*"><frame id="left" src='+left+'><frame id="right" src='+location.href+'></frameset>')}`
        data = `if(document.getElementById("left")!=null){document.getElementById("left").src=left;document.getElementById("right").src=location.href}else{`+data
        data = "var left = "+`'${left}';`+data
    }else
    // 自定义-当前网址地址 / 右侧网址
    if(!right==""){
        data = `document.write('<title>'+document.title+'</title><frameset cols="50%,*"><frame src='+location.href+'><frame id="right" src='+right+'></frameset>')}`
        data = `if(document.getElementById("left")!=null){document.getElementById("left").src=location.href;document.getElementById("right").src=right}else{`+data
        data = "var right = "+`'${right}';`+data
    }
    // 执行页面程序
    chrome.tabs.executeScript({
        code: data
    });
});
// 清空
document.getElementById('clean').addEventListener('click', function(e) {
    document.getElementById('left').value="";
    document.getElementById('right').value="";
    document.getElementById('alert').style.display="none";
})
