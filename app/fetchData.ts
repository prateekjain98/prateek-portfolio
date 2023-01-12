import { PageInfo, Skill, Social, Experience, Project } from "./typings";

type Props = {
    endpoint: string
    data: string
}
export const fetchApi = async ({endpoint, data}: Props)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${endpoint}`)
    const jsonObj = await res.json()
    return jsonObj[`${data}`]
}

// export const fetchSkills = fetchApi('getSkills')

// export const fetchSocials = fetchApi('getSocials')

// export const fetchProjects = fetchApi('getProjects')

// export const fetchExperiences = fetchApi('getExperiences')

// export const fetchPageInfo = fetchApi('getPageInfo')