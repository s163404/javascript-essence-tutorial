// fetch('users.json').then(function(response) {
//     // response 自体はPromiseオブジェクト    
//     // console.log(response);
//     return response.json();
// }).then(function(json) {
//     console.log(json)
//     for(const user of json) {
//         console.log(`I'm ${user.name}, ${user.age} years old.`)
//     }
// })

// await,async を使った書き方
// ↓↓↓↓↓↓↓↓↓↓

async function fetchUsers() {
    const response = await fetch('users.json');
    const json = await response.json();

    for(const user of json) {
        console.log(`I'm ${user.name}, ${user.age} years old.`)
    }
}
fetchUsers();