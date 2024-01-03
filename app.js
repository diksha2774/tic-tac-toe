let btns=document.querySelectorAll(".box");
let start = document.querySelector("#bi1");
let res = document.querySelector("#bi2");

start.onclick=()=>
{
btns.forEach((box)=>
{
    box.innerText="";
    box.disabled=false;
});
let h1 = document.querySelector("#hid");
h1.innerText="";
}

res.onclick=()=>
{
btns.forEach((box)=>
{
    box.innerText="";
    box.disabled=true;
});
let h1 = document.querySelector("#hid");
h1.innerText="";
}

flag=0;
btns.forEach((box) => {
    box.addEventListener("click", () => {
    if(flag==0)
    {
        box.textContent="x";
        flag=1;
    }
    else{
        box.textContent="o";
        flag=0;
    }
    box.disabled=true;
    let result = check();
    if(result==1)
    {
        let h1 = document.querySelector("#hid");
        if(flag==1)
        {
            h1.innerText="player X win";
        }
        else{
            h1.innerText="player O win";
        }
        
        btns.forEach((box)=>
        {
            box.disabled=true;
        });

    }
});
});

function check()
{
    if(btns[0].innerText==btns[1].innerText && btns[1].innerText==btns[2].innerText && btns[0].innerText!="")
    {
        return 1; 
    }
    else if(btns[3].innerText==btns[4].innerText && btns[5].innerText==btns[3].innerText && btns[3].innerText!="")
    {
        return 1; 
    }
    else if(btns[7].innerText==btns[6].innerText && btns[7].innerText==btns[8].innerText && btns[6].innerText!="")
    {
        return 1; 
    }
    else if(btns[1].innerText==btns[4].innerText && btns[1].innerText==btns[7].innerText && btns[4].innerText!="")
    {
        return 1; 
    }
    else if(btns[2].innerText==btns[8].innerText && btns[5].innerText==btns[2].innerText && btns[8].innerText!="")
    {
        return 1; 
    }
    else if(btns[0].innerText==btns[3].innerText && btns[3].innerText==btns[6].innerText && btns[0].innerText!="")
    {
        return 1; 
    }
    else if(btns[0].innerText==btns[8].innerText && btns[4].innerText==btns[8].innerText && btns[0].innerText!="")
    {
        return 1; 
    }
    else if(btns[2].innerText==btns[6].innerText && btns[4].innerText==btns[2].innerText && btns[6].innerText!="")
    {
        return 1; 
    }
}