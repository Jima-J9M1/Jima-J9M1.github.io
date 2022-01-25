
document.querySelector(".js-go").addEventListener("click",function(){
    var input=document.querySelector("input").value;
    input=JSON.stringify(input);
    var doc=document.querySelector(".js-container");
    doc.innerHTML="";
    url_src(input);
    pushToDOM(input);
})

document.querySelector(".js-userinput").addEventListener("keyup",function(e){
    var input=document.querySelector("input").value;
    var doc=document.querySelector(".js-container");
    doc.innerHTML="";
    if(e.which===13){
        console.log(input)
        url_src(input);
        pushToDOM(input);
    }

})

function url_src(input){
// using API and AJAX for grab data from the server
var url='http://api.giphy.com/v1/gifs/search?q=funny+'+input+'&api_key=VWArNFZHAZSsXV505p6MKx2CDcHnhMjE';

// AJAX request 
var GiphyAJAXCall= new XMLHttpRequest();
GiphyAJAXCall.open('GET',url);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load',function(e){
    // console.log(e);
    var data=e.target.response;
    pushToDOM(data);
})
}


function pushToDOM(input){

    console.log(typeof(input))
    var response=JSON.parse(input);
    

    
    
    var imge_url=response.data;
    imge_url.forEach(function(image){

        var src = image.images.fixed_height.url;

        var container=document.querySelector(".js-container");
        container.innerHTML=container.innerHTML+"<img src=\"" + src + "\" class=\"container-image\">";
    });
    
}
