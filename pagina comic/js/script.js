

$(document).ready(function(){
    var myDataRef = new Firebase('https://comic-6db3d.firebaseio.com/');
    myDataRef.on("value", function(snapshot) {
        var data = snapshot.val();
        $(comentarios).html('');
        for (var coment in data){
            if (data.hasOwnProperty(coment)){
                var msg = data[coment].comentario;
            }
        $(comentarios).append('<div class="card"><div class="card-content"><p class="flow-text">'+msg+'</p></div></div>');
        }
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
    $(btn).click(function(){
        var texto = $("#texto").val();
        if(texto.trim() != ""){
            $(comentarios).append('<div class="card"><div class="card-content"><p class="flow-text">'+texto+'</p></div></div>');
            myDataRef.push({"comentario" : texto});
        }else{
            alert("El mensaje no puede estar vacio");
        }
        $("#texto").val('');
    })})
