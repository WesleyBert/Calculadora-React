import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    justify-content: center;
    align-items: center;
    `

    export const Content = styled.div`
        background-color: #FFFFFF;
        width: 50%;
        min-width: 350px;

    `

    export const Row = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    `
    export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
;