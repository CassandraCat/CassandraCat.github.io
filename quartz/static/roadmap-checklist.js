(function () {
  const STORAGE_PREFIX = "rm-task-";
  let updateScheduled = false;

  function makeId(li) {
    const text = (li.textContent || "").trim().slice(0, 120);
    let h = 0;
    for (let i = 0; i < text.length; i++) {
      h = ((h << 5) - h) + text.charCodeAt(i);
      h |= 0;
    }
    return STORAGE_PREFIX + Math.abs(h).toString(36);
  }

  function updateProgress() {
    const cbs = document.querySelectorAll(
      '.roadmap-page input[type="checkbox"]'
    );
    const total = cbs.length;
    let done = 0;
    cbs.forEach((cb) => {
      if (cb.checked) done++;
    });
    const pct = total === 0 ? 0 : Math.round((done / total) * 100);
    const elDone = document.getElementById("rm-done");
    const elTotal = document.getElementById("rm-total");
    const elPct = document.getElementById("rm-pct");
    const elFill = document.getElementById("rm-fill");
    if (elDone) elDone.textContent = done;
    if (elTotal) elTotal.textContent = total;
    if (elPct) elPct.textContent = pct + "%";
    if (elFill) elFill.style.width = pct + "%";
    updateScheduled = false;
  }

  function init() {
    const cbs = document.querySelectorAll(
      '.roadmap-page input[type="checkbox"]'
    );
    cbs.forEach((cb) => {
      cb.disabled = false;
      cb.removeAttribute("disabled");
      const li = cb.closest("li");
      if (!li) return;
      const id = makeId(li);
      cb.dataset.rmId = id;
      const stored = localStorage.getItem(id);
      if (stored === "1") cb.checked = true;
      cb.addEventListener("change", () => {
        localStorage.setItem(id, cb.checked ? "1" : "0");
        if (!updateScheduled) {
          updateScheduled = true;
          requestAnimationFrame(updateProgress);
        }
      });
    });
    updateProgress();
  }

  document.addEventListener("nav", init);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
