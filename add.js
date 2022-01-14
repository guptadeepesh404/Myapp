function add()

{
      let sum=0;

      for(let i= 0;i<arguments.length;i++){
        
        sum=sum+arguments[i];
        
      }
      document.write(`The sum is ${sum}`);

}

add(5,4,9);