//recuperation des boutons en savois plus
const buttons = document.querySelector(".btn-modal");

buttons.forEach(button => {
    button.addEventlistener("click" () => {
        const title = this.getAttribute("data-title")
        const description = this.getAttribute("data-description")
    })
});