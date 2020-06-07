function adauga()
{
    /*class Produs{
        constructor(id,nume,cantitate){
            this.id=id;
            this.nume=nume;
            this.cantitate=cantitate;
        }
    }*/

    let numeProdus=document.getElementById("nume");
    let cantitate=document.getElementById("cantitate");
    let produse= localStorage.getItem('produse');
    if(produse==null)
    {
        produse=[];   
    }
    else{
        produse=JSON.parse(produse);
    }
    let lastId=localStorage.getItem('lastId');
    if(lastId==null)
    {
        lastId=1;   
    }
    else{
        lastId=JSON.parse(lastId);
    }
    let id=lastId;
    produse.push(new Produs(id,numeProdus,cantitate));
    localStorage.setItem('produse',JSON.stringify(produse));
    localStorage.setItem('lasiId',JSON.stringify(lastId+1));
}