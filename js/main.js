var count = localStorage.getItem('count') ;
if(count == null || count == undefined) {
    count = 0;
}



function add() {
    count++;
    document.getElementById('count').innerHTML = ''+count;
    localStorage.setItem('count', count);
}

function remove() {
    if(count >0){
        count--;
    }
    document.getElementById('count').innerHTML = ''+count;
    localStorage.setItem('count', count);

}

function reset() {
    count = 0;
    document.getElementById('count').innerHTML = ''+count;
    localStorage.setItem('count', count);


}
