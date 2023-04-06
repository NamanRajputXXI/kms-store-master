function setStoreMaster(el) {
  var mTbl_div = document.createElement("div");
  mTbl_div.style.width = "100%";
  mTbl_div.style.height = "100%";
  el.appendChild(mTbl_div);

  // Header of this screen

  function mHead1(mE) {
    var mHead = document.createElement("div");
    mHead.style.backgroundColor = "rgba(0,32,96, 1)";
    mHead.style.width = "100%";
    mHead.style.height = "5.5vh";
    mHead.style.display = "flex";
    mHead.style.alignItems = "center";
    mHead.style.justifyContent = "space-between";
    mHead.style.position = "fixed";
    mHead.style.top = "0px";
    mHead.style.margin="10px 0px"
    mHead.style.borderRadius = "10px"
    // mHead.style.padding = "0 10px"
    const text1 = "Store Master ";
    const text2 = "X";
    var name = document.createElement("div");
    name.innerHTML = text1
    name.style.padding = "10px"
    name.style.color="white"
    var icon = document.createElement("div");
    icon.innerHTML = 'X'
    icon.style.marginRight="10px"
    icon.style.color="white"
    mHead.appendChild(name)
    mHead.appendChild(icon)
    mE.appendChild(mHead);
  }
  mHead1(mTbl_div);

  
}

setStoreMaster(element);
