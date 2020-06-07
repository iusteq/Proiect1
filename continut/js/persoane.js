function loadXMLDoc()
{
    var xh=new XMLHttpRequest();
    xh.onreadystatechange=function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            incarcaPersoane(this);
        }
    };
    xh.open("Get","resurse/persoane.xml",true);
    xh.send();
}

function incarcaPersoane(xml)
{
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Nume</th><th>Prenume</th><th>Varsta</th><th>Job</th><th>Adresa</th></tr>";
    var x = xmlDoc.getElementsByTagName("persoana");
    for (i = 0; i <x.length; i++) {
        table += "<tr><td>" +
        x[i].getElementsByTagName("nume")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("prenume")[0].childNodes[0].nodeValue +
        "</td><td>"+
        x[i].getElementsByTagName("varsta")[0].childNodes[0].nodeValue +
        "</td><td>"+
        x[i].getElementsByTagName("job")[0].childNodes[0].nodeValue +
        "</td><td>"+
        x[i].getElementsByTagName("strada")[0].childNodes[0].nodeValue +" numarul "+
        x[i].getElementsByTagName("numar")[0].childNodes[0].nodeValue +", localitatea "+
        x[i].getElementsByTagName("localitate")[0].childNodes[0].nodeValue +", judet "+
        x[i].getElementsByTagName("judet")[0].childNodes[0].nodeValue +", tara "+
        x[i].getElementsByTagName("tara")[0].childNodes[0].nodeValue +
        "</td></tr>";
  }
  document.getElementById("pers").innerHTML = table;
}

