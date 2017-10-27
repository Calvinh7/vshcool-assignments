
let database = [
    {a:0, b:0, c:1, d:3},
    {a:1, b:1, c:0, d:3},
    {a:4, b:3, c:2, d:3},
    {a:0, b:0, c:1, d:3},
    {a:3, b:2, c:2, d:3}
]

function filterDatabase(query, database){
    //going through each object in the database
    //we are checking whether each property and value pair in the object matches a key value pair in the query object
    return database.filter((doc)=> {
        for(let key in query){
            if(doc[key]!== query[key]){
                return false;
            }
        }
        return true
    });
}

let query = {
    a:1,
}

console.log(filterDatabase(query, database));

//if query is empty, return the entire array
//if there are no matches, return an empty array
