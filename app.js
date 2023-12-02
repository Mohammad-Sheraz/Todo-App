const inpForm = document.querySelector("#input")
const ulli = document.querySelector(".ul")

const arr = []

function render(){
    for (let i = 0; i < arr.length; i++){
        ulli.innerHTML += `<li class="ulli">
        <div class="div2" style="background-color: aqua">${arr[i]}
        <div class="buttondiv">
    <button type='button' class='editbutton border rounded' onclick = 'edit(${[i]})'>Edit</button>
    <button type='button' class='delbutton border rounded' onclick = 'del(${[i]})'>Delete</button>
        </div>
    </div>
    </li>
        `
    }
}

function userInp(){
    if( inpForm.value === '' ){
        alert('Enter any value')
    } else {
        arr.push(inpForm.value)
        console.log(arr);
        ulli.innerHTML = ''
        render()
        inpForm.value = ''
    }
}

function del(i){
    console.log('Deleted', arr[i]);
    arr.splice(i, 1)
    ulli.innerHTML = ''
    render()
}

function edit(i){
    console.log('Edited', arr[i]);
    const inpForm = prompt('Enter value to update')
    arr.splice(i, 1, inpForm)
    ulli.innerHTML = ''
    render()
}



