import ReactMarkdown from 'react-markdown'
import PageFrame from '../components/PageFrame'
import { INDUSTRY, PROJECTS, EXPERIENCES, VOLUNTEERING } from '../content'

const SECTIONS = [INDUSTRY, PROJECTS, EXPERIENCES, VOLUNTEERING]

const markdownFiles = import.meta.glob('/src/md/*.md', { query: '?raw', import: 'default', eager: true })

function findArticle(pathname) {
    for (const section of SECTIONS) {
        const match = section.find((item) => item.url === pathname)
        if (match) return match
    }
    return null
}

function Article() {
    const article = findArticle(window.location.pathname)

    if (!article) {
        return (
            <PageFrame>
                <h1>Not found</h1>
            </PageFrame>
        )
    }

    return (
        <PageFrame>
            <ReactMarkdown>{markdownFiles[article.md] ?? ''}</ReactMarkdown>
        </PageFrame>
    )
}

export default Article
