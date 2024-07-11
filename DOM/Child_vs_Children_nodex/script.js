// Fetch the element with the ID of parent 
const parentEl = document.querySelector('.parent');

console.log(parentEl.childNodes)
parentEl.childNodes.forEach((node)=> {
    console.log(node.nodeType)
})

console.log(parentEl.children)


const convertedHTMLCollection = Array.from(parentEl.children);

parentEl.children.forEach((child)=> {
    console.log(child.innerHTML)
})

