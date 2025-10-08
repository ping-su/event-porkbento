document.addEventListener("DOMContentLoaded", function () {
  // === Go Top ===
  const btn = document.getElementById("gotop");
  if (btn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        btn.classList.add("show");
      } else {
        btn.classList.remove("show");
      }
    });

    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // === Hamburger ===
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector("nav .menu");

  if (hamburger && menu) {
    // 點擊漢堡鈕開關
    hamburger.addEventListener("click", function (e) {
      e.stopPropagation(); // 防止點擊事件往上冒泡
      menu.classList.toggle("show");
    });

    menu.addEventListener("click", function (e) {
      e.stopPropagation();
    });

    // 點擊畫面其他地方關閉選單
    document.addEventListener("click", function (e) {
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
      }
    });
  }
});
