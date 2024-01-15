function dropDown(classname){
    var el = document.getElementsByClassName(classname);
    for(let i of el){
        i.style.height = "inherit";
        i.style.width = "inherit"
    }

}

function retractUp(classname){
    var el = document.getElementsByClassName(classname);
    for(let i of el){
        i.style.height = "0px";
        i.style.width = "0px"
    }
    

}

function Highlite(element,color,background){

    element.style.color = color;
    element.style.backgroundColor = background;

}


function logoAnim(){
    var el = document.getElementsByClassName('logo_id');
    var len = el.length;
    el.style.transition = 'left .7s, visibility .3s'
for(let i of len){
    document.getElementsByClassName('logo_id')[i].style.position = "relative";


}
}

function parAnim(clasname){
var el = document.getElementsByClassName(clasname);
for(let i of el){
i.style.visibility = "visible";
i.style.height = "inherit"}




}


function parAnimRev(clasname){
    var el = document.getElementsByClassName(clasname);
    for(let i of el){
    i.style.visibility = "hidden";
    i.style.height = '0px';
    i.style.width = '0px';
    }
}
function extend(){
    var l1 = document.getElementById('logo_id_1').style;
    var l2 = document.getElementById('logo_id_2').style;
    var l3 = document.getElementById('logo_id_3').style;
    var l4 = document.getElementById('logo_id_4').style;
    
    l1.left = '60px'
    l2.left = '120px'
    l3.left = '220px'
    l4.left = '340px'
    
    l1.visibility = 'visible';
    l2.visibility = 'visible';
    l3.visibility = 'visible';
    l4.visibility = 'visible';
    
    
    
    
    }


    //function extend_leave(){
      //  var l1 = document.getElementById('logo_id_1').style;
    //var l2 = document.getElementById('logo_id_2').style;
    //var l3 = document.getElementById('logo_id_3').style;
    //var l4 = document.getElementById('logo_id_4').style;

    //l1.left = '0px'
    //l2.left = '0px'
    //l3.left = '0px'
    //l4.left = '0px'
    
    
    //l3.visibility = 'hidden';
    //l4.visibility = 'hidden';
    //}



function searchReq(search_list)
{

    var val = document.getElementById('search').value; 

var list = Object.keys(search_list);
document.getElementById('options').innerHTML = '';
for(let i of list){
if(i.includes(val) && val != '   '){
    var elem = document.createElement('div');
    var celem = document.createElement('a')
    celem.className = 'search_op'
    elem.className = 'search_op';

    elem.style.visibility = "visible";
    celem.style.visibility = "visible";
    elem.style.height = "50px";
    celem.style.height = "50px";

    celem.href = items[i]
    celem.append(i)
    elem.appendChild(celem);
    document.getElementById('options').append(elem);
    }}



}

function windowAlert(){

    var div = document.createElement('div');
    var h1 = document.createElement('h1');
    var xb = document.createElement('div');
    xb.style.top = "0px";
    xb.style.right = "0px"
    xb.innerHTML = "X"
    xb.addEventListener('click',(event)=>{
        div.style.display = 'none';

    })
xb.style.width = "30px";
xb.style.height = "30px"
div.appendChild(xb);
    div.id = "alert";
    div.style.fontFamily = "verdana"

    div.style.position = "absolute";
    div.style.left = "50%";
    div.style.textAlign = "center"
    div.style.top = "50%";
    div.style.width = "500px";
    div.style.height = "200px";
    div.style.borderStyle = "curved";
    div.style.boxShadow = "2px 2px 6px gray";
    div.style.zIndex = 2;
    h1.innerHTML = 'Yo whats up';
    div.appendChild(h1);
    document.getElementsByTagName("body")[0].appendChild(div);
}


function features(){
var features = {navigation_bar:'<></>',dropdown_menu:'<></>',textbox:'<></>',column:'<></>', footer:'<footer></footer>',header:'<header></header>',}



}

function placement(event,element){
var encasement = document.createElement(element);
encasement.style.width = "400px";
encasement.style.height = "400px";
encasement.style.borderStyle = 'solid';
encasement.style.borderColor = 'black'

}