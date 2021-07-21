function circule(radius) {
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0 };
    let computLocation = function (factor) {
        //
    }
    this.draw = function(){
        computLocation(0.1);
        console.log("hello world")
    }
}
let mycircule = new circule(0.1)
let myx = mycircule.draw();
console.log(myx);

let fruit = 
    [
        {title:"Orgin", body:"this is post one"},
        {title:"mango", body:"this is post two"},
        {title:"banana", body:"this is post three"},
        {title:"Pear", body:"this is post four"},
    ];
function getMyFruit() {
    setTimeout(() => {
        let output = "";
        fruit.forEach((item) => {
            output+=`<li>${item.title}</>`
        })
        document.body.innerHTML = output;
    }, 100);
}
function addFruit(item,callback) {
    setTimeout(() => {
        fruit.push(item,)
        callback();
    },200)
}

addFruit({title:"new orgin", body:"new item insected"},getMyFruit)

// function openWindows() {
//     var myWindows = window.open("", "myWindow", "width=500, height=300");
//     myWindows.document.write("<P>hello world/p>");
//     setTimeout(() => { myWindows.close()
        
//     },3000)
    
// }
// let studentInfo = [
//     {firstName:"Alexander Oka", phoneNumber:"0553215783", address:"TMA052"},
//     {firstName:"Desmond Affah", phoneNumber:"0553215733", address:"EMA052"},
//     {firstName:"Mamo Tananja", phoneNumber:"0267288389", address:"PO82"},
//     {firstName:"Ransford ", phoneNumber:"0553215783", address:"TMA052"}
// ]
// function getStudentInfo() {
//     setTimeout(() => {
//         let myOutPut = "";
//         studentInfo.forEach((item) => {
//             myOutPut += `<li>${item.firstName},${item.phoneNumber},${item.address}</li>`
//             document.body.innerHTML = myOutPut;
//         })
//     },100)
// }
// getStudentInfo();