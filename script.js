function groessterGemeinsamerTeiler(teiler1,teiler2) {
    
    // converting both "teiler variablles to Integers
    t1 = parseInt(teiler1);
    t2 = parseInt(teiler2);
    do {
      // Divide both variables and check if a leftover is there.
      /* e.g.
                5/2 = 2 (Leftover 1)
      */
      rest = t1%t2;
      t1=t2;
      t2=rest;
      //loop until leftover is 0 and the biggest divider of both variables is reached
    } while (rest>0);
    // Return the biggest divider
    return t1;

}

function kleinstesGemeinsamesVielfaches(number1,number2) {
    // Convert both number variables to Integers and name them n1 and n2
    n1 = parseInt(number1);
    n2 = parseInt(number2);
    // get the biggest shared divider from n1 and n2
    ggt = groessterGemeinsamerTeiler(n1, n2);
    // build the smallest shared multiple of both numbers and return it
    kgV = (n1 * n2) / ggt;
    return kgV;

}

function bruchAddierenUndKuerzen(br1o, br1u, br2o, br2u) {

    // convert String inputs to Integers
        b1o = parseInt(br1o);
        b1u = parseInt(br1u);
        b2o = parseInt(br2o);
        b2u = parseInt(br2u);
    // Check if the inputs are valid and are actual numbers.
    if (validationOfNumbers(b1o, b1u, b2o, b2u)) {
        // getting the Fractions on the same denominator
        kgV_Nenner = kleinstesGemeinsamesVielfaches(b1u, b2u);
        faktorBruch1 = kgV_Nenner / b1u;
        faktorBruch2 = kgV_Nenner / b2u;
        b1o = b1o * faktorBruch1;
        b1u = b1u * faktorBruch1;
        b2o = b2o * faktorBruch2;
        b2u = b2u * faktorBruch2;
        // adding together the two numerators
        // forming the fraction itself
        bo = b1o + b2o;
        bu = b1u
        
        // reduce the fraction to the lowest values possible
        /* e.g.
                   2   1
                   - = -
                   6   3   
        */
        ggtZumKuerzen = groessterGemeinsamerTeiler(bo,bu);
        bo = bo / ggtZumKuerzen;
        bu = bu / ggtZumKuerzen;
        // output fraction to the right boxes
        document.getElementById("eo").innerHTML = bo;
        document.getElementById("eu").innerHTML = bu;
    } else {
        // output an error to the errors box when any number isNaN
        document.getElementById("errors").innerText = "Zahl(en) nicht angegeben oder nicht zulässig"
    }
}

function validationOfNumbers(n1, n2, n3, n4) {
    
    // declaring the variables
    let valid = true;

    // check if any number is not a number
    if (isNaN(n1)) {
        valid = false;
    } else if (isNaN(n2)) {
        valid = false;
    } else if (isNaN(n3)) {
        valid = false;
    } else if (isNaN(n4)) {
        valid = false;
    }
    // return if all numbers are valid numbers
    return valid;
}
