let data = [
  { id: "", stateName: "Alabama" },
  { id: "", stateName: "Alaska" },
  { id: "", stateName: "American Samoa" },
  { id: "", stateName: "Arizona" },
  { id: "", stateName: "Arkansas" },
  { id: "", stateName: "California" },
  { id: "", stateName: "Colorado" },
  { id: "", stateName: "Connecticut" },
  { id: "", stateName: "Delaware" },
  { id: "", stateName: "District Of Columbia" },
  { id: "", stateName: "Federated States Of Micronesia" },
  { id: "", stateName: "Florida" },
  { id: "", stateName: "Georgia" },
  { id: "", stateName: "Hawaii" },
  { id: "", stateName: "Idaho" },
  { id: "", stateName: "Illinois" },
  { id: "", stateName: "Indiana" },
  { id: "", stateName: "Iowa" },
  { id: "", stateName: "Kansas" },
  { id: "", stateName: "Kentucky" },
  { id: "", stateName: "Louisiana" },
  { id: "", stateName: "Maine" },
  { id: "", stateName: "Marshall Island" },
  { id: "", stateName: "Maryland" },
  { id: "", stateName: "Massachusetts" },
  { id: "", stateName: "Michigan" },
  { id: "", stateName: "Minnesota" },
  { id: "", stateName: "Mississippi" },
  { id: "", stateName: "Missouri" },
  { id: "", stateName: "Montana" },
  { id: "", stateName: "Nebraska" },
  { id: "", stateName: "New Hampshire" },
  { id: "", stateName: "New Jersey" },
  { id: "", stateName: "New Mexico" },
  { id: "", stateName: "New York" },
  { id: "", stateName: "North Carolina" },
  { id: "", stateName: "North Dakota" },
  { id: "", stateName: "Montana" },
  { id: "", stateName: "Ohio" },
  { id: "", stateName: "Oklahoma" },
  { id: "", stateName: "Oregon" },
  { id: "", stateName: "Palau" },
  { id: "", stateName: "Pennsylvania" },
  { id: "", stateName: "Puerto Rico" },
  { id: "", stateName: "Rhode Island" },
  { id: "", stateName: "South Carolina" },
  { id: "", stateName: "South Dakota" },
  { id: "", stateName: "Tennessee" },
  { id: "", stateName: "Texas" },
  { id: "", stateName: "Utah" },
  { id: "", stateName: "Vermont" },
  { id: "", stateName: "Virgin Island" },
  { id: "", stateName: "Virginia" },
  { id: "", stateName: "Washington" },
  { id: "", stateName: "West Virginia" },
  { id: "", stateName: "Wisconsin" },
  { id: "", stateName: "Wyoming" },
];
//
function generateAutoId() {
  return Math.floor(Math.random() * 99 + 1);
}
//
data.forEach((item) => {
  item.id = generateAutoId();
});

console.log(data);

let num = 0;
function accordionBtn() {
  const section = document.getElementById("showAndHideSection");

  if (num === 0) {
    section.style.display = "none";
    num = 1;
  } else if (num === 1) {
    section.style.display = "block";
    num = 0;
  }
}
let arr = [];
function checkBoxBtn(id, event) {
  if (event) {
    let nesd = data.find((item) => item.id == id);
    arr.push(nesd);
  } else if (event == false) {
    arr.pop();
  }
  console.log(arr);
  console.log(arr.length);
  let changeValue = document.getElementById("selectedValue");
  changeValue.innerText = arr.length > 0 ? arr.length : "Any";
}
///
function showStateData(obj) {
  let showElement = "";
  obj.forEach((item) => {
    showElement += `<div><span class="checkBox"><input type="checkbox" onclick="checkBoxBtn('${item.id}', this.checked)"/></span>${item.stateName}</div>`;
  });
  document.getElementById("searchSection").innerHTML = showElement;
}
showStateData(data);
/////
function inputSearchField(e) {
  const filterItem = data.filter((item) =>
    item.stateName.toLowerCase().startsWith(e.toLowerCase())
  );
  if (filterItem.length > 0) {
    showStateData(filterItem);
  } else {
    console.log("No matching states found.");
  }
}
