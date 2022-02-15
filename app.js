let friends = [
    "Josh",
    "Garett",
    "Haylee",
    "Kait",
    "Pepper"
]

const button = document.getElementById("button");
const buttonDiv = document.createElement("div");
buttonDiv.appendChild(button)
document.body.appendChild(buttonDiv);
button.addEventListener('click', createDiv);

function createDiv() {
    for (let i = 0; i < friends.length; i++) {
        let friendDiv = document.createElement("div");
        friendDiv.className = "friend";
        let h3 = document.createElement("h3");
        h3.innerText = friends[i] + ":";
        friendDiv.appendChild(h3);
        document.body.appendChild(friendDiv);

        for (let j = 99; j > 0; j--) {
            let friendP = document.createElement("p");
            if (j > 2) {
                friendP.innerText = (j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file!");
                friendDiv.appendChild(friendP);
                document.body.appendChild(friendDiv);
            } else if (j == 2) {
                friendP.innerText = (j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file!");
                friendDiv.appendChild(friendP);
                document.body.appendChild(friendDiv);
            } else {
                friendP.innerText = (j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file!");
                friendDiv.appendChild(friendP);
                document.body.appendChild(friendDiv);
            }
        }
    }
}
