/**
 * Name: David Montañez
 * Project: Personal Website
 * Created: June 28, 2021
 * Updated: June 28, 2021   
 */

document.addEventListener("DOMContentLoaded", load);

function load()
{
    const navSlide = () =>
    {
        let burger = document.querySelector(".burger");
        let nav = document.querySelector(".navList");

        burger.addEventListener("click", () =>
        {
            nav.classList.toggle("navActive");
        });
    }

    navSlide();
}