import React from 'react'
import styled from 'styled-components'

const colors = {
  primary: 'rgba(101, 126, 212, 1)',
  secondary: 'rgba(54, 38, 167, 1)',
  accent: 'rgba(255, 51, 31, 1)',
  dark: 'rgba(13, 1, 6, 1)',
  darkSecondary: 'rgba(13, 1, 6, 0.6)',
  disabled: 'rgba(13, 1, 6, 0.4)',
  light: 'rgba(251, 251, 255, 1)',
  lightSecondary: 'rgba(251, 251, 255, 0.8)'
}

const SidebarWrapper = styled.div`
  background-color: ${colors.disabled};
  width: calc(100% - 2em);
  max-width: 360px;
  transform: translateX(-100%);
`

const Sidebar = props => (
  <SidebarWrapper>

  </SidebarWrapper>
)

export default Sidebar
