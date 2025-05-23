document.addEventListener("DOMContentLoaded", function () {
  const portfolioItems = document.querySelectorAll(".art");

  portfolioItems.forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      openLightbox(img.src, img.alt);
    });
  });

  function openLightbox(src, alt) {
    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";

    const enlargedImg = document.createElement("img");
    enlargedImg.src = src;
    enlargedImg.alt = alt;
    enlargedImg.className = "lightbox-img";

    const closeBtn = document.createElement("span");
    closeBtn.innerHTML = "&times;";
    closeBtn.className = "lightbox-close";
    closeBtn.addEventListener("click", () => {
      document.body.removeChild(overlay);
    });

    overlay.appendChild(enlargedImg);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);
  }
});