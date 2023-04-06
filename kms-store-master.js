function setStoreMaster(el) {
  var mTbl_div = document.createElement("div");
  mTbl_div.style.width = "100%";
  mTbl_div.style.height = "100%";
  el.appendChild(mTbl_div);

  // Header of this screen

  function mHead1(mE) {
    var mHead = document.createElement("div");
    mHead.style.backgroundColor = "rgba(167,210,240, 1)";
    mHead.style.width = "100vw";
    mHead.style.height = "5.5vh";
    mHead.style.display = "flex";
    mHead.style.alignItems = "center";
    mHead.style.justifyContent = "space-between";
    mHead.style.position = "fixed";
    // mHead.style.padding = "0 px 0 30px";
    mHead.style.top = "0px";
    mE.appendChild(mHead);
    const text1 = "Store Master ";
    const text2 = "Icon";
    mHead.innerHTML = `<p> ${text1} </p><p> ${text2}  </p>`;
  }
  mHead1(mTbl_div);
}

setStoreMaster(element);
