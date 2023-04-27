import ToDo from "./ToDo.js";

let toDo = new ToDo()
function addDeal(e){
    let children = e.children
    let text = children[0].value
    if (text ===""){
        return
    }
    if (e.id ==="high"){
        toDo.addHigh(text,false)
        let block = document.getElementById("highBlock")
        block.textContent = ''
        for (let i = 0; i<= toDo.highArray.length; i++){
            if (i ===0){
                block.insertAdjacentHTML("beforeEnd","<h3>HIGH</h3>")
            }else{
                block.insertAdjacentHTML("beforeEnd", ` <label class="container" id=${toDo.highArray[i].id}}>
                <input type="checkbox">
                <span>${toDo.highArray[i].text}</span>
                <button class="deleteButton">&#x2573;</button>
            </label>`)
            }
        }
    } else{
        toDo.addLow(text,false)
        let block = document.getElementById("lowBlock")
        block.textContent = ''
        for (let i = 0; i<= toDo.lowArray.length; i++){
            if (i ===0){
                block.insertAdjacentHTML("beforeEnd","<h3>HIGH</h3>")
            }else{
                block.insertAdjacentHTML("beforeEnd", ` <label class="container" id=${toDo.lowArray[i].id}}>
                <input type="checkbox">
                <span>${toDo.lowArray[i].text}</span>
                <button class="deleteButton">&#x2573;</button>
            </label>`)
            }
        }
    }
}