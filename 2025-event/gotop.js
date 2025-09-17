document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("gotop");

  // 監聽滾動，顯示/隱藏按鈕
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  // 點擊回到頂部
  btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
