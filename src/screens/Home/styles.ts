import styled from 'styled-components'

export const Root = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding: 40px 20px;
  background: ${({ theme: { bg } }) => bg};
`
