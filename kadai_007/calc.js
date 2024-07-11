let num = Math.floor(Math.random() * 100);

//3と5の倍数の時
if (num % 3 === 0 && num % 5 === 0){
  console.log('3と5の倍数です');
}

//3の倍数の時
else if(num % 3 === 0){
  console.log('3の倍数です');
}

//5の倍数の時
else if(num % 5 === 0){
  console.log('5の倍数です');
}

//それ以外の時
else{
  console.log(num);
}


