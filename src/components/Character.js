
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
height: 20vh;
border: dotted 5px white;
border-radius: 10px;
margin: 5% 20%;
background-color: #a86e1d;

h2{
    font-family: sansserrif;
    color: #4e60cc;
    font-size: 3rem;
}
h3{
    color: 
    display: flex;
    justify-content: spac;
}
.gender{
    text-transform: uppercase;
    color: white;
}

`
const Characters = props => (
    <StyledCharacter>
   <h2>{props.card.name}</h2>
   <h3>{props.card.birth_year}</h3>
   <h3 className='gender'>{props.card.gender}</h3>
    </StyledCharacter>
)







export default Characters;
