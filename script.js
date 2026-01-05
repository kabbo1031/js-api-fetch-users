async function loadUsers(){
  const list = document.getElementById('users');
  list.innerHTML = '<li>Loading...</li>';

  try{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    list.innerHTML = '';
    users.forEach(user=>{
      const li = document.createElement('li');
      li.innerText = user.name;
      list.appendChild(li);
    });
  }catch(err){
    list.innerHTML = '<li>Error loading users</li>';
  }
}
