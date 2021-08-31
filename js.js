let slider = document.getElementById('myRange');
let views = document.getElementById('pageviews');
let cost = document.getElementById('cost');
let checkbox = document.getElementById('switch')



let Values={
    1:{pageviews:'10K', price:8, percent:0},
    2:{pageviews:'50K', price:12, percent:25},
    3:{pageviews:'100K', price:16, percent:50},
    4:{pageviews:'500K', price:24, percent:75},
    5:{pageviews:'1M', price:32, percent:100}
}
window.onload = insert()

function insert(){
    let value = slider.value;
    views.innerHTML = `${Values[value].pageviews}`;
    cost.innerHTML = `$${Values[value].price.toFixed(2)}`;
    if(checkbox.checked == true){
        let discounted= Values[value].price*0.75
        cost.innerHTML = `$${discounted.toFixed(2)}`;
        }
}

slider.addEventListener('mousemove', ()=>{
    let value = slider.value;
    let color = 'linear-gradient(90deg, hsl(174, 77%, 80%)'+Values[value].percent+'%,  hsl(224, 65%, 95%)'+Values[value].percent+'%)';
    slider.style.background = color;
})

