const handSegElement = document.getElementById('handSeg');
const handMinElement = document.getElementById('handMin');
const handHourElement = document.getElementById('handHour');

const printdate = () => {
    const newDate = new Date()
const days= ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"]
const months= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

const day= days[newDate.getDate()];
const date = now.getDate();
const month = months[now.getMonth()];
const year = now.getFullYear();

document.getElementById("date-text").textContent = `${day}, ${month} ${date}, ${year}`;
}


const printSecond = () => {
    const newDate = new Date()
    const seconds = newDate.getSeconds();
    const rotation = seconds * 6

    handSegElement.style.transform = `rotate(${rotation}deg)`;
    // console.log(`${date.getDay()} : ${date.getDate()} : ${date.getMonth()} : ${date.getFullYear()}`)
}


const printMinut = () => {
    const newDate = new Date()
    const minutes = newDate.getMinutes();
    const rotation = minutes * 6

    handMinElement.style.transform = `rotate(${rotation}deg)`;
    // console.log(`${date.getDay()} : ${date.getDate()} : ${date.getMonth()} : ${date.getFullYear()}`)
}

const printHours = () => {
    const newDate = new Date()
    const hours = newDate.getHours();
    const rotation = hours * 30

    handHourElement.style.transform = `rotate(${rotation}deg)`;
    // console.log(`${date.getDay()} : ${date.getDate()} : ${date.getMonth()} : ${date.getFullYear()}`)
}


setInterval(printSecond,1000)
setInterval(printMinut,60000)
setInterval(printHours,30000)
setInterval(printdate, 1000);

printSecond()
printMinut()
printHours()
printdate()

// const sayHello = () => {
//     console.log('Hola' + Math.random())
// }

// setInterval(sayHello,1000)