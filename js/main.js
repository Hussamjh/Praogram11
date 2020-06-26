var count = 0;




function add() {
    count++;
    document.getElementById('count').innerHTML = ''+count;
}

function remove() {
    if(count >0){
        count--;
    }
    document.getElementById('count').innerHTML = ''+count;
}

function reset() {
    count = 0;
    document.getElementById('count').innerHTML = ''+count;

}
