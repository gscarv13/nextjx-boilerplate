import * as S from './Main.styled'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/logo.svg"
      alt="Atom shape that represents the React library"
    />
    <S.Title>Next + TS</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS and Styled Components
    </S.Description>
  </S.Wrapper>
)

export default Main
