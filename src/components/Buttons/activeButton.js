import easyinvoice from 'easyinvoice';
import billInvoiceTemplate from "../../data/bill"

export default function ActiveButton(params){
    async function clickCta(clickFunc)  {
        if(clickFunc == "printBill"){
            // {
            //     "quantity": 2,
            //     "description": "Product 1",
            //     "tax-rate": 6,
            //     "price": 33.87
            // },
            let billInvoice = JSON.parse(JSON.stringify(billInvoiceTemplate));
            for (let i = 0; i < params.bill.length; i++) {
                const element = params.bill[i];
                billInvoice.products.push(
                    {
                        "quantity": element.fs_kotList_qty,
                        "description": element.fs_menu_itemName,
                        "tax-rate": element.fs_menu_isTaxable?13:0,
                        "price": element.fs_menu_itemRate
                    } 
                )
            }
            //Create your invoice! Easy!
            const result = await easyinvoice.createInvoice(billInvoice, function (result) {
                // The response will contain a base64 encoded PDF file
                console.log('PDF base64 string: ', result.pdf);
                // Now this result can be used to save, download or render your invoice
                // Please review the documentation below on how to do this
            });
            easyinvoice.download('myInvoice.pdf', result.pdf);
        }
    }
    return (
        <button class="cta activeCta" onClick={()=>clickCta(params.clickFunc)}>
            {params.text}
        </button>
    )
}