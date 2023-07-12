
    // Get the menu icon element
    let menuIcon = document.getElementById('menu-icon');
    let menuIcon2 = document.getElementById('logo');
    
    // Get the sidebar element
    let sidebar = document.getElementById('navbar');
    
    // Get the close button inside the sidebar
    const closeButton = document.querySelector('.close-button');
    
    // Function to open the sidebar
    function openSidebar() {
        sidebar.classList.add('open');

        console.log("clcik")
    }
    
    // Function to close the sidebar
    function closeSidebar() {
        sidebar.classList.remove('open');
        sidebar.classList.add('r');
    }
    
    // Add event listener to the menu icon for click events
    menuIcon.addEventListener('click', openSidebar);
    
    // Add event listener to the close button for click events
    closeButton.addEventListener('click', closeSidebar);

    if(menuIcon2.nextElementSibling.classList.contains("open")){
        sidebar.style.display = "block"
    }
    if(!menuIcon2.nextElementSibling.classList.contains("open")){
        sidebar.style.display = "none";
        document.getElementById('sidebar').style.display = "none";
    }