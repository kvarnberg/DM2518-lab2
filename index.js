document.addEventListener("init", function (event) {
  var page = event.target;

  if (page.id === "home") {
    page.querySelector("#goabout").onclick = function () {
      document
        .querySelector("#myNavigator")
        .pushPage("about.html", { data: { title: "About" } });
    };
    page.querySelector("#gog1").onclick = function () {
      document
        .querySelector("#myNavigator")
        .pushPage("g1.html", { data: { title: "Lill-lördag" } });
    };
    page.querySelector("#gog2").onclick = function () {
      document
        .querySelector("#myNavigator")
        .pushPage("g2.html", { data: { title: "The weekend guide" } });
    };
    page.querySelector("#gog3").onclick = function () {
      document
        .querySelector("#myNavigator")
        .pushPage("g3.html", { data: { title: "The Holy Guide" } });
    };
  } else if (page.id === "about") {
    page.querySelector("ons-toolbar .center").innerHTML = page.data.title;
  } else if (page.id === "g1") {
    page.querySelector("ons-toolbar .center").innerHTML = page.data.title;
  } else if (page.id === "g2") {
    page.querySelector("ons-toolbar .center").innerHTML = page.data.title;
  } else if (page.id === "g3") {
    page.querySelector("ons-toolbar .center").innerHTML = page.data.title;
  }
});
