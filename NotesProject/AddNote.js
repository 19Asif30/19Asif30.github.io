let flag = 0
let counter = 0
// styling body
let body1 = document.body
body1.style.margin = "0"
body1.style.padding = "0"
body1.style.display = "flex"
body1.style.alignItems = "center"
body1.style.height = "auto"
body1.background.opacity = "0.5"
body1.style.justifyContent = "center"
body1.style.backgroundImage = "linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% )"
body1.style.backgroundSize = "cover"
body1.style.backgroundAttachment = "fixed"
body1.style.backgroundRepeat = "no-repeat"

//creating div1
let div1 = document.createElement('div')
div1.id = "div1"
div1.style.height = "auto"
div1.style.maxWidth = "1300px"
div1.style.backgroundRepeat = "no-repeat"
div1.style.backgroundSize = "cover"
// div1.style.border = "1px solid black"
div1.style.backgroundPosition = "relative"
body1.appendChild(div1)

//adding heading
let heading = document.createElement('h1')
heading.id = "heading1"
heading.innerHTML = "Passion-To-Note"
heading.style.textAlign = "center"
heading.style.color = "Brown"
heading.style.fontSize = "50px"
heading.style.marginTop = "-2px"
div1.appendChild(heading)

//adding div2
let div2 = document.createElement('div')
div2.id = "div2"
div2.classList.add("inner")
div2.style.height = "auto"
div2.style.backgroundImage = "linear-gradient(to right, #141e30, #243b55)"
div2.style.border = "2px solid #34495E "
div2.style.backgroundRepeat = "no-repeat"
div2.style.backgroundSize = "cover"
// div2.style.border = "1px solid black"
div2.style.borderRadius = "5px"
div1.appendChild(div2)

//adding title box
let title = document.createElement('input')
title.type = "text"
title.id = "title1"
title.placeholder = "Title..."
title.style.fontSize = "20px"
title.style.height = "50px"
title.style.width = "1000px"
title.style.marginLeft = "30px"
title.style.marginTop = "30px"
title.style.borderRadius = "5px"
div2.appendChild(title)

//adding text area
let txt = document.createElement("textarea")
txt.id = "txt"
txt.placeholder = "Your Note..."
txt.style.fontSize = "20px"
txt.style.height = "125px"
txt.style.width = "1000px"
txt.style.marginLeft = "30px"
txt.style.marginTop = "10px"
txt.style.borderRadius = "5px"
div2.appendChild(txt)

//add note button creation
let addnote = document.createElement('input')
addnote.type = "button"
addnote.id = "AddNote"
addnote.value = "Add Note"
addnote.style.height = "40px"
addnote.style.width = "90px"
addnote.style.fontWeight = "bold"
addnote.style.fontFamily = "lucida handwriting"
addnote.style.borderRadius = "20px"
addnote.style.marginLeft = "30px"
addnote.style.marginTop = "20px"
addnote.style.background = "greenyellow"
addnote.style.color = "black"
function mouseOverAddNote(){
    addnote.style.background= "linear-gradient(to right, #f857a6 0%, #ff5858  51%, #f857a6  100%)"
    addnote.style.color = "white"
    addnote.style.cursor = "pointer"
    addnote.style.transition = "0.5s"
}
function mouseExitAddNote(){
    addnote.style.background = "greenyellow"
    addnote.style.color = "black"
}
addnote.onmouseover = function(){mouseOverAddNote();}
addnote.onmouseout = function(){mouseExitAddNote();}
addnote.onclick = function(){addnoteobj();}
div2.appendChild(addnote)

//adding div 3
let div3 = document.createElement('div')
div3.id = "div3"
div3.classList.add("inner")
// div3.style.border = "1px solid black"
div3.style.height = "auto"
div1.appendChild(div3)

//adding heading your notes
let heading2 = document.createElement('h1')
heading2.id = "heading2"
heading2.innerHTML = "Your Notes"
heading2.style.marginTop = "10px"
heading2.style.fontSize = "40px"
heading2.style.fontFamily = "sans-serif"
div3.appendChild(heading2)

//creating div4
let div4 = document.createElement('div')
div4.style.color = "gray"
div4.id = "div4"
div4.style.maxWidth = "1097px"
div4.style.height = "240px"
div4.style.display = "flex"
div4.style.flexWrap = "wrap"
div4.style.padding = "10px 10px 10px 10px"
div4.style.justifyContent = "center"
div4.style.overflow = "hidden"
// div4.style.border = "1px solid black"
div4.style.borderTop = "2px solid lightgray"
div3.appendChild(div4)

//creating nothing to display para
let noth = document.createElement('p')
noth.id = "noth"
noth.innerHTML = "Once you create a note click on the Underlined Text for preview!"
noth.style.color = "#4A235A "
noth.style.fontFamily = "sans-serif"
noth.style.marginTop = "20px"
noth.style.fontSize = "25px"
div4.appendChild(noth)

function addnoteobj(){
    if(title.value == ""){
        alert("Title should not be empty")
        return
    }
    flag++;
    counter++;
    addnote.value = "Add note"
    noth.remove()
    let title1 = title.value
    let notes1 = txt.value
    let obj = {
        title: title1,
        notes: notes1,
        date: todayDate()
    }
    //adding to local storage
    let key = "object" + title1;
    localStorage.setItem(key, JSON.stringify(obj))
    let notes2 = notes1.slice(0,17) + "..."
    let call1 = calling(title1, notes2, notes1)
    div4.append(call1)
    // save_func(title1, notes1);
    title.value = ""
    txt.value = "" 
}

function todayDate(){
    let months = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"
    }
    let ob = new Date()
    let day = ob.getDate()
    let month_key = ob.getMonth()
    let month = months['' + month_key]
    let year = ob.getFullYear()
    let fulldate = "" + day + month + " " + year
    return fulldate
}

//                                                               popup start

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

function calling(title1, notes1, notesorg){
    //creating div5

    //             function for popupping view
    function targetDiv(){
        title.value = title1
        txt.value = notesorg
        popup1.style.visibility = "visible"
        popup1.style.opacity = "1"
        let div2 = document.createElement("div")
        div2.id ="tmp2"
        div2.style.margin = "70px auto"
        div2.style.padding = "20px"
        div2.style.background = "#fff"
        div2.style.borderRadius = "5px"
        div2.style.width = "30%"
        div2.style.position = "relative"
        div2.style.transition = "all 5s ease-in-out"
        popup1.appendChild(div2)
    
        let h2 = document.createElement("h2")
        h2.id = "head2"
        h2.innerHTML = title.value
        h2.style.marginTop = "0"
        h2.style.color = "#333"
        h2.style.fontFamily = "Tahoma, Arial, sans-serif"
        div2.appendChild(h2)
    
        let anch2 = document.createElement("a")
        anch2.innerHTML = "&times"
        anch2.href = "#"
        anch2.onclick = function(){release()}
        anch2.style.position = "absolute"
        anch2.style.top = "20px"
        anch2.style.right = "30px"
        anch2.style.transition = "all 200ms"
        anch2.style.fontSize = "30px"
        anch2.style.fontWeight = "bold"
        anch2.style.textDecoration = "none"
        anch2.style.color = "#333"
        function overAnch2(){
            anch2.style.color = "#06D85F"
        }
        anch2.onmouseover = function(){overAnch2();}
        div2.appendChild(anch2)
    
        let cont = document.createElement("div")
        cont.id = "cont"
        cont.innerHTML = txt.value
        cont.style.maxHeight = "30%"
        cont.style.overflow = "auto"
        div2.appendChild(cont)
        function release(){
            popup1.style.visibility = "hidden"
            popup1.style.opacity = "0"
            div2.remove()
            title.value = ""
            txt.value = ""
        }
    
    }

    //              popup function end 
    let div5 = document.createElement('div')
    div5.classList.add("card-01")
    div5.style.height = "inherit"
    div5.style.marginLeft = "5px"
    div5.style.borderTop = "5px solid #CCCCFF  "
    div5.style.borderLeft = "5px solid #CCCCFF  "
    div5.style.marginTop = "10px"
    div5.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.2)"
    div5.style.position = "relative"
    div5.style.background = "linear-gradient(to right, #33001b, #ff0084)"
    div5.style.backgroundSize = "cover"
    div5.style.backgroundRepeat = "no-repeat"
    div5.style.borderRadius = "10px"

    //adding title inside div5
    let title2 = document.createElement('div')
    title2.id = "title2"
    title2.style.height = "35px"
    title2.style.width = "260px"
    title2.style.marginTop = "10px"
    title2.style.marginLeft = "10px"
    title2.style.fontSize = "20px"
    title2.style.display = "flex"
    function assistView(){
        title.value = title1
        txt.value = notesorg
        document.getElementById("head2").innerHTML = title.value
        document.getElementById("cont").innerHTML = txt.value
    }
    title2.onclick = function(){}
    div5.append(title2)

    //adding title 2a
    let title2a = document.createElement("div")
    title2a.id = "title2a"
    title2a.style.height = "35px"
    title2a.style.width = "210px"
    title2.appendChild(title2a)

    //adding para to title2 div
    let para1 = document.createElement('p')
    para1.id = "para1"
    para1.style.color = "orange"
    para1.style.fontWeight = "Bolder"
    para1.innerHTML = title1.slice(0,12)
    para1.style.textDecoration = "underline #F08080 "
    para1.style.fontSize = "30px"
    para1.style.fontFamily = "sans-serif"
    para1.style.marginTop = "-2px"
    para1.style.marginLeft = "10px"
    para1.onclick = function(){targetDiv();}
    function hoverPara1(){
        para1.style.cursor = "pointer"
    }
    para1.onmouseover = function(){hoverPara1()}
    title2a.appendChild(para1)

    // adding download button div
    let dwdiv = document.createElement("div")
    dwdiv.id = "dwdiv"
    dwdiv.style.height = "33px"
    dwdiv.style.width = "35px"
    dwdiv.style.marginLeft = "30px"
    title2.appendChild(dwdiv)

    // adding download button
    let dw = document.createElement("button")
    dw.innerHTML = '&#8595'
    dw.style.fontSize = "30px"
    dw.style.height = "40px"
    dw.style.backgroundImage = "linear-gradient(to right, #434343 0%, black 100%)"
    dw.style.color = "white"
    dw.style.fontWeight = "bolder"
    dw.style.width = "30px"
    dw.style.marginLeft = "2px"
    // dw.style.position = "absolute"
    dw.style.borderRadius = "15px"
    function overdw(){
        dw.style.background = "linear-gradient(to right, #00b4db, #0083b0)"
        dw.style.color = "black"
        dw.style.cursor = "pointer"
        dw.style.transition = "0.5s"
    }
    dw.onmouseover = function(){overdw()}
    function exitdw(){
        dw.style.background = "linear-gradient(to right, #434343 0%, black 100%)"
        dw.style.color = "white"
    }
    dw.onmouseout = function(){exitdw()}
    function save_func(){
        title.value = title1
        txt.value = notesorg
        var data = txt.value
    
        var file = new Blob([data], {type: "text"});
        var anchor = document.createElement("a");
        anchor.href = URL.createObjectURL(file);
        anchor.download = title.value
        anchor.click();
        title.value = ""
        txt.value = ""
    
    }
    dw.onclick = function(){save_func()}
    dwdiv.appendChild(dw)
    //adding showmore button

    let show = 0
    //adding show more or less button
    let showmore = document.createElement('input')
    showmore.type = "button"
    showmore.id = "showmore"
    showmore.value = "show all"
    showmore.style.backgroundImage = " radial-gradient( circle farthest-corner at 22.4% 21.7%, rgba(4,189,228,1) 0%, rgba(2,83,185,1) 100.2% )"
    showmore.style.position = "absolute"
    showmore.style.opacity = "0"
    showmore.style.visibility = "hidden"
    showmore.style.height = "30px"
    showmore.style.width = "75px"
    showmore.style.marginTop = "20px"
    showmore.style.borderRadius = "7px"
    showmore.style.marginLeft = "1030px"
    function overShowmore(){
        showmore.style.backgroundImage = "linear-gradient(to right, #0f0c29, #302b63, #24243e)"
        showmore.style.color = "white"
        showmore.style.cursor = "pointer"
        showmore.style.transition = "0.5s"
    }
    function outShowmore(){
        showmore.style.backgroundImage = "radial-gradient( circle farthest-corner at 22.4% 21.7%, rgba(4,189,228,1) 0%, rgba(2,83,185,1) 100.2% )"
        showmore.style.color = "black"
    }
    showmore.onmouseover = function(){overShowmore()}
    showmore.onmouseout = function(){outShowmore()}
    function showall(){
        if(show == 0){
            div4.style.overflow = "visible"
            show++;
            showmore.value = "show less"
        }
        else if(show == 1){
            div4.style.overflow = "hidden"
            show--;
            showmore.value = "show more"
        }
    }
    showmore.onclick = function(){showall();}
    div4.appendChild(showmore)
    if(counter >3){
        
        showmore.style.opacity = "1"
        showmore.style.visibility = "visible"
    }
 
    //adding notes div
    let notesdiv = document.createElement('div')
    notesdiv.id = "notesdiv"
    notesdiv.style.borderTop = "0.5px solid white"
    notesdiv.style.height = "35px"
    notesdiv.style.width = "260px"
    notesdiv.style.marginTop = "5px"
    notesdiv.style.marginLeft = "10px"
    div5.appendChild(notesdiv)

    //adding para to notes div
    let para2 = document.createElement('p')
    para2.id = "para2"
    para2.style.color = "white"
    para2.innerHTML = notes1
    para2.style.fontFamily = "sans-serif"
    para2.style.fontSize = "25px"
    para2.style.marginTop = "-2px"
    para2.style.marginLeft = "10px"
    notesdiv.appendChild(para2)

    //adding div for buttons
    let buttonsdiv = document.createElement('div')
    buttonsdiv.id = "buttonsdiv"
    buttonsdiv.style.height = "65px"
    buttonsdiv.style.width = "270px"
    buttonsdiv.style.marginTop = "7px"
    div5.appendChild(buttonsdiv)

    //adding delete button
    let del = document.createElement('input')
    del.type = "button"
    del.id = "delete"
    del.value = "Delete note"
    del.style.fontSize = "25px"
    del.style.fontWeight = "bold"
    del.style.color = "black"
    del.style.height = "45px"
    del.style.width = "115px"
    del.style.marginTop = "20px"
    del.style.marginLeft = "15px"
    del.style.borderRadius = "10px"
    del.style.fontFamily = "gabriola"
    del.style.background = "red"
    function hoverDel(){
        del.style.background = "crimson"
        del.style.color = "black"
        del.style.cursor = "pointer"
        del.style.transition = "0.5s"
    }
    function outDel(){
        del.style.background = "red"
        del.style.color = "black"
    }
    del.onmouseover = function(){hoverDel();}
    del.onmouseout = function(){outDel();}
    function delet(){
        flag--;
        counter--;
        if(counter==3){
            showmore.style.opacity = "0"
            showmore.style.visibility = "hidden"
        }
        title.value = title1
        txt.value = notesorg
        localStorage.removeItem("object" + title.value)
        div5.remove()
        title.value = ""
        txt.value = ""
    }
    del.onclick = function(){delet();}
    buttonsdiv.appendChild(del)

    //adding edit button
    let edt = document.createElement('input')
    edt.type = "button"
    edt.id = "edit"
    edt.value = "Edit note"
    edt.style.fontSize = "25px"
    edt.style.fontWeight = "bold"
    edt.style.color = "black"
    edt.style.height = "45px"
    edt.style.width = "115px"
    edt.style.fontFamily = "gabriola"
    edt.style.marginTop = "20px"
    edt.style.marginLeft = "10px"
    edt.style.borderRadius = "10px"
    edt.style.background = "lawngreen"
    function hoverEdt(){
        edt.style.background = "limegreen"
        edt.style.color = "black"
        edt.style.cursor = "pointer"
        edt.style.transition = "0.5s"
    }
    function outEdt(){
        edt.style.background = "lawngreen"
        edt.style.color = "black"
    }
    edt.onmouseover = function(){hoverEdt();}
    edt.onmouseout = function(){outEdt();}
    function editcontents(){
        title.value = title1
        txt.value = notesorg
        localStorage.removeItem("object" + title.value)
        div5.remove()
        addnote.value = "Save"
    }
    edt.onclick = function(){editcontents();}
    buttonsdiv.appendChild(edt)

    //adding footer date
    let date1 = document.createElement('footer')
    date1.id = "date1"
    let fulldate = todayDate()
    date1.innerHTML = fulldate
    date1.style.textAlign = "right"
    date1.style.marginTop = "20px"
    date1.style.marginRight = "23px"
    date1.style.color = "white"
    div5.appendChild(date1)
    return div5
}