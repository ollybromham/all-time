var divs = document.querySelectorAll('div');

window.addEventListener('DOMContentLoaded', () => {
  getTime()
  setInterval(getTime, 1000);
})

function getTime() {
  const d = new Date();
  const h = d.getHours();
  const m = d.getMinutes();
  const time = ('0' + h).toString().slice(-2) + ':' + ('0' + m).toString().slice(-2);

  for(i=0;i<divs.length;i++){
      divs[i].style.opacity = '1';
  }

  for(i=0;i<divs.length;i++){
    if(divs[i].textContent == time){
        divs[i].style.opacity = '0';
    }
  }
}
