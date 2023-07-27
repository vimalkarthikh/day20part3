async function foo(){
    var res= await fetch("https://data.covid19india.org/v4/min/timeseries.min.json");
    var result=await res.json();
    console.log(result);
   
    for (const key in result) {
        let a=result[key].dates;
        //console.log(a);
        var sp=document.createElement("span");
        sp.innerHTML=`<div class="card">
        <h5 class="card-header">Government of India Covid Report<br>State Code: ${key}</h5></div>`
           
            document.body.append(sp);
        for (const k in a) {
            //console.log(k,a[k].total.confirmed);
            var div=document.createElement("div");
            div.innerHTML=`
            
  <div class="card-body">
    <h6 class="card-title">Date : ${k}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;TestedCases : ${a[k].total.tested}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ConfirmedCases : ${a[k].total.confirmed}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Varient : Delta, Delta7</h6>
  </div>

           `
            document.body.append(div);


         

        }
        
    }
    

}

foo();