

 let home_page=document.getElementById("home-page")
 let pay_page=document.getElementById("pay-page")
 let final_pay=document.getElementById("final-pay")
 let div_=document.getElementById("btn-last")
 let AmountArray=[]
 let balance=30000;
 let password="1234";
 let pass=document.getElementById("pass")
 let AmountShow=document.getElementById("amount")

let amount_form=document.getElementById("amount_form")




let start=document.querySelectorAll(".img-acc-btn")
console.log('start:', start)

for(let i=0;i<start.length;i++){
    start[i].addEventListener("click",function(){
   
        home_page.style.display="none"
       
        pay_page.style.display="block"
    
       
    })
}


function Amount(a,s){
this.amount=a,
this.sms=s
}

function amountShow(e){
    e.preventDefault()
    
    let amount=amount_form.amount.value;
    let sms=amount_form.sms.value;
    let A= new Amount(amount,sms)
    AmountArray.push(A)  
    console.log( AmountArray[AmountArray.length-1])
    let real_time=document.getElementById("real-time")
    real_time.innerHTML=`₹ ${AmountArray[AmountArray.length-1].amount}`
}


let verifypass = (e)=>{
    e.preventDefault()
    pass.style.display="none"
    final_pay.style.display="block"
    let otpInputs = document.querySelectorAll(".passContainer>#verifypassForm>.pass");
    // console.log('otpInputs:', otpInputs)
    let bag = '';
    for(let i=0 ; i<otpInputs.length ; i++){
        bag += otpInputs[i].value;
    }
    if( password== bag ){
    
        function BankServer(){
            return true;
        }
        
        let Payment_promice=new Promise(function(resolve,reject){
            
            let pin =BankServer();
        
            setTimeout(function(){
                if(pin && AmountArray[AmountArray.length-1].amount<=balance){
                    resolve("Payment Done")
                }else{
                    reject("Incorect pin")
                }
            },3000)
        });
        
        let image=document.getElementById("pay_img")
        let status=document.getElementById("status")
        let btn=document.createElement("button")
        async function content(){
            try{
                let res=await Payment_promice;
                console.log( res)
                
                image.src="https://assets.materialup.com/uploads/9ba2d687-d7d3-4361-8aee-7b2a3c074761/preview.gif"
                status.innerText="Transaction Complete"
                btn.innerHTML="More Transaction"
                btn.id="home-pay-chal"
                div_.append(btn)
                let home=document.getElementById("home-pay-chal").addEventListener("click",HomePgae)
    
                    function HomePgae(){
                        window.location.reload()
                        }
    
            }catch(err){
                console.log(err)
                alert("Your Account Balace is 30000")
                image.src="https://ramawatiwelfarefoundation.com/ramawati/images/payment-failed1.gif";
                status.innerText=""
                btn.innerHTML="Try Again"
                btn.id="home-pay-chal"
                div_.append(btn)
                let home=document.getElementById("home-pay-chal").addEventListener("click",HomePgae)
    
                function HomePgae(){
                      window.location.reload()
                 }
                
            }
        }
        content()


    }else{
        alert("incorrect password")
        pass.style.display="block"
        final_pay.style.display="none"

    }
}



let send=document.querySelector("#send")
send.addEventListener("click",function(){

    if(AmountArray.length==0){
        alert("Enter a amount")
    }else{
        pay_page.style.display="none"
        pass.style.display="block"
    }
    
})

let back_btn1=document.querySelector(".back-btn1").addEventListener("click",BackToPage1)
function BackToPage1(){
    home_page.style.display="block"
    pay_page.style.display="none"

}
let back_btn2=document.querySelector(".back-btn2").addEventListener("click",BackToPage2)
function BackToPage2(){
    pay_page.style.display="block"
    pass.style.display="none"

}
