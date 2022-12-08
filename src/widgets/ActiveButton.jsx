import React from 'react'
import styled from 'styled-components'

function ActiveButton({content}) {
  return (
    <Container>{content}</Container>
  )
}

export default ActiveButton

const Container = styled.button`
    @media (max-width: 768px) {
        width: 50%;
    }
    width: 25%;
    height: 8vh;
    border-radius: 25px;
    border: none;
    color: #fff;
    background: var(--main-bg-color);
`