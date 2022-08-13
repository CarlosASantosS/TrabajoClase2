const lista = document.getElementById('lista');

function agregar(){
    let item = document.getElementById('mensaje').value;
    var item_dom = document.createElement('li');
    item_dom.appendChild(document.createTextNode(item));
    lista.appendChild(item_dom);
}
function borrar(){
    var itemremove = lista.lastChild;
    lista.removeChild(itemremove);
}