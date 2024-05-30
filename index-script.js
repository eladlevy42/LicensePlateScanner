let urlPlate =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";
let urlCarData = `https://data.gov.il/api/3/action/datastore_search?resource_id=142afde2-6228-49f9-8a29-9b6c3a0cbe40&`;
let plate = "";
let car;
let menuf;
let ownership;
let year;
let model;
let gimur;
let delek_nm;
let date;
let dateOnRoad;
let zihum;
let degem_nm;
let degem_cd;
let volume;
let hp;
let weight;
let karit;
let hanaa;
let merkav;
let dataElement = document.getElementById("data");
async function searchCarPlate() {
  plate = document.getElementById("plateInput").value;
  if (plate.length == 8 || plate.length == 7) {
    let currentUrl = `${urlPlate}${plate}`;

    try {
      let response = await axios.get(currentUrl);
      let fullCar = response.data.result.records[0];
      degem_nm = fullCar.degem_nm;
      degem_cd = fullCar.degem_cd;
      ownership = fullCar.baalut;
      date = fullCar.tokef_dt;
      dateOnRoad = fullCar.moed_aliya_lakvish;
      await searchCarData();
    } catch (err) {
      dataElement.innerHTML = `
    <div class="card">
    <h6 class="card-title"> רכב לא נמצא  </h6>
    </div>`;
    }
  } else {
    dataElement.innerHTML = `
    <div class="card">
    <h6 class="card-title"> הכנס מספר תקין  </h6>
    </div>`;
  }
}

async function searchCarData() {
  let currentUrl = `${urlCarData}q=${degem_nm}`;
  console.log(currentUrl);
  try {
    let response = await axios.get(currentUrl);
    let TotalCars = response.data.result.records;
    console.log(TotalCars);
    for (let carIndex of TotalCars) {
      if (carIndex.degem_cd == degem_cd) {
        console.log(carIndex);
        car = carIndex;
      }
    }
    if (car !== undefined) {
      menuf = car.tozeret_nm;
      year = car.shnat_yitzur;
      model = car.kinuy_mishari;
      gimur = car.ramat_gimur;
      delek_nm = car.delek_nm;
      zihum = car.kvutzat_zihum;
      if (zihum == null) {
        zihum = "0";
      }
      volume = car.nefah_manoa;
      hp = car.koah_sus;
      hanaa = car.hanaa_nm;
      merkav = car.merkav;
      printCarData();
    }
  } catch (err) {
    dataElement.innerHTML = `
    <div class="card">
    <h6 class="card-title"> רכב לא נמצא  </h6>
    </div>`;
  }
}
function printCarData() {
  dataElement.innerHTML = `
    <div class="card">
    <div class="card-body">
      <h6 class="card-title"> ${menuf} ${model}  </h6>
      <p class="card-text">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">יצרן: ${menuf}</li>
          <li class="list-group-item">מודל: ${model}</li>
          <li class="list-group-item">שנת ייצור: ${year}</li>
          <li class="list-group-item">נפח מנוע: ${volume}</li>
          <li class="list-group-item">כוח סוס: ${hp}</li><li class="list-group-item">הנעה: ${hanaa}</li><li class="list-group-item">סוג דלק: ${delek_nm}</li> <li class="list-group-item">דרגת זיהום: ${zihum}</li>
          <li class="list-group-item">רמת גימור: ${gimur}</li>

          <li class="list-group-item">מרכב: ${merkav}</li>
          <li class="list-group-item">בעלות: ${ownership}</li>
          <li class="list-group-item"> טסט בתוקף עד: ${date}</li>
          <li class="list-group-item">תאריך עלייה לכביש: ${dateOnRoad}</li>
          </ul>
          </p>
          </div>
          </div>`;
}
