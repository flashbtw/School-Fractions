function groessterGemeinsamerTeiler(teiler1,teiler2) {
    t1 = parseInt(teiler1);
    t2 = parseInt(teiler2);
    do {
      rest = t1%t2;
      t1=t2;
      t2=rest;
    } while (rest>0);
    return t1;

}

function kleinstesGemeinsamesVielfaches(number1,number2) {

    n1 = parseInt(number1);
    n2 = parseInt(number2);
    ggt = groessterGemeinsamerTeiler(n1, n2);
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
    let valid = true;

    if (isNaN(n1)) {
        valid = false;
    } else if (isNaN(n2)) {
        valid = false;
    } else if (isNaN(n3)) {
        valid = false;
    } else if (isNaN(n4)) {
        valid = false;
    }
    return valid;
}
