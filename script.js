document.addEventListener("DOMContentLoaded",()=>{
    let container=document.querySelector(".container")
    let textarea=document.querySelector("textarea")
    let keywords=document.querySelector(".keywords")

    textarea.addEventListener("keydown",(e)=>{
        keywordCreate(e.target.value)
        console.log(e.key)
    })

    function keywordCreate(){
        let key=document.createElement("span")
        key.classList.add("keyword")
        keywords.append(key)
        
    }
    
})