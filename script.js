let lengthbox = document.querySelector('.length-box')
let slider = document.querySelector('#slider')
let upperbox = document.querySelector('#upper')
let lowerbox = document.querySelector('#lower')
let symbolbox = document.querySelector('#symbols')
let numberbox = document.querySelector('#number')
let button = document.querySelector('.button')
let password = ""
let symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/'
let length = 8
let count =0
let result = document.querySelector('.result')
let copy = document.querySelector('#copy')
let upperLabel =  document.querySelector('.upper-label')
let lowerLabel =  document.querySelector('.lower-label')
let symbolLabel =  document.querySelector('.symbol-label')
let numberLabel =  document.querySelector('.number-label')

slider.addEventListener('input',(e)=>{
    
    lengthbox.innerHTML = e.target.value
    length = e.target.value

})

upperLabel.addEventListener('click',()=>{
    if(upperbox.checked){
        upperbox.checked = false
    }
    else{
        upperbox.checked = true
    }
})

lowerLabel.addEventListener('click',()=>{
    if(lowerbox.checked){
        lowerbox.checked = false
    }
    else{
        lowerbox.checked = true
    }
})

symbolLabel.addEventListener('click',()=>{
    if(symbolbox.checked){
        symbolbox.checked = false
    }
    else{
        symbolbox.checked = true
    }
})

numberLabel.addEventListener('click',()=>{
    if(numberbox.checked==true){
        numberbox.checked = false
    }

    else{
        numberbox.checked = true
    }
})

upperbox.addEventListener('change',()=>{
    console.log(upperbox.checked)
    
})
lowerbox.addEventListener('change',()=>{
    console.log(lowerbox.checked)
})
symbolbox.addEventListener('change',()=>{
    console.log(symbolbox.checked)
})
numberbox.addEventListener('change',()=>{
    console.log(numberbox.checked)
})

function getupper(){
    let min = 65
    let max = 90
    let ans =  Math.floor(Math.random() * (max - min + 1) + min);

    ans = String.fromCharCode(ans)

    
    return ans
}

function getlower(){
    let min = 97
    let max = 122
    let ans =  Math.floor(Math.random() * (max - min + 1) + min);

    ans = String.fromCharCode(ans)

   
    return ans
}

function getsymbol(){
    let min =0
    let max = symbols.length-1
    let ans =  Math.floor(Math.random() * (max - min + 1) + min);
    return symbols[ans]
}

function getnumber(){
    let min = 0
    let max =9
    return Math.floor(Math.random() * (max - min + 1) + min);

}

function getindex(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);

}

button.addEventListener('click',()=>{
    let l = length
    let funs =[]
    password =""

    if( upperbox.checked==false&&lowerbox.checked==false&&
        symbolbox.checked==false &&numberbox.checked==false ){

        alert("Please select atleast 1 checkbox")
        return

    }

    if(upperbox.checked){
        password+= getupper()
        funs.push(getupper)
        l--
        count++
    }

    if(lowerbox.checked){
        password+= getlower()
        funs.push(getlower)
        l--
        count++
    }

    if(symbolbox.checked){
        password+= getsymbol()
        funs.push(getsymbol)
        l--
        count++
    }

        
    if(numberbox.checked){
        password+= getnumber()
        funs.push(getnumber)
        l--
        count++
    }

    if(l<0){
        alert("Select a greater length")
        location.reload()
        return 
    }

    for(let i =0;i<l;i++){
        let idx = getindex(0,funs.length-1)
        password+= funs[idx]() 
    }

    String.prototype.shuffle = function () {
        var a = this.split(""),
            n = a.length;
    
        for(var i = n - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a.join("");
    }
    password = password.shuffle()
    console.log(password)
    result.value = password
    

})

    

copy.addEventListener('click',(e)=>{
    var copyText = document.querySelector('.result');

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  let copied = document.querySelector('.copied')
  copied.classList.add('active')
  setTimeout(()=>{
    
    copied.classList.remove('active')
  },1000)

})









