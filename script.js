var result;

var country = document.getElementById("country")

var startDate = document.getElementById('sdate')

var endDate = document.getElementById('edate')

var output = document.getElementById('output')

function getresult(){

    let place = country.value.toString()
    let sDate = startDate.value.toString()
    let eDate = endDate.value.toString()
    let url = `https://api.covid19api.com/country/${place}?from=${sDate}T00:00:00Z&to=${eDate}T00:00:00Z`;

fetch(url)
.then(res => res.json())
.then((res) => {
    for(let i=0;i<res.length;i++)
    {
        let conf = 'Confirmed:  ' + res[i].Confirmed
        let act = 'Active:  ' + res[i].Active
        let dea = 'Death:  ' +res[i].Deaths

        let newDiv = document.createElement('div')
        newDiv.setAttribute('id','result')
        newDiv.innerHTML = conf + '<br>' + act + '<br>' + dea + '<br>'
        output.appendChild(newDiv)

    }
})
.catch(err => { throw err });
}



