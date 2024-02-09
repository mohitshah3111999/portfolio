export const COMPANIES = {
    WINGIFY: 'WINGIFY',
    TEKION: 'TEKION' ,
    MONEYFIT: 'MONEYFIT',
}

export const COMPANY_NAME = {
    [COMPANIES.WINGIFY]: 'Wingify',
    [COMPANIES.TEKION]: 'Tekion',
    [COMPANIES.MONEYFIT]: 'Moneyfit.io',
}

const WORK_DATES = {
    [COMPANIES.WINGIFY]: 'Oct. 2023 - Present',
    [COMPANIES.TEKION]: 'Jan. 2022 - Oct. 2023',
    [COMPANIES.MONEYFIT]: 'Dec. 2020 - Jan. 2021',
}

export const POSITION = {
    [COMPANIES.WINGIFY]: 'Software Engineer 2',
    [COMPANIES.TEKION]: 'Associate Software Engineer',
    [COMPANIES.MONEYFIT]: 'Android Developer Intern',
}

export const EXPERIENCE = {
    [COMPANIES.WINGIFY]: "As an integral member of the pricing team at Wingify, I've been instrumental in driving frontend development initiatives. Noteworthy accomplishments include the successful implementation of various features such as combined sales and personalized starter options in VWO.",
    [COMPANIES.TEKION]: "I've spearheaded frontend development for critical projects such as the global search, whitelisting tool, and central communication preference system, all while working autonomously. Additionally, I've played a pivotal role in seamlessly integrating numerous new feature requests by collaborating closely with product managers and backend developers.",
    [COMPANIES.MONEYFIT]: "Led the development of the MoneyFit app, a comprehensive platform for monitoring a wide range of financial assets, including cryptocurrencies, stocks, mutual funds, and other investment instruments."
}

export const TECHNOLOGY_USED = {
    [COMPANIES.WINGIFY]: ['AngularJs', 'Javascript', 'HTML', 'Php', 'Python'],
    [COMPANIES.TEKION]: ['React.Js', 'Javascript', 'HTML', 'CSS'],
    [COMPANIES.MONEYFIT]: ['Android', 'Java', 'REST Api']
}

export const REDIRECT_LINK = {
    [COMPANIES.WINGIFY]: 'https://vwo.com/',
    [COMPANIES.TEKION]: 'https://tekion.com/',
    [COMPANIES.MONEYFIT]: 'https://moneyfit.io/'
}

export const DETAILS = {
    WORK_DATES: 'workDate',
    HEADER: 'header',
    COMPANY: 'company',
    DETAILS: 'details',
    COMPANY_REDIRECT_LINK: 'companyRedirectLink',
    TECHNOLOGY_USED: 'technologyUsed'
}

export const getCurrentCompanyDetails = companyId => {
    return {
        [DETAILS.WORK_DATES]: WORK_DATES[companyId],
        [DETAILS.HEADER]: POSITION[companyId],
        [DETAILS.COMPANY]: COMPANY_NAME[companyId],
        [DETAILS.DETAILS]: EXPERIENCE[companyId],
        [DETAILS.COMPANY_REDIRECT_LINK]: REDIRECT_LINK[companyId],
        [DETAILS.TECHNOLOGY_USED]: TECHNOLOGY_USED[companyId],
    }
}
