const rulesBtn = document.getElementById("rules-btn");
const closeBtn = document.getElementById("close-btn");
const rules = document.getElementById("rules");

console.log(rulesBtn, closeBtn, rules);

// ルールを開いたり閉じたり
rulesBtn.addEventListener("click", () => {
  rules.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  rules.classList.remove("show");
});
