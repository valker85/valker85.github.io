const title = document.querySelector('.printEffect')


window.onload = function write() {
  let txt = '-разработчик';
  let newName = 'Frontend'
  let time = 0

  for (let i = 0; i < txt.length; i++) {
    time += 150
    setTimeout(()=>{
      newName += txt.charAt(i)
      title.innerHTML = newName
    }, time);
  }
}