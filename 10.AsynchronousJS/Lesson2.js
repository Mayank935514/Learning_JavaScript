/** CONS OF CALLBACK
 * 1.Callback hell --->Callback Hell, which is a common problem that arises when working with asynchronous JavaScript code that 
 *                   involves multiple callbacks nested within each other and including the challenges it poses to code readability, 
 *                   maintainability, and error handling.
 * 2.Inversion of Control --> Execution of the child API depends on the Parent API.
 */

// bookHotel --> proceedPayment --> showBookingStatus --> updateBookingHistory

bookHotel(hotelId,function(){
     if(err){
         errorHandler();
      }else{
         proceedToPayment(hotelId,function(){
            if(err){
              erroHandler();
            }else{
              showBookingStatus(hotelId,function(){
                 if(err){
                   errorHandler();
                 }else{
                   updateBookingHistroy(hotelId,function(){
                     success();
                   })
                  }
              })
             }
         })
       }
})