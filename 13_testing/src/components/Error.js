import {useRouteError} from 'react-router-dom';
// the above hook gives much more inofrmation about the error & we can display that error



const Error = () => {

    const err = useRouteError(); // using the hook 
    console.log(err);
    
    return(
        <div>
            <h1>OOPSSSS !!!!</h1>
            <h2>Something Went Wrong</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
}

export default Error;