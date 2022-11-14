localStorage.setItem("comments",'[]')
function addComment(){
    let user_name = document.getElementById("username")
    let comments_1 = document.getElementById("comments")
    if(user_name.value == ""){
        alert("User name should not be empty!")
        return false;
    }
    let element = `<div class="div1">
                        <p id = "title" class = "divitems">${user_name.value}</p>
                        <p id = "para" class = "divitems">${comments_1.value}</p>
                        <p id = "like" class = "divitems"><span>0</span> likes<i onclick = "likefunc(this);" class = "fa fa-thumbs-up likebtn"></i><span>0</span> dislikes<i onclick = "dislikefunc(this);" class = "fa fa-thumbs-down likebtn"></i> <span id = "del"><i onclick = "del(this);" class = "fa fa-trash"></i></span></p>
                    </div> `
    document.querySelector(".divOuter").innerHTML += element

    let arr = JSON.parse(localStorage.getItem("comments"))
    let obj = {
        name: user_name.value,
        comment: comments_1.value,
        likes: 0,
        dislikes: 0
    }
    arr.push(obj)
    localStorage.setItem("comments", JSON.stringify(arr))
    user_name.value = ""
    comments_1.value = ""
}

function likefunc(i){
    let p = i.parentNode
    let no = p.children[0]
    no.innerHTML = parseInt(no.innerHTML)+1
    const uname = p.parentNode.children[0].innerHTML
    let arr = JSON.parse(localStorage.getItem("comments"))
    for(obj of arr){
        if(obj.name == uname)
            obj.likes += 1
    }
    localStorage.setItem("comments", JSON.stringify(arr))
}

function dislikefunc(ob){
    let p = ob.parentNode
    let no = p.children[2]
    no.innerHTML = parseInt(no.innerHTML)+1
    const uname = ob.parentNode.parentNode.children[0].innerHTML
    let arr = JSON.parse(localStorage.getItem("comments"))
    for(obj of arr){
        if(obj.name == uname)
            obj.dislikes += 1
    }
    localStorage.setItem("comments", JSON.stringify(arr))
}

function del(ob){
    const uname = ob.parentNode.parentNode.parentNode.children[0].innerHTML
    let arr = JSON.parse(localStorage.getItem("comments"))
    for(let i = 0; i < arr.length; i++){
        if(arr[i].name == uname){
            arr.splice(i,1)
        }
    }
    localStorage.setItem("comments", JSON.stringify(arr))
    ob.parentNode.parentNode.parentNode.remove()
}