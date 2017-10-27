function daysBefore(n) {
    let today = new Date();
    today.setDate(today.getDate() - n)
    console.log(today.toLocaleDateString())
}

daysBefore(300000)
