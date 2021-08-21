
exports.min = function min (array =[undefined]) {
  if(array[0]=== undefined)
  {
    return 0;
  }
  let Minimum = array[0];
  for ( var i = 0 ; i < array.length; i++)
  {
    if(array[i] < Minimum)
    {
      Minimum = array[i];
    }
  }
  return Minimum;
}

exports.max = function max (array =[undefined]) {
  if(array[0]=== undefined)
  {
    return 0;
  }
  let Maximum = array[0];
  for ( var i = 0 ; i < array.length; i++)
  {
    if(array[i] > Maximum)
    {
      Maximum = array[i];
    }
  }
  return Maximum;
}

exports.avg = function avg (array =[undefined]) {
  if(array[0]=== undefined)
  {
    return 0;
  }
  let i = 0;
  let result = 0;
  while(i < array.length )
  {
      result += array[i];
    i++;
  }
  
  result = result/array.length;

  return result;
}
