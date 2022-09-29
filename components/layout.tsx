import Alert from './alert'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-blue-100">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
