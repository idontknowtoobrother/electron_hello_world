window.addEventListener('DOMContentLoaded', ()=>{
    const replateText = (selector, text) => {
        const elem = document.getElementById(selector)  
        if(elem) elem.innerHTML = text
    }

    for(const depadency of ['chrome', 'node', 'electron']){
        replateText(`${depadency}-version`, process.versions[depadency])
    }

})