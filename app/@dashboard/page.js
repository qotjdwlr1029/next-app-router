async function getTodoList(){

    const header = { 'Content-Type' : 'application/json' };
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?userId=1', { headers : header });
    const data = await res.json();

    return data;
}

export default async function DashboardPage(){

    const todos = await getTodoList();

    return(
        <div>
            <h1 className="text-lg uppercase">
                you have to complete these todos!
            </h1>
            <div>
                {
                    todos.map( ( todo, index ) => {
                        if(todo.id < 11){
                            return(
                                <div 
                                    key={todo.id}
                                    className="px-2 py-2"
                                >
                                    <div className={ 
                                        todo.completed ? "line-through" : ""
                                    }>
                                        { todo.title }
                                    </div>
                                </div>
                            ) 
                        }else return null;
                    } )
                }
            </div>
        </div>
    )
}