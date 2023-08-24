const inputText = document.getElementById("inputText")

const button = document.getElementById("button")



const root=document.getElementById("root")
button.addEventListener("click", ()=>{
    const inputValue = inputText.value 
    const para = document.createElement("p")
    para.innerText= inputValue
    root.appendChild(para)
})