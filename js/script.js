/**
 * Name: David Montañez
 * Project: Personal Website
 * Created: June 28, 2021
 * Updated: July 4, 2021   
 */

document.addEventListener("DOMContentLoaded", load);

/**
 * 
 */
function load()
{
    /* Sets the webpage back to the top */
    // backToTop();

    /* Sets nav sticky when scrolling */
    stickyNav(); 

    /* Sets menu bar animation */
    navSlide(); 
}

/**
 * 
 */
function backToTop()
{
    const backToTopButton = document.querySelector("#backToTop");

    window.addEventListener("scroll", () =>
    {
        if(window.pageYOffset > 300) /* or window.scrollY => does not work for all browsers */
        {
            backToTopButton.style.display = "block";
        }
        else
        {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () =>
    {
        window.scrollTo(0, 0);
    });
}

/**
 * Sticks navigation to top of webpage when scrolling down.
 */
function stickyNav()
{
    window.addEventListener("scroll", () =>
    {
        let header = document.querySelector("header");

        header.classList.toggle("scrollActive", window.scrollY > 0);
    });
}

/**
 * Animates the Menu Bar on click.
 */
function navSlide()
{
    const menuBtn = document.querySelector(".menuBtn");
    const menuItem = document.querySelectorAll(".navItem");
    const menuItems = document.querySelector("#navList");    

    menuBtn.addEventListener("click", () =>
    {
        /**
         * ! ARRAY OF CLASS TAGS AND RANDOMIZE THE TOGGLE OF THAT SPECIFIC IMAGE (2, 3, 4...)
         */
        var background =
        [
            "bg2",
            "bg3",
            "bg4",
            "bg5",
            "bg6",
        ];
 
        var randomClass = Math.floor(Math.random() * background.length);
 
        if(!menuItems.classList.contains("open"))
        {
            menuItems.classList.toggle(`${background[randomClass]}`);
        }

        toggle();
    });

    // close menu when an item is clicked
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

    /**
     * ! ENDS IN A FAILURE
     * Randomize backround-image of the menu with 768px max-width.
     */
    function background()
    {
        var images =
        [
            './menuJapanBG.gif',
            './menuJapanBG2.gif',
            './menuJapanBG3.gif',
            './menuSpaceBG4.gif',
            './menuSpaceBG5.gif',
            './menuOPMerryBG6.gif',
        ];

        var randomImage = Math.floor(Math.random() * images.length);
        document.getElementById("navList").style.backgroundImage = 'url(' + images[randomImage] + ')';
    }

    /**
     * Adds the "open" css tag to the item creating
     * the animation effect.
     */
    function toggle()
    {
        menuBtn.classList.toggle("open");
        menuItems.classList.toggle("open");
    }
}

/**
 * ! COULDN'T FIND A WAY TO RANDOMIZE BACKGROUND WITHOUT SHOWING IN THE DESKTOP VIEW
 * if you change the size past 768px width, the image is displayed in the background
 * of the list items in desktop view. Since I only use 1 list item without using 2,
 * I cant randomize background without the fact that you can change the size on desktop.
 */
// var mediaQuery = window.matchMedia("(max-width: 768px)");
// if(mediaQuery.matches)
// {
//     menuBtn.addEventListener("click", () =>
//     {
//         background();
//         toggle();

//         menuItem.forEach(item =>
//             {
//                 item.addEventListener("click", () =>
//                 {
//                     if(menuBtn.classList.contains("open"))
//                     {
//                         toggle();
//                     }
//                 });  
//             });
//     });
// }
// else
// {
//     document.getElementById("navList").style.backgroundImage = "none";
// }
