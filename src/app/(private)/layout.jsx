import AuthProvider from "../../provider/auth-provider"

export default function PrivateLayout({children}) {

  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
