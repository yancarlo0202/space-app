import styled from "styled-components"

const ContainerEstilizado = styled.div `
    position: relative;
    display: inline-block;
`

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`

const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`

const CampoTexto = (props) => {
    return (
        <ContainerEstilizado >
            <CampoTextoEstilizado placeholder="o que você preocura?" {...props} />
            <IconeLupa src="/imagens/search.png" alt="imagem ilustrativa de lupa para pesquisa"/>
        </ContainerEstilizado >
    )
}

export default CampoTexto