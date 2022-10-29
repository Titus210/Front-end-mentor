//card holder details input
const nameInput = document.getElementById('fname');
const cardNumber = document.getElementById('cardNumber');  

// cardholder name output
const nameOutput = document.getElementById('full-name');
const numberOutput = document.getElementById('numberDetails');




//Handler changes
const _value = [];

//event  listener to invoke changes on input

nameInput.addEventListener('input', InputChanged);
cardNumber.addEventListener('input', Input_Changed);

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
      console.numberOutput(_value[1]);
      numberOutput.textContent =  _value[0] + ' ' + _value[1];
      nameInput.isVisiable = true;
    }

}
// Submit button
document.getElementById('submit').addEventListener('click', complete())
function complete()
{
    var url = "./complete.js";
    window.location.href  = url
}