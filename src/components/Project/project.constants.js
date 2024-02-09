export const PROJECTS = {
    TRIAL_SWITCH: 'TRIAL_SWITCH',
    COMBINED_PLAN: 'COMBINED_PLAN',
    GLOBAL_SEARCH: 'GLOBAL_SEARCH',
    COMMUNICATION_PREFERENCES: 'COMMUNICATION_PREFERENCES',
    BAZINGA: 'BAZINGA'
}

export const PROJECT_ARRAY = [
    [PROJECTS.TRIAL_SWITCH],
    [PROJECTS.COMBINED_PLAN],
    [PROJECTS.GLOBAL_SEARCH],
    [PROJECTS.COMMUNICATION_PREFERENCES],
    [PROJECTS.BAZINGA],
]

export const PROJECT_NAME = {
    [PROJECTS.TRIAL_SWITCH]: 'Trial Switch',
    [PROJECTS.COMBINED_PLAN]: 'Combined Plan',
    [PROJECTS.GLOBAL_SEARCH]: 'Global Search',
    [PROJECTS.COMMUNICATION_PREFERENCES]: 'Central Communication Preferences',
    [PROJECTS.BAZINGA]: 'Bazinga',
}

const EXPERIENCE = {
    [PROJECTS.TRIAL_SWITCH]: "Currently, users are provided with a 30-day free trial account with enterprise plan features. The objective was to allow users to switch between different plans within the VWO suite, enabling a comprehensive exploration of available features.",
    [PROJECTS.COMBINED_PLAN]: 'Before implementation of this feature, when VWO had combined sale, users were not able to see about how much quota is being consumed by a specific product of combined plan. Now, in case of combined sale, we group together all the combined plan and show the quota_usage for them separately.',
    [PROJECTS.GLOBAL_SEARCH]: "Led the development of the Global Search feature at Tekion, which is used to search customers, sales orders, repair orders, vehicle inventory, and many others etc which is used by more than 100 dealers (est.).",
    [PROJECTS.COMMUNICATION_PREFERENCES]: 'Implemented the ”Central Communication” system, allowing customers to specify their communication preferences for email and phone number notifications. Currently utilized by more than 200 dealerships at Tekion',
    [PROJECTS.BAZINGA]: "Crafted a replica of the Bazinga app, an innovative solution utilized within our college campus to facilitate food delivery from the canteen to various hostels.",
}

export const DETAILS = {
    WORK_DATES: 'workDate',
    HEADER: 'header',
    COMPANY: 'company',
    DETAILS: 'details',
    COMPANY_REDIRECT_LINK: 'companyRedirectLink',
    TECHNOLOGY_USED: 'technologyUsed'
}

export const TECHNOLOGY_USED = {
    [PROJECTS.TRIAL_SWITCH]: ['AngularJs', 'Javascript', 'HTML'],
    [PROJECTS.TRIAL_SWITCH]: ['AngularJs', 'Javascript', 'HTML'],
    [PROJECTS.GLOBAL_SEARCH]: ['React.Js', 'Javascript', 'HTML', 'CSS'],
    [PROJECTS.WHITELISTING_TOOL]: ['React.Js', 'Javascript', 'HTML', 'CSS'],
    [PROJECTS.COMMUNICATION_PREFERENCES]: ['React.Js', 'Javascript', 'HTML', 'CSS'],
    [PROJECTS.BAZINGA]: ['Android', 'Java', 'Parse']
}

export const getCurrentCompanyDetails = projectId => {
    return {
        [DETAILS.HEADER]: PROJECT_NAME[projectId],
        [DETAILS.DETAILS]: EXPERIENCE[projectId],
        [DETAILS.TECHNOLOGY_USED]: TECHNOLOGY_USED[projectId],
    }
}
