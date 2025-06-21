let data = [
  { skills: "Manual Testing (Jira, Xray)", rating: 4 },
  { skills: "Automation (Playwright)", rating: 4 },
  { skills: "Postman", rating: 3 },
  { skills: "JavaScript / TypeScript", rating: 3 },
  { skills: "Core Java", rating: 2 },
  { skills: "C Programming", rating: 2 },
  { skills: "Git & GitHub", rating: 4 },
  { skills: "Chrome DevTools", rating: 3 },
  { skills: "CI (GitHub Actions Basics)", rating: 3 },
  { skills: "MS Excel / Word / Docs", rating: 4 }
];

function giveRating(count, text) {
  let p = document.createElement("p");
  let div = document.createElement("div");
  let textNode = document.createTextNode(text);
  p.appendChild(textNode);
  p.appendChild(div);

  for (let a = 0; a < 5; a++) {
    let childDiv1 = document.createElement("img");
    if (count <= a) {
      childDiv1.setAttribute("src", "/whitestar.png");
    } else {
      childDiv1.setAttribute("src", "/bluestar.png");
    }
    div.appendChild(childDiv1);
  }
  
  document.querySelector('#star').appendChild(p);
}

function addImage() {
  for (let a = 0; a < data.length; a++) {
    giveRating(data[a].rating, data[a].skills);
  }
}

// Run after page is fully loaded
window.onload = addImage;
