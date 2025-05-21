/*https://www.youtube.com/watch?v=M498DvQDkJo*/


document.addEventListener("DOMContentLoaded", function()
{
    const burger = document.getElementById("burger");
    const navLinks = document.getElementById("navLinks");
      const overlay = document.getElementById("overlay");


    burger.addEventListener("click", () => 
    {
        navLinks.classList.toggle("active");
        overlay.classList.toggle("active");
    });


    // When burger menu is dropped, you cannot scroll on the page
    overlay.addEventListener("click", () => 
    {
        navLinks.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("noscroll");
        document.getElementById("check").checked = false;
    });

});