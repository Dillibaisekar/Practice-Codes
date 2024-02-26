let num = 1;
    while (num <= 100) {
        if (num %3== 0 && num%5==0 )
        {
            console.log("FizzBuzz");
        }
        else if (num %5== 0)
        {
            console.log("Buzz"); 
        }
        else if (num %3== 0)
        {
            console.log("Fizz"); 
        }
        else
        {
            console.log(num);
        }    
        num++;
    }


    // for(let num1=1; num1<=100; num1++)
    // {
    //     if (num1 %3== 0 && num1%5==0 )
    //     {
    //         console.log("FizzBuzz");
    //     }
    //     else if (num1 %5== 0)
    //     {
    //         console.log("Buzz"); 
    //     }
    //     else if (num1 %3== 0)
    //     {
    //         console.log("Fizz"); 
    //     }
    //     else
    //     {
    //         console.log(num1);
    //     }      
    // }