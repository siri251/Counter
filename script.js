let count=0;
const value=document.getElementById('value');
const btns=document.querySelectorAll('.btn');

btns.forEach(function(e){
    e.addEventListener('click',function(btn){
        const inc_dec_res=btn.currentTarget.classList;
        if(inc_dec_res.contains('decrease')){
            count--;
        }
        else if(inc_dec_res.contains('increase')){
            count++;
        }
        else{
            count=0;
        }
        value.textContent=count;

        if(count>0){
            value.style.color='darkgreen';

        }
        else if(count<0){
            value.style.color='red';
        }
        else{
            value.style.color='black';
        }

        // value.textContent=count;

    })
})