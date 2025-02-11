import { ChangeEvent, useContext, useEffect } from 'react'
import { AppThemeContext } from '@/contexts/AppThemeContext'

//COMPONENTS
import {
  CardComponent,
  FormComponent,
  Header,
  StyledH2,
  StyledButton,
} from '@/components'
import { Container, Grid } from '@mui/material'

//HOOKS
import { useFormValidation, useGet } from '@/hooks'

//SERVICES
import { Logout } from '@/services'

//TYPES
import { InputProps, ProfileData, ProfileEditableData } from '@/types'

function Profile() {
  const themeContext = useContext(AppThemeContext)

  //HOOKS
  const {
    data: profileData,
    loading: profileLoading,
    error: profileError,
  } = useGet<ProfileData>('profile')

  useEffect(() => {
    if (profileData) {
      handleChange(0, profileData.name)
      handleChange(1, profileData.email)
      handleChange(2, profileData.phone)
    }
  }, [profileData])

  // FORM
  const inputs: InputProps[] = [
    { name: 'name', type: 'text', placeholder: 'Nome', required: true },
    { name: 'email', type: 'email', placeholder: 'Email', disabled: true },
    { name: 'phone', type: 'tel', placeholder: 'Telefone', required: true },
  ]
  const { formValues, formValid, handleChange } = useFormValidation(inputs)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  }
  const handleDelete = async () => {
    confirm('WIP')
  }

  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <CardComponent>
              <StyledH2>Seus Dados</StyledH2>
              <FormComponent
                inputs={inputs.map((input, index) => ({
                  ...input,
                  type: input.type,
                  placeholder: input.placeholder,
                  value: formValues[index] || '',
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(index, (e.target as HTMLInputElement).value),
                }))}
                buttons={[
                  {
                    className: 'primary',
                    disabled: !formValid,
                    type: 'submit',
                    onClick: handleSubmit,
                    children: 'Atualizar meu perfil',
                  },
                  {
                    className: 'alert',
                    type: 'button',
                    onClick: handleDelete,
                    children: 'Excluir minha conta',
                  },
                ]}
              />
            </CardComponent>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledH2 className="mb1">Definições de conta</StyledH2>
            <CardComponent>
              <StyledButton className="primary mb-1" onClick={themeContext?.toggleTheme}>
                Trocar para tema {themeContext?.appTheme === 'light' ? 'escuro' : 'claro'}
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
