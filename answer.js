// *** YOUR ANSWER BELOW ***

function countDown(start){
  let t = start;
  let str = "";
  while(t >= 0){
    str += `${t}, `;
    t--;
  }
  return str;
}
