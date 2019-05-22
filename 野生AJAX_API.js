/*
升级你的 jQuery.ajax 满足 Promise 规则
jQuery.ajax({
    url: '/xxx',
    method: 'get'
}).then(success, fail) 
*/
//函数封装
window.jquery.ajax = function({url, method, body, headers}){
    return new Promise(function(resolve, reject){
        let request = new XMLHttpRequest()
        request.open(method, url)
        for(let key in headers){
            let value = headers[key]
            request.setRequestHeader(key, value)
        }
        request.onreadystatechange()=>{
            if(request.readyState === 4){
                if(request.status >=200 && request.status < 300){
                    resolve.call(undefined, request.responseText)
                }else if(request.status >= 400){
                    reject.call(undefined, request)
                }
            }
        }
        request.send(body)
    })
}

//封装函数的调用
myButton.addeventListener('click', (e)=>{
    window.jquery.ajax({
        url: /xxx,
        method: 'get',
        headers: {
            'content-type': 'application/x-www-urlencoded',
            'doki': 'charming'
        }
    }).then(
        (text)=>{console.log(text)},
        (response)=>{console.log(response)}
    )
})