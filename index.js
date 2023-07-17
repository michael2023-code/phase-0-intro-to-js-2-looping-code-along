// Code your solutions in this file
     function writeCards(names, message){
     const messages = [];

     for(n=0; n<names.length; n++){
      messages.push("Thank you, ${names[n]}, for the wonderful ${message} gifts!")
     }
     return messages;
   }
   console.log(writeCards(["Mike", "Jose", "Eric"], wedding))

   function countDown(number){
      while(number>=0){
         console.log(number);
         number --;
      }
   }