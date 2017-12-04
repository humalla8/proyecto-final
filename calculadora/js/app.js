var Calculadora={

	agregarNumero:function(numero){
		var valor=$('#display').html();
		if(valor==null || valor=="0"){
			$('#display').html(numero);
		}else{
			if(valor.length < 8)
				$('#display').html(valor+numero);
		}
	},

	limpiarPantalla:function(){
		$('#display').html("0");
		
	},

	agregarPunto:function(){
		var valor=$('#display').html();
		if(valor.indexOf(".") == -1){
			$('#display').html(valor+".");
		}
	},

	agregarSigno:function(){
		var valor=$('#display').html();
		if(valor!="0"){
			if(valor.indexOf("-") == -1){
				$('#display').html("-"+valor);
			}else{
				$('#display').html(valor.substring(1,valor.length));
			}
		}
	},

	cantidadDigitos:function(){
		var valor=$('#display').html();
		
		if(valor.length>8){
			console.log("bloquear display");
			$('#display').html(valor.substring(0,8));
		}
	},

	mediaOperacion:function(){
		$('#display').html("");
	},

	sumar:function(numero1,numero2){
		var resul=eval(numero1)+eval(numero2);
		console.log(resul);
		$('#display').html(resul);
	},

	restar:function(numero1,numero2){
		var resul=eval(numero1)-eval(numero2);
		console.log(resul);
		$('#display').html(resul);
	},

	multiplicar:function(numero1,numero2){
		var resul=eval(numero1)*eval(numero2);
		console.log(resul);
		$('#display').html(resul);
	},

	dividir:function(numero1,numero2){
		var resul=eval(numero1) / eval(numero2);
		console.log(resul);
		$('#display').html(resul);
	},

	raiz:function(numero){
		var resul = Math.sqrt(numero);
		var tam = resul.toString().length;
		if(tam>8){
			$('#display').html(resul.toFixed(5));
		}else{
			$('#display').html(resul);
		}
		
	},

	inicializacion:function(){
		$('.tecla').click(function(){
		var alt=$(this).attr('alt');
		if(alt!="punto" && alt!="signo" && alt!="mas" && alt!="igual" && alt!="menos" && alt!="por" && alt!="dividido" && alt!="raiz"){
			Calculadora.agregarNumero(alt);
			Calculadora.cantidadDigitos();
		}
		});

		$('#on').click(function(){
			Calculadora.limpiarPantalla();
		});

		$('#punto').click(function(){
			Calculadora.agregarPunto();
		});

		$('#sign').click(function(){
			Calculadora.agregarSigno();
		});
		var n1;
		var op="";
		$('#mas').click(function(){
			n1=$('#display').html();
			Calculadora.mediaOperacion();
			op="sumar";
		});

		$('#menos').click(function(){
			n1=$('#display').html();
			Calculadora.mediaOperacion();
			op="resta";
		});

		$('#por').click(function(){
			n1=$('#display').html();
			Calculadora.mediaOperacion();
			op="multiplicacion";
		});

		$('#dividido').click(function(){
			n1=$('#display').html();
			Calculadora.mediaOperacion();
			op="division";
		});

		$('#raiz').click(function(){
			n1=$('#display').html();
			var valor=$('#display').html();
			if(valor!="0"){
				if(valor.indexOf("RAIZ") == -1){
					$('#display').html("RAIZ("+valor+")");
				}else{
					$('#display').html(valor.substring(5,valor.length-1));
				}
			}
			op="raiz";
		});

		$('#igual').click(function(){
			var n2=$('#display').html();
			console.log(n1+"  "+n2);
			if(op=="sumar"){
				Calculadora.sumar(n1,n2);
			}
			if(op=="resta"){
				Calculadora.restar(n1,n2);
			}
			if(op=="multiplicacion"){
				Calculadora.multiplicar(n1,n2);
			}
			if(op=="division"){
				Calculadora.dividir(n1,n2);
			}
			if(op=="raiz"){
				Calculadora.raiz(n1);
			}
			Calculadora.cantidadDigitos();
		});

	}
};

Calculadora.inicializacion();