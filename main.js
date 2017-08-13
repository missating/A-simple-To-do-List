// activating the add function

function add() {
   
    
	// set a variable to get the input from the new task
	var text = document.getElementById("newTask").value;
	           if (text=='') {
	             	return false;
	           }
    
    // add the value gotten from the new task input to the empty ul list
	           document.getElementById("list").innerHTML += '<li class="animated bounceInDown"><input type="checkbox" value="'+text+'">'+text+'</input></li>';
    
     // set the new task value to empty
	           document.getElementById("newTask").value = '';
}

// activating function remove

function remove() {
    
    // set a variable to get the input added to the empty ul list
	// console.log(list); to check the input added to the ul list
	 var list = document.getElementById("list").childNodes;
	
    // loop through the list input
     for (var i = 1; i < list.length; i++) {

         // all list input that must be removed should be checked first
     	if(list[i].childNodes[0].checked){
     	  // console.log(this);
            
            //add the input from list when checked and removed clicked to the completed list
     	   document.getElementById("complete").innerHTML += '<li class="animated fadeInDown"><input type="checkbox" checked>'+list[i].childNodes[0].value+'</li>';
            
             //move the list item from list to completed
            list[i].parentElement.removeChild(list[i]);
     	}
     }
	

}
	