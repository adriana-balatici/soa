subtractDates = (firstDate, secondDate) => {
    return (firstDate.getTime() - new Date(secondDate).getTime()) / (1000*3600*24);
}

module.exports = {
    subtractDates
}
