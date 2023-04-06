var Item_List
var Units_List

function setStoreMaster(el) {
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
    mHead.style.margin="10px 0px"
    mHead.style.borderRadius = "10px"
    const text1 = "Store Master ";
    var name = document.createElement("div");
    name.innerHTML = text1
    name.style.padding = "10px"
    name.style.color="white"
    var icon = document.createElement("div");
    icon.innerHTML = '<span class="material-symbols-outlined">cancel</span>'
    icon.style.cursor = "pointer"
    icon.style.marginRight="10px"
    icon.style.color="white"
    mHead.appendChild(name)
    mHead.appendChild(icon)
    mE.appendChild(mHead);
  }
  mHead1(mStore_div);

  // body of the store
  function body(mStore_div){
    var storeBody = document.createElement('div')
    storeBody.style.marginTop="8vh"
    storeBody.style.padding = "0px 2vw"

    // func to add new object to array of items
    function adder(element, dataArray=[]){
      let obj = {
        id: dataArray.length,
        data: element
      }
      dataArray.push(obj)
    }

    // create title for sections
    function title(titleName, element){
      var title = document.createElement('div')
      title.innerHTML = titleName
      title.style.color = "rgba(0,32,96,1)";
      title.style.fontSize = '1.2rem'
      title.style.fontWeight = "bold"
      element.appendChild(title)
    }

    // creating form
    function createLabel(labelName, element){
      var label = document.createElement('div')
      label.innerHTML = labelName
      label.style.fontWeight = "bold"
      label.style.fontStyle = '1rem'
      label.style.fontWeight = 'bold'
      label.style.marginRight = "4vw"
      element.appendChild(label)
    }

    function createInput(placeholder, dataArray=[], element){
      var formdiv = document.createElement("div")
      var input = document.createElement("input")
      input.placeholder = placeholder
      var addButton = document.createElement("a")
      addButton.href="#"
      input.style.border="none"
      input.style.borderBottom = "2px solid black"
      input.style.width = "16vw"

      addButton.innerHTML = "Add"
      addButton.style.fontSize = "0.8rem"
      addButton.style.margin = "7px"
      addButton.addEventListener("click",function(){
        adder(input.value,dataArray)
        console.log(element.id);
        Item_List.innerHTML = ""
        createCheckBoxList(dataArray,Item_List)
        input.value=""
      })

      formdiv.appendChild(input)
      formdiv.appendChild(addButton)
      element.appendChild(formdiv)
    }

    //form section
    function createForm(label, dataArray=[], placeholder, element){
      var formBody = document.createElement('div')
      formBody.style.display = 'flex'
      formBody.style.justifyContent = 'space-between'
      formBody.style.alignItems = 'center'
      formBody.style.margin = "10px 0"
      formBody.style.width = "35vw"
      createLabel(label,formBody)
      createInput(placeholder, dataArray, formBody, element)
      element.appendChild(formBody)
    }

    // creating form section
    function createCheckBox(id, eleName, element, dataArray = []){
      var checkboxunit = document.createElement('div')
      checkboxunit.style.display = "flex"
      checkboxunit.style.flexDirection = "row"
      checkboxunit.style.justifyContent = "space-between"
      checkboxunit.style.alignItems = "center"
      checkboxunit.style.width = "12vw"
      checkboxunit.style.marginRight = "5vw"

      var checkboxInput = document.createElement('div')
      checkboxInput.style.display = "flex"
      checkboxInput.style.flexDirection = "row"
      checkboxInput.style.justifyContent = "center"
      checkboxInput.style.alignItems = "center"

      var checkbox = document.createElement('input')
      checkbox.type = "checkbox"
      checkbox.id = id
      checkbox.name = eleName
      checkbox.value = eleName

      var label = document.createElement("label")
      label.htmlFor = id
      label.innerHTML = eleName

      checkboxInput.appendChild(checkbox)
      checkboxInput.appendChild(label)
      checkboxunit.appendChild(checkboxInput)

      var deleteButton = document.createElement('div')
      deleteButton.innerHTML = '<span class="material-symbols-outlined">delete</span>'
      deleteButton.style.color = "rgb(0,32,96)"
      deleteButton.style.cursor = "pointer"
      deleteButton.style.height = "19px"
      deleteButton.addEventListener("click",function(){
        dataArray.splice(id,1);
        element.innerHTML = ""
        createCheckBoxList(dataArray,element)
      })

      checkboxunit.appendChild(deleteButton)
      element.appendChild(checkboxunit)
    }

    function createCheckBoxList(dataArray, element){
      for(let i=0; i<dataArray.length;i++){
        createCheckBox(dataArray[i].id, dataArray[i].data, element, dataArray)
      }
    }

    // cost center section
    function mCostCenter(storeBody){
      var costCenter = document.createElement('div')
      costCenter.style.height = "20vh"
      title("Cost Center Section", costCenter)
      storeBody.appendChild(costCenter)
    }
    mCostCenter(storeBody)

    // add/edit parameters section
    function mParameters(storeBody){
      var parameters = document.createElement('div')
      title("Add / Edit Parameters", parameters)

      //Item category section
      let categoryArray = [
        {
          id: 0,
          data: 'White'
        },
        {
          id: 1,
          data: 'Brown'
        },
        {
          id: 2,
          data: 'Green'
        },
      ]

      // define units section
      let defineUnitsArray = [
        {
          id: 0,
          data: 'Kgs'
        },
        {
          id: 1,
          data: 'Gms'
        },
        {
          id: 2,
          data: 'Litres'
        },
      ]

      let line = document.createElement('div')
      line.style.width="100%"
      line.style.backgroundColor = "rgb(215, 218, 222)"
      line.style.height = "1px"
      let line2 = document.createElement('div')
      line2.style.width="100%"
      line2.style.backgroundColor = "rgb(215, 218, 222)"
      line2.style.height = "1px"

      var item_category = document.createElement('div')
      item_category.style.margin = "4vh 0"
      item_category.style.display = "flex"
      item_category.style.flexDirection="column"
      item_category.id = "item_category"
      createForm("Item Category",categoryArray,"Type a new category",item_category)

      var itemList = document.createElement("div")
      itemList.style.display = "flex"
      itemList.style.flexDirection = "row"
      Item_List =  itemList
      createCheckBoxList(categoryArray,Item_List)
      // itemList.style.width = "50vw"
      // itemList.style.overflowWrap = "word-break"
      item_category.appendChild(itemList)
      parameters.appendChild(item_category)
      parameters.appendChild(line)

      var define_units = document.createElement('div')
      define_units.style.margin = "4vh 0"
      define_units.style.display = "flex"
      define_units.style.flexDirection = "column"
      define_units.id = "define_units"
      createForm("Define Units",defineUnitsArray,"Type a new unit",define_units)

      var unitsList = document.createElement("div")
      unitsList.style.display = "flex"
      unitsList.style.flexDirection = "row"
      Units_List = unitsList
      createCheckBoxList(defineUnitsArray,Units_List)
      define_units.appendChild(unitsList)
      parameters.appendChild(define_units)
      parameters.appendChild(line2)

      storeBody.appendChild(parameters)
    }
    mParameters(storeBody)

    mStore_div.appendChild(storeBody)
  }

  body(mStore_div)

  // function mParameters()

}

setStoreMaster(element);
