const data = {
  1: { name: "武内 健流", pos: "三塁手", avg: ".312", hr: 5, rbi: 18 },
  3: { name: "三浦 憲大", pos: "外野手", avg: ".280", hr: 2, rbi: 10 }
};

const params = new URLSearchParams(location.search);
const id = params.get("id");

const player = data[id];

if (!player) {
  document.body.innerHTML = "選手データがありません";
} else {
  document.getElementById("player-name").textContent = player.name;
  document.getElementById("player-pos").textContent = player.pos;
  document.getElementById("avg").textContent = player.avg;
  document.getElementById("hr").textContent = player.hr;
  document.getElementById("rbi").textContent = player.rbi;
}
