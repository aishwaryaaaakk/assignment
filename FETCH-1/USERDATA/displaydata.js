document.getElementById("fetchUsersBtn").addEventListener('click',fetchuser);

function fetchuser(){

    fetch(`https://reqres.in/api/users`)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data.data);

        let output=' ';
        data.data.forEach(user=> {
        console.log(user);
        output +=`
        <div class="user-card">
            <img src="${user.avatar}" alt="avatarImg">
            <div class="user-details">
                <span class="name">${user.first_name}</span>
                <span class="email">${user.email}</span>
            </div>
        </div>`
    })
    

    

    document.getElementById("usersList").innerHTML = output;

    });
}