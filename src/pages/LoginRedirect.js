import React, { useState } from  'react'
import Teacher from './Teacher';
import Student from './Student'
import Login from './Login';

function LoginRedirect(){

    const [page, setPage] = useState(0);

    function switchPage(userData){
        if(userData.isTeacher){
            setPage(1)
        }else{
            setPage(2)
        }
    }

    function handlePage(){
        switch(page){
            case 1:
                return <Teacher/>
            case 2: 
                return <Student/>
            default:
                return <Login change={(userData) => switchPage(userData)}/>
        }
    }

    return(
        <>
            {handlePage()}
        </>
    );
}

export default LoginRedirect;