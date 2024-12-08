tlmainheading = gsap.timeline()

gsap.to('#open-y-right', {
    width: '0px',
    duration: 1.5,
    delay: 1
})

gsap.to('#open-y-left', {
    width: '0px',
    duration: 1.5,
    delay: 1
})

gsap.from('#logo-left', {
    x: -100,
    duration: 0.5,
    delay: 2,
    opacity: 0
})

gsap.from('#logo-right', {
    x: 100,
    duration: 0.5,
    delay: 2,
    opacity: 0
})

gsap.from('#nav-right', {
    duration: 0.5,
    delay: 2,
    opacity: 0
})

tlmainheading.from('#mh-1', {
    // width : '0px',
    duration: 0.2,
    delay: 2.4,
    opacity: 0
})

tlmainheading.from('#mh-2', {
    // x : 100,
    duration: 0.2,
    opacity: 0
})

tlmainheading.from('#mh-3', {
    // x : 100,
    duration: 0.2,
    opacity: 0
})

const text = document.getElementById('intro-text')
const splitedtext = text.textContent.split(' ')
let temp = ''
splitedtext.forEach(e => {
    temp += `<span>${e}</span> `
})
text.innerHTML = temp
gsap.from('#intro-text span', {
    y: 10,
    opacity: 0,
    duration: 1,
    stagger: 0.05,
    scrollTrigger: {
        trigger : '#intro-text',
        scroller : 'body',
        markers : true,
         start : 'top 70%',
         end : 1000
    }
})