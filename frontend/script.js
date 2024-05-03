
(async () => {
  for (let i = 3000; i <= 3011; i++) {
    const response = await fetch(`http://localhost:${i}`)
    const json = await response.json()
    document.getElementById(i).innerHTML = json.message
  }
})()

// let counter = 0
// const span = document.createElement('span')
// span.id = 'counter'
// span.innerHTML = '0'
// const title = document.getElementById('title')
// title.appendChild(span)
// title.onclick = () => {
//   increaseCounter()
//   changeColor()
// }
// title.style.transition = 'color 500ms linear'
// title.style.cursor = 'pointer'
// title.addEventListener('mouseover', function() {
//   title.style.color = '#4e7d8d'
// })
// title.addEventListener('mouseout', function() {
//   title.style.color = '#fff'
// })
// function changeColor() {
//   const title = document.getElementById('title')
//   title.style.color = '#4e7d8d'
//   title.classList.toggle('title-changed')
//   title.classList.add('title-changed')
//   title.classList.remove('title-changed')
// }
// function increaseCounter() {
//   counter++
//   document.getElementById('counter').innerText = counter
// }
