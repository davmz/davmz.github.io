/**
 * Name: David Montañez
 * Project: Personal Website
 * Created: June 28, 2021
 * Updated: June 28, 2021   
 */

document.addEventListener("DOMContentLoaded", load);

function load()
{
    function navSlide()
    {
        const menuBtn = document.querySelector(".menuBtn");
        const menuItems = document.querySelector("#navList");
        const menuItem = document.querySelectorAll(".navItem")

        menuBtn.addEventListener("click", () =>
        {
            toggle();
        });

        menuItem.forEach(item =>
            {
                item.addEventListener("click", () =>
                {
                    if(menuBtn.classList.contains("open"))
                    {
                        toggle();
                    }
                });  
            });

        function toggle()
        {
            menuBtn.classList.toggle("open");
            menuItems.classList.toggle("open");
        }
    }

    navSlide();
}