//Create Customer Records
    let Customers = [
            {name:"Jeremy",
            email:"Jeremy@verizon.net",
            purchases:["Chair", "Table", "Bed"]},
            {name:"Warren",
            email:"WWsatkins@verizon.net",
            purchases:["Flag", "Plate", "Bowl"]},
            {name:"Elijah",
            email:"Epollock@verizon.net",
            purchases:["Fork", "Knife", "Spoon"]},];
        console.log(Customers);
//Add and Remove Data
   Customers.push({
    name:"Anabelle",
    email:"Afait@verizon.net",
    purchases:["Phone", "Charger", "Airpods"]
   });
   Customers.shift();
   console.log(customers);
//Update Customer Information
   customers[1].email = "Ejpollock@gmail.com";
   customers[1].purchases.push("Computer")
   console.log(customers);
