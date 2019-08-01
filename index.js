const name = document.getElementById("name");

const searchBtn = document.getElementById("search");




// this function 
function searchUsers(event) {

    event.preventDefault();
    return getUserList();

}


async function getUserList() {
    const input = name.value;

    let usersList = await fetch(`https://api.github.com/search/users?q=${input}`)

    let user_details = usersList.items;

    console.log(user_details);

    let user_card = document.querySelector(".user-info-wrapper");

    for (let i = 0; i < user_details.length; i++) {


    }

}

function createUserDetailsCard(user_details) {
    const card = `<
    div class = "user-info-item1" >
        <
        img src = "https://avatars3.githubusercontent.com/u/39902?v=4>" / >
        <
        <button class="form-controls" id="user-repo" type="">User repositories </button>
         < /div> <
    div > Full Profile < /div> < /
        div >`

}



name.addEventListener("keydown", searchUsers);

searchBtn.addEventListener("click", searchUsers);