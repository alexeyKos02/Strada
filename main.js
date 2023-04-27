import ToDo from "./ToDo.js";

let toDo = new ToDo()
const high = document.querySelector('#high')
high.addEventListener('submit',addDeal,false)
const low = document.querySelector('#low')
low.addEventListener('submit', addDeal,false)

function addDeal(e){
    e.preventDefault()
    let children = e.currentTarget
    let text = children[0].value
    if (text ===""){
        return
    }
    if (children.id ==="high"){
        toDo.addHigh(text,false)
        render("high")
    } else{
        toDo.addLow(text,false)
        render("low")
    }
}

function render(type){
    if (type ==="high"){
        let block = document.getElementById("highBlock")
        block.textContent = ''
        for (let i = 0; i<= toDo.highArray.length+1; i++){
            if (i ===0){
                block.insertAdjacentHTML("beforeEnd","<h3>HIGH</h3>")
            } else if(i === 1){
                block.insertAdjacentHTML("beforeEnd"," <form class=\"container\" id=\"high\">\n" +
                    "            <input placeholder=\"Добавить важные дела.\" class=\"addInput\">\n" +
                    "            <button class=\"addButton\">&#x2573;</button>\n" +
                    "        </form>")
                const high = document.querySelector('#high')
                high.addEventListener('submit',addDeal,false)
            }
            else{
                block.insertAdjacentHTML("beforeEnd", ` <label class="container" id=${toDo.highArray[i-2].id}>
                <input type="checkbox">
                <span>${toDo.highArray[i-2].text}</span>
                <button class="deleteButton">&#x2573;</button>
            </label>`)
                const button = document.getElementById(`${toDo.highArray[i-2].id}`).children[2]
                button.addEventListener('click', e=> deleteObj(e,"high"),false)
            }
        }
    } else{
        let block = document.getElementById("lowBlock")
        block.textContent = ''
        for (let i = 0; i<= toDo.lowArray.length+1; i++){
            if (i ===0){
                block.insertAdjacentHTML("beforeEnd","<h3>LOW</h3>")
            } else if(i === 1){
                block.insertAdjacentHTML("beforeEnd","<form class=\"container\" id=\"low\" onsubmit=\"addDeal(this);return false\">\n" +
                    "            <input placeholder=\"Добавить\" class=\"addInput\">\n" +
                    "            <button class=\"addButton\">&#x2573;</button>\n" +
                    "        </form>")
                const low = document.querySelector('#low')
                low.addEventListener('submit', addDeal,false)

            }
            else{
                block.insertAdjacentHTML("beforeEnd", ` <label class="container" id=${toDo.lowArray[i-2].id}>
                <input type="checkbox">
                <span>${toDo.lowArray[i-2].text}</span>
                <button class="deleteButton">&#x2573;</button>
            </label>`)
                const button = document.getElementById(`${toDo.lowArray[i-2].id}`).children[2]
                button.addEventListener('click', e=> deleteObj(e,"low"),false)
            }
        }
    }
}

function deleteObj(e,typeDeal){
    let idDeal = e.currentTarget.parentElement.id
    if (typeDeal === "low"){
        toDo.deleteLow(idDeal)
        render("low")
    } else{
        toDo.deleteHigh(idDeal)
        render("high")
    }
}