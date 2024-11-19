import { calcPiramidVolume } from "./tools.js";

doc = {
  baseSideInput: document.getElementById("baseSide"),
  heightInput: document.getElementById("height"),
  calcButton: document.getElementById("calcButton"),
  volumeInput: document.getElementById("volume")
}

doc.calcButton.addEventListener("click", () => {
  const baseSide = doc.baseSideInput.value;
  const height = doc.heightInput.value;
  const volume = calcPiramidVolume(baseSide, height);
  doc.volumeInput.value = volume;
})

