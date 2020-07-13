
    // hide the output
    document.getElementById('output').style.visibility = 'hidden';
    // add the event listener on the input
    document.getElementById('lbsInput').addEventListener('input',function(e){
    // get the value from the input
    let lbs = e.target.value;
    console.log(lbs);
    
    // for the Grams
    document.getElementById('gramsOutPut').innerHTML = lbs/0.0022046;

     // for the Kilograms
     document.getElementById('kgOutPut').innerHTML = lbs/2.2046;

      // for the Ounces
    document.getElementById('ozOutPut').innerHTML = lbs*16;

    // show the output ---> the result
    document.getElementById('output').style.visibility = 'visible';
});

