//create an instance for the class
const obj = new XMLHttpRequest()

//call the open method
obj.open('get','https://jsonplaceholder.typicode.com/todos')

//request send
obj.send()

console.log(obj.readyState);

obj.onreadystatechange = () => { //function to change the readystate property
    console.log(obj.readyState);

    if(obj.readyState == 4){
        if(obj.status>=200 && obj.status<300){
            //console.log(obj.responseText);
            let alltodos = JSON.parse(obj.responseText)
            console.log(alltodos);

            alltodos.forEach((item) => {
                result.innerHTML += `
                <tr>
                            <td>${item.userId}</td>
                            <td>${item.id}</td>
                            <td>${item.title}</td>
                            <td>${item.completed}</td>
                </tr> `
                
            });
            
        }
        else{
            console.log('No response');
            
        }
        
    }
    else{
        console.log('No response');
        
    }
    
}


