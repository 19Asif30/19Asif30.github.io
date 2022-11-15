
// function onlod(){
//     let arr = JSON.parse(localStorage.getItem("load"))
//     for(let i of arr){
//         document.querySelector(".divOuter").innerHTML += i
//     }
// }

let comt = JSON.parse(localStorage.getItem("comments"))
comt.forEach(obj => {
    let element = `<div class="div1 dv">
                        <p id = "title" class = "divitems">${obj.name}</p>
                        <p id = "para" class = "divitems">${obj.comment}</p>
                        <p id = "like" class = "divitems"><span id = "likecount">${obj.likes}</span> likes<i onclick = "likefunc(this);" class = "fa fa-thumbs-up likebtn"></i><span id = "dislikecount">${obj.dislikes}  </span> dislikes<i onclick = "dislikefunc(this);" class = "fa fa-thumbs-down likebtn"></i> <span id = "del"><i onclick = "del(this);" class = "fa fa-trash"></i></span></p>
                        <p id = "commentedDate">${obj.date}</p>
                    </div> `
    document.querySelector(".divOuter").innerHTML += element
});


function addComment(){
    let user_name = document.getElementById("username")
    let comments_1 = document.getElementById("comments")
    if(user_name.value == ""){
        alert("User name should not be empty!")
        return false;
    }
    let cmtDate = new Date()
    cmtDate = `${cmtDate.getFullYear()}-${cmtDate.getMonth()}-${cmtDate.getDay()}`
    let element = `<div class="div1 dv">
                        <p id = "title" class = "divitems">${user_name.value}</p>
                        <p id = "para" class = "divitems">${comments_1.value}</p>
                        <p id = "like" class = "divitems"><span id = "likecount">0 </span> likes<i onclick = "likefunc(this);" class = "fa fa-thumbs-up likebtn"></i><span id = "dislikecount">0</span> dislikes<i onclick = "dislikefunc(this);" class = "fa fa-thumbs-down likebtn"></i> <span id = "del"><i onclick = "del(this);" class = "fa fa-trash"></i></span></p>
                        <p id = "commentedDate">${dateCal(cmtDate)}</p>
                    </div> `
    document.querySelector(".divOuter").innerHTML += element
    let arr = JSON.parse(localStorage.getItem("comments"))
    let obj = {
        name: user_name.value,
        comment: comments_1.value,
        likes: 0,
        dislikes: 0,
        date: dateCal(cmtDate)
    }
    arr.push(obj)
    localStorage.setItem("comments", JSON.stringify(arr))

    // //for loading
    // let ld = JSON.parse(localStorage.getItem("load"))
    // ld.push(element)
    // localStorage.setItem("load",JSON.stringify(ld))
    user_name.value = ""
    comments_1.value = ""
}

function likefunc(i){
    let p = i.parentNode
    let no = p.children[0]
    no.innerHTML = parseInt(no.innerHTML)+1
    const uname = p.parentNode.children[0].innerHTML
    let arr = JSON.parse(localStorage.getItem("comments"))
    let currentLike = 0
    for(obj of arr){
        if(obj.name == uname){
            obj.likes += 1
            currentLike = obj.likes
        }
            
    }
    localStorage.setItem("comments", JSON.stringify(arr))

    //for load function
    // let load1 = JSON.parse(localStorage.getItem("load"))
    // for(let i = 0; i < load1.length; i++){
    //     if(load1[i].substr(81, uname.length) == uname){
    //         let item = load1[i].slice(load1[i].indexOf('likecount')+11, load1[i].indexOf(' </span>'))
    //         load1[i] = load1[i].replace(item, currentLike)
    //         console.log(load1[i])
    //     }
    // }
    //localStorage.setItem("load",JSON.stringify(load1))
}

function dislikefunc(ob){
    let p = ob.parentNode
    let no = p.children[2]
    no.innerHTML = parseInt(no.innerHTML)+1
    const uname = ob.parentNode.parentNode.children[0].innerHTML
    let arr = JSON.parse(localStorage.getItem("comments"))
    let current_dislike = 0
    for(obj of arr){
        if(obj.name == uname){
            obj.dislikes += 1
            current_dislike = obj.dislikes
        }
            
    }
    localStorage.setItem("comments", JSON.stringify(arr))

    //for load function
    // let load1 = JSON.parse(localStorage.getItem("load"))
    // for(let i = 0; i < load1.length; i++){
    //     if(load1[i].substr(81, uname.length) == uname){
    //         let item = load1[i].slice(load1[i].indexOf('dislikecount')+14, load1[i].indexOf('  </span>'))
    //         console.log(item)
    //         load1[i] = load1[i].replace(item, current_dislike+'.')
    //     }
    // }
    //localStorage.setItem("load",JSON.stringify(load1))
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

    //for loading and unload
    // let load1 = JSON.parse(localStorage.getItem("load"))
    // for(let i = 0; i < load1.length; i++){
    //     if(load1[i].substr(81, uname.length) == uname){
    //         load1.splice(i,1)
    //     }
    // }
    //localStorage.setItem("load",JSON.stringify(load1))
    ob.parentNode.parentNode.parentNode.remove()
}

function dateCal(str){
    let strarr = str.split('-')
    let months = {
      01: "January",
      02: "February",
      03: "March",
      04: "April",
      05: "May",
      06: "June",
      07: "July",
      08: "August",
      09: "September",
      10: "October",
      11: "November",
      12: "December"
    }
    let date = ""
    for (i in strarr.reverse()) {
      if (i == 1)
        date +=(months[strarr[i]])
      else
        date+=(strarr[i])
    
    }
    return date
}
