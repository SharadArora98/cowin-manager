const url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=696&date=05-05-2021";
async function getapi(url) {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    showData(data);
}
getapi(url);
function showData(data){
    let tab = `<tr>
                    <th> Center Name </th>
                    <th colspan="2"> available shots </th>
                </tr>`;
    data.centers.forEach(center => {
        if(center.sessions[0].min_age_limit === 18) {
        tab += `<tr>
            <td>${center.name}</td>`;
            center.sessions.forEach(day => {
                tab += `<td>${day.available_capacity}</td>`;
            });
        tab += `</tr>`;
        }
    });
    document.getElementById("centers").innerHTML = tab;
}
