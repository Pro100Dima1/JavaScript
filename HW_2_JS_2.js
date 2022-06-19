// Cкрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее

let counter

for (counter = 1; counter <=5; counter++){
  if (counter == 1 ){
    console.log(":)")  }
   else if (counter == 2 )
   {  
      console.log(":)" + ":)") }
      else if (counter == 3 )
      {
        console.log(":)" + ":)" + ":)")  }
        else if (counter == 4 )
        {
          console.log(":)" + ":)" + ":)" + ":)")  }
          else 
           console.log(":)" + ":)" + ":)" + ":)" + ":)")  
  }
