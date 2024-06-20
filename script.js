var arr = [{
    name : "Suveksha", 
    stat : "Stranger",
    img: "https://images.unsplash.com/photo-1616715076569-0a8871febc43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
},{
    name: "Shark", 
    stat:  "Stranger",
    img : "https://images.unsplash.com/photo-1505968409348-bd000797c92e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
},
{
    name: "Himani",
    stat : "Stranger",
    img: "https://images.unsplash.com/photo-1612751747121-543c0be0f58f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
}];

function show(){
    var clutter =  "";
    arr.forEach(function(elem ,idx){
       clutter +=` <div id="card">
       <img src="${elem.img}" alt="">
       <h1>${elem.name}</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, ex? Sint maiores quisquam perspiciatis ullam!</p>
       <h3 class = "${elem.stat}">${elem.stat}</h3>
       <button id = "${idx}">Add Friend</button>
   </div>`;
    });
    document.querySelector("#main").innerHTML = clutter;
}
 show()
 document.querySelector("#main").addEventListener("click", function(dets){
    if(arr[dets.target.id].stat == "Strangers"){
        arr[dets.target.id].stat = "Friends"
        show()
    }
    else{
        arr[dets.target.id].stat = "Strangers"
        show()
    }
 })