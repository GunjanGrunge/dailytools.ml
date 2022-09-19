const mediaQuery = window.matchMedia('(max-width: 400px)')
const navbar = document.querySelector(".items")
const island = document.querySelector(".isl")
const navigation = document.querySelector(".nav")
const hero = document.querySelector(".Hero p")


    if (mediaQuery.matches) {
        navbar.style.display = "none";
        island.style.width = "164px";
        navigation.style.fontSize = "x-small";
        navigation.style.flexDirection = "column";
        hero.style.fontSize = "large";
         }
       
     




