import {
  ABOUT_FOCUS,
  ABOUT_SECTIONS,
  ABOUT_SIDE_PROJECTS_AFTER,
  ABOUT_SIDE_PROJECTS_BEFORE,
  SKILLS,
  STACK_INTRO,
} from '../data/about'
import {
  BodyText,
  BulletList,
  Card,
  EmailIcon,
  ExternalLink,
  GitHubIcon,
  LinkedInIcon,
  LinkArrow,
  PageGrid,
  Section,
  TagList,
} from '../components/ui'
import { label, textClass } from '../lib/styles'
import { SITE } from '../lib/site'

export function About() {
  return (
    <PageGrid>
      {ABOUT_SECTIONS.map(section => (
        <Card key={section.title} className="sm:col-span-2">
          <Section title={section.title}>
            {section.paragraphs.map(paragraph => (
              <BodyText key={paragraph.slice(0, 48)}>{paragraph}</BodyText>
            ))}
            {section.title === "What I'm looking for" ? (
              <BodyText>
                {ABOUT_SIDE_PROJECTS_BEFORE}
                <ExternalLink href={SITE.studio} variant="inline">
                  {SITE.studioName}
                </ExternalLink>
                {ABOUT_SIDE_PROJECTS_AFTER}
              </BodyText>
            ) : null}
          </Section>
        </Card>
      ))}

      <Card>
        <p className={label}>Focus</p>
        <BulletList items={ABOUT_FOCUS} />
      </Card>

      <Card>
        <p className={label}>Stack</p>
        <p className={`text-sm ${textClass.body} leading-relaxed`}>{STACK_INTRO}</p>
        <TagList tags={SKILLS} />
      </Card>

      <Card className="sm:col-span-2">
        <p className={label}>Contact</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
          <ExternalLink
            href={`mailto:${SITE.email}`}
            variant="contact"
            className="flex items-center gap-2"
          >
            <EmailIcon className="text-white/60" />
            {SITE.email} <LinkArrow />
          </ExternalLink>
          <ExternalLink
            href={SITE.linkedin}
            variant="contact"
            className="flex items-center gap-2"
          >
            <LinkedInIcon className="text-white/60" />
            LinkedIn <LinkArrow />
          </ExternalLink>
          <ExternalLink
            href={SITE.github}
            variant="contact"
            className="flex items-center gap-2"
          >
            <GitHubIcon className="text-white/60" />
            GitHub <LinkArrow />
          </ExternalLink>
        </div>
      </Card>
    </PageGrid>
  )
}
