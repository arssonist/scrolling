var header = document.getElementsByClassName("header")[0]
var main = document.getElementsByTagName('main')[0]
console.log(main)

var aside = document.getElementsByTagName('aside')[0]

var footer = document.getElementsByTagName('footer')[0]

var body = document.getElementsByTagName('body')[0]


window.addEventListener('scroll', () => {
   let headerHeight = header.offsetHeight
   let mainHeight = main.offsetHeight
   let asideHeight = aside.offsetHeight
   let asideBottomPos = mainHeight - asideHeight
 let footerHeight =
     footer.offsetHeight
     console.log(footer.offsetTop)
// console.log(aside.getBoundingClientRect());
// console.log(aside.offsetTop.top)
// console.log(aside.scrollHeight)
})
