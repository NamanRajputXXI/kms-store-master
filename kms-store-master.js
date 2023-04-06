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
    mHead.style.margin = "10px 0px";
    mHead.style.borderRadius = "10px";
    // mHead.style.padding = "0 10px"
    const text1 = "Store Master ";
    const text2 = "X";
    var name = document.createElement("div");
    name.innerHTML = text1;
    name.style.padding = "10px";
    name.style.color = "white";
    var icon = document.createElement("div");
    icon.innerHTML = text2;
    icon.style.marginRight = "10px";
    icon.style.color = "white";
    mHead.appendChild(name);
    mHead.appendChild(icon);
    mE.appendChild(mHead);
  }
  mHead1(mTbl_div);
}

setStoreMaster(element);

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
    mHead.style.margin = "10px 0px";
    mHead.style.borderRadius = "10px";
    // mHead.style.padding = "0 10px"
    const text1 = "Store Master ";
    const text2 = "X";
    var name = document.createElement("div");
    name.innerHTML = text1;
    name.style.padding = "10px";
    name.style.color = "white";
    var icon = document.createElement("div");
    icon.innerHTML = text2;
    icon.style.marginRight = "10px";
    icon.style.color = "white";
    mHead.appendChild(name);
    mHead.appendChild(icon);
    mE.appendChild(mHead);
  }
  mHead1(mTbl_div);

  // for table below to header

  function table_container(me) {
    var tableHead = document.createElement("h5");
    tableHead.textContent = "Create Cost Center";
    tableHead.style.fontSize = "20px";
    var tableBox = document.createElement("div");
    tableBox.style.height = "6vh";
    tableBox.style.backgroundColor = "gray";
    me.appendChild(tableHead);
    tableHead.style.marginTop = "50px";
    me.appendChild(tableBox);
  }
  table_container(mTbl_div);

  function define_units(me) {
    var defineUnits = document.createElement("div");
    defineUnits.style.display = "flex";
    var defineUnit_heading = document.createElement("h5");
    defineUnit_heading.textContent = "Define Units";
    defineUnits.style.gap = "40px";
    var unitInput = document.createElement("input");
    unitInput.placeholder = "type a new unit";
    var addUnitButton = document.createElement("button");
    addUnitButton.textContent = "Add";
    var inputButtonBox = document.createElement("div");
    inputButtonBox.style.display = "flex";
    inputButtonBox.appendChild(unitInput);
    inputButtonBox.appendChild(addUnitButton);
    defineUnits.appendChild(defineUnit_heading);
    defineUnits.append(inputButtonBox);
    me.appendChild(defineUnits);
  }
  define_units(mTbl_div);
}

setStoreMaster(element);
