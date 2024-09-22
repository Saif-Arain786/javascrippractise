
var mdata=[{
    questions:`1)what is br in html`,
    Option1:`what a tag`,
    Option2:`br is element`,
    Option3:`use for new line`,
    correct:`use for new line`,
    push: ``
},{
questions:`2)what is br in html and what is definiition of this tag how can you define them we are checking the elemment of max height`,
Option1:`what a tag`,
Option2:`br is element`,
Option3:`use for new line`,
correct:`use for new line`,
push: ``

},{
questions:`3)what is br in html`,
Option1:`what a tag`,
Option2:`br is element`,
Option3:`use for new line`,
correct:`use for new line`,
push: ``

},{
questions:`4)what is br in html`,
Option1:`what a tag`,
Option2:`br is element`,
Option3:`use for new line`,
correct:`use for new line`,
push: ``

}]
a=0;
score=0;
function mcqs(){
    var div=document.getElementById(`questions`)
    var data =document.getElementsByName(`option`)


div.innerHTML=`
<label for="" type="input" id='ques'>${mdata[a].questions}</label><br>
        <div class='option'><label for=""><input type="radio" name="option"  value="${mdata[a].Option1}">${mdata[a].Option1}</label></div>
        <div class='option'><label for=""><input type="radio" name="option" value="${mdata[a].Option2}">${mdata[a].Option2}</label></div>
        <div class='option'><label for=""><input type="radio" name="option" value="${mdata[a].Option3}">${mdata[a].Option3}</label></div>
        
        ${a==0?
     `<button onclick="increment()">next</button>`:
     a>0&& a<mdata.length-1?
    ` <div><button onclick="increment()">next</button>
     <button onclick=decrement()>previous</button></div> `
        :

      `<button onclick='submit()' >submit</button>`}
       
        `


        console.log(data)
   for (const a1 of data) {
    a1.addEventListener(`change`,(e)=>{
    if(e.target.checked){
        mdata[a].push=e.target.value
    // mdata[a].pushs=e.target.value
    }
    }
    )
}
console.log(mdata)
}
mcqs()
        function increment(){
            if(a<mdata.length-1){
                // console.log(`ashlfn`)
                a+=1;
                mcqs();
            }
        }
         
        function decrement(){
            if(a<=mdata.length-1){
                // console.log(`ashlfn`)
                a--;
                mcqs();
            }
        }

        function submit(){
            for (const data of mdata) {
                if(data.correct==data.push){
                    score+=1;
                }
            }
            localStorage.setItem(`score`,score)
            window.location.href=`score.html`
        }