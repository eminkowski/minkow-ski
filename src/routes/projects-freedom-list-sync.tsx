import { CaseStudyPage } from '../components/CaseStudyPage'
import { FreedomListSyncDiagram } from '../components/FreedomListSyncDiagram'
import { FreedomListSyncPrepend } from '../components/FreedomListSyncPrepend'
import { FREEDOM_LIST_SYNC_CASE_STUDY } from '../data/freedom-list-sync-case-study'

export function ProjectsFreedomListSync() {
  return (
    <CaseStudyPage
      study={FREEDOM_LIST_SYNC_CASE_STUDY}
      diagram={<FreedomListSyncDiagram />}
      prepend={<FreedomListSyncPrepend />}
    />
  )
}
