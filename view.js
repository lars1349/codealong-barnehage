updateView();

function updateView(){
document.getElementById('app').innerHTML = /*HTML*/ `
<h1>Navneliste på barn i barnehagen</h1>
<h2>Legg til navn og alder på nytt barn i barnehagen:</h2>
<h4>Er barnet seks år og oppover skal det begynne på skole.
<br>Er barnet barnet opp til fem år skal barnet gå i barnehage.</h4>
Barnets navn:<input type="text" onchange="saveChildName(this.value)" placeholder="Eks: Kari Nordmann"><br>
Barnets alder:<input type="text" onchange="saveChildAge(this.value)" placeholder="Eks: 4"><br>
<button onclick="submitNewKids()">Submit</button>
${displayNewKids()}
${checkAge()}
`
function displayNewKids(){
    let html = '';
    model.data.children.forEach(child => {
        html += `
        <div>
        <p><b>Navn: </b>${child.childName}</p>
        <p><b>Alder: </b>${child.childAge}</p><br>
        </div>
        `;
    });
    return html;
}

function checkAge(){
    let html = '';
    model.data.children.forEach(child => {
    if (child.childAge >= 6 ){
        html += `
        <b>${child.childName}, ${child.childAge} år</b> - Skal begynne på skole.<p>
        `;
    }
        else {
            html += `
            <b>${child.childName}, ${child.childAge} år</b> - Skal begynne i barnehage.<p>
            `;
        }
    });
    return html;
}

/*
}
function displayExampleKids(){
    let html = '';
    for(let i = 0; i < model.data.children.length; i++){
let child = model.input.children[i];
html += `
<div class="child">
        <p>Child name: ${children.childName}</p>
        <p>Child age: ${children.childAge}</p>
        </div>
`;
    }
*/
    document.getElementById('childrenContainer').innerHTML = html;
}