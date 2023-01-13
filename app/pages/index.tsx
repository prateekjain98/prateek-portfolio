import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ExperienceComponent from '../components/Experience'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { GetStaticProps } from 'next'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchApi } from '../fetchData'
import 'bootstrap/dist/css/bootstrap.min.css'

type Props = {
    pageInfo: PageInfo
    experiences: Experience[]
    skills: Skill[]
    projects: Project[]
    socials: Social[]
}

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 customScrollbar">
            <Head>
                <title>{"Prateek's Portfolio"}</title>
            </Head>
            <Header socials={socials} />
            <section id="hero" className="snap-center">
                <Hero pageInfo={pageInfo} />
            </section>
            <section id="about" className="snap-center">
                <About pageInfo={pageInfo} />
            </section>
            <section id="experience" className="snap-center">
                <ExperienceComponent experiences={experiences} />
            </section>
            <section id="projects" className="snap-center">
                <Projects projects={projects} />
            </section>
            <section id="skills" className="snap-center">
                <Skills skills={skills} />
            </section>
            <section id="contact" className="snap-center">
                <Contact />
            </section>
        </div>
    )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
    const pageInfo: PageInfo = await fetchApi({
        endpoint: 'getPageInfo',
        data: 'pageInfo',
    })
    const experiences: Experience[] = await fetchApi({
        endpoint: 'getExperiences',
        data: 'experiences',
    })
    const skills: Skill[] = await fetchApi({
        endpoint: 'getSkills',
        data: 'skills',
    })
    const projects: Project[] = await fetchApi({
        endpoint: 'getProjects',
        data: 'projects',
    })
    const socials: Social[] = await fetchApi({
        endpoint: 'getSocials',
        data: 'socials',
    })

    return {
        props: {
            pageInfo,
            experiences,
            skills,
            projects,
            socials,
        },
        revalidate: 10,
    }
}
