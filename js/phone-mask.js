(function () {
  var phoneInput = document.getElementById('zipCode');

  phoneInput.addEventListener('keyup', function() {
    mask('zipCode', '+7(000)000-00-00', event);
  })
})();


function mask(inputName, mask, evt) {
  try {
    var inputField = document.getElementById(inputName);
    var value = inputField.value;

    try {
      var evt = (evt.which) ? evt.which : event.keyCode;
      if ( evt == 46 || evt == 8 ) {
        inputField.value = '';
        return;
      }
    } catch(evt) {}

    var literalPattern=/[0\*]/;
    var numberPattern=/[0-9]/;
    var newValue = '';

    for (var vId = 0, mId = 0 ; mId < mask.length ;) {
      if (mId >= value.length)
        break;

      if (mask[mId] == '0' && value[vId].match(numberPattern) == null) {
        break;
      }

      while (mask[mId].match(literalPattern) == null) {
        if (value[vId] == mask[mId])
          break;

        newValue += mask[mId++];
      }

      newValue += value[vId++];
      mId++;
    }

    inputField.value = newValue;
  } catch(evt) {}
};
