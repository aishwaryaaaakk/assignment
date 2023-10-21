const showData = async()=>{
    try {
        let res = await fetch('http://localhost:3000/todo');
        let data = await res.json()
        console.log(data);

        let root = document.getElementById("root");
        data.forEach(({id,taskName,status}) => {
            const task = document.createElement('div');
            task.className = "taskBox";

            let h1 = document.createElement('h1');
            h1.textContent= `TASK NAME : ${taskName}`;

            let p = document.createElement('p');
            p.textContent=`STATUS : ${status.toString()}`;
            
            let p2 = document.createElement('p');
            p2.textContent=`ID : ${id}`;

            let deleteBtn = document.createElement('button');
            deleteBtn.textContent="Delete";

            deleteBtn.onclick = async()=>{
                try {
                    let res = await fetch(`http://localhost:3000/todo/${id}`,{
                        method:"DELETE"
                    })
                    let data = await res.json()
                    console.log(data);
                } catch (error) {
                    console.log(error)
                }

            }
            let toggleBtn = document.createElement('button');
            toggleBtn.textContent="Task Completed!!";

            toggleBtn.onclick = async()=>{
                try {
                    let statusCheck={
                        status:!status
                    }
                    let res = await fetch(`http://localhost:3000/todo/${id}`,{
                        method:"PATCH",
                        body:JSON.stringify(statusCheck),
                        headers:{
                            'content-type':'application/json'
                        }
                    })
                    let data = await res.json()
                    console.log(data);
                } catch (error) {
                    console.log(error)
                }

            }

            task.append(h1,p,p2,deleteBtn,toggleBtn);
            root.append(task);
        });


        
    } catch (error) {
        console.log(error)
        
    }
}
 async function addTask(){
    try {
        let taskInput = document.getElementById('task-name').value;
        let newTask = {
            taskName:taskInput,
            status:false
        }
        let response = await fetch(`http://localhost:3000/todo` ,{
            method:'POST',
            body:JSON.stringify(newTask),
            headers:{
                'content-type':'application/json'
            }

        })
        let data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error)
    }
 }

showData()