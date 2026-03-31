import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

// ─── helpers ────────────────────────────────────────────────────────────────

function renderApp() {
    return render(<App />)
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

describe('Navbar', () => {
    it('renders the MicroLearn logo', () => {
        renderApp()
        const logos = screen.getAllByText('MicroLearn')
        expect(logos.length).toBeGreaterThanOrEqual(1)
        // The first occurrence is the navbar logo inside an <a> tag
        expect(logos[0].closest('a')).toHaveClass('nav-logo')
    })

    it('logo is a link that scrolls to top', () => {
        renderApp()
        const logo = screen.getAllByText('MicroLearn')[0].closest('a')
        expect(logo).toHaveAttribute('href', '#')
    })

    it('renders Features, Topics and Get Started Free nav links', () => {
        renderApp()
        expect(screen.getByRole('link', { name: 'Features' })).toHaveAttribute('href', '#features')
        expect(screen.getByRole('link', { name: 'Topics' })).toHaveAttribute('href', '#topics')
        expect(screen.getByRole('link', { name: 'Get Started Free' })).toHaveAttribute('href', '#email-form')
    })
})

// ─── Hero section ────────────────────────────────────────────────────────────

describe('Hero section', () => {
    it('renders the main headline', () => {
        renderApp()
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Learn three Skills in')
    })

    it('renders the gradient "3 Minutes a Day" span', () => {
        renderApp()
        expect(screen.getByText('3 Minutes a Day')).toBeInTheDocument()
    })

    it('renders the hero badge', () => {
        renderApp()
        expect(screen.getByText(/New lessons every week/i)).toBeInTheDocument()
    })

    it('"Get Free Mini Course" button scrolls to the email form', () => {
        const scrollIntoViewMock = vi.fn()
        renderApp()
        // jsdom does not implement scrollIntoView, so we patch it on the element
        const emailSection = document.getElementById('email-form')
        if (emailSection) emailSection.scrollIntoView = scrollIntoViewMock

        fireEvent.click(screen.getByRole('button', { name: /Get Free Mini Course/i }))
        expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' })
    })

    it('renders the hero app image', () => {
        renderApp()
        expect(screen.getByAltText('MicroLearn App Interface')).toBeInTheDocument()
    })
})

// ─── Stats bar ───────────────────────────────────────────────────────────────

describe('Stats bar', () => {
    it('displays all four stats', () => {
        renderApp()
        expect(screen.getByText('10,000+')).toBeInTheDocument()
        expect(screen.getByText('500+')).toBeInTheDocument()
        expect(screen.getByText('3 min')).toBeInTheDocument()
        expect(screen.getByText('4.9 ★')).toBeInTheDocument()
    })

    it('shows descriptive labels for each stat', () => {
        renderApp()
        expect(screen.getByText('Active Learners')).toBeInTheDocument()
        expect(screen.getByText('Micro Lessons')).toBeInTheDocument()
        expect(screen.getByText('Avg. Lesson Length')).toBeInTheDocument()
        expect(screen.getByText('Learner Rating')).toBeInTheDocument()
    })
})

// ─── Features section ────────────────────────────────────────────────────────

describe('Features section', () => {
    it('renders the section heading', () => {
        renderApp()
        expect(screen.getByText('Learning, reimagined for your schedule')).toBeInTheDocument()
    })

    it('renders all four feature cards', () => {
        renderApp()
        expect(screen.getByText('Focused Learning')).toBeInTheDocument()
        expect(screen.getByText('Gamified Progress')).toBeInTheDocument()
        expect(screen.getByText('Fits Your Schedule')).toBeInTheDocument()
        expect(screen.getByText('Stay Competitive')).toBeInTheDocument()
    })

    it('features section has the correct id anchor', () => {
        renderApp()
        expect(document.getElementById('features')).toBeInTheDocument()
    })
})

// ─── Topics section ──────────────────────────────────────────────────────────

describe('Topics section', () => {
    it('renders the section heading', () => {
        renderApp()
        expect(screen.getByText("What You'll Learn")).toBeInTheDocument()
    })

    it('renders all eight topic tags', () => {
        renderApp()
        const tags = [
            '🚀 Leadership Skills',
            '💻 Web Development',
            '💬 Communication',
            '📊 Data Analytics',
            '🗂️ Product Management',
            '🎨 Design Thinking',
            '⏱️ Time Management',
            '🎤 Public Speaking',
        ]
        tags.forEach((tag) => expect(screen.getByText(tag)).toBeInTheDocument())
    })

    it('topics section has the correct id anchor', () => {
        renderApp()
        expect(document.getElementById('topics')).toBeInTheDocument()
    })
})

// ─── Email sign-up form (integration) ────────────────────────────────────────

describe('Email sign-up form', () => {
    beforeEach(() => {
        vi.spyOn(console, 'log').mockImplementation(() => { })
    })

    it('renders the email input and submit button', () => {
        renderApp()
        expect(screen.getByPlaceholderText('Enter your email address')).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /Get Free Course/i })).toBeInTheDocument()
    })

    it('updates the email input value as the user types', async () => {
        const user = userEvent.setup()
        renderApp()
        const input = screen.getByPlaceholderText('Enter your email address') as HTMLInputElement
        await user.type(input, 'hello@example.com')
        expect(input.value).toBe('hello@example.com')
    })

    it('shows the success message after a valid email is submitted', async () => {
        const user = userEvent.setup()
        renderApp()
        await user.type(screen.getByPlaceholderText('Enter your email address'), 'test@example.com')
        await user.click(screen.getByRole('button', { name: /Get Free Course/i }))
        await waitFor(() =>
            expect(screen.getByText(/Thanks! Check your inbox for your first mini course/i)).toBeInTheDocument()
        )
    })

    it('hides the form after successful submission', async () => {
        const user = userEvent.setup()
        renderApp()
        await user.type(screen.getByPlaceholderText('Enter your email address'), 'test@example.com')
        await user.click(screen.getByRole('button', { name: /Get Free Course/i }))
        await waitFor(() =>
            expect(screen.queryByPlaceholderText('Enter your email address')).not.toBeInTheDocument()
        )
    })

    it('logs the submitted email to the console', async () => {
        const user = userEvent.setup()
        renderApp()
        await user.type(screen.getByPlaceholderText('Enter your email address'), 'log@example.com')
        await user.click(screen.getByRole('button', { name: /Get Free Course/i }))
        expect(console.log).toHaveBeenCalledWith('Email submitted:', 'log@example.com')
    })

    it('does not submit with an empty email (required validation)', () => {
        renderApp()
        const input = screen.getByPlaceholderText('Enter your email address') as HTMLInputElement
        expect(input).toBeRequired()
    })

    it('renders the privacy note', () => {
        renderApp()
        expect(screen.getByText(/No spam/i)).toBeInTheDocument()
    })

    it('email-form section has the correct id anchor', () => {
        renderApp()
        expect(document.getElementById('email-form')).toBeInTheDocument()
    })
})

// ─── Footer ──────────────────────────────────────────────────────────────────

describe('Footer', () => {
    it('renders the copyright notice', () => {
        renderApp()
        expect(screen.getByText(/2025 MicroLearn/i)).toBeInTheDocument()
    })

    it('renders the tagline', () => {
        renderApp()
        expect(screen.getByText(/Built for busy professionals/i)).toBeInTheDocument()
    })

    it('renders the photo attribution links', () => {
        renderApp()
        expect(screen.getByRole('link', { name: 'Alexander Grey' })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: 'Unsplash' })).toBeInTheDocument()
    })

    it('attribution links open in a new tab', () => {
        renderApp()
        const link = screen.getByRole('link', { name: 'Alexander Grey' })
        expect(link).toHaveAttribute('target', '_blank')
        expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
})