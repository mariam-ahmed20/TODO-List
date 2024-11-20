document.addEventListener("DOMContentLoaded", function() {




    document.querySelector("#submit").disabled = true;


    document.querySelector("#task").onkeyup = function() {
        if (document.querySelector("#task").value.length > 5) {
            document.querySelector("#submit").disabled = false;
        }
        else {
            document.querySelector("#submit").disabled = true;
        }
    }

    
    var task = document.querySelector("#task");
    
    document.querySelector("form").onsubmit = function() {
        var not = document.querySelector("#not");
        var done = document.querySelector("#done");
        var li = document.createElement("li");
        var check = document.createElement('button');
        var del = document.createElement('button');
        var icons = document.createElement('div');



        check.innerHTML = '<i class=" aaaa fa-sharp fa-solid fa-check"></i>';
        del.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>';
       
       
       
       
       
        if(task.value !== "") {
            li.innerHTML = task.value;
            not.appendChild(li);
            li.appendChild(icons);
            icons.appendChild(check);
            icons.appendChild(del);
        }
        

        task.value = ""; 

        check.addEventListener('click', function() {
            var parent = this.parentNode.parentNode;
            parent.remove();
            done.appendChild(parent);
            check.style.display = "none";
        });

        del.addEventListener('click', function(){
            var parent = this.parentNode.parentNode;
            parent.remove();
        });
        return false;

        
    } 


    
    
});
