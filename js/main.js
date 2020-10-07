// Splitting text elements[data-splitting] on letters with class name
// Разделение текста у элемента с [data-splitting] на буквы с заданным классом
function splitting(className) {
  const $elements = document.querySelectorAll('[data-splitting]')
  $elements.forEach($item => {
    const letters = $item.textContent.split('')
    let interval = 1
    const result = letters.map((letter, index) => {
      if (letter === ' ') {
        interval--
        return ' '
      }
      return `<div class="${className}" style="display: inline-block; --index-letter: ${index + interval};">${letter}</div>`
    }).join('')
    console.log(result)
    $item.innerHTML = result
  })
}
splitting('letter')

// Example animations letters
// Пример анимирование букв
ScrollOut({
  targets: '.letter',
  onShown: el => {
    el.classList.remove('oh__animated', 'oh__fadeInUpLight')
    void el.offsetWidth
    el.classList.add('oh__animated', 'oh__fadeInUpLight')
  },
})
