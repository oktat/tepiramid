(() => {
  // src/tools.js
  function calcPiramidVolume(baseSide, height) {
    return 1 / 3 * Math.pow(baseSide, 2) * height;
  }

  // src/app.js
  doc = {
    baseSideInput: document.getElementById("baseSide"),
    heightInput: document.getElementById("height"),
    calcButton: document.getElementById("calcButton"),
    volumeInput: document.getElementById("volume")
  };
  doc.calcButton.addEventListener("click", () => {
    const baseSide = doc.baseSideInput.value;
    const height = doc.heightInput.value;
    const volume = calcPiramidVolume(baseSide, height);
    doc.volumeInput.value = volume;
  });
})();
