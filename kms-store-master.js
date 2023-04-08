var Item_List;
var Units_List;

function setStoreMaster(el) {
  const style = document.createElement("style");
  style.innerHTML = `
  *{
    font-family: 'Poppins', sans-serif;
  }
  `;
  document.head.appendChild(style);

  var mStore_div = document.createElement("div");
  mStore_div.style.width = "100%";
  mStore_div.style.height = "100%";
  el.appendChild(mStore_div);

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
    // mHead.style.margin = "10px 0px";
    mHead.style.borderRadius = "10px";
    const text1 = "Store Master ";
    var name = document.createElement("div");
    name.innerHTML = text1;
    name.style.padding = "10px";
    name.style.color = "white";
    var icon = document.createElement("div");
    icon.innerHTML = '<span class="material-symbols-outlined">cancel</span>';
    icon.style.cursor = "pointer";
    icon.style.marginRight = "10px";
    icon.style.color = "white";
    mHead.appendChild(name);
    mHead.appendChild(icon);
    mE.appendChild(mHead);
  }
  mHead1(mStore_div);

  // body of the store
  function body(mStore_div) {
    var storeBody = document.createElement("div");
    storeBody.style.marginTop = "8vh";
    storeBody.style.padding = "0px 2vw";

    // func to add new object to array of items
    function adder(element, dataArray = []) {
      let obj = {
        id: dataArray.length,
        data: element,
      };
      dataArray.push(obj);
    }

    // create title for sections
    function title(titleName, element) {
      var title = document.createElement("div");
      title.innerHTML = titleName;
      title.style.color = "rgba(0,32,96,1)";
      title.style.fontSize = "1.2rem";
      title.style.fontWeight = "bold";
      element.appendChild(title);
    }

    // creating form
    function createLabel(labelName, element) {
      var label = document.createElement("div");
      label.innerHTML = labelName;
      label.style.fontWeight = "bold";
      label.style.fontStyle = "1rem";
      label.style.fontWeight = "bold";
      label.style.marginRight = "4vw";
      element.appendChild(label);
    }

    function createInput(placeholder, dataArray = [], element, label) {
      var formdiv = document.createElement("div");
      var input = document.createElement("input");
      input.placeholder = placeholder;
      var addButton = document.createElement("a");
      addButton.href = "#";
      input.style.border = "none";
      input.style.borderBottom = "2px solid black";
      input.style.width = "150px";

      addButton.innerHTML = "Add";
      addButton.style.fontSize = "0.8rem";
      addButton.style.margin = "7px";
      addButton.addEventListener("click", function () {
        adder(input.value, dataArray);
        console.log(element.id);
        if (label === "Item Category") {
          Item_List.innerHTML = "";
          createCheckBoxList(dataArray, Item_List);
        } else if (label === "Define Units") {
          Units_List.innerHTML = "";
          createCheckBoxList(dataArray, Units_List);
        }
        input.value = "";
      });

      formdiv.appendChild(input);
      formdiv.appendChild(addButton);
      element.appendChild(formdiv);
    }

    //form section
    function createForm(label, dataArray = [], placeholder, element) {
      var formBody = document.createElement("div");
      formBody.style.display = "flex";
      formBody.style.justifyContent = "space-between";
      formBody.style.alignItems = "center";
      formBody.style.margin = "10px 0";
      formBody.style.width = "400px";
      createLabel(label, formBody);
      createInput(placeholder, dataArray, formBody, label);
      element.appendChild(formBody);
    }

    // creating form section
    function createCheckBox(id, eleName, element, dataArray = []) {
      var checkboxunit = document.createElement("div");
      checkboxunit.style.display = "flex";
      checkboxunit.style.flexDirection = "row";
      checkboxunit.style.justifyContent = "space-between";
      checkboxunit.style.alignItems = "center";
      checkboxunit.style.width = "12vw";
      checkboxunit.style.marginRight = "5vw";

      var checkboxInput = document.createElement("div");
      checkboxInput.style.display = "flex";
      checkboxInput.style.flexDirection = "row";
      checkboxInput.style.justifyContent = "center";
      checkboxInput.style.alignItems = "center";

      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = id;
      checkbox.name = eleName;
      checkbox.value = eleName;

      var label = document.createElement("label");
      label.htmlFor = id;
      label.innerHTML = eleName;
      label.style.fontWeight = "bold";

      checkboxInput.appendChild(checkbox);
      checkboxInput.appendChild(label);
      checkboxunit.appendChild(checkboxInput);

      var deleteButton = document.createElement("div");
      deleteButton.innerHTML =
        '<span class="material-symbols-outlined">delete</span>';
      deleteButton.style.color = "rgb(0,32,96)";
      deleteButton.style.cursor = "pointer";
      deleteButton.style.height = "19px";
      deleteButton.addEventListener("click", function () {
        dataArray.splice(id, 1);
        element.innerHTML = "";
        createCheckBoxList(dataArray, element);
      });

      checkboxunit.appendChild(deleteButton);
      element.appendChild(checkboxunit);
    }

    function createCheckBoxList(dataArray, element) {
      for (let i = 0; i < dataArray.length; i++) {
        createCheckBox(dataArray[i].id, dataArray[i].data, element, dataArray);
      }
    }

    // cost center section
    function mCostCenter(storeBody) {
      var costCenter = document.createElement("div");
      costCenter.style.height = "30vh";
      title("Cost Center Section", costCenter);
      storeBody.appendChild(costCenter);
    }
    mCostCenter(storeBody);

    // add/edit parameters section
    function mParameters(storeBody) {
      var parameters = document.createElement("div");
      title("Add / Edit Parameters", parameters);

      //Item category section
      let categoryArray = [
        {
          id: 0,
          data: "White",
        },
        {
          id: 1,
          data: "Brown",
        },
        {
          id: 2,
          data: "Green",
        },
      ];

      // define units section
      let defineUnitsArray = [
        {
          id: 0,
          data: "Kgs",
        },
        {
          id: 1,
          data: "Gms",
        },
        {
          id: 2,
          data: "Litres",
        },
      ];

      let line = document.createElement("div");
      line.style.width = "100%";
      line.style.backgroundColor = "rgb(215, 218, 222)";
      line.style.height = "1px";
      let line2 = document.createElement("div");
      line2.style.width = "100%";
      line2.style.backgroundColor = "rgb(215, 218, 222)";
      line2.style.height = "1px";

      var item_category = document.createElement("div");
      item_category.style.margin = "4vh 0";
      item_category.style.marginTop = "0vh";
      item_category.style.display = "flex";
      item_category.style.flexDirection = "column";
      item_category.id = "item_category";
      createForm(
        "Item Category",
        categoryArray,
        "Type a new category",
        item_category
      );

      var itemList = document.createElement("div");
      itemList.style.display = "flex";
      itemList.style.flexDirection = "row";
      itemList.style.rowGap = "3vw";
      itemList.style.columnGap = "6vw";
      itemList.style.flexWrap = "wrap";
      Item_List = itemList;
      createCheckBoxList(categoryArray, Item_List);
      item_category.appendChild(itemList);
      parameters.appendChild(item_category);
      parameters.appendChild(line);

      var define_units = document.createElement("div");
      define_units.style.margin = "4vh 0";
      define_units.style.marginTop = "2vh";
      define_units.style.display = "flex";
      define_units.style.flexDirection = "column";
      define_units.id = "define_units";
      createForm(
        "Define Units",
        defineUnitsArray,
        "Type a new unit",
        define_units
      );

      var unitsList = document.createElement("div");
      unitsList.style.display = "flex";
      unitsList.style.flexDirection = "row";
      unitsList.style.rowGap = "3vw";
      unitsList.style.columnGap = "6vw";
      unitsList.style.flexWrap = "wrap";
      Units_List = unitsList;
      createCheckBoxList(defineUnitsArray, Units_List);
      define_units.appendChild(unitsList);
      parameters.appendChild(define_units);
      parameters.appendChild(line2);

      storeBody.appendChild(parameters);
    }
    mParameters(storeBody);

    mStore_div.appendChild(storeBody);
    // inverntory parameter section
    function mInventoryParam(el) {
      var inverntoryParaBox = document.createElement("div");
      inverntoryParaBox.style.borderBottom = "1px solid rgb(215, 218, 222)";
      inverntoryParaBox.style.paddingBottom = "20px";
      inverntoryParaBox.style.display = " flex";
      inverntoryParaBox.style.flexWrap = " wrap";
      inverntoryParaBox.style.flexDirection = " column";
      inverntoryParaBox.style.gap = " 1vh";
      var inverntoryHead = document.createElement("h5");
      inverntoryHead.textContent = "Inventory Parameters";
      inverntoryHead.style.fontWeight = "bold";
      inverntoryHead.style.fontSize = "1rem";
      var inverntoryParamCheckboxDiv = document.createElement("div");
      inverntoryParamCheckboxDiv.style.display = "flex";
      inverntoryParamCheckboxDiv.style.alignItems = "center";
      inverntoryParamCheckboxDiv.style.flexWrap = "wrap";
      inverntoryParamCheckboxDiv.style.paddingRight = "10vw";

      inverntoryParamCheckboxDiv.style.gap = " 3vw";
      inverntoryParamCheckboxDiv.style.alignItem = "center";

      el.appendChild(inverntoryParaBox);
      inverntoryParaBox.appendChild(inverntoryHead);
      inverntoryParaBox.appendChild(inverntoryParamCheckboxDiv);
      // inverntory parameter data
      let inverntoryParameterData = [
        {
          id: 0,
          data: "Image",
        },
        {
          id: 1,
          data: "Item Code",
        },
        {
          id: 2,
          data: "Item Name",
        },
        {
          id: 3,
          data: "Item Catrgory",
        },
        { id: 4, data: "Current Stock" },
        { id: 5, data: "Item Price" },
        { id: 6, data: "Selling Price" },
        { id: 7, data: "Minimum Stock" },
        { id: 8, data: "Expiry" },
        { id: 9, data: "Status" },
      ];
      inverntoryParameterData.forEach((item) => {
        // Create a checkbox input element
        const checkboxDiv = document.createElement("div");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = item.id;
        checkbox.checked = true;
        // Create a label element for the checkbox
        const label = document.createElement("label");
        label.innerHTML = item.data;
        label.style.fontSize = "1rem";
        label.style.fontWeight = "bold";
        // Add the label and checkbox to the parent element
        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);
        inverntoryParamCheckboxDiv.appendChild(checkboxDiv);
      });
    }
    mInventoryParam(storeBody);
    function mInventoryLedgerParameter(el) {
      var inverntoryLedgerBox = document.createElement("div");
      inverntoryLedgerBox.style.display = " flex";
      inverntoryLedgerBox.style.borderBottom = "1px solid rgb(215, 218, 222)";
      inverntoryLedgerBox.style.paddingBottom = "20px";
      inverntoryLedgerBox.style.flexDirection = " column";
      inverntoryLedgerBox.style.justifyContent = " center";
      // inverntoryLedgerBox.style.gap = " 2vh";
      var inverntoryLedgerHead = document.createElement("h5");
      inverntoryLedgerHead.textContent = "Inventory Ledger Parameter";
      inverntoryLedgerHead.style.fontWeight = "bold";
      inverntoryLedgerHead.style.fontSize = "1rem";

      var inverntoryLedgerCheckboxDiv = document.createElement("div");
      inverntoryLedgerCheckboxDiv.style.display = "flex";
      inverntoryLedgerCheckboxDiv.style.flexWrap = "wrap";
      inverntoryLedgerCheckboxDiv.style.alignItems = "center";
      inverntoryLedgerCheckboxDiv.style.paddingRight = "10vw";

      inverntoryLedgerCheckboxDiv.style.gap = " 3vw";

      inverntoryLedgerCheckboxDiv.style.alignItem = "center";

      el.appendChild(inverntoryLedgerBox);
      inverntoryLedgerBox.appendChild(inverntoryLedgerHead);
      inverntoryLedgerBox.appendChild(inverntoryLedgerCheckboxDiv);
      let inverntoryLedgerData = [
        {
          id: 0,
          data: "Transaction Date",
        },
        {
          id: 1,
          data: "Reference",
        },
        {
          id: 2,
          data: "Type",
        },
        {
          id: 3,
          data: "Requested by",
        },
        { id: 4, data: "Requested from" },
        { id: 5, data: "Transaction Type" },
        { id: 6, data: " Quantity" },
        { id: 7, data: "Price/Unit" },
        { id: 8, data: "Total Price" },
        { id: 9, data: "Stock Balance" },
        { id: 10, data: "Settlements" },
        { id: 11, data: "Instruments" },
        { id: 12, data: "Instrument Number" },
      ];
      inverntoryLedgerData.forEach((item) => {
        // Create a checkbox input element
        const checkboxDiv = document.createElement("div");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = item.id;
        checkbox.checked = true;
        // Create a label element for the checkbox
        const label = document.createElement("label");
        label.style.fontSize = "1rem";
        label.style.fontWeight = "bold";
        label.innerHTML = item.data;

        // Add the label and checkbox to the parent element
        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);
        inverntoryLedgerCheckboxDiv.appendChild(checkboxDiv);
      });
    }
    mInventoryLedgerParameter(storeBody);
    function mUploadDownload(el) {
      var uploadDownloadSection = document.createElement("div");
      uploadDownloadSection.style.display = "flex";
      uploadDownloadSection.style.flexDirection = "column";
      uploadDownloadSection.style.marginTop = "30px";
      title("Uploads & Download", uploadDownloadSection);
      uploadDownloadSection.style.height = " 25vh";
      uploadDownloadSection.style.display = " flex";
      uploadDownloadSection.style.flexDirection = "column";
      el.appendChild(uploadDownloadSection);
    }
    mUploadDownload(storeBody);

    function addManagerVender(el) {
      var venderSection = document.createElement("div");
      title("Add / Manage Vendors", venderSection);
      venderSection.style.height = " 25vh";
      venderSection.style.display = " flex";
      venderSection.style.flexDirection = "column";
      el.appendChild(venderSection);
    }
    addManagerVender(storeBody);

    function manageReport(el) {
      var manageReportSection = document.createElement("div");
      title("Manage report", manageReportSection);
      manageReportSection.style.height = " 25vh";
      manageReportSection.style.display = " flex";
      manageReportSection.style.flexDirection = "column";
      el.appendChild(manageReportSection);
    }
    manageReport(storeBody);

    function manageAccess(el) {
      var manageAccessSection = document.createElement("div");
      title("Manage Access", manageAccessSection);
      manageAccessSection.style.height = "25vh";
      manageAccessSection.style.display = " flex";
      manageAccessSection.style.flexDirection = "column";
      el.appendChild(manageAccessSection);
    }
    manageAccess(storeBody);
  }

  body(mStore_div);
}

// function mUploadDownload(el) {
//   var uploadDownloadSection = document.createElement("div");
//   uploadDownloadSection.style.display = "flex";
//   uploadDownloadSection.style.flexDirection = "column";
//   title("Uploads & Download", uploadDownloadSection);
//   uploadDownloadSection.style.height = " 25vh";
//   uploadDownloadSection.style.display = " flex";
//   uploadDownloadSection.style.flexDirection = "column";
//   var uploadDiv = document.createElement("div");
//   uploadDiv.style.display = "flex";
//   uploadDiv.style.gap = "4vw";
//   uploadDiv.style.alignItems = "center";
//   var upload = document.createElement("h5");
//   upload.textContent = "Upload";
//   upload.style.fontWeight = "bold";
//   upload.style.fontSize = "1rem";
//   uploadDownloadSection.appendChild(uploadDiv);
//   var uploadInputAndButtonDiv = document.createElement("div");
//   uploadInputAndButtonDiv.style.display = " flex";
//   uploadInputAndButtonDiv.style.gap = "10px";
//   uploadInputAndButtonDiv.style.alignItems = "center";
//   uploadDiv.appendChild(upload);
//   uploadDiv.appendChild(uploadInputAndButtonDiv);
//   const uploadInput = document.createElement("input");
//   uploadInput.placeholder = "Choose upload Category";
//   const uploadButton = document.createElement("button");
//   uploadButton.textContent = "Upload";
//   uploadInputAndButtonDiv.appendChild(uploadInput);
//   uploadInputAndButtonDiv.appendChild(uploadButton);

//   var downloadDiv = document.createElement("div");
//   downloadDiv.style.display = "flex";
//   downloadDiv.style.gap = "3vw";
//   downloadDiv.style.alignItems = "center";
//   uploadDownloadSection.appendChild(downloadDiv);
//   var download = document.createElement("h5");
//   download.textContent = "Download";
//   download.style.fontWeight = "bold";
//   download.style.fontSize = "1rem";
//   var downloadInputAndButtonDiv = document.createElement("div");
//   downloadInputAndButtonDiv.style.display = " flex";
//   downloadInputAndButtonDiv.style.gap = "10px";
//   downloadInputAndButtonDiv.style.alignItems = "center";
//   downloadDiv.appendChild(download);
//   downloadDiv.appendChild(downloadInputAndButtonDiv);
//   const downloadInput = document.createElement("input");
//   downloadInput.placeholder = "Choose Dataset";
//   const downloadButton = document.createElement("button");
//   downloadButton.textContent = "Download";
//   downloadInputAndButtonDiv.appendChild(downloadInput);
//   downloadInputAndButtonDiv.appendChild(downloadButton);
//   el.appendChild(uploadDownloadSection);
// }
