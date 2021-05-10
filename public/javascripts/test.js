let sendButton = document.querySelector("button")
let textArea = document.querySelector("textarea")
let pageInput = document.querySelector("input")

let removeText = (n) => {
    n.addEventListener("click", function(e){
      e.target.value = ""
    }
  )
}


removeText(textArea);
removeText(pageInput);
