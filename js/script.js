document.getElementById('firstPlusButton').addEventListener('click',function(){
    firstClassPriceHandle(true);
});

document.getElementById('firstMinisButton').addEventListener('click',function(){
    // const totalIn = document.getElementById('subtotal');
    // const firstClassInput = document.getElementById('firstClassInput');
    // const convertIntegerInput = parseInt(firstClassInput.value);
    // if(convertIntegerInput > 0){
    //     const newIncreseValue = convertIntegerInput - 1;
    //     firstClassInput.value = newIncreseValue;
    //     const subtotal = document.getElementById('subtotal');
    //     subtotal.innerText = parseInt(totalIn.innerText) -  150;
    //     // vat 
    //     const vat = (parseInt(subtotal.innerText) * 10) / 100;
    //     document.getElementById('vat').innerText = vat;
    //     const total = parseInt(subtotal.innerText) + vat;
    //     document.getElementById('total').innerText = total;
    // }
    firstClassPriceHandle(false)
});

function firstClassPriceHandle(selectIncreaseButton){
    const totalIn = document.getElementById('subtotal');
    const firstClassInput = document.getElementById('firstClassInput');
    const convertIntegerInput = parseInt(firstClassInput.value);

    if(selectIncreaseButton == true){
        const newIncreseValue = convertIntegerInput + 1;
        firstClassInput.value = newIncreseValue;
        const subtotal = document.getElementById('subtotal');
        subtotal.innerText = parseInt(totalIn.innerText) +  150;
        // vat 
        const vat = (parseInt(subtotal.innerText) * 10) / 100;
        document.getElementById('vat').innerText = vat;
        const total = parseInt(subtotal.innerText) + vat;
        document.getElementById('total').innerText = total;
    }else{
        if(convertIntegerInput > 0){
            const newIncreseValue = convertIntegerInput - 1;
            firstClassInput.value = newIncreseValue;
            const subtotal = document.getElementById('subtotal');
            subtotal.innerText = parseInt(totalIn.innerText) -  150;
            // vat 
            const vat = (parseInt(subtotal.innerText) * 10) / 100;
            document.getElementById('vat').innerText = vat;
            const total = parseInt(subtotal.innerText) + vat;
            document.getElementById('total').innerText = total;
        }
    }
}

document.getElementById('economyPlusButton').addEventListener('click',function(){
    economyPriceHandle(true);
});

document.getElementById('economyMinisButton').addEventListener('click',function(){
    // const totalIn = document.getElementById('subtotal');
    // const economyInput = document.getElementById('economyInput');
    // const convertIntegerInput = parseInt(economyInput.value);
    
    // if(convertIntegerInput > 0){
    //     const newIncreseValue = convertIntegerInput - 1;
    //     economyInput.value = newIncreseValue;
    //     const subtotal = document.getElementById('subtotal');
    //     subtotal.innerText = parseInt(totalIn.innerText) - 100;
    //     // vat 
    //     const vat = (parseInt(subtotal.innerText) * 10) / 100;
    //     document.getElementById('vat').innerText = vat;
    //     const total = parseInt(subtotal.innerText) + vat;
    //     document.getElementById('total').innerText = total;
    // }
    economyPriceHandle(false);
});

function economyPriceHandle(selectIncreaseButton){
    const totalIn = document.getElementById('subtotal');
    const economyInput = document.getElementById('economyInput');
    const convertIntegerInput = parseInt(economyInput.value);

    if(selectIncreaseButton == true){
        const newIncreseValue = convertIntegerInput + 1;
        economyInput.value = newIncreseValue;
        const subtotal = document.getElementById('subtotal');
        subtotal.innerText = parseInt(totalIn.innerText) + 100;
        // vat 
        const vat = (parseInt(subtotal.innerText) * 10) / 100;
        document.getElementById('vat').innerText = vat;
        const total = parseInt(subtotal.innerText) + vat;
        document.getElementById('total').innerText = total;
    }else{
        if(convertIntegerInput > 0){
            const newIncreseValue = convertIntegerInput - 1;
            economyInput.value = newIncreseValue;
            const subtotal = document.getElementById('subtotal');
            subtotal.innerText = parseInt(totalIn.innerText) - 100;
            // vat 
            const vat = (parseInt(subtotal.innerText) * 10) / 100;
            document.getElementById('vat').innerText = vat;
            const total = parseInt(subtotal.innerText) + vat;
            document.getElementById('total').innerText = total;
        }
    }
}