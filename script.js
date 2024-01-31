
let project = document.querySelectorAll('.working');

project.forEach((value)=>{
    value.addEventListener('click' ,function(event){
        console.log(event.target);
        event.preventDefault();
        alert('working on this Project ')   
    },false)
})
