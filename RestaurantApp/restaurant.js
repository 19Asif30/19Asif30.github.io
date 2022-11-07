//                               Popup global function creation
startup();
function popup(){
    let popup1 = document.createElement("div")
    popup1.id = "popup1"
    popup1.style.position = "fixed"
    popup1.style.top = "0"
    popup1.style.bottom = "0"
    popup1.style.left = "0"
    popup1.style.right = "0"
    popup1.style.border = "2px solid black"
    popup1.style.background = "rgba(0,0,0,0.7)"
    popup1.style.transition = "opacity 500ms"
    popup1.style.visibility = "hidden"
    popup1.style.opacity = "0"
    document.body.appendChild(popup1)
    popup1.style.visibility = "visible"
    popup1.style.opacity = "1"
    return popup1
}
//                                       Starting popup
function startup(){
    let popup1 = popup();
 
    let div2 = document.createElement("div")
    div2.id ="tmp2"
    div2.style.margin = "225px auto"
    div2.style.padding = "20px"
    div2.style.background = ""
    div2.style.borderRadius = "5px"
    div2.style.height= "40%"
    div2.style.textAlign = "center"
    div2.style.width = "40%"
    div2.style.position = "relative"
    div2.style.transition = "all 5s ease-in-out"
    popup1.appendChild(div2)

    let h2 = document.createElement("h2")
    h2.id = "head2"
    h2.innerHTML = "YUMM! The Eat'n"
    h2.style.marginTop = "0"
    h2.style.fontFamily = "Dancing Script, cursive"
    div2.appendChild(h2)

    let cont = document.createElement("div")
    cont.id = "cont"
    cont.innerHTML = "Restaurant / Coffee / Pub"
    cont.style.maxHeight = "30%"
    cont.style.marginTop = "25px"
    cont.style.overflow = "auto"
    div2.appendChild(cont)
    function release(){
        popup1.style.visibility = "hidden"
        popup1.style.opacity = "0"
        div2.remove()
    }

    let explore = document.createElement("button")
    explore.innerHTML = "Explore"
    explore.id = "explore"
    explore.onclick = function(){release()}
    div2.appendChild(explore)
}
//                                                             reservations list
let vb1 = document.createElement("div")
vb1.classList.add("viewBox1")

let h1vb = document.createElement("h1")
h1vb.innerHTML = "RESERVATIONS"
vb1.appendChild(h1vb)

let vb2 = document.createElement("div")
vb2.classList.add("viewBox2")

let ul = document.createElement("ul")
ul.classList.add("reslist")
vb2.appendChild(ul)
vb1.appendChild(vb2)
//                                 View Reservations
function view_reser(){
    let popup1 = popup();
    popup1.appendChild(vb1)
    vb1.style.visibility = "visible"
    vb1.style.opacity = "0.9"

    let anch2 = document.createElement("a")
    anch2.id = "close"
    anch2.classList.add("exit")
    anch2.innerHTML = "&times"
    anch2.href = "#"
    anch2.onclick = function(){release()}
    h1vb.appendChild(anch2)
    
    function release(){
        popup1.style.visibility = "hidden"
        popup1.style.opacity = "0"
        vb1.style.visibility = "hidden"
        vb1.style.opacity = "0"
        anch2.remove()
    }
}
//                                                         form registration
function getform(){
    let popup1 = popup();
    let dv = document.getElementById("reg")
    popup1.appendChild(dv)
    dv.style.opacity = "0.9"
    dv.style.visibility= "visible"
    dv.style.marginTop = "50px"

    //                                   element values
    
    let reservations = JSON.parse(localStorage.getItem("reservations") || "[]")
    let username = document.getElementById("username")
    let email = document.getElementById("email")
    let date = document.getElementById('date')
    let time = document.getElementById("time")
    let nos = document.getElementById("nos")
    let form = document.getElementById("myform")
    let sub = document.getElementById("sub")
    sub.onclick = function(){
        console.log('a')
        if(username.value == "" || email.value == "" || date.value == "" || time.value == ""){
            alert("Please fill all the details")
        }
        else{
            let obj = {username: username.value,email: email.value, date: date.value, time: time.value, no_of_peoples: nos.value}
            reservations.push(obj)
            localStorage.setItem("reservations", JSON.stringify(reservations))

            //adding to registrations list
            let li = document.createElement("li")
            li.classList.add("rslist")
            li.innerHTML = username.value
            let dt = document.createElement("div")
            dt.classList.add("daters")
            dt.innerHTML = dateCal(date.value)
            li.appendChild(dt)
            ul.appendChild(li)
            //                     description of li
            li.onclick = function(){
                let popup2 = popup();
                let div2li = document.createElement("div")
                div2li.id = "desc"
                div2li.style.margin = "70px auto"
                div2li.style.padding = "20px"
                
                div2li.style.borderRadius = "5px"
                div2li.style.padding = "20px"
                div2li.style.width = "30%"
                div2li.style.position = "relative"
                div2li.style.transition = "all 5s ease-in-out"
                popup2.appendChild(div2li)
            
                let h2li = document.createElement("h2")
                h2li.innerHTML = obj.username
                h2li.style.marginTop = "0"
                h2li.style.color = "#333"
                h2li.style.fontFamily = "Tahoma, Arial, sans-serif"
                div2li.appendChild(h2li)
            
                let anch2 = document.createElement("a")
                anch2.innerHTML = "&#8592"
                anch2.style.fontSize = "25px"
                anch2.style.fontWeight = "bolder"
                anch2.href = "#"
                anch2.classList.add("exit")
                anch2.onclick = function(){release()}
                div2li.appendChild(anch2)
            
                let contli = document.createElement("div")
                contli.innerHTML = (`<br><b>Email:</b>  ${obj.email}<br><b>Reservation Date:</b>  ${dateCal(obj.date)}<br><b>Reservation time:</b>  ${obj.time}<br><b>No.of.peoples:</b>  ${obj.no_of_peoples}`)
                contli.style.color = "black"
                contli.style.fontSize = "20px"
                contli.style.maxHeight = "30%"
                contli.style.overflow = "auto"
                div2li.appendChild(contli)
                function release(){
                    popup2.style.visibility = "hidden"
                    popup2.style.opacity = "0"
                    div2li.remove()
                    
                }
            }
            //                emptying the values once added to local storage
            username.value = ""
            email.value = ""
            date.value = ""
            time.value = ""
            nos.value = "--no of people--"
            dv.style.visibility = "hidden"
            dv.style.opacity = "0"
            popup1.style.opacity = "0"
            popup1.style.visibility = "hidden"
        }
    }       
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



















