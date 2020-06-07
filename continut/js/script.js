


function printTime()
{
    var d=new Date();
    document.getElementById("date").innerHTML ="Data 📅 : "+ d.toDateString();

    var h=d.getHours();
    var m=d.getMinutes();
    document.getElementById("time").innerHTML = "Ora ⏰ : "+ h+ ":"+m;
}


function functs1()
{
	
    document.getElementById("url").innerHTML += window.location.href ;
	document.getElementById("loc").innerHTML += window.location.pathname ;
	document.getElementById("browser").innerHTML += window.navigator.appName ;
	
    printTime();
    setInterval(printTime,1000); 
    init();
}


function lotoFunction() {
    var corecte = 0;
    var number = [];

    document.getElementById("intrari").innerHTML = " Numerele jucate:"
    document.getElementById("extrase").innerHTML = "Numerele extrase: "
    document.getElementById("nimerite").innerHTML = "Numerele extrase: "
    
    for (i = 0; i < 8; ++i) {
        number[i] = parseInt("0x" + document.getElementById("number" + (i + 1)).value);
        document.getElementById("intrari").innerHTML += number[i] + "  ";
    }

    for (i = 0; i < 8; ++i) {
        x = Math.floor(Math.random() * 256);
        document.getElementById("extrase").innerHTML += x + "  ";
        for (j = 0; j < 8; ++j) {
            if (x == number[j]) {
                corecte++;
            }
        }
    }
    document.getElementById("nimerite").innerHTML = corecte + " numere nimerite!"
}


var canvas = document.getElementById("canvas"),
 ctx = canvas.getContext("2d"),
 rect = {};
var drag = false;

function init() {
    canvas.addEventListener('mousedown', mouseDown, false);
    canvas.addEventListener('mouseup', mouseUp, false);
    canvas.addEventListener('mousemove', mouseMove, false);
}

function mouseDown(e) {
    rect.startX = e.pageX - this.offsetLeft;
    rect.startY = e.pageY - this.offsetTop;
    drag = true;
}

function mouseUp() {
    drag = false;
}

function mouseMove(e) {
    if (drag) {
      rect.w = (e.pageX - this.offsetLeft) - rect.startX;
      rect.h = (e.pageY - this.offsetTop) - rect.startY ;
      ctx.clearRect(0,0,canvas.width,canvas.height);
      draw();
    }
}

function draw() {
    ctx.fillRect(rect.startX, rect.startY, rect.w, rect.h);
}



var latimeTabel = 3;
var inaltimeTabel = 3;
var culoareCelula;

function seteazaCuloareCelula(culoare) {
    culoareCelula = culoare;
    console.log(culoareCelula);
}


/*function randNou() {
	var tabel = document.getElementById("tabel");
	var pozitieRand = parseInt(document.getElementById("pozitieRand").value);

	var randNou = tabel.insertRow(pozitieRand);

	++inaltimeTabel;

	var i, celula;
	for (i = 0; i < latimeTabel; ++i)
	{
		celula = randNou.insertCell(i);
		celula.innerHTML = "*";
		celula.style.backgroundColor = culoareCelula;
	}
}*/

function insertRow() {
    //var culoareTabel = document.getElementById("cul").value;
    console.log(culoareCelula);
    var numar = parseInt(document.getElementById("numar").value);
 
    var table = document.getElementById("tabel");
 
    var numberOfCells = table.rows[0].cells.length;//
 
    var row = table.insertRow(numar);
    for (var i = 0; i < numberOfCells; ++i) {
        var cell = row.insertCell(i);
        cell.innerText = "#";
        cell.style.background =culoareCelula;
    }
}
 
function insertColumn() {
    //var culoareTabel = document.getElementById("cul").value;
    var numar = parseInt(document.getElementById("numar").value);
 
    var table = document.getElementById("tabel");
 
    var numberOfRows = table.rows.length;
 
    for (var i = 0; i < numberOfRows; ++i) {
        var cell = table.rows[i].insertCell(numar);
        cell.innerText = "#";
        cell.style.color = culoareCelula;
    }
}


function schimbaAspect(aspect)
{
	var s1 = document.getElementById("sect1");
	var s2 = document.getElementById("sect2");
	var s3 = document.getElementById("sect3");
	var s4 = document.getElementById("sect4");
	var main = document.getElementById("normal");

	switch(aspect)
	{
		case "aspect4x1":
			main.style.width = "90%";
			main.style.display = "flex";
			main.style.flexDirection = "column";
			s1.style.width = "80%";
			s1.style.flex = "1";
			s1.style.marginLeft = "0";
			s2.style.width = "80%";
			s2.style.flex = "1";
			s2.style.marginLeft = "0";
			s3.style.width = "80%";
			s3.style.flex = "1";
			s3.style.marginLeft = "0";
			s4.style.width = "80%";
			s4.style.flex = "1";
			s4.style.marginLeft = "0";
			break;
		case "aspect1x4":
			main.style.display = "flex";
			main.style.width = "85%";
			main.style.flexDirection = "row";
			s1.style.width = "23%";
			s1.style.flex = "1";
			s1.style.overflowX = "auto";
			s1.style.marginLeft = "30px";
			s2.style.width = "23%";
			s2.style.flex = "1";
			s2.style.overflowX = "auto";
			s2.style.marginLeft = "30px";
			s3.style.width = "23%";
			s3.style.flex = "1";
			s3.style.overflowX = "auto";
			s3.style.marginLeft = "30px";
			s4.style.width = "23%";
			s4.style.flex = "1";
			s4.style.overflowX = "auto";
			s4.style.marginLeft = "30px";
			break;
		case "aspect2x2":
			main.style.display = ""
			s1.style.width = "40%";
			s1.style.display = "inline-block";
			s1.style.overflowX = "auto";
			s2.style.width = "40%";
			s2.style.display = "inline-block";
			s2.style.overflowX = "auto";
			s2.style.marginLeft = "30px";
			s3.style.width = "40%";
			s3.style.display = "inline-block";
			s3.style.overflowX = "auto";
			s4.style.width = "40%";
			s4.style.display = "inline-block";
			s4.style.overflowX = "auto";
			s4.style.marginLeft = "30px";
			break;
	}
}

function schimbaContinut(resursa,jsFisier,jsFunctie){
    var x;
    if(window.XMLHttpRequest)
    {
        x=new XMLHttpRequest();
        x.onreadystatechange=
        function()
        {
            if(x.readyState == 4 && x.status)
            {
                document.getElementById("continut").innerHTML=x.responseText;
                if(jsFisier){
                    var elemScript=document.createElement('script');
                    elemScript.onload = function()
                    {
                        console.log("Hello");
                        if(jsFunctie)
                        {
                            window[jsFunctie]();
                        }
                    };
                    elemScript.src=jsFisier;
                    document.head.appendChild(elemScript);
                }
                else
                {
                    if(jsFunctie)
                    {
                        window[jsFunctie]();
                    }
                }
            }
        }
    }
    x.open("Get",resursa,true);
    x.send();
}

function loadJSONdoc()
  {
    var ajaxRequest = new XMLHttpRequest();
    ajaxRequest.onreadystatechange = function(){
    
        if(ajaxRequest.readyState == 4){
            //the request is completed, now check its status
            if(ajaxRequest.status == 200){
                //turn JSON into object
                document.getElementById("demo").innerHTML="";
                var obj = JSON.parse(ajaxRequest.responseText);
                var o1=obj.utilizatori;
                var name=o1[0].utilizator;
                var par=o1[0].parola;
                //var name=obj[0].utilizator;
                //var par=obj[0].parola;
                console.log(myInp);
                console.log(myPass);
                console.log(name);
                console.log(par);
                var myInp=document.getElementById("username").value;
                var myPass=document.getElementById("psw").value;
                //document.getElementById("demo").innerHTML =  myInp+";" + "<br/>"
                //document.getElementById("demo").innerHTML +=name+ " "+ par;
                if(myInp==name && myPass==par)
                    var result="VERIFICARE REUSITTA!";                         
                    else{
                     var result="PAROLA SAU NUME UTILIZATOR GRESIT!"; 
                        }    
					document.getElementById("demo").innerHTML+=result;   
					

                //verif(this);
      };
    }
}
ajaxRequest.open("Get","resurse/utilizatori.json",true);
ajaxRequest.send();
   
}


function register () 
{

    var username=document.getElementById('nume').value;
    var passwd=document.getElementById('parola').value;

    var val= {"utilizator":username,"parola":passwd};
    console.log(username);
    console.log(passwd);
           
var ajaxRequest = new XMLHttpRequest();
var url="resurse/utilizatori.json";
var data=[];
ajaxRequest.onreadystatechange = function(){
    
    if(ajaxRequest.readyState == 4){
        //the request is completed, now check its status
        if(ajaxRequest.status == 200){
            //turn JSON into object
            obj=JSON.parse(ajaxRequest.responseText)
            var o1=obj.utilizatori;
            o1.push(val);
            data = JSON.stringify(obj);
            console.log(data);
            var res="Inregistrarea a fost finalizata cu succes!"
            document.getElementById("rezultat").innerHTML+=res;
            
            
           
  };
}

}

ajaxRequest.open("POST",url,true);
    ajaxRequest.setRequestHeader("Content-Type", "application/json");
    ajaxRequest.send(data);
    
    console.log("A AJUNS:"+data);

}


