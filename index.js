let addtask=document.getElementById("addtask")
let tasklist=document.getElementById("tasklist")
let page=document.getElementById("page")
let popup=document.getElementById("pop")
let input=document.getElementById("input")
let input2=document.getElementById("input2")
let addbutton=document.getElementById("addbtn")
let addbutton2=document.getElementById("addbtn2")
let closebutton=document.getElementById("closebtn")
let closebutton2=document.getElementById("closebtn2")
let container1=document.getElementById("container1")
let container2=document.getElementById("container2")
let noitem=document.getElementById("noitem")
let popup2=document.getElementById("pop2")
let cardname=document.getElementById("name")
let back=document.getElementById("back")
let cardId = 1;
let listItemId = 1;
let showcardval = 1;


addtask.addEventListener("click",function(){
    page.style.filter="blur(10px)"
    popup.style.visibility="visible"
    popup.style.animation="pop 1s 1 ease-out"
})

addbutton.addEventListener("click",function(){
    popup.style.visibility="hidden"
    page.style.filter="none"
    noitem.style.display="none"
    const Todocardname=input.value
    let element=document.createElement("div")
    element.setAttribute("id",`card${cardId}`)
    element.setAttribute("class","child")
    element.innerHTML=`
    <button id="cardheader" value=${cardId}> ${Todocardname}</button>
     <hr> 
     <div class="todo_body" id="cardBody${cardId}"></div>
     <i id="del" value=${cardId} class="fa-regular fa-trash-can"></i> 
     <button id="addList-${cardId}" value=${cardId} class="fa-solid fa-plus" ></button> `
     //-ADD IN BEFORE LINE 
    //  restoreHeader()
    //  restoreTasksContainer()
     container2.appendChild(element)
     cardId++;

})

closebutton.addEventListener("click",function(){
    page.style.filter="none"
    popup.style.visibility="hidden"
})

let id=0;
container2.addEventListener("click",function(event){
    
    if(event.target.classList.contains("fa-plus")){
        popup2.style.visibility="visible"
        page.style.filter="blur(10px)"
        const ListName=input2.value
        id = event.target.value;
    }
    else if(event.target.id=="del"){
        let valueofdelete=event.target.parentElement
        container2.removeChild(valueofdelete)
    }
    else if(event.target.id=="cardheader"){
        showcardval=event.target.getAttribute('value')
        changeHeader();
        showCard(event.target.innerText);
    }
    else if(event.target.innerHTML=="Mark Done"){
        let markval=event.target.value
        document.getElementById('markdoneBtn' + markval).style.display = 'none';
        document.getElementById('listText' + markval).style.textDecoration = "line-through";
    }
})

   addbutton2.addEventListener("click",function(){
       popup2.style.visibility="hidden"
       page.style.filter="none"

       const ListName=input2.value
       const List=document.createElement("li")
       List.setAttribute("class","ListItem")
       List.setAttribute("type","none")
       let listItemContent = `
       <span id=listText${listItemId} class='listText'>${ListName}</span>
       <button id=markdoneBtn${listItemId} class='markDonebtn' value=${listItemId}>Mark Done</button>`;
       List.innerHTML=listItemContent
       popup2.style.visibility="hidden"
       document.getElementById("cardBody" + id).append(List);
       listItemId++;
   })

closebutton2.addEventListener("click",function(){
        page.style.filter="none"
        popup2.style.visibility="hidden"
})

function showCard(cardName){
    let cards=document.getElementsByClassName("child")
    cardname.innerText=cardName
    container2.style.justifyContent="center"
    for(let i=0;i<cards.length;i++){
        if(cards[i].getAttribute("id")!="card"+showcardval){
            cards[i].style.display= "none";
        }
    }
}

function changeHeader(){
    back.style.visibility="visible"
    tasklist.style.visibility="hidden"
}

back.addEventListener("click",function(){
    back.style.visibility="hidden"
    container2.style.justifyContent="space-between"
    tasklist.style.visibility="visible"
    let cards=document.getElementsByClassName("child")
    cardname.innerText=""
    for(let i=0;i<cards.length;i++){
        if(cards[i].getAttribute("id")!="card"+showcardval){
            cards[i].style.display= "block";
        }
    }
})