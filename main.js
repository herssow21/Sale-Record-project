// Class sale
class Sale {
    constructor(prod, qty, buy_price, sale_price, total_price, profit) {
        this.prod = prod;
        this.qty = qty;
        this.buy_price = buy_price;
        this.sale_price = sale_price;
        this.total_price = total_price;
        this.profit = profit;
    }
}

// class UI
class UI {
    showAlert(message, className) {
        // Create div
        const div = document.createElement("div");
        // Add classes
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector(".summary-display");
        // Get message-div
        const message_div = document.querySelector("summary-message");
        // Insert alert
        container.insertBefore(div, message_div);
        // document.querySelector('#disp').style.padding='0';
        // document.querySelector('.summary-message').style.padding="0";
    }

    // date alert
    showAlert(message, className) {
        // Create div
        const div = document.createElement("div");
        // Add classes
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector(".summary-display");
        // Get message-div
        const message_div = document.querySelector("summary-message");
        // Insert alert
        container.insertBefore(div, message_div);
        // document.querySelector('#disp').style.padding='0';
        // document.querySelector('.summary-message').style.padding="0";
    }
    //   load sale record into the table
    addSaleRecord(sale) {
        const sale_list = document.getElementById('record-list');
        // Create tr element
        const row = document.createElement('tr');
        // Insert cols
        row.innerHTML = `
      <td class="border" >${sale.prod}</td>
      <td class="border" >${sale.qty}</td>
      <td class="border" >${sale.sale_price}</td>
      <td id="loop" class="border" >${sale.total_price}</td>
      <td class="border" >${sale.vAT}</td>
      <td class="border text-decoration-none text-danger"><a href="#" class="delete">X<a></td>
    `;
      sale_list.appendChild(row);
        //  document.querySelector('.delete').style.color='red';
    }

    // add the total price column
 totalPriceCalc() {
                    // document.querySelector("#loop").each(function(index,value){
                    //     currentRow = parseFloat($(this).text());
                    //     TotalValue += currentRow;
                    // });
                    
                    // console.log(TotalValue);
    const totalObj = new Sale(
        prod,
        qty,
        buy_price,
        sale_price,
        total_price,
        profit
    );
    
   document.querySelector("#totalAmt").value=totalObj.total_price;
//    document.getElementById("totalTopReading").value=totalObj.total_price;
//    document.querySelector(".qty-display").value=500;
}

    // delete sale record
    deleteSale(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
      }
    }
}

// product selection eventListeners
document.getElementById("product-selected").addEventListener("change", function (e) {
        let select = this.value;
        let prod_name = this.options[this.selectedIndex].text;

        // event listener to when quantity is changed
        document.getElementById("qty").addEventListener("change", function (e) {
            qty = document.getElementById("qty").value;
            total_price = sale_price * qty;
            document.getElementById("total-price").value = total_price;
            // showAlertFunct();
        });

        //    display function of price output
        function display() {
            prod = prod_name;
            qty = document.getElementById("qty").value;
            total_price = sale_price * qty;
            profit = total_price - buy_price;
            showAlertFunct();
        }

        let noAvailable = 0;

        function showAlertFunct() {
            const ui = new UI();
            ui.showAlert(
                `Quantity:${noAvailable} Buying Price:${buy_price},Selling Price:${sale_price},Profit Per Unit:${profit}`,
                "success"
            );

        }
        // show date alert
                // function showDateAlert() {
                //     const ui = new UI();
                //     ui.showDateAlertMessage(
                //         `You can select a date for this transaction if you want to backdate it. Leave it blank if transaction happened today,"success"
                //     );

                // }

        switch (select) {
            case "nokia":
                noAvailable = 32;
                sale_price = 5500;
                buy_price = 2970;

                display();

                const nokia_sale = new Sale(
                    prod,
                    qty,
                    buy_price,
                    sale_price,
                    total_price,
                    profit
                );

                document.getElementById("sale-price").value = sale_price;
                document.getElementById("total-price").value = total_price;
                break;

            case "hpLap":
                noAvailable = 12;
                sale_price = 40000;
                buy_price = 26000;

                display();

                const hpLaptop_sale = new Sale(
                    prod,
                    qty,
                    buy_price,
                    sale_price,
                    total_price,
                    profit
                );

                document.getElementById("sale-price").value = sale_price;
                document.getElementById("total-price").value = total_price;

                break;

            case "nk-p":
                noAvailable = 14;
                buy_price = 2100;
                sale_price = 3200;

                display();

                const nokia_pending = new Sale(
                    prod,
                    qty,
                    buy_price,
                    sale_price,
                    total_price,
                    profit
                );

                document.getElementById("sale-price").value = sale_price;
                document.getElementById("total-price").value = total_price;
                break;

            case "cargo":
                noAvailable = 16;
                sale_price = 8500;
                buy_price = 5570;

                display();

                const cargo_sale = new Sale(
                    prod,
                    qty,
                    buy_price,
                    sale_price,
                    total_price,
                    profit
                );

                document.getElementById("sale-price").value = sale_price;
                document.getElementById("total-price").value = total_price;
                break;

            case "bulk-sms":
                noAvailable = 55;
                sale_price = 500;
                buy_price = 970;

                display();

                const sms_sale = new Sale(
                    prod,
                    qty,
                    buy_price,
                    sale_price,
                    total_price,
                    profit
                );

                document.getElementById("sale-price").value = sale_price;
                document.getElementById("total-price").value = total_price;
                break;
            default:
                alert("Select a product/service");
                break;
        }

        e.preventDefault();
    },
    false
);



// add sale record to table event 
document.getElementById('addBtn').addEventListener('click', (e) => {
    const sale = new Sale(
        prod,
        qty,
        buy_price,
        sale_price,
        total_price,
        profit);
    sale.vAT = 0;

    const ui = new UI();

    ui.addSaleRecord(sale);
    ui.totalPriceCalc();

    e.preventDefault();
});


// delete sale
document.getElementById('record-list').addEventListener('click', function (e) {
    const ui = new UI();

    ui.deleteSale(e.target);
    
});

// select date from calendar
    document.getElementById('dateSelection').addEventListener('click',(e)=>{
      document.getElementById('dateSelection').setAttribute("type", "date");

    //  function getDate(){
    //     var todaydate = new Date();
    //     var day = todaydate.getDate();
    //     var month = todaydate.getMonth() + 1;
    //     var year = todaydate.getFullYear();
    //     var dateString = day + "/" + month + "/" + year;
    //     document.getElementById('dateSelection').value = datestring;
    //    } 
    //    document.getElementById('dateSelection').value=getDate();

    });

// reset eventListener
document.querySelector('#reset-btn').addEventListener('click',(e)=>{
    document.getElementById("product-selected").innerHTML = "";
});
