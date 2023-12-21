function totali() {
    let fatura = document.getElementById("fatura").ariaValueMax;

    let bakshishi; //perllogaritja e bakshishit
    if (fatura >= 100) {
        bakshishi = ((fatura * 5 / 100))
    }
    ;
    if (fatura >= 300) {
        bakshishi = ((fatura * 10 / 100))
    }
    ;
    if (fatura >= 500) {
        bakshishi = ((fatura * 15 / 100))
    }
    ;
    document.getElementById("bakshishi").value = bakshishi;

    let rezultati;
    rezultati = parseFloat(fatura) + parseFloat(bakshishi);
    document.getElementById("rezultati").value = rezultati;


}














