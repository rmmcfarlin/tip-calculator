function billSplit (percent, total, people) {
    let totalPlusTip = total * (1 + percent)
    let totSplit = totalPlusTip / people
    let tipSplie = (total * percent) / people
    
    console.log(totalPlusTip)
    console.log(totSplit)
    console.log(tipSplie)

}


billSplit(.2, 100, 2)