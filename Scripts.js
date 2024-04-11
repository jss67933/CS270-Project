/* Functions to open and close side naviation bar */
function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("sidebar").style.right = "0";
  }
  
  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("sidebar").style.right= "-250px";
  }