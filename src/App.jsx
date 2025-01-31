import LoadingPage from "./components/loading-page/loading-page"
import Menu from "./components/menu/menu"
import Main from "./components/main/main"
import Footer from "./components/footer/footer"
import './assets/master.css'

function App() {

  return (
    <main className="main-page">
      <LoadingPage/>
      <Menu />
      <Main />
      <Footer />
    </main>
  )
}

export default App
