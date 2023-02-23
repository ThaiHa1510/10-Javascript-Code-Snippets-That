let target ={
    name:"Json"
}

let handler = {
    get:function(target,prop){
        console.log(`Getting ${prop}`)
        return target[prop]
    },
    set:function(target,prop,value){
        if(target[prop] == undefined){
            throw Error(`Object don't has ${prop} property `)
        }
        target[prop] =value;
    }
}

const proxy = new Proxy(target,handler);
console.log(proxy.name)
console.log(proxy.name = "Emi")
console.log(proxy.Id=1)