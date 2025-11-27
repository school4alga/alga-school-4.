// =====================
//   ЖЫЛДЫ ЖАҢАРТУ
// =====================
(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();


// =====================
//     ФОН ЖҮЙЕСІ
// =====================
(function () {
  const body = document.body;
  const type = body.dataset.bgType;   // 'video' немесе 'image'
  const src = body.dataset.bgSrc;     // файл жолы
  const videoEl = document.getElementById("bg-video");
  const imgEl = document.getElementById("bg-image");

  if (!videoEl || !imgEl) return;

  // Видео фон
  if (type === "video" && src) {
    imgEl.style.display = "none";
    videoEl.style.display = "block";

    // видео тегіне source қосу
    const source = document.createElement("source");
    source.src = src;
    source.type = "video/mp4";
    videoEl.innerHTML = ""; // бұрыңғы source тазалау
    videoEl.appendChild(source);
    videoEl.load();
  }

  // Фото фон
  else if (type === "image" && src) {
    videoEl.style.display = "none";
    imgEl.style.display = "block";
    imgEl.style.backgroundImage = "url('" + src + "')";
  }

  // Ештеңе болмаса
  else {
    videoEl.style.display = "none";
    imgEl.style.display = "none";
  }
})();


// =====================
//     ТІЛ АУЫСТЫРҒЫШ
// =====================
(function () {
  const langBlocks = document.querySelectorAll(".lang");
  const langButtons = document.querySelectorAll("[data-lang-btn]");

  if (!langBlocks.length) return;

  function setLang(lang) {
    langBlocks.forEach((el) => {
      if (el.classList.contains("lang-" + lang)) {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    });

    langButtons.forEach((btn) => {
      if (btn.dataset.langBtn === lang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  // Батырмаларды тыңдау
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.langBtn;
      setLang(lang);
    });
  });

  // Әдепкі — қазақша
  setLang("kk");
})();
