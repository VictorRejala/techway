document.querySelector("#nameUser").innerHTML = localStorage.getItem("user");
let totalyPrice = []
const btnAdd = document.querySelectorAll(".botao")
let pricePay = 0;
const total = document.querySelector("#total");

btnAdd.forEach(plus => {
    plus.addEventListener("click", (event)=>{
        /*var testee = event.currentTarget.querySelector("#price");*/
        /*var testee = event.path[1].querySelector(".price")
        console.log(event.path[1].querySelector(".price").textContent);*/
        let priceItem = event.path[1].querySelector(".price").textContent;
        let nameItem = event.path[1].querySelector(".name").textContent;
        
        document.querySelector(".allBuy").appendChild(create(nameItem, priceItem))
        priceItem = priceItem.replace(".","");
        priceItem = priceItem.replace("R$","");
        totalyPrice.push(parseInt(priceItem))
        
        totalyPrice.forEach(totaly => {
            pricePay += totaly
        });

        total.innerHTML ="R$ " + pricePay.toLocaleString('pt-br', {minimumFractionDigits: 2});
    })
})

function create (nameBuy, priceBuy) {

    let div = document.createElement("div")
    div.classList.add("itenBuy");
    
    div.appendChild(createName(nameBuy));
    div.appendChild(createPrice(priceBuy));

    return div;
}

function createName (nameBuy) {
    let h3 = document.createElement("h3")
    h3.textContent = nameBuy;
    h3.classList.add("nameItem")

    return h3;
}

function createPrice (priceBuy) {
    let priceSpan = document.createElement("span")
    priceSpan.textContent = priceBuy;
    priceSpan.classList.add("priceItem");

    return priceSpan;
}

const search = document.querySelector("#search");
const itens = document.querySelectorAll(".itens");
const name = document.querySelectorAll(".name");
let itensContains;

search.addEventListener("input", function(){
        
    if (this.value.length > 0) {
        for(var i = 0; i<itens.length; i++) {

            let item = itens[i];
            let nameAct = item.querySelector(".name").textContent;
            let expression = new RegExp(this.value, "i")
    
            if (expression.test(nameAct)) { 
                item.classList.remove("invisible");
            } else {
                item.classList.add("invisible");
            }      
            /*if(this.value.length > 1){         
                checkItens();
            }*/
            checkItens();
        }
    }

    else {
        for(var i = 0; i<itens.length; i++) {
            itens[i].classList.remove("invisible");
        }
        document.querySelector(".notFound").innerHTML="";
    }
    
})

function checkItens () {

    let contem = 0;
    itens.forEach(itemCheck => {  
             
        if(itemCheck.classList.contains("invisible")) {
            contem++;
        }
    });
    if(contem == itens.length) {
        document.querySelector(".notFound").innerHTML="Produto inexistente";
    } else {
        document.querySelector(".notFound").innerHTML="";
    }
}

const shopping = document.querySelector("#shopping");

shopping.addEventListener("click",()=>{
    document.querySelector(".itensAll").classList.toggle("invisible")
});

const btnAnimation = document.querySelector(".order");

/*$('.order').click(function(e) {
    let button = $(this);

    if(!button.hasClass('animate')) {
        button.addClass('animate');
        setTimeout(() => {
            button.removeClass('animate');
        }, 10000);
    }

});*/

btnAnimation.addEventListener("click", ()=>{
    let btnnnnnn = btnAnimation.classList;

    if(!btnnnnnn.contains('animate')) {
        btnnnnnn.add('animate');
        document.querySelector("#sucess").innerHTML = "";
        setTimeout(() => {
            btnnnnnn.remove('animate');
            document.querySelector("#sucess").innerHTML = "A compra é finalizada por email.";
        }, 10000);
    }
})
