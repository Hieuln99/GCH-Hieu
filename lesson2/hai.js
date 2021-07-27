const getCurrentDate = ()=>{
    const options = { year: 'numeric', month: 'numeric', day: 'numeric'};
    return new Date().toLocaleDateString("vi-VN", options);
}
const printLog = (msg)=>{
    console.log(msg)
}
exports.getCurrentDate = getCurrentDate
exports.printLog = printLog