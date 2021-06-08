document.addEventListener('DOMContentLoaded',function(){
const pause = document.getElementById('pause')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const resume = document.getElementById('resume')
const form = document.getElementById('comment-form')
var count = document.getElementById('counter')

const timer = setInterval(function(){ 
 b = parseInt(count.innerText)
  count.innerText = b + 1
},1000)

plus.addEventListener('click', function(){
  b = parseInt(count.innerText)
    count.innerText = b + 1
})
minus.addEventListener('click', function(){
  b = parseInt(count.innerText)
  count.innerText = b - 1
})

pause.addEventListener('click',function(){
  
  plus.disabled = true
  minus.disabled = true
  heart.disabled = true
  pause.innerText = 'resume'
  clearInterval(timer)
  this.addEventListener('click',function(){
    plus.disabled = false
    minus.disabled = false
    heart.disabled = false
    pause.innerText = 'pause'
    setInterval(function(){ 
      b = parseInt(count.innerText)
      count.innerText = b + 1
    },1000);
  })
})
 
let numLikes = 0
heart.addEventListener('click',function(){
const likes = document.getElementsByClassName('likes')[0]
const li = document.createElement('li')
numLikes++
li.innerText = `${count.innerText} was liked ${numLikes} times!`
likes.appendChild(li)
})
  
form.addEventListener('submit',function(event){
const comment = document.createElement('h4')
const list = document.getElementById('list')
const value = document.getElementById('comment-input').value
list.append(comment)
comment.append(value)
  event.preventDefault()
})
})
