export async function getUserInfo(){

    const header = { 'Content-Type' : 'application/json' };
    const res = await fetch('https://jsonplaceholder.typicode.com/users/2', { headers : header } );
    const data = await res.json();

    return data;

}

export default async function InfoPage(){

    const info = await getUserInfo();

    return(
        <div className="flex flex-col justify-around h-full">
            <div className="flex justify-center items-center">
                <div className="w-40 h-40 rounded-full bg-slate-200 flex justify-center items-center">
                    
                </div>
            </div>
            <div className="">
                <h1>
                    Hi My name is { info.name } !!
                </h1>
                <div>
                    email : { info.email || ' None ' }
                </div>
                <div>
                    phone : { info.phone || ' None ' }
                </div>
                <div>
                    website : www.{ info.website || ' None ' }
                </div>
            </div>
        </div>
    )
}