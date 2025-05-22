
document.addEventListener("DOMContentLoaded", function()
{
    const burger = document.getElementById("burger");
      const close = document.getElementById("close");
      const navLinks = document.getElementById("navLinks");
      const overlay = document.getElementById("overlay");


    burger.addEventListener("click", () => 
    {
        navLinks.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.classList.add("noscroll");
    });


     close.addEventListener("click", () => 
    {
        navLinks.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("noscroll"); // Enable scroll
    });

    // When burger menu is dropped, you cannot scroll on the page
    overlay.addEventListener("click", () => 
    {
        navLinks.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("noscroll");
    });

    const toTopBtn = document.getElementById("toTopBtn");

    window.addEventListener("scroll", () => 
    {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        if ((scrollPosition / pageHeight) > 0.8) 
        {
            toTopBtn.style.display = "block";
        } 
        else 
        {
            toTopBtn.style.display = "none";
        }
    });

    toTopBtn.addEventListener("click", () =>
    {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

});

