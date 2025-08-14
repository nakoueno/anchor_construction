if (document.querySelector(".header__inner")) { // documentに#header__innerがある時
  const innerDiv = new XMLHttpRequest();
  innerDiv.open("GET", "include/header__inner.html", true);
  innerDiv.onreadystatechange = function () {
    if (innerDiv.readyState === 4 && innerDiv.status === 200) {
      const divHTML = innerDiv.responseText;
      const div = document.querySelector(".header__inner");
      div.insertAdjacentHTML("afterbegin", divHTML);
    }
  };
innerDiv.send();
}
if (document.querySelector(".footer")) { // documentに#footerがある時
  const includeFooter = new XMLHttpRequest();
  includeFooter.open("GET", "include/footer.html", true);
  includeFooter.onreadystatechange = function () {
    if (includeFooter.readyState === 4 && includeFooter.status === 200) {
      const footerHTML = includeFooter.responseText;
      const footer = document.querySelector(".footer");
      footer.insertAdjacentHTML("afterbegin", footerHTML);
    }
  };
  includeFooter.send();
}