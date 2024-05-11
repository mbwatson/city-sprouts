import { Brand } from '@components/brand'

//

export const App = () => {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Brand size="stretch" />
    </main>
  )
}
