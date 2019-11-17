duplicateMenu = () => {
    //get all of the anchor elements from the top menu
    topListA = document.querySelectorAll('ul#primaryNavigation li a')
    
    //create the new list items for the bottom of the page
    let newList = document.createElement('ul')
    //create variable for the bottom nav 
    let bottomNav = document.querySelector('#smallNavArea')

    //Get the href and text content of each menu item
    topListA.forEach(menuItem => {
        let newLi = document.createElement('li')
        let newLink = document.createElement('a')

        newLink.setAttribute('href', menuItem.getAttribute('href'))
        newLink.innerHTML = menuItem.textContent
        

        bottomNav.appendChild(newList)
        newList.appendChild(newLi)
        newLi.appendChild(newLink)
    });
  
}

duplicateMenu();