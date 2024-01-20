const arr = [{name:"wash",dueDate:"12-05-2022"},{name:"clean",dueDate:"12-05-2022"}];

        function display() {
            let todohtml = '';


            for (let index = 0; index < arr.length; index++) {
                const todoObject = arr[index];
                const {name,dueDate}=todoObject;
                const html = `
                <div class="todo-name-css">
                    ${name} </div>
                <div class="todo-date-css">${dueDate}</div>
                    <button class="delete-css" onclick="
                    console.log(${index});
                    arr.splice(${index},1);
                    display();
                    ";>delete</button>
                `;
                todohtml += html;
            }
            console.log(todohtml);

            document.querySelector('.js-todo').innerHTML = todohtml;
        }
       
        function input() {

            const input_work = document.querySelector('.js-text');
            const input_date= document.querySelector('.date');

            const work_name = input_work.value;
            const work_date = input_date.value;
            
           arr.push({name:work_name,
        dueDate:work_date});
            console.log(arr);

            input_work.value = '';
            display();

        }