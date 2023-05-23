let a = {
    name : "Sakshi",
    language : "JavaScript",
    run : () => {
        alert("Self run") 
}
}
console.log(a),

 
    p = {
   run : () => {
    alert("run") 
    }
}
p.__proto__= {
    name : "Saksh"
}

a.__proto__= p
a.run()
console.log(a.name)