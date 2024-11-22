function saveChildAge(input){
    model.input.childAge = Number(input)
}
function saveChildName(input){
    model.input.childName = input
}
function submitNewKids(){
    let newChild = {
        childAge: model.input.childAge,
        childName: model.input.childName,
    };
    model.data.children.push(newChild);
    updateView();
}