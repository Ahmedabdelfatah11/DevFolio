
var x=document;
var dropDown=document.getElementById('dropDown1');
var question=document.querySelectorAll('.question-info');
var arrow=document.querySelectorAll('.question-info a i');


// console.log(arrow);

if(innerWidth<=1196)
    {
        dropDown.classList.replace('dropstart','dropdown');
    }
  ArrowDisplay();  
    function ArrowDisplay()
    {

        for(var i=0;i<question.length;i++){
            question[i].addEventListener('click',function(e){
                // console.log(e)
                for(var j=0;j<arrow.length;j++)
                    {  

               if(e.delegateTarget.childNodes[1].childNodes[3].classList.contains('fa-arrow-right'))      
                e.delegateTarget.childNodes[1].childNodes[3].classList.replace('fa-arrow-right','fa-arrow-down');
            else 
            e.delegateTarget.childNodes[1].childNodes[3].classList.replace('fa-arrow-down','fa-arrow-right');
                 
            }
           });
        }

    }

