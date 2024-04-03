let main = document.getElementById("main");
main.remove();
let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Levite is the champion";
document.body.append(newHeader);
