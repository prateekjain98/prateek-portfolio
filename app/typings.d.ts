interface SanityBody {
    _createdAt: string
    _id: string
    _rev: string
    _updatedAt: string
}

interface Image {
    _type: 'image'
    asset: {
        _ref: string
        _type: 'reference'
    }
}

export interface Skill extends SanityBody {
    _type: 'skill'
    title: string
    image: Image
    progress: number
}

export interface Social extends SanityBody {
    _type: 'social'
    title: string
    url: string
}

export interface PageInfo extends SanityBody {
    _type: 'pageInfo'
    location: string
    backgroundInfo: string
    email: string
    role: string
    name: string
    phoneNumber: string
    mainImage: Image
    aboutImage: Image
    socials: Social[]
}

export interface Project extends SanityBody {
    _type: 'project'
    title: string
    gitUrl: string
    summary: string
    image: Image
    technologies: Skill[]
}

export interface Experience extends SanityBody {
    _type: 'experience'
    companyName: string
    companyLogo: Image
    dateStarted: date
    dateEnded: date
    isCurrentRole: boolean
    jobTitle: string
    points: string[]
    technologies: Skill[]
}
