const DIE_SIZES = [4,6,8,10,12];

function RollDie(dieSize)
{
    var die =Number(dieSize);
    
    if(DIE_SIZES.includes(die) == false){
        return -1;    
    }
    
    return Math.floor(Math.random() * die +1);
}


function CommitCheck()
{
    let txtResults ="Test";
    let TxtField = document.getElementById("txtResults");
    let d1 = RollDie(document.getElementById("die1").value);
    let d2 = RollDie(document.getElementById("die2").value);

    if(d1 == -1 || d2 == -1)
    {   
        txtResults = "Please select both of your die sizes.";
    }
    else{
        txtResults = `${d1 + d2}, (${d1}, ${d2})`;
        if(d1 == d2 && d1 >=6){
            txtResults = `Critical hit! ${d1}`;
            TxtField.fontWieght = "bold";
        }
        else if(d1 == d2 && d1 == 1){
            txtResults = `Fumble!`;
            TxtField.fontWieght = "bold";
        }
    }
    TxtField.textContent = txtResults;
}