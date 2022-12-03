import HeadTag from '../components/head/HeadTag'
import NavBar from "../components/navigation/NavBar";
import Main from "../components/home/Main";
import About from "../components/about/About";
export default function Home() {
  return (
    <main className="bg-white px-10">
        <HeadTag />
        <NavBar />
        <Main/>
        <About/>
    </main>
  )
}
