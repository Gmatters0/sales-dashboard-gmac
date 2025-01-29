import { CardComponent, Header } from '@/components'
import { Container } from '@mui/material'

function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent className="">CARD</CardComponent>
      </Container>
      <h1>HOME</h1>
    </>
  )
}

export default Home
