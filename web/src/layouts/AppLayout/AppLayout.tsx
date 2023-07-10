import Navbar from 'src/components/Navbar/Navbar'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default AppLayout
