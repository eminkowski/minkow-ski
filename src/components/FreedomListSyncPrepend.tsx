import { BodyText, Card, Section } from './ui'
import { FREEDOM_LIST_SYNC_CASE_STUDY } from '../data/freedom-list-sync-case-study'

const authStory = FREEDOM_LIST_SYNC_CASE_STUDY.summary[1]

export function FreedomListSyncPrepend() {
  return (
    <Card>
      <Section title="Credentials stay on your machine">
        <BodyText>{authStory}</BodyText>
      </Section>
    </Card>
  )
}
