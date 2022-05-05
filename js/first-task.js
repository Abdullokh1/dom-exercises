const firstImgWrap = document.querySelector('.first-img-wrap');
const secondImg = document.querySelector('.second-img')


firstImgWrap.addEventListener('mousemove', (e)=>{
  let x = e.offsetX
  let y = e.offsetY
  secondImg.style.transform = `translate(-${x}px, -${y}px) scale(2)`
  secondImg.style.display = 'block'

})



firstImgWrap.addEventListener('mouseleave', ()=>{
  secondImg.style.display = 'none'
})


