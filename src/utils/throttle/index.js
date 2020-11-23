export default function throttle(fn,time){
    let timer = null 
    return (...args) =>{
        if(!timer){
            fn.apply(this,args)
            timer = setTimeout(()=>{
                timer = null
            },time)
        }
    }
}