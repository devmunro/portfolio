const newParagraph = document.createElement("p");

const content = `
    Lorem woop dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Sociis natoque penatibus
    et magnis. Eu mi bibendum neque egestas congue quisque. Scelerisque viverra
  `;

const header = document.querySelector("div"); // querySelector - method returns the first element that matches a CSS selector
header.append(newParagraph);

newParagraph.innerHTML = content;
