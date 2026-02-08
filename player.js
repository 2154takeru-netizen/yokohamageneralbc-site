// URLからid取得
const params = new URLSearchParams(window.location.search);
const playerId = params.get("id");

// データ読み込み
fetch("data/players.json")
  .then(res => res.json())
  .then(players => {
    const player = players.find(p => p.id === playerId);

    if (!player) return;

    document.getElementById("name").textContent = player.name;
    document.getElementById("stats").innerHTML = `
      <p>打率：${player.avg}</p>
      <p>本塁打：${player.hr}</p>
      <p>打点：${player.rbi}</p>
    `;
  });
