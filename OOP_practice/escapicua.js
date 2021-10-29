
let aux= 0;
let invert=0;
function esCapicua(num){
  let num2=num;
  while(num>0){
    aux = num%10;
    invert = invert*10 + aux;
    console.log(invert);
    num = parseInt(num/10);
  }
  if(invert === num2){
    console.log('Es Capicua');
  }else{
    console.log('No es Capicua');
  }
}
esCapicua(121);