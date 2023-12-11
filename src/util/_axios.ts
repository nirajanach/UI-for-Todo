const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve,ms));

const todos = [

    {
        id: 1,
        details: "My First Todo",
        completed: false,
    createdAt: new Date()
},
{
    id: 2,
    details: "My second Todo",
    completed: true,
    createdAt: new Date()
},
{
    id: 3,
    details: "My Third Todo",
    completed: false,
    createdAt: new Date()
},
{
    id: 4,
    details: "My Fourth Todo",
    completed: true,
    createdAt: new Date()
}
]




export default class _axios {
    public static get = async (url: string, options: any ) =>
    {
        await delay();
        if( url.includes("todo")) {
            return {data: [...todos]};
        }

        return { data: [] };
    } 


    public static post = async ( url: string, data: any ) => {
        const {username, password} = data;
        await delay();

        if(!url.includes("login")){
            throw new Error("404");

        }
        if( username === "username" && password === "password" ){
            return { data: "This is a Token"}
        }

        throw new Error("Invalid username or password");
    }
}