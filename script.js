const item = document.querySelector('#item')
const todoBox = document.querySelector('#to-do-box')

item.addEventListener('keyup', function(event){
    if(event.key == "Enter"){
        addToDo(this.value)
        this.value = "";
        
    }

})

const addToDo = (item) => {
        if(item === "") return; //  jb input empty ho to ye li create ni krega function se exit kr dega

    const listItem = document.createElement("li");
    listItem.innerHTML = `
            ${item}
        <b class="fas fa-times">❌</b>
    `;

    listItem.addEventListener('click', function(){
        this.classList.toggle("done");
    })

    listItem.querySelector("b").addEventListener('click', function(){
        listItem.remove();
        
    })
    todoBox.appendChild(listItem)
}

 