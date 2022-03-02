const clock = document.querySelector(".clock");

const tick = () => {
  const current = new Date();

  const hours = current.getHours();
  const minutes = current.getMinutes();
  const seconds = current.getSeconds();

  const html = `
    <span>${hours}</span> :
    <span>${minutes}</span> :
    <span>${seconds}</span>    
    `;

  clock.innerHTML = html;
};

setInterval(tick, 1000);
