
import React from 'react';
import { Link } from 'react-router-dom';


import styled from "styled-components";

const PageIntrovable = styled.div`

* {-moz-box-sizing: border-box; box-sizing: border-box;}

.p-404,.p-404-text, .back-to-home{
    margin: 3em 0;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.2em;
    text-indent: 0.3em;
    color: #066416;    
    text-align: center;
}

`;


function Page404() {
    return (
        <PageIntrovable> 
        <div className='erreur-404'>
            <div className='erreur-404-container'>
                <p className='p-404'>404</p>
                <p className='p-404-text'>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <div className='back-to-home'> 
                 <Link style={{color:'#132344' , textDecoration:'none'}} to="/">Retourner sur la page d'accueil</Link>
            </div>
        </div> 
        </PageIntrovable>
    );
}

 export default Page404;