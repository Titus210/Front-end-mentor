//card holder details input
const nameInput = document.getElementById('fname');
const cardNumber = document.getElementById('cardNumber'); 
const month = document.getElementById('mm'); 
const year = document.getElementById('yy');
const cvcInput = document.getElementById('cvcname');
// cardholder name output
const nameOutput = document.getElementById('full-name');
const numberOutput = document.getElementById('numberDetails');
const yearOutput = document.getElementById('yr');
const monthOutput= document.getElementById('mnth');
const cvcOutput = document.getElementById('cvcout');




//Handler changes
const _value = [];

//event  listener to invoke changes on input

nameInput.addEventListener('input', InputChanged);
cardNumber.addEventListener('input', Input_Changed);
month.addEventListener('input', month_Changed);
year.addEventListener('input', year_Changed);


//method 
function InputChanged(e) {
 console.log(e)
 // if string is greater than 1
 if ( e.target.value.length >= 1) 
    {
        if ( _value != null )
        
        {
            if ( _value[1] == null  )
            _value[1] = " ";
        
            if  (_value.length > 0)
            _value[0] = `${e.target.value}`;
            nameOutput.textContent = _value[0];
            nameInput.isVisiable = true;
        }
    }
}

//method 2
function Input_Changed(e)
{
    if (e.target.value >= 4);
    {
        if (_value !=  null)
        {
            if(_value[0] == null)
        	_value[0] = " ";

        if (_value.length > 0)
        {
            _value[1]= `${e.target.value}`;
             numberOutput.textContent =  _value[1];
            nameInput.isVisiable  = true;
        }

        }
       _value[1] = `${e.target.value}`;
   
      numberOutput.textContent =  _value[0] + ' ' + _value[1];
      nameInput.isVisiable = true;
    }

}
//method3
function month_Changed(e)
{
    if (e.target.value >= 1 && !isNaN( e.target.value));
    {
        if (_value !=  null)
        {
            if(_value[0] == null)
        	_value[0] = " ";

        if (_value.length > 0)
        {
            _value[1]= `${e.target.value}`;
             month.textContent =  _value[1];
            month.isVisiable  = true;
        }

        }
       _value[1] = `${e.target.value}`;
   
      monthOutput.textContent =  _value[0] + ' ' + _value[1];
      month.isVisiable = true;
    }
    
}
//method 4
function year_Changed(e)
{
    if (e.target.value >= 2)
    {
        if (_value != null)
        {
            if  (_value[0] == null)
            _value[0] = " ";
         
         if (_value.length >0)
         {
            _value[1] = `${e.target.value}`;
            year.textContent = _value[1];
            year.isVisiable = true;
         }
        
       }
       _value[1] = `${e.target.value}`;
       yearOutput.textContent = _value[0] + ' ' + _value[1];
       monthOutput.isVisiable = true;
    }
}
//method 5
// Submit button

/*===== Separating card number =====*/

function space(card , after) {
 
    after = after || 4;
    var v = card.value.replace(/[^\dA-Z]/g, ''),
     reg = new RegExp(".{" + after + "}" ,"g")
     card.value = v.replace(reg, function (a, b , c) {
        return a + ' ';
     });
}

var card = document.getElementById('cardNumber');
card.addEventListener('keyup', function()
{
    space(this, 4)
});
//Changing element to capital letter
/* ============ to uppercase ============================ 
function toUpperCase(e)
{
    var start = e.target.selectionStart;
    var end = e.target.selectionEnd;
    e.target.value = e.target.value.toUpperCase();
    e.target.setSelectionRange(start, end);
}
document.getElementById("cardNumber").addEventListener("keyup", toUpperCase, false);
*/


 /* ============ VALIDATION ============= */
 
  // Output error
    var nameerror = document.getElementById("errorName");
    var dateError = document.getElementById("errorDate");
    var cvcError = document.getElementById("errorCvc");
    var cardError = document.getElementById("errorCard");
    
    //name validation
    function nameValidation()
    {
        const regName = /^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/;
        var nameValidate = nameInput.value;
        if (!regName.test(nameValidate)) {
             nameerror.style.display = 'block';
             nameInput.style.border = '1px solid #ff5252';
            nameInput.focus();
            return false;
        }
        else
        return true;
     }

     // Credit card Validation
     function creditcardValidate()
     {
        var regCard = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
         var cardValidate = cardNumber.value;
         if (!regCard.test(cardValidate)) {
            cardError.style.display = 'block';
            cardNumber.setAttribute("style", " border: 1px solid #ff5252");
            cardNumber.focus();
            return false;

         }
         else
         return true;

     }
     // month validaton
     function month_yearVAlidation()
     {
        regYear = /^(0?[1-9]|1[0-2])/(19|2[0-1])?/d{2}$/;
        var monthValidate = month.value;
        var yearValidate = year.value;
        if(!regYear.test(monthValidate) && !regYear.test(yearValidate))
        {
              dateError.style.display = 'block';
              month.setAttribute("style", " border: 1px solid #ff5252");
              yearValidate.setAttribute("style", " border: 1px solid #ff5252");
              month.focus();
              year.focus();
        }
     }
     // cvc validation
     function cvcValidate()
     {
       var  regCvc = /^[0-9]{3,4}$/;
       var cvcValidate = cvcInput.value;
       if (!regCvc.test(cvcValidate))
       {
        cvcInput.style.border = "1px solid #ff5252";
        easy to learn, powerful programming language
       }

     }
