import React from 'react'
import styled from 'styled-components'

function InactiveButton({content}) {
  return (
    <Container>
        {content}
    </Container>
  )
}

export default InactiveButton

const Container = styled.button`
    width: 80%;
    height: 8vh;
    border-radius: 22px;
    cursor: pointer;
    border: none;
    background: grey;
    color: white;
    font-size: 1.3vw;
    font-weight: 700;
`