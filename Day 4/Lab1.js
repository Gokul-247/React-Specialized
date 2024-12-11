function calculateMarks(){
    var python = parseInt(document.getElementById('py').value);
    var html1 = parseInt(document.getElementById('html').value);
    var css1 = parseInt(document.getElementById('css').value);

    var totalMarks = python + html1 + css1;
    var percentage = (totalMarks/300)*100;

    var grade = '';
    if(percentage >= 90){
        grade = 'A';
    }
    else if(percentage >= 80){
        grade = 'B';
    }
    else{
        grade = 'Fail';
    }

    var result = `Total Marks : ${totalMarks}/300<br>
    Percentage : ${percentage.toFixed(2)}%<br>
    Grade : ${grade}`;

    document.getElementById('result').innerHTML = result;
}

