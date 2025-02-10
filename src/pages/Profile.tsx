import { useContext } from 'react'
import { AppThemeContext } from '@/contexts/AppThemeContext'

//COMPONENTS
import { CardComponent, Header, StyledH2, StyledButton } from '@/components'
import { Card, Container, Grid } from '@mui/material'

import { Logout } from '@/services'

function Profile() {
  const themeContext = useContext(AppThemeContext)
  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <CardComponent>Seus Dados...</CardComponent>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <StyledH2 className="mb1">Definições de conta</StyledH2>
            <CardComponent>
              <StyledButton
                className="primary mb-1"
                onClick={themeContext?.toggleTheme}
              >
                Trocar para tema{' '}
                {themeContext?.appTheme === 'light' ? 'escuro' : 'claro'}
              </StyledButton>
              <StyledButton className="alert" onClick={Logout}>
                Logout
              </StyledButton>
            </CardComponent>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Profile
