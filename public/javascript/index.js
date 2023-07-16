
// const charactersAPI = new APIHandler('http://localhost:8000');


//  window.addEventListener('load',  () =>  {

//    document.getElementById('fetch-all').addEventListener('click', async function (event) {
    
//     const result = await charactersAPI.getFullList()
//     console.log('seen', result)
//     const list =  document.createElement('section');
//     list.setAttribute('class', 'container');
//     list.setAttribute('id', 'style-later-fetchalllist')
//     result.forEach(element => {
//       const div = document.createElement('div');
//       div.innerHTML = `ID: ${element.id} <br>
//        Name: ${element.name} <br> 
//        Occupation: ${element.occupation} <br> 
//        Is a Cartoon: ${element.cartoon} <br> 
//        Character Weapon: ${element.weapon} <br>`;
//       list.appendChild(div)
//     });
//           document.querySelector('body').prepend(list)
//   })
 

//   document.getElementById('fetch-one').addEventListener('click', async function (event) {

//     const getByone = await charactersAPI.getOneRegister()
//     console.log(getByone)
//     const list =  document.createElement('section');
//     list.setAttribute('class', 'operations');
//    getByone.forEach(element => {
//     const div = document.createElement('div');
//     div.innerHTML = `ID: ${element.id} <br>
//      Name: ${element.name} <br> 
//      Occupation: ${element.occupation} <br> 
//      Is a Cartoon: ${element.cartoon} <br> 
//      Character Weapon: ${element.weapon} <br>`;
//     list.appendChild(div);
//    })
// document.querySelector('body').prepend(list)
//   });

//   document.getElementById('delete-one').addEventListener('click', function (event) {

//   });

//   document.getElementById('edit-character-form').addEventListener('submit', function (event) {

//   });

//   document.getElementById('new-character-form').addEventListener('submit', function (event) {

//   });
// });




const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    if(document.getElementById('anyone')){document.getElementById('anyone').remove()}
    const result = await charactersAPI.getFullList()
    const list = document.createElement('section');
    list.setAttribute('class', 'container');
    list.setAttribute('id', 'anyone')
    result.forEach(element => {
      const div = document.createElement('div');
      div.innerHTML = `ID: ${element.id}<br> Name: ${element.name} <br> Occupation: ${element.occupation} <br> Is a Cartoon: ${element.cartoon} <br> Character Weapon: ${element.weapon} <br><br>`;
      list.appendChild(div)
    });
    if(!document.getElementById('anyone')){document.querySelector('body').prepend(list)}
  });



  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    if(document.getElementById('anyone')){document.getElementById('anyone').remove()}
    const idQuery = document.getElementById('searchbyId').value;
    const list = document.createElement('section');
    list.setAttribute('class', 'container');
    list.setAttribute('id', 'anyone')
    const result = await charactersAPI.getOneRegister(idQuery)
    const div = document.createElement('div');
    div.innerHTML = `Name: ${result.name} Occupation: ${result.occupation} Is a Cartoon: ${result.cartoon} Character Weapon: ${result.weapon}`;
    list.appendChild(div)
    if(!document.getElementById('anyone')){document.querySelector('body').prepend(list)}
  });



  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(document.getElementById('deletebyID').value);
  });


  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    if(document.getElementById('anyone')){document.getElementById('anyone').remove()}
    const itemID = document.getElementById('editId').value;
    const itemName = document.getElementById('editName').value;
    const occupationItem = document.getElementById('editoccupation').value;
    const itemWeapon = document.getElementById('editWeapon').value;
    const checkifItemisCarton = document.getElementById('checkifCarton').checked;
    const allcollection = {
      "id": itemID,
      "name": itemName,
      "occupation": occupationItem,
      "weapon": itemWeapon,
      "cartoon": checkifItemisCarton
    }
    await charactersAPI.updateOneRegister(allcollection)
  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    const itemName = document.getElementById('createNewName').value;
    const occupationName = document.getElementById('createNewOccupation').value;
    const weaponNmae = document.getElementById('createNewWeapon').value;
    const checkItems = document.getElementById('checkCreated').checked;
    const allcollection = {
      "name": itemName,
      "occupation": occupationName,
      "weapon": weaponNmae,
      "cartoon": checkItems
    }
    await charactersAPI.createOneRegister(allcollection)
  });
});


