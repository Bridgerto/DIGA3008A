document.addEventListener("DOMContentLoaded", () => 
{
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");
    const blogTabs = document.querySelectorAll(".blog-tab");

    searchButton.addEventListener("click", () => 
    {
      const query = searchInput.value.toLowerCase().trim();

      blogTabs.forEach(tab => 
      {
        const title = tab.querySelector("h1").textContent.toLowerCase();
        if (title.includes(query)) 
        {
            tab.style.display = "block";
        } 
        else 
        {
            tab.style.display = "none";
        }
      });
    });

    searchInput.addEventListener("keypress", (e) => 
    {
        if (e.key === "Enter") 
        {
            searchButton.click();
        }
    });

});