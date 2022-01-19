

export const INCRE_AGE ={
    type: "incre_age",
    payload: 12,
};
export const DECRE_AGE ={
    type: "decre_age",
    payload: 12,
};
export const actionSetName = () => {
    return async (dispatch:any) => {
        console.log("run");
        let payload : any;
        try {     
            let data = await fetch('https://jsonplaceholder.typicode.com/todo/1');
            payload = await data.json();    
            dispatch({
                type:"set_name",
                payload: payload.title,
            })
        } catch (error) {
            console.log("có lỗi xảy ra");
        }
}
}

