function updateTime(){
  let nashvilleElement = document.querySelector("#nashville");
  let nashvilleDateElement = nashvilleElement.querySelector(".date");
  let nashvilleTimeElement = nashvilleElement.querySelector(".time");
  let nashvilleTime = moment().tz("America/Chicago");
  nashvilleDateElement.innerHTML = nashvilleTime.format("MMMM Do YYYY");
  nashvilleTimeElement.innerHTML = nashvilleTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

   let vancouverElement = document.querySelector("#vancouver");
   let vancouverDateElement = vancouverElement.querySelector(".date");
   let vancouverTimeElement = vancouverElement.querySelector(".time");
   let vancouverTime = moment().tz("America/Vancouver");
   vancouverDateElement.innerHTML = vancouverTime.format("MMMM Do YYYY");
   vancouverTimeElement.innerHTML = vancouverTime.format(
     "h:mm:ss [<small>]A[</small>]"
   );

    let berlinElement = document.querySelector("#berlin");
    let berlinDateElement = berlinElement.querySelector(".date");
    let berlinTimeElement = berlinElement.querySelector(".time");
    let berlinTime = moment().tz("Europe/Berlin");
    berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
    berlinTimeElement.innerHTML = berlinTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );

     let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);