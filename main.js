const quadrado = document.getElementById("quadrado");

if (quadrado) {
  let count = 0;

  document.getElementById("quadrado").addEventListener("click", function () {
    console.log("Quadrado clicado!");
    count++;
    document.getElementById("count").textContent = count;
  });

  function moveQuadrado() {
    const quadrado = document.getElementById("quadrado");
    const maxX = window.innerWidth - quadrado.offsetWidth;
    const maxY = window.innerHeight - quadrado.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    quadrado.style.position = "absolute";
    quadrado.style.left = randomX + "px";
    quadrado.style.top = randomY + "px";
  }

  function tamanhoQuadrado() {
    const quadrado = document.getElementById("quadrado");
    const minSize = 20;
    const maxSize = 200;
    const newSize =
      Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
    quadrado.style.width = newSize + "px";
    quadrado.style.height = newSize + "px";
  }

  document.getElementById("quadrado").addEventListener("click", function () {
    moveQuadrado();
    tamanhoQuadrado();
  });

  document.getElementById("quadrado").addEventListener("click", function () {
    if (count === 20) {
      window.location.href = "dentro.html";
    }
  });
}
window.addEventListener("load", function () {
  const brabo = document.querySelector(".brabo");
  if (brabo) {
    alert("Clicou firme heim pai!");
    alert("Vai flamengo!");
    alert("vai clicar mais 20x");
    alert("vai clicar mais 19x");
    alert("vai clicar mais 18x");
    alert("zoa");
  }
});
