let newDiv = $("<div>Click Here</div>");
let list = $("<ul></ul>");
let parent = $("body");
let textInput = $("#textInput");

parent.append(newDiv);
parent.append(list);

newDiv.on("click", () => {
    let listDisplay = $(`<div>${textInput.val()}</div>`);
    list.append(listDisplay);
    textInput.innerHTML= ""    
});

