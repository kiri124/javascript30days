document.addEventListener("DOMContentLoaded", function () {
    const box = document.getElementById("animatedBox");
    let position = 0;
    let direction = 1;
    const speed = 30;
    const containerWidth = document.getElementById("container").offsetWidth;
    const boxWidth = box.offsetWidth;
  
    function animate() {
      position += direction * speed;
      if (position + boxWidth > containerWidth || position < 0) {
        direction *= -1;
      }
      box.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    }
  
    animate();
  });
  