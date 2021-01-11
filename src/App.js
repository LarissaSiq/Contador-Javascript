function incrementar(mais){
      var value = parseInt(document.getElementById('resultado').value,10);
      value = isNaN(value) ? 0 : value;
      if(value >= mais) {
        value = mais;
      }else{
        value++;
      }
      document.getElementById('resultado').value = value;
    }
    
    function decrementar(menos){
      var value = parseInt(document.getElementById('resultado').value,10);
      value = isNaN(value) ? 0 : value;
      if(value <= menos) {
        value = 0;
      }else{
        value--;
      }
      document.getElementById('resultado').value = value;
    }

