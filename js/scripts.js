const handSegElement = document.getElementById('handSeg');
const handMinElement = document.getElementById('handMin');
const handHourElement = document.getElementById('handHour');

const printdate = () => {
    const date = new Date()
return date
}

const printSecond = () => {
    const date = new Date()
    const seconds = date.getSeconds();
    const rotation = seconds * 6

    handSegElement.style.transform = `rotate(${rotation}deg)`;
    // console.log(`${date.getDay()} : ${date.getDate()} : ${date.getMonth()} : ${date.getFullYear()}`)
}


const printMinut = () => {
    const date = new Date()
    const minutes = date.getMinutes();
    const rotation = minutes * 6

    handMinElement.style.transform = `rotate(${rotation}deg)`;
    // console.log(`${date.getDay()} : ${date.getDate()} : ${date.getMonth()} : ${date.getFullYear()}`)
}

const printHours = () => {
    const date = new Date()
    const Hours = date.getHours();
    const rotation = Hours * 30

    handHourElement.style.transform = `rotate(${rotation}deg)`;
    // console.log(`${date.getDay()} : ${date.getDate()} : ${date.getMonth()} : ${date.getFullYear()}`)
}


setInterval(printSecond,1000)
setInterval(printMinut,60000)
setInterval(printHours,30000)

printSecond()
printMinut()
printHours()

// const sayHello = () => {
//     console.log('Hola' + Math.random())
// }

// setInterval(sayHello,1000)