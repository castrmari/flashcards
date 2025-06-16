const container = document.getElementById("container");

window.perguntas.forEach(pergunta => {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardInner = document.createElement("div");
  cardInner.classList.add("card-inner");

  const front = document.createElement("div");
  front.classList.add("card-front");
  front.innerHTML = `
    <h3>${pergunta.tema}</h3>
    <p>${pergunta.pergunta}</p>
  `;

  const back = document.createElement("div");
  back.classList.add("card-back");
  back.innerHTML = `<p>${pergunta.resposta}</p>`;

  cardInner.appendChild(front);
  cardInner.appendChild(back);
  card.appendChild(cardInner);

  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  container.appendChild(card);
});

// Tema claro/escuro
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});