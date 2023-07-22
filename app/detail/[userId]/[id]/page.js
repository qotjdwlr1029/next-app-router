async function getPostDetail(userId, id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}&id=${id}`);
    const data = await res.json();
    return data;
}

export default async function DetailPage({ params }){
    
    const { userId, id } = params;
    const data = await getPostDetail(userId, id);

    return(
        <div>
            {
                data.map( ( detail ) => {
                    return(
                        <div>
                            <h1>{detail.title}</h1>
                            <div>
                                {detail.body}
                            </div>
                        </div>
                    )
                } )
            }
        </div>
    )

}