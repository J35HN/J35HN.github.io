import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import PageFrame from '../components/PageFrame'
import { INDUSTRY, PROJECTS, EXPERIENCES, VOLUNTEERING, TONES } from '../content'

const SECTIONS = [INDUSTRY, PROJECTS, EXPERIENCES, VOLUNTEERING]

const markdownFiles = import.meta.glob('/src/md/*.md', { query: '?raw', import: 'default', eager: true })

function findArticle(pathname) {
    for (const section of SECTIONS) {
        const match = section.find((item) => item.url === pathname)
        if (match) return match
    }
    return null
}

// Deterministic per heading (based on its source line), so each h2 gets an
// independent-looking color without needing extra state or re-render churn.
function toneForLine(line) {
    return `text-${TONES[line % (TONES.length - 1)].replace('tone-', '')}`
}

function Article() {
    const article = findArticle(window.location.pathname)

    // Picked once per mount so the title color doesn't change on re-render.
    const [titleTone] = useState(() =>
        `text-${TONES[Math.floor(Math.random() * (TONES.length - 1))].replace('tone-', '')}`
    )

    if (!article) {
        return (
            <PageFrame>
                <h1>Not found</h1>
            </PageFrame>
        )
    }

    return (
        <PageFrame>
            <ReactMarkdown
                components={{
                    h1: (props) => <h1 className={titleTone} {...props} />,
                    h2: ({ node, ...props }) => (
                        <h2 className={toneForLine(node?.position?.start.line ?? 0)} {...props} />
                    ),
                }}
            >
                {markdownFiles[article.md] ?? ''}
            </ReactMarkdown>
        </PageFrame>
    )
}

export default Article
