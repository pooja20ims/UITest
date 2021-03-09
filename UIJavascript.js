<script type="text/javascript">
    
    window.onload = function () {
       ReturnAccount('Bob');
        ReturnAccount('Charlie');
        ReturnAccount('', 'acctNum');
        ReturnAccount('Alice','balance','desc');
    };

    function ReturnAccount(User = '', sortBy = '', sortDirection = 'asc') {     
       
        acctData = [{ "acctNum": "AAA-1234", "user": "Alice" }, { "acctNum": "AAA-5231", "user": "Bob" },
        { "acctNum": "AAA-9921", "user": "Alice" }, { "acctNum": "AAA-8191", "user": "Alice" }];

        balance = {"AAA-1234": 4593.22, "AAA-9921": 0, "AAA-5231": 232142.5, "AAA-8191": 4344};        
        const BalanceArray = Object.entries(balance);
        var NewArray = [];
        for (var j = 0; j < acctData.length; j++) {
            var tempobj = {};
            tempobj["acctNum"] = acctData[j].acctNum;
            tempobj["user"] = acctData[j].user;
            var __FOUND = BalanceArray.find(function (e, index) {
                if (e[0] == acctData[j].acctNum) {
                    tempobj["balance"] = e[1];
                }
            });
            NewArray.push(tempobj);
        }

        if (User != "" && sortBy == "") {  
            console.log("filtered  By "+User)
            
            let bigCities = acctData
            .filter(acc => acc.user === User)           
            .map(acc => acc.acctNum);
            console.log(bigCities);
            
        }     

        if (sortBy != '' && User=="") {  
            console.log("sorted   By " + sortBy);
            var entries = Object.keys(balance).sort();
            console.log(entries);
        }

               
    
        if (User != "" && sortBy != "") {
            console.log("filtered   By " +""+ User + " " + "sorted by" +" "+ sortBy);
          
        let sortedbyBalance = NewArray
                .filter(acc => acc.user === User)
            .sort((c1, c2) => c1.balance - c2.balance)
                .map(acc => acc.acctNum);
             console.log(sortedbyBalance);
    }
    }
</script>
