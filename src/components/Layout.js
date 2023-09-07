import SideBar from './SideBar';
import TopBar from './TopBar';


export default function Layout({ children }) {
  return (
    <div className="min-w-full min-h-screen  h-screen overflow-hidden bg-blue-100">
      <TopBar />
      <SideBar />
      <main className="pl-40 pt-16">
        {children}
      </main>
    </div>
  )
}
