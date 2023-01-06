import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const sections = [
    { name:'hero', component: Hero, snap: 'start' },
    { name:'about', component: About, snap: 'center' },
    { name:'experience', component: Experience, snap: 'center' },
    { name:'skills', component: Skills, snap: 'start' },
    { name:'projects', component: Projects, snap: 'start' },
    { name:'contact', component: Contact, snap: 'start' },
]

export default function Home() {
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 customScrollbar">
            <Head>
                <title>Prateek's Portfolio</title>
            </Head>
            <Header />
            {sections.map((value, index) =>
                <section key={index} id={value.name} className={`snap-${value.snap}`}>
                    <value.component />
                </section>
            )}
        </div>
    )
}
