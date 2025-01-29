import { AvatarList, CardComponent, Header } from '@/components'
import { currencyConverter } from '@/utils'
import { Container } from '@mui/material'

function Home() {
  const mockListData = [
    {
      avatar: '/dnc-avatar.svg',
      name: 'Gabriel Maranhão',
      subtitle: currencyConverter(1000),
    },
    {
      avatar: '/dnc-avatar.jpg',
      name: 'Lore Ipsum',
      subtitle: currencyConverter(3300.9),
    },
    {
      avatar: '/dnc-avatar.jpg',
      name: 'Donald Glover',
      subtitle: currencyConverter(7000),
    },
  ]

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent className="">CARD</CardComponent>
        <CardComponent>
          <AvatarList listData={mockListData}></AvatarList>
        </CardComponent>
      </Container>
      <h1>HOME</h1>
    </>
  )
}

export default Home
