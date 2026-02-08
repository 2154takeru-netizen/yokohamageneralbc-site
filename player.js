const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const players = {
  1: {
    name: "武内 健流",
    pos: "投手",
    avg: ".312",
    hr: 5,
    rbi: 18
  },
  3: {
    name: "三浦 憲大",
    pos: "外野手",
    avg: ".280",
    hr: 2,
    rbi: 10
  }
};

if (!players[id]) {
  document.body.innerHTML = "選手データがありません";
} else {
  const p = players[id];
  document.getElementById("player-name").textContent = p.name;
  document.getElementById("player-pos").textContent = p.pos;
  document.getElementById("avg").textContent = p.avg;
  document.getElementById("hr").textContent = p.hr;
  document.getElementById("rbi").textContent = p.rbi;
}
