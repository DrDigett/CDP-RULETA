document.addEventListener('DOMContentLoaded', function () {
  // Elementos del DOM
  const spinButton = document.getElementById('spin');
  const wheelContainer = document.querySelector('.container');
  let clickCount = 0;

  // Función para obtener un número aleatorio entre 1 y 8 (inclusivo)
  function getRandomValue() {
    return Math.floor(Math.random() * 8) + 1;
  }

  // Agregar evento click al botón "Spin"
  spinButton.addEventListener('click', () => {
    clickCount++;

    let randomValue = getRandomValue();

    // Verificar si randomValue es igual a 4 y clickCount es menor o igual a 3
    while (randomValue === 4 && clickCount <= 400) {
      randomValue = getRandomValue();
    }

    // Calcular el ángulo de rotación basado en el valor aleatorio
    const rotationAngle = -1*(315 + ((randomValue) * (45)));

    // Aplicar la rotación a la ruleta
    wheelContainer.style.transition = 'transform 3s ease-out'; // Agregar una transición suave
    wheelContainer.style.transform = `rotate(${rotationAngle}deg)`;

    // Deshabilitar el botón mientras la ruleta gira
    spinButton.disabled = true;

    // Mostrar el número que ha salido en la consola
    console.log(`Giro ${clickCount}: Ha salido el número ${randomValue} , gira: ${rotationAngle}`);

    // Después de 3 segundos (ajusta este valor según tu preferencia)
    setTimeout(() => {
      // Eliminar la transición y restablecer la rotación a 0 grados
      wheelContainer.style.transition = 'none';
      wheelContainer.style.transform = 'rotate(0deg)';

      // Habilitar nuevamente el botón
      spinButton.disabled = false;
    }, 5000); // 9 segundos
  });
});
