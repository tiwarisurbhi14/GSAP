var tl=gsap.timeline();
tl.from("#nav img,#nav h3,#nav p,#nav button",{
    y:-100,
    duration:0.8,
    opacity:0,
    delay:1,
    stagger:0.2,
})
tl.from("#container h1",{
    y:100,
    duration:1,
    delay:1,
    stagger:0.2,
    opacity:0,
})
tl.from("#container>img",{
    opacity:0,
    duration:1,
    scale:2,
    y:-200,
    stagger:0.1,
})
tl.from("#container>h5",{
    opacity:0,
    scale:0,
})
tl.to("#container>h5",{
    y:30,
    repeat:-1,
    yoyo:true,
    duration:1,
})