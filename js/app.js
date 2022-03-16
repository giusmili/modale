document.addEventListener("DOMContentLoaded", e => {
    console.log(navigator.userAgent);
    let el, modal, closed, open_modal, closed_all;
    el = document.querySelectorAll(".grid-picture-large li");
    modal = document.querySelector(".modale");
    closed = document.querySelector(".modale button");
    closed_all = document.querySelector(".modale img");

    /* property elements */
    open_modal = function () {
        console.log(this.dataset);
        /* les variables */
        let image = this.dataset.image;
        let title = this.dataset.title;
        let desc = this.dataset.description;
        let dates = this.dataset.dates;
        modal.classList.add("modale-active");
        document.querySelector(".modale img").setAttribute("src", image);
        document.querySelector(".modale .desc h3").innerText = title;
        document.querySelector(".modale .desc p").innerText = desc;
        document.querySelector(".modale .desc time").innerText = `Annee ${dates}`;
    };
    for (rows of el) {
        rows.addEventListener("click", open_modal);
    }
    closed.addEventListener("click", () => {
        modal.classList.remove("modale-active");
    });
    closed_all.addEventListener("click", () => {
        modal.classList.remove("modale-active");
    });
});