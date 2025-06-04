function appear(value) {
    const display= document.getElementById('display');
    display.value += value;
}
function result() {
    const display = document.getElementById('display');
    try {
        const result = display.value.replace(/÷/g, '/').replace(/\×/g, '*');
        display.value = eval(result); 
    } catch {
        display.value = 'Error';
    }
}

function clearDisplay(){
    const display=document.getElementById('display');
    display.value='';
}
function lastCharacter(){
    const display= document.getElementById('display');
    display.value=display.value.slice(0,-1);
}