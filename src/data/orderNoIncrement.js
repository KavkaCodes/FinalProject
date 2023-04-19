let orderNo = "0000";

function orderNoGenerator() {
    let date = new Date();
    let generatedOrderNo = date.toString().substring(11,15)+(date.getMonth()+1).toString().padStart(2,'0')+date.getDate()+ orderNo;
    return generatedOrderNo;
}
function orderNoIncrement() {
    orderNo = (parseInt(orderNo)+1).toString().padStart(4,'0');
    return ;
}

export default function orderNoFetch() {
    orderNoIncrement();
    let currentOrderNo = orderNoGenerator();
    return currentOrderNo; 
}

