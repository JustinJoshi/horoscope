//Create a conditonal that checks their age



function check(){
    let p = document.querySelector('p')
    let val = document.querySelector('input').valueAsDate
    let bigDate = new Date(val.getFullYear(), val.getMonth(), val.getDate() + 1) //researched the date object on the MDN. Played with it and found out i had to add 1 to the date since i didnt know how to change the UTC timezone. But it works. Found the date object had functions with it and i used those
    let month = bigDate.getMonth()
    let date = bigDate.getDate()
    console.log(month, date)
    if(month == 0 && date <= 19){
        p.innerText = "Capricorn"
        console.log('hi')
    }else if(month == 0 && date > 19){
        p.innerText= "Aquarius"
    }
    if(month == 1 && date <= 18){
        p.innerText= "Aquarius"
    }else if(month == 1 && date > 18){
        p.innerText= "Pisces"
    }
    if(month == 2 && date <= 20){
        p.innerText= "Pisces"
    }else if(month == 2 && date > 20){
        p.innerText= "Aries"
    }
    if(month == 3 && date <= 19){
        p.innerText= "Aries"
    }else if(month == 3 && date > 19){
        p.innerText= "Taurus"
    }
    if(month == 4 && date <= 20){
        p.innerText= "Taurus"
    }else if(month == 4 && date > 20){
        p.innerText= "Gemini"
    }
    if(month == 5 && date <= 20){
        p.innerText= "Gemini"
    }else if(month == 5 && date > 20){
        p.innerText= "Cancer"
    }
    if(month == 6 && date <= 22){
        p.innerText= "Cancer"
    }else if(month == 6 && date > 22){
        p.innerText= "Leo"
    }
    if(month == 7 && date <= 22){
        p.innerText= "Leo"
    }else if(month == 7 && date > 22){
        p.innerText= "Virgo"
    }
    if(month == 8 && date <= 22){
        p.innerText= "Virgo"
    }else if(month == 8 && date > 22){
        p.innerText= "Libra"
    }
    if(month == 9 && date <= 22){
        p.innerText= "Libra"
    }else if(month == 9 && date > 22){
        p.innerText= "Scorpio"
    }
    if(month == 10 && date <= 21){
        p.innerText= "Scorpio"
    }else if(month == 10 && date > 21){
        p.innerText= "Sagittarius"
    }
    if(month == 11 && date <= 21){
        p.innerText= "Sagittarius"
    }else if(month == 11 && date > 21){
        p.innerText= "Capricorn"
    }
    console.log(month)
}
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
document.querySelector('h3').addEventListener('click', check)
//Take the value from the input


//Place the result of the conditional in the paragraph
document.querySelector('p').innerText