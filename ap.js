const box = document.querySelectorAll(".box")
const resetBtn = document.getElementById("reset-btn")
const newBtn = document.getElementById("new-btn")
const msgContainer = document.querySelector("#msg-container")
const msg = document.querySelector("#msg")

let turnO = true
let count = 0

const winPattern = [
    [0 , 1 , 2],
    [0, 3 , 6],
    [0 , 4, 8], 
    [1 , 4 , 7],
    [2 , 5 , 8],
    [2 , 4 , 6],
    [3 , 4 , 5],
    [6 , 7 , 8]
]


const resetGame = () => {
    turnO = true
    enableBox()
    msgContainer.classList.add("hide")
}

const gameDrwa = () => {
    msg.textContent = `Draw was a draw`
    msgContainer.classList.remove("hide")

}

box.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turnO) {
            box.textContent = "O"
            turnO = false
        }
        else {
            box.textContent = "X"
            turnO = true
        }

        box.disabled = true
        count++

        let isWinner = checkWinner()

        if(count === 9 && !isWinner) {
           gameDrwa()
        }
    })
})


const disableBox = () => {
    for(let x of box) {
        x.disabled = true
    }
}

const enableBox = () => {
    for(let x of box) {
        x.disabled = false
        x.textContent = ""
    }
}

const showWinner = (winner) => {
    msg.textContent = `congratulations  the winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBox()
}




const checkWinner = () => {
    for(let pattern of winPattern) {
        let pos1 = box[pattern[0]].innerText
        let pos2 = box[pattern[1]].innerText
        let pos3 = box[pattern[2]].innerText
        console.log(pos1)
        if(pos1 != "" && pos2 != "" && pos3!="") {
         if(pos1 === pos2 && pos2 === pos3){
             showWinner(pos1)
         }
        }
     }
}


newBtn.addEventListener("click" , resetGame)
resetBtn.addEventListener("click" , resetGame)