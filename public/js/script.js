// console.log("script linked");
const listUl = document.querySelector("#shopping-list")
const delButton = document.querySelector("#delete");
const addForm = document.querySelector("#add");

fetch("/api/items").then(res=>{
    return res.json()
}).then(data=>{
    console.log(data)
    data.forEach(item=>{
        const newLi = document.createElement("li");
        newLi.textContent = item;
        listUl.append(newLi);
    })
})

delButton.addEventListener('click',()=>{
    fetch("/api/items",{
        method:"DELETE"
    }).then(res=>{
        return res
    }).then(data=>{
        location.reload();
    })
})

addForm.addEventListener("submit",e=>{
    e.preventDefault(); 
    const reqBody = {
        item:document.querySelector("#newItem").value
    }
    console.log(reqBody);

    fetch("/api/items",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body:JSON.stringify(reqBody)
    }).then(res=>{
        console.log(res)
        location.reload();
    })
})