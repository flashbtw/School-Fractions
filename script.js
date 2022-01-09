function groessterGemeinsamerTeiler(teiler1,teiler2) {
    t1 = parseInt(teiler1);
    t2 = parseInt(teiler2);
    do {
      rest = t1%t2;
      t1=t2;
      t2=rest;
    } while (rest>0);
    document.getElementById("ggT").innerText = t1.toString();
    return t1;

}

function kleinstesGemeinsamesVielfaches(number1,number2) {

    n1 = parseInt(number1);
    n2 = parseInt(number2);
    ggt = groessterGemeinsamerTeiler(n1, n2);
    kgV = (n1 * n2) / ggt;
    document.getElementById("kgv").innerText = kgV.toString();
    return kgV;

}

function bruecheKuerzen {
    
}