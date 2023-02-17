const cursor = document.createElement("img");
cursor.id = "cool-cursor";
document.body.appendChild(cursor);

window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY - cursor.offsetHeight;

  cursor.style.transform = `translate(${x}px, ${y}px)`;

  const cursorType = window.getComputedStyle(e.target)["cursor"];
  const isLink = e.target.closest("a");
  const isButton = e.target.closest("button");

  if (cursorType === "text") {
    cursor.src = chrome.extension.getURL("src/images/typing.gif");
  } else if (isLink) {
    cursor.src = chrome.extension.getURL("src/images/link.gif");
  } else if (isButton || cursorType === "pointer") {
    cursor.src = chrome.extension.getURL("src/images/pressing.gif");
  } else {
    cursor.src = chrome.extension.getURL("src/images/default.gif");
  }
});
