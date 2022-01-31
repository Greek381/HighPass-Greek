function openTabService(evt, services) {
  var i, tabcontentServices, tablinksServices;
  tabcontentServices = document.getElementsByClassName("tabcontent-services");
  for (i = 0; i < tabcontentServices.length; i++) {
      tabcontentServices[i].style.display = "none";
  }
  tablinksServices = document.getElementsByClassName("tablinks-services");
  for (i = 0; i < tablinksServices.length; i++) {
      tablinksServices[i].className = tablinksServices[i].className.replace(" active", "");
  }
  document.getElementById(services).style.display = "flex";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpenServices").click();
