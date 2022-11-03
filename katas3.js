//EX 1
function xRunning(array1) {

    for (let i = 0; i < array1.length; i++) {
        if (i == 0) {
            console.log(array1)
        }

        if ((i + 1) < array1.length) {
            array1[i] = "-"
            array1[i + 1] = "x"

        }
        console.log(array1)
    }


}
let arrayx1 = ["x", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]
xRunning(arrayx1)


//EX 2
let arrayNewstr2 = []

function vowelsCounter(param2) {

    let arrayNewstr2 = []

    for (let i2 = 0; i2 < param2.length; i2++) {

        let count2 = 0
        let vogal2 = param2[i2]

        for (let j2 = 0; j2 < vogal2.length; j2++) {

            let vogalnew2 = vogal2[j2].toLowerCase()

            if (vogalnew2 == "a" || vogalnew2 == "e" || vogalnew2 == "i" || vogalnew2 == "o" || vogalnew2 == "u") {
                count2++


            }


        }
        arrayNewstr2.push(count2)

    }
    return arrayNewstr2
}
let arraystr2 = ["laranja", "abacaxi", "acerola", "morango", "uva", "melancia"]
console.log(vowelsCounter(arraystr2))


//EX 3
function stringTripletGroup(frase) {
    let substr = []


    for (let i = 0; i < frase.length; i += 3) {
        substr.push(frase.substring(i, i + 3))
    }

    substr[substr.length - 1] += " "

    console.log(substr)
}
stringTripletGroup("Os três mosqueteiros");


//EX 4
let dominapet4 = []
function dominantPet(dominapet4) {

    let dog4 = 0;
    let cat4 = 0;

    for (let i4 = 0; i4 < dominapet4.length; i4++) {
        let dominante4 = dominapet4[i4]

        if (dominante4.toUpperCase() == "DOG") {
            dog4++
        }
        else if (dominante4.toUpperCase() == "CAT") {
            cat4++
        }

    }
    if (dog4 > cat4) {
        console.log("DOG!")
    }

    else if (dog4 < cat4) {


        console.log("CAT!")
    }

    else {
        console.log("DRAW!")
    }

}
let arraystr4 = ["cAT", "dog", "doG", "caT", "DOG", "dog"]

dominantPet(arraystr4)

//Ex - 5
let divisor5 = 5
function divisibleList() {

    let arrayNovo5 = []

    for (i5 = 0; i5 < arrayN5.length; i5++) {

        let divisivel5 = (arrayN5[i5])

        console.log(divisivel5)

        if (divisivel5 % divisor5 == 0) {

            arrayNovo5.push(divisivel5)
        }

    }
    return arrayNovo5
}
let arrayN5 = [14, 25, 32, 50, 35, 30]
let divisible5 = divisibleList(arrayN5, divisor5)
console.log(divisible5)

//Ex - 6
let arrayNovo6 = []

function trustMeOrNot(bolean6, n6) {
    let cont6 = bolean6
    for (let i6 = 0; i6 < n6; i6++) {
        console.log(cont6)
        cont6 = (bolean6, cont6)

        arrayNovo6.push(cont6)
    }
    console.log(arrayNovo6)
}
trustMeOrNot(true, 8);


//Ex - 7
let arrayNovo7 = []
function changeLampStatus(bolean7) {

    for (i7 = 0; i7 < arrayBolean7.length; i7++) {
        if (i7 == 0) {
            console.log(arrayNovo7)
        }
        let bolean7 = (arrayBolean7[i7])

        if (bolean7 == false) {
            console.log(true)
        }
        else {
            console.log(false)
        }
    }
    arrayNovo7.push(bolean7)
}
let arrayBolean7 = [true, false, true, false, true, true, true];
changeLampStatus(arrayBolean7)


//Ex - 8
function gradeAverage(notas8) {

    let soma8 = 0;
    let cont8 = 0;
    let media8 = 0
    for (let i8 = 0; i8 < notas8.length; i8++) {

        let average8 = notas8[i8];
        soma8 += average8;
        cont8++;

        media8 = (soma8 / cont8).toFixed(2)


    }

    console.log(`"A média das notas é: ${media8} "`)
}
let arrayAverage8 = [6.0, 5.5, 6.7, 8.0, 10, 10, 7.1];
gradeAverage(arrayAverage8);


//Ex - 9
function canvasDeliveriesPercentage(notas9) {

    let soma9 = 0;
    let cont9 = 0;
    let percent9 = 0
    for (let i9 = 0; i9 < notas9.length; i9++) {

        let percentage9 = notas9[i9];
        soma9 += (percentage9) / 0.1;
        cont9++;

        percent9 = (soma9 / cont9).toFixed(2);



    }
    console.log(` "A porcentagem total de entregas atingida é:${percent9}% "`)
}
let canvasPercentage9 = [3, 9.5, 6, 8, 10, 10, 7.1, 8.5, 2.3, 6.7];;
canvasDeliveriesPercentage(canvasPercentage9)


//Ex - 10
let arrayShouldIstay10 = []

function shouldIGo(go10) {

    for (let i10 = 0; i10 < go10.length; i10++) {


        let stay10 = (go10[i10].toUpperCase())

        if (stay10 == "R") {
            console.log("Stop!")
        }
        else if (stay10 == "Y") {

            console.log("Attention!")
        }
        else if (stay10 == "G") {
            {
                console.log("Go!")
            }
        }
        else {
            console.log("Invalido")

        }

    }
}
let arrayShouldIGo10 = ["g", "r", "G", "y", "G", "Y", "g"]
shouldIGo(arrayShouldIGo10)
