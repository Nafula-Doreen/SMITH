$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');


    })
});
const filterContainer = document.querySelector(".gallery-filter"),
 galleryItems = document.querySelectorAll(".gallery-item");

 filterContainer.addEventListener("click", (event) =>{
    if(event.target.classList.contains("filter-item")){

        filterContainer.querySelector("active");

        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter");
        galleryItems.forEach((item) =>{
            if(item.classList.contains(filterValue) || filterValue === 'all'){
                item.classList.remove("hide");
                 item.classList.add("show");
            }
            else{
                item.classList.remove("hide");
                 item.classList.add("show");
            } 
            });
        }
        })
        function openForm() {
            document.getElementById("myForm").style.display = "block";
          }
          function closeForm() {
            document.getElementById("myForm").style.display = "none";
          }
   

  
