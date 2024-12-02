function trigger_opacity(){
  let Shidden = document.getElementById("full_page");
  let Cnav= document.getElementById("bg_opacity");
  if  (Cnav.style.display == "block"){Cnav.style.display = "none";Shidden.style.overflow = "auto";}
  else{Cnav.style.display = "block";Shidden.style.overflow = "hidden";}
}

function show_nav(source){
    trigger_opacity()
    let navi= source.dataset.nav; 
    let div = document.getElementById(navi);
    div.classList.remove('hidden_nav');
    setTimeout(function () {
    div.classList.add('show-nav');
    }, 20);
}

function bg_click(){
 
}

bg_opacity.addEventListener('click',()=>{
    let div = document.getElementsByClassName('show-nav');
    div[0].classList.add('hidden_nav');
    div[0].classList.remove('show-nav');
    trigger_opacity()
}) 

class ClassWatcher {

    constructor(targetNode, classToWatch, classAddedCallback, classRemovedCallback) {
        this.targetNode = targetNode
        this.classToWatch = classToWatch
        this.classAddedCallback = classAddedCallback
        this.classRemovedCallback = classRemovedCallback
        this.observer = null
        this.lastClassState = targetNode.classList.contains(this.classToWatch)

        this.init()
    }

    init() {
        this.observer = new MutationObserver(this.mutationCallback)
        this.observe()
    }

    observe() {
        this.observer.observe(this.targetNode, { attributes: true })
    }

    disconnect() {
        this.observer.disconnect()
    }

    mutationCallback = mutationsList => {
        for(let mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                let currentClassState = mutation.target.classList.contains(this.classToWatch)
                if(this.lastClassState !== currentClassState) {
                    this.lastClassState = currentClassState
                    if(currentClassState) {
                        //this.classAddedCallback(this.targetNode)
                    }
                    else {
                        this.classRemovedCallback(this.targetNode)
                    }
                }
            }
        }
    }
}

let targetNode = document.getElementById('for_whom_focus')

function workOnClassAdd(targetNode) {
    //targetNode.scrollIntoView();
}

function workOnClassRemoval() {
    targetNode.scrollIntoView();
}

// watch for a specific class change
let classWatcher = new ClassWatcher(targetNode, 'is-hidden', workOnClassAdd, workOnClassRemoval)


