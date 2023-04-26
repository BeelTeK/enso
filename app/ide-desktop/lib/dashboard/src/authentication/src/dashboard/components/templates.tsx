/** @file Renders the list of templates from which a project can be created. */
import * as svg from '../../components/svg'

// =================
// === Constants ===
// =================

/**
 * Dash border spacing is not supported by native CSS.
 * Therefore, use a background image to create the border.
 * It is essentially an SVG image that was generated by the website.
 * @see {@link https://kovart.github.io/dashed-border-generator}
 */
const BORDER = `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%233e515f' stroke-width='4' stroke-dasharray='15%2c 15' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e")`

// =================
// === Templates ===
// =================

/** Template metadata. */
interface Template {
    title: string
    description: string
    id: string
}

/** All templates for creating projects that have contents. */
const TEMPLATES: Template[] = [
    {
        title: 'Colorado COVID',
        id: 'Colorado_COVID',
        description: 'Learn to glue multiple spreadsheets to analyses all your data at once.',
    },
    {
        title: 'KMeans',
        id: 'Kmeans',
        description: 'Learn where to open a coffee shop to maximize your income.',
    },
    {
        title: 'NASDAQ Returns',
        id: 'NASDAQ_Returns',
        description: 'Learn how to clean your data to prepare it for advanced analysis.',
    },
    {
        title: 'Restaurants',
        id: 'Orders',
        description: 'Learn how to clean your data to prepare it for advanced analysis.',
    },
    {
        title: 'Github Stars',
        id: 'Stargazers',
        description: 'Learn how to clean your data to prepare it for advanced analysis.',
    },
]

// =======================
// === TemplatesRender ===
// =======================

/** Render all templates, and a button to create an empty project. */
interface TemplatesRenderProps {
    // Later this data may be requested and therefore needs to be passed dynamically.
    templates: Template[]
    onTemplateClick: (name: string | null) => void
}

function TemplatesRender(props: TemplatesRenderProps) {
    const { templates, onTemplateClick } = props

    /** The action button for creating an empty project. */
    const CreateEmptyTemplate = (
        <button
            onClick={() => {
                onTemplateClick(null)
            }}
            className="h-40 cursor-pointer"
        >
            <div className="flex h-full w-full border-dashed-custom rounded-2xl text-primary">
                <div className="m-auto text-center">
                    <button>{svg.CIRCLED_PLUS_ICON}</button>
                    <p className="font-semibold text-sm">New empty project</p>
                </div>
            </div>
        </button>
    )

    return (
        <>
            {CreateEmptyTemplate}
            {templates.map(template => (
                <button
                    key={template.title}
                    className="h-40 cursor-pointer"
                    onClick={() => {
                        onTemplateClick(template.id)
                    }}
                >
                    <div className="flex flex-col justify-end h-full w-full rounded-2xl overflow-hidden text-white text-left bg-cover bg-gray-500">
                        <div className="bg-black bg-opacity-30 px-4 py-2">
                            <h2 className="text-sm font-bold">{template.title}</h2>
                            <div className="text-xs h-16 text-ellipsis py-2">
                                {template.description}
                            </div>
                        </div>
                    </div>
                </button>
            ))}
        </>
    )
}

// =================
// === Templates ===
// =================

/** The `TemplatesRender`'s container. */
interface TemplatesProps {
    onTemplateClick: (name: string | null) => void
}

function Templates(props: TemplatesProps) {
    const { onTemplateClick } = props
    return (
        <div className="bg-white">
            <div className="mx-auto py-2 px-4 sm:py-4 sm:px-6 lg:px-8">
                <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <TemplatesRender templates={TEMPLATES} onTemplateClick={onTemplateClick} />
                </div>
            </div>
        </div>
    )
}
export default Templates