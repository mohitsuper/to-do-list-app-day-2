let massage = document.querySelector(".form-control");
let sumbit = document.querySelector(".submit");
let massgaeValue =[];
let displayData = document.querySelector(".display-data");
let Edit = document.querySelector(".Edit");
sumbit.addEventListener("click",()=>{
    massgaeValue.push(massage.value);
    displayAlldata();
    massage.value = "";

})


function displayAlldata(){
    if(massgaeValue != ""){
            let tableHTML = `
            <table class="table table-bordered mt-5 text-center">
                <thead class="fw-bold bg-secondary">
                    <td>SR NO.</td>
                    <td>MASSAGE</td>
                    <td>ACTION</td>
                </thead>
                <tbody>`
                     massgaeValue.forEach((val,key) => {
                        tableHTML += `<tr>
                            <td>${key+1}</td>
                            <td>${val}</td>
                            <td>
                                <button class="btn btn-info text-white Edit" onclick="editMassage(${key})">Edit</button>
                                <button class="btn btn-danger" onclick="deleteMassage(${key})">Remove</button>
                            </td>
                        </tr>`
                       })
                  tableHTML +=     `</tbody>
               </table>`;

               displayData.innerHTML = tableHTML;
              
    }
}

function editMassage(index){
    massage.value = massgaeValue[index];
    massgaeValue.splice(index, 1);
    displayAlldata();
}
function deleteMassage(index) {
  massgaeValue.splice(index, 1);
  displayAlldata();
}
console.log(massgaeValue);

