import {
  AvatarList,
  CardComponent,
  CustomChart,
  CustomTable,
  Header,
} from '@/components'
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
    headers: ['Título', 'Horário'],
    rows: [
      [<span>Fulano</span>, <span>fulano@email.com</span>],
      [<span>Ciclano</span>, <span>ciclano@email.com</span>],
      [<span>Beltrano</span>, <span>beltrano@email.com</span>],
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
        <CardComponent>
          <CustomChart
            labels={['Jan', 'Fev', 'Mar', 'Abr']}
            data={[1000.12, 2456.54, 967.32, 675.89]}
            type="line"
          />
        </CardComponent>
      </Container>
      <h1>HOME</h1>
    </>
  )
}

export default Home
