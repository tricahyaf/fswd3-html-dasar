function suit() {
    let suit=prompt('Choose your weapon: Rock, Paper or Scissors');
    let comp = Math.floor(Math.random()*3);
    // let comp = 1;
    let lawan;
    let text;
    if (comp == 0) {
        lawan = "Rock";
        if (suit == "Rock" && lawan == "Rock") {
            alert('Kamu Seri');
            text = "Kamu Seri !!<br> Kamu  = "+suit+"<br> Computer = "+lawan;
        }else if (suit == "Paper" && lawan == "Rock") {
            alert('Kamu Menang');
            text = "Kamu Menang !!<br> Kamu  = "+suit+"<br> Computer = "+lawan;
        }else if (suit == "Scissors" && lawan == "Rock") {
            alert('Kamu Kalah');
            text = "Kamu Kalah !!<br> Kamu  = "+suit+"<br> Computer = "+lawan;
        }
        document.getElementById("hasil").innerHTML = text;
    }
    if (comp == 1) {
        lawan = "Paper";
        if (suit == "Rock" && lawan == "Paper") {
            alert('Kamu Kalah');
            text = "Kamu Kalah !!<br> Kamu  = "+suit+"<br> Computer = "+lawan;
        }else if (suit == "Paper" && lawan == "Paper") {
            alert('Kamu Seri');
            text = "Kamu Seri !!<br> Kamu  = "+suit+"<br> Computer = "+lawan;
        }else if (suit == "Scissors" && lawan == "Paper") {
            alert('Kamu Menang');
            text = "Kamu Menang !!<br> Kamu  = "+suit+"<br> Computer = "+lawan;
        }
        document.getElementById("hasil").innerHTML = text;
    }
    if (comp == 2) {
        lawan = "Scissors";
        if (suit == "Rock" && lawan == "Scissors") {
            alert('Kamu Menang');
            text = "Kamu Menang !!<br> Kamu  = "+suit+"<br> Computer = "+lawan;
        }else if (suit == "Paper" && lawan == "Scissors") {
            alert('Kamu Kalah');
            text = "Kamu Kalah !!<br> Kamu  = "+suit+"<br> Computer = "+lawan;
        }else if (suit == "Scissors" && lawan == "Scissors") {
            alert('Kamu Seri');
            text = "Kamu Seri !!<br> Kamu  = "+suit+"<br> Computer = "+lawan;
        }
        document.getElementById("hasil").innerHTML = text;
    }
    // console.log(comp);
}