const FONTS = [
  "alike_angularregular",
  "courier_primeregular",
  "crete_roundregular",
  "grenzeregular",
  "ibm_plex_monoregular",
  "im_fell_dw_picaregular",
  "podkovaregular",
  "vt323regular",
];

const fontPreview = document.getElementById("lipsum");
const rotDiv = document.getElementById("rot-display");

const fontSelect = document.getElementById("font-select");

fontSelect.addEventListener("input", setFont);

function setFont(e) {
  const newFont = FONTS[e.target.value];
  fontPreview.style.fontFamily = newFont;
  display.setOptions({ fontFamily: newFont });
}

const DISPLAY_OPTIONS = {
  width: 11,
  height: 5,
  fontSize: 32,
};

const display = new ROT.Display(DISPLAY_OPTIONS);
rotDiv.appendChild(display.getContainer());

/* Mock-up map definition */
for (let i = 0; i < DISPLAY_OPTIONS.width; i++) {
  for (let j = 0; j < DISPLAY_OPTIONS.height; j++) {
    if (
      !i ||
      !j ||
      i + 1 == DISPLAY_OPTIONS.width ||
      j + 1 == DISPLAY_OPTIONS.height
    ) {
      display.draw(i, j, "#", "gray");
    } else {
      display.draw(i, j, ".", "#666");
    }
  }
}
display.draw(
  DISPLAY_OPTIONS.width >> 1,
  DISPLAY_OPTIONS.height >> 1,
  "@",
  "goldenrod"
);
