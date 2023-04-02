function Layout({children}){
  return(
      <div className="bg-zinc-900 min-h-screen text-zinc-50 p-4">
          <div className="container mx-auto">
          {children}
          </div>
      </div>
  )
}
export default Layout;