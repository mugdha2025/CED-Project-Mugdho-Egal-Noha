function seegpa(numberElementId, printID, subjectId) {
    n1 = document.getElementById(numberElementId).value;
    

    // function colorchange(frst, scnd, thrd, frth){
    //     document.getElementById("phere1").style.color = "green"
    //     document.getElementById("phere1").style.background= "white"
        
    // }
    
    n1 = Number(n1)

    if (n1 >= 101){
        gpa = "n/a"
        
    }
    else if (n1 >= 97) {
        gpa = "A+"
        color = "green"
        bg = "white"
        document.getElementById(printID).style.color = color
        document.getElementById(printID).style.background = bg
        }
    else if (n1 >= 93) {
        gpa = "A"
        color = "green"
        bg = "white"
        document.getElementById(printID).style.color = color
        document.getElementById(printID).style.background = bg

    }
    else if (n1 >= 90) {
        gpa = "A-"
        color = "green"
        bg = "white"
        document.getElementById(printID).style.color = color
        document.getElementById(printID).style.background = bg

    }
    else if (n1 >= 87) {
        gpa = "B+"
        color = "blue"
        bg = "white"
        document.getElementById(printID).style.color = color
        document.getElementById(printID).style.background = bg

    }
    else if (n1 >= 83) {
        gpa = "B"
        color = "blue"
        bg = "white"
        document.getElementById(printID).style.color = color
        document.getElementById(printID).style.background = bg
    }
    else if (n1 >= 80) {
        gpa = "B-"
        color = "blue"
        bg = "white"
        document.getElementById(printID).style.color = color
        document.getElementById(printID).style.background = bg

    }
    else if (n1 >= 77) {
        gpa = "C+"
        color = "BlueViolet"
        bg = "white"
        document.getElementById(printID).style.color = color
        document.getElementById(printID).style.background = bg

    }
    else if (n1 >= 73) {
        gpa = "C"
        color = "BlueViolet"
        bg = "white"
        document.getElementById(printID).style.color = color
        document.getElementById(printID).style.background = bg
}
    else if (n1 >= 70) {
        gpa = "C-"
        color = "BlueViolet"
        bg = "white"
        document.getElementById(printID).style.color = color
        document.getElementById(printID).style.background = bg
    }
    else if (n1 >= 67) {
        gpa = "D+"
        color = "red"
        bg = "white"
        document.getElementById(printID).style.color = color
        document.getElementById(printID).style.background = bg

    }
    else if (n1 >= 63){
        gpa = "D"
        color = "red"
        bg = "white"
        document.getElementById(printID).style.color = color
        document.getElementById(printID).style.background = bg}
    else if (n1 >= 60) {
        gpa = "D-"
        color = "red"
        bg = "white"
        document.getElementById(printID).style.color = color
        document.getElementById(printID).style.background = bg
    }
    else {
        gpa = "F"
        color = "red"
        bg = "white"
        document.getElementById(printID).style.color = color
        document.getElementById(printID).style.background = bg
    }

        // document.getElementById().style.color = color
    sub = document.getElementById(subjectId).value
    document.getElementById(printID).innerHTML = `${sub}: ${gpa}`
    
}

function overallgpa(numb1, numb2, numb3, numb4){

    
    nn1 = document.getElementById(numb1).value;
    nn2 = document.getElementById(numb2).value;
    nn3 = document.getElementById(numb3).value;
    nn4 = document.getElementById(numb4).value;

    nn1 = Number(nn1)
    nn2 = Number(nn2)
    nn3 = Number(nn3)
    nn4 = Number(nn4)

    
    averageGpa = (nn1 + nn2 + nn3 + nn4)/ 4
    // document.getElementById("pgpa").innerHTML = averageGpa


    // document.getElementById("phere1").innerHTML = 'asdflkjdslf'
    // document.getElementById("phere2").innerHTML = 'asdflkjdslf'

    //     document.getElementById("phere1").style.color = "blue"
    

    if (averageGpa >= 101){
        gpa = "n/a"

    }
    else if (averageGpa >= 97) {
        gpa = "A+"
        }
    else if (averageGpa >= 93) {
        gpa = "A"
    }
    else if (averageGpa >= 90) {
        gpa = "A-"
    }
    else if (averageGpa >= 87) {
        gpa = "B+"
    }
    else if (averageGpa >= 83) {
        gpa = "B"
    }
    else if (averageGpa >= 80) {
        gpa = "B-"
    }
    else if (averageGpa >= 77) {
        gpa = "C+"
    }
    else if (averageGpa >= 73) {
        gpa = "C"
    }
    else if (averageGpa >= 70) {
        gpa = "C-"
    }
    else if (averageGpa >= 67) {
        gpa = "D+"

    }
    else if (averageGpa >= 63){
        gpa = "D"
        
    }
    else if (averageGpa >= 60) {
        gpa = "D-"
    }
    else {
        gpa = "F"
    }
    
    
    document.getElementById("aaverageGPAgrade").innerHTML = `GRADE: ${gpa}`
    
    

    if (averageGpa >= 101){
        gpa = "n/a"

    }
    else if (averageGpa >= 97) {
        gpa = "4.0"
        }
    else if (averageGpa >= 93) {
        gpa = "4.0"
    }
    else if (averageGpa >= 90) {
        gpa = "3.7"
    }
    else if (averageGpa >= 87) {
        gpa = "3.3"
    }
    else if (averageGpa >= 83) {
        gpa = "3.0"
    }
    else if (averageGpa >= 80) {
        gpa = "2.7"
    }
    else if (averageGpa >= 77) {
        gpa = "2.3"
    }
    else if (averageGpa >= 73) {
        gpa = "2.0"
    }
    else if (averageGpa >= 70) {
        gpa = "1.7"
    }
    else if (averageGpa >= 67) {
        gpa = "1.3"

    }
    else if (averageGpa >= 63){
        gpa = "1.0"
    }
    else if (averageGpa >= 60) {
        gpa = "1.0"
    }
    else {
        gpa = "F"
    }

    document.getElementById("averageGPAgrade").innerHTML = `GPA: ${gpa}`
    
}




