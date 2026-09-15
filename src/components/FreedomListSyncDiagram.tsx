import { DiagramConnector, DiagramNode, diagramShellClass } from './ui/DiagramFlow'

export function FreedomListSyncDiagram() {
  return (
    <div className={diagramShellClass}>
      <div className="flex flex-col gap-2 sm:hidden">
        <DiagramNode title="Blocklist source" subtitle="hosts · domains · CSV · JSON" />
        <DiagramConnector label="parse + normalize" />
        <DiagramNode title="CLI" subtitle="inspect · diff · sync" />
        <DiagramConnector label="session + CSRF PATCH" />
        <DiagramNode title="Freedom" subtitle="filter lists · shards" />
      </div>

      <div className="hidden sm:flex sm:flex-col gap-2">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <DiagramNode title="Source" subtitle="URL or local file" />
          <DiagramNode title="CLI" subtitle="diff · shard · checkpoint" />
          <DiagramNode title="Freedom" subtitle="CSRF filter-list API" />
        </div>
        <DiagramConnector label="browser login → local session → additive batched writes" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <DiagramNode title="Parsers" subtitle="fail closed on shape" />
          <DiagramNode title="Shards" subtitle="Base · Base 2 · Base 3" />
          <DiagramNode title="Safety" subtitle="dry-run · size caps" />
        </div>
      </div>
    </div>
  )
}
