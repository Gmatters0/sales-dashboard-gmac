import { AvatarList, CardComponent, CustomTable, Header } from '@/components'
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

  const mockTableData = {
    headers: ['Name', 'Email', 'Actions'],
    rows: [
      [
        <span>Fulano</span>,
        <span>fulano@email.com</span>,
        <button>Action</button>,
      ],
      [
        <span>Ciclano</span>,
        <span>ciclano@email.com</span>,
        <button>Action</button>,
      ],
      [
        <span>Beltrano</span>,
        <span>beltrano@email.com</span>,
        <button>Action</button>,
      ],
    ],
  }

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent className="">CARD</CardComponent>
        <CardComponent>
          <AvatarList listData={mockListData}></AvatarList>
        </CardComponent>
        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>
      </Container>
      <h1>HOME</h1>
    </>
  )
}

export default Home
