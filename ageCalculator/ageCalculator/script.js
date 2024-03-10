let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0]; //curent or past day 

function calculateAge() {

  let birthdate = new Date(userInput.value);

  let d = birthdate.getDate();
  let m = birthdate.getMonth()+1;
  let y = birthdate.getFullYear();


  let today = new Date();

  let d1 = today.getDate();
  let m1 = today.getMonth()+1;
  let y1 = today.getFullYear();
  
  let d3, m3, y3;
  y3 = y1 - y;

  if(m1 >= m){
    m3 = m1 - m;
  }else{
    y3--;
    m3 = 12+ m1 - m;
  }

  if(d1 >= d){
    d3 = d1 - d;
  }else{
    m3--;
    d3 = getDay(y,m) + d1 - d;
  }

  if(m3 < 0){
    m3 = 11;
    y3--;
  }

  console.log(d3, m3, y3);
}

function getDay(year, month) {
  return new Date(year, month,0).getDate();
}
