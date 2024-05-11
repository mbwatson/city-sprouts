import { Brand } from '@components/brand'

//

export const App = () => {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'linear-gradient(20deg, #e9defa 0%, #fbfcdb 100%)',
    }}>
      <Brand size="large" />
    </main>
  )
}
