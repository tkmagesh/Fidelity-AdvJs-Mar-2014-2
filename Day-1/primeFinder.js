/*
return if a given number is a prime number or not
the result of a finding has to be cached so that you dont run the algorithm once again for the same number
*/
function getPrimeFinder(){
   var cache = {};
   function isPrime(n){
       if (typeof cache[n] !== "undefined"){
          console.log("from cache...");
          return cache[n];
       }
       cache[n] = true;
       for(var i=2;i<=(n/2);i++)
           if (n % i === 0){
              cache[n] = false;
              break;
           }
       console.log("freshly brewed...");
       return cache[n];
   }
   return isPrime;
}