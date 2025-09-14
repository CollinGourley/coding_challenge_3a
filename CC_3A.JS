//Create Customer Records
    let customers = [
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
        customers.push({
            name:"Anabelle",
         email:"Afait@verizon.net",
         purchases:["Phone", "Charger", "Airpods"]
         });
        customers.shift();
        console.log(customers);
//Update Customer Information
        customers[1].email = "Ejpollock@gmail.com";
         customers[1].purchases.push("Computer")
        console.log(customers);
//Display Customer Information
        customers.forEach(p => console.log(`${p.name} | ${p.email} | ${p.purchases})`));