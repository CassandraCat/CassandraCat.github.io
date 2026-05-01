(function () {
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
  }

  document.addEventListener("nav", updateProgress);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateProgress);
  } else {
    updateProgress();
  }
})();
