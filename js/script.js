document.getElementById('firstPlusButton').addEventListener('click',function(){
    const totalIn = document.getElementById('subtotal');
    console.log(totalIn.innerText);
    const firstClassInput = document.getElementById('firstClassInput');
    const convertIntegerInput = parseInt(firstClassInput.value);
    const newIncreseValue = convertIntegerInput + 1;
    firstClassInput.value = newIncreseValue;
    const subtotal = document.getElementById('subtotal');
    subtotal.innerText = parseInt(totalIn.innerText) +  150;
});



document.getElementById('firstMinisButton').addEventListener('click',function(){
    const firstClassInput = document.getElementById('firstClassInput');
    const convertIntegerInput = parseInt(firstClassInput.value);
    if(convertIntegerInput > 0){
        const newIncreseValue = convertIntegerInput - 1;
        firstClassInput.value = newIncreseValue;
        const firstClassflyPrice = document.getElementById('subtotal');
        firstClassflyPrice.innerText = newIncreseValue * 150;
    }
});

document.getElementById('economyPlusButton').addEventListener('click',function(){
    const economyInput = document.getElementById('economyInput');
    const convertIntegerInput = parseInt(economyInput.value);
    const newIncreseValue = convertIntegerInput + 1;
    economyInput.value = newIncreseValue;
    const firstClassflyPrice = document.getElementById('subtotal');
    firstClassflyPrice.innerText = newIncreseValue * 100;
});

document.getElementById('economyMinisButton').addEventListener('click',function(){
    const economyInput = document.getElementById('economyInput');
    const convertIntegerInput = parseInt(economyInput.value);
    if(convertIntegerInput > 0){
        const newIncreseValue = convertIntegerInput - 1;
        economyInput.value = newIncreseValue;
        const firstClassflyPrice = document.getElementById('subtotal');
        firstClassflyPrice.innerText = newIncreseValue * 100;
    }
});