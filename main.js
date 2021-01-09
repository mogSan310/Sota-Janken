/*const Gu = () => {
    
    let num =Math.floor(Math.random() * 3);
    console.log(num);

    if(num==0)
    {
        window.alert("あなたの負け");
    }else if(num==1)
    {
        window.alert("あなたの勝ち");
    }else if(num==2)
    {
        window.alert("あいこ！");
    }


}

const Choki =() => {

    let num =Math.floor(Math.random() * 3);
    console.log(num);

    
    if(num==0)
    {
        window.alert("あなたの負け");
    }else if(num==1)
    {
        window.alert("あなたの勝ち");
    }else if(num==2)
    {
        window.alert("あいこ！");
    }



    
}

const Pa =() => {
    
    let num =Math.floor(Math.random() * 3);
    console.log(num);


    if(num==0)
    {
        window.alert("あなたの負け");
    }else if(num==1)
    {
        window.alert("あなたの勝ち");
    }else if(num==2)
    {
        window.alert("あいこ！");
    }



}
*/


//tekazu==0 パー
//tekazu==1 チョキ
//tekazu==2 グー

let result=0;

//result==0 パー
//result==1 チョキ
//result==2 グー


function gudesu()
{
    if(result== 0)
    {
        window.alert("あなたの負け");

    }else if(result==1)
    {
        window.alert("あなたの勝ち");

    }else if(result==2)
    {
        window.alert("あいこ！");
    }
}

function chokidesu()
{
    if(result==2)
    {
        window.alert("あなたの負け");
        

    }else if(result==0)
    {
        window.alert("あなたの勝ち");
    }else if(result==1)
    {
        window.alert("あいこ！");
    }
}

function padesu()
{
    if(result==1)
    {
        
        window.alert("あなたの負け");
        
    }else if(result==2)
    {
        window.alert("あなたの勝ち");
    }else if(result==0)
    {
        window.alert("あいこ！");
    }
}


let pic= new Array(
    "janken_pa.png",
    "janken_choki.png",
    "janken_gu.png",
    
);

//tekazu==0 パー
//tekazu==1 チョキ
//tekazu==2 グー


//result==0 パー
//result==1 チョキ
//result==2 グー

function slideshow_timer(){


    let tekazu =Math.floor(Math.random() * 3);

    document.getElementById("img").src=pic[tekazu];

    if(tekazu == 0)//パー
    {
        document.getElementById("img").src=pic[0];
        console.log(result);
        result=0;
        

    }else if(tekazu == 1) //チョキ
    {
        document.getElementById("img").src= pic[1]
        console.log(result);
        result=1;
        

        
    }else if(tekazu==2)//グー
    {
        document.getElementById("img").src=pic[2];
        console.log(result);
        result=2;
        

        

    }

    
    setTimeout("slideshow_timer()", 100);
}


window.onload　= function()
{
    slideshow_timer();
}

//document.getElementById("img").src=pic[Math.floor(tekazu)];


