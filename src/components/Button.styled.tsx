import { css, styled } from "styled-components";

type StyledBtnPropsType = {
  color?: string
  fontSize?: string
  btnType: "primary" | "outlined"
  active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType> `
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: ${props => props.fontSize || "2rem"};
  font-weight: bold;
  
  /* outlined */
  ${props => props.btnType === "outlined" && css<StyledBtnPropsType> `
    border: 2px solid ${props => props.color || "#fb3f78"};
    color: ${props => props.color || "#fb3f78"};
    background-color: transparent;
  
    &:hover {
      border-color: #2f4bb9;
      color: #2f4bb9;
      background-color: transparent;
    }
  `}
  

  /* primary */
  ${props => props.btnType === "primary" && css<StyledBtnPropsType> `
    background-color: ${props => props.color || "#fb3f78"};
    color: snow;

    &:hover {
    background-color: #2f4bb9;
  }

  ${props => props.active && css<StyledBtnPropsType> `
    box-shadow: 5px 5px 5px 5px rgba(22, 27, 46, 0.545)

  `}

  `}
  

  /* &:last-child {
    background-color: #579a4c;
  } */
`
// export const SuperButton = styled(StyledBtn) `
//   border-radius: 5px;
//   background-color: #81d0c8;
//   color: #292828;
//   &:hover {
//     animation: ${MyAnimation} 2s ease-in-out infinite;
//   }
// `