//table..
function mSet_table1(mE) {
  var mTbl_div = document.createElement("div");
  mTbl_div.style.width = "100%";
  mTbl_div.style.height = "100%";
  mE.appendChild(mTbl_div);

  //rndr..
  var mRndr = {
    utils: {
      txt1: (txt) => {
        var mTxt = document.createElement("div");
        mTxt.style.fontSize = "1.5vh";
        mTxt.style.width = "12vw";
        mTxt.style.textAlign = "center";
        mTxt.style.color = "rgba(34,34,34, 1)";
        mTxt.innerHTML = txt;
        return mTxt;
      },
      img1: (img) => {
        var mImg = document.createElement("img");
        mImg.src = img;
        mImg.style.width = "4vw";
        mImg.style.margin = "0 4vw";
        return mImg;
      },
      svg1: (svg) => {
        var mSvg = document.createElement("img");
        mSvg.src = svg;
        mSvg.style.width = "4vw";
        return mSvg;
      },
      a1: (link) => {
        var mLink = document.createElement("div");
        mLink.innerHTML = link;
        mLink.style.fontSize = "1.5vh";
        mLink.style.width = "12vw";
        mLink.style.textAlign = "center";
        mLink.style.color = "rgba(14,80,235, 1)";
        mLink.style.textDecoration = "underline";
        mLink.style.cursor = "pointer";
        mLink.addEventListener(onclick, () => {
          // console.log("clicked")
        });
        return mLink;
      },
    },
    l: [
      {
        0: "Images",
        key: "image",
        col: (src, mE) => {
          mE.appendChild(mRndr["utils"]["img1"](src));
        },
      },
      {
        0: "Item Code",
        key: "item_code",
        col: (data, mE) => {
          mE.appendChild(mRndr["utils"]["txt1"](data));
        },
      },
      {
        0: "Item Name",
        key: "item_name",
        col: (link, mE) => {
          mE.appendChild(mRndr["utils"]["a1"](link));
        },
      },
      {
        0: "Item Category",
        key: "item_category",
        col: (data, mE) => {
          mE.appendChild(mRndr["utils"]["txt1"](data));
        },
      },
      {
        0: "Current Stock",
        key: "current_stock",
        col: (data, mE) => {
          mE.appendChild(mRndr["utils"]["txt1"](data));
        },
      },
      {
        0: "Item Price (Rs.)",
        key: "item_price",
        col: (data, mE) => {
          mE.appendChild(mRndr["utils"]["txt1"](data));
        },
      },
      {
        0: "Selling Price (Price/Unit)",
        key: "selling_price",
        col: (data, mE) => {
          mE.appendChild(mRndr["utils"]["txt1"](data));
        },
      },
      {
        0: "MINIMUM STOCK",
        key: "minimum_stock",
        col: (data, mE) => {
          mE.appendChild(mRndr["utils"]["txt1"](data));
        },
      },
      {
        0: "EXPIRY",
        key: "expiry",
        col: (data, mE) => {
          mE.appendChild(mRndr["utils"]["txt1"](data));
        },
      },
      {
        0: "Status",
        key: "status",
        col: (data, mE) => {
          mE.appendChild(mRndr["utils"]["txt1"](data));
        },
      },
      {
        0: "",
        key: "menu",
        col: (svg, mE) => {
          mE.appendChild(mRndr["utils"]["svg1"](svg));
        },
      },
    ],
  };

  //head..
  function mHead1(mE, mhead_ARR, w) {
    var mHead = document.createElement("div");
    mHead.style.backgroundColor = "rgba(167,210,240, 1)";
    mHead.style.width = "125%";
    mHead.style.height = "5.5vh";
    mHead.style.display = "flex";
    mHead.style.alignItems = "center";
    mHead.style.justifyContent = "center";
    mHead.style.position = "sticky";
    mHead.style.paddingLeft = "2vh";
    mHead.style.top = "0px";
    // mHead.style.marginBottom = "100px";
    mE.appendChild(mHead);

    //txt 1
    function mSet_txt1(mCurr_I1) {
      var mTxt = document.createElement("div");
      mTxt.style.fontSize = "1.3vh";
      mTxt.style.color = "rgba(0,0,0, 1)";
      mTxt.innerText = mCurr_I1["0"];
      if (mCurr_I1["0"] !== "") {
        mTxt.style.width = mCurr_I1["1"] != undefined ? mCurr_I1["1"] : w;
      } else {
        mTxt.style.width = "7.5vw";
      }
      if (mCurr_I1["0"] === "Item Code") {
        mTxt.style.paddingLeft = "5px";
      }
      mTxt.style.textAlign = "center";
      mTxt.style.marginLeft = "2vw";
      mHead.appendChild(mTxt);
    }

    //data..
    //gen..
    console.log(mhead_ARR);
    for (let i1 = 0; i1 < mhead_ARR.length; i1++) {
      const mCurr_I1 = mhead_ARR[i1];
      mSet_txt1(mCurr_I1);
    }
  }
  mHead1(mTbl_div, mRndr.l, "12vw");

  //row..
  function mRow1(mRow, mData) {
    for (let i1 = 0; i1 < mRndr["l"].length; i1++) {
      const mCurr_I1 = mRndr["l"][i1];
      //find and set..
      if (mData.hasOwnProperty(mCurr_I1["key"]) == true) {
        mCurr_I1.col(mData[mCurr_I1["key"]], mRow);
      }
    }
  }
  function mAddRow1(mCurr_I1) {
    var mRow = document.createElement("div");
    mRow.style.display = "flex";
    mRow.style.alignItems = "center";
    mRow.style.justifyContent = "space-between";
    mRow.style.margin = "2vh 0 0 0";
    mRow.style.marginLeft = "4vh";
    mRow.style.width = "120vw";
    mRow.style.overflowX = "scroll";
    mRow.style.overflow = "hidden";

    mTbl_div.appendChild(mRow);
    mRow1(mRow, mCurr_I1);
  }

  //get row data and set..
  function mGetRowDataAndSet() {
    const data = [
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "PANNER",
        item_category: "WHITE",
        current_stock: "90 kg",
        item_price: "3916.83",
        selling_price: "32.00/kg",
        minimum_stock: "200 kgs",
        expiry: "15/03/2023",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "CTF001",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "12.13/KG",
        minimum_stock: "50 kgs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "AS08893 ",
        item_name: "LPG CYLINDER",
        item_category: "ASSET",
        current_stock: "7 pcs",
        item_price: "5019.74",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CARROT",
        item_category: "GREEN",
        current_stock: "20 kg",
        item_price: "1896.40",
        selling_price: "15.11/kg",
        minimum_stock: "200 kgs",
        expiry: "15/03/2023",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "GS00052 ",
        item_name: "BASMATI RIC",
        item_category: "BROWN",
        current_stock: "400 kg",
        item_price: "15228.09",
        selling_price: "32.00/kg",
        minimum_stock: "50 kgs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "BS56123 ",
        item_name: "PANNER",
        item_category: "WHITE",
        current_stock: "90 kg",
        item_price: "3916.83",
        selling_price: "12.13/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.5",
        selling_price: "18.46/kg",
        minimum_stock: "50 kgs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        item_code: "WS0005",
        item_name: "CATTLE FEED 1",
        item_category: "CATTLE FEED",
        current_stock: "12 kg",
        item_price: "712.56",
        selling_price: "18.46/kg",
        minimum_stock: "4 pcs",
        expiry: "NO EXPIRY",
        status: "ACTIVE",
        menu: "https://w7.pngwing.com/pngs/351/97/png-transparent-three-dots-arrows-and-universal-actions-icon-thumbnail.png",
      },
    ];

    //console.log(data);
    //gen..
    for (let i1 = 0; i1 < data.length; i1++) {
      const mCurr_I1 = data[i1];
      mAddRow1(mCurr_I1);
    }
  }
  mGetRowDataAndSet();
}
mSet_table1(add_any_element_for_append);
