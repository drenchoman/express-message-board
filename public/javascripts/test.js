

let pageInput = document.querySelectorAll("input")

pageInput.forEach((input) =>
  input.addEventListener("click", function(e){
    e.target.value = ""
  })
);
