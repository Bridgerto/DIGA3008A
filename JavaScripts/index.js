document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("logo");
    const pageHeader = document.querySelector(".page-header");

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        if (scrollY > 100) { // Remember Reneilwe, I can adjust this value to control when logo appears
            logo.classList.add("show");
            pageHeader.classList.add("hidden");
        } else {
            logo.classList.remove("show");
            pageHeader.classList.remove("hidden");
        }
    });
});
