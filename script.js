var arjGrades = ['M1',
                 'M2',
                 'ED',
                 'English',
                 'Physics',
                 'Ethics',
     function(result, subject){

         if(result >= 49){
        return "Passed subject with " + result + " marks in " + subject ;
                 }
                 else {
                 return " Nibba you FAILED"
                 }
                 }
                ];

console.log(arjGrades[6](51, arjGrades[1]));

