const LINE_STYLES = {
  removed: 'bg-c-removed text-c-red',
  added: 'bg-c-added text-c-green',
  context: 'text-c-muted',
}

const LINE_PREFIX = {
  removed: '- ',
  added: '+ ',
  context: '  ',
}

const LINE_LABEL = {
  removed: 'Removed: ',
  added: 'Added: ',
  context: '',
}

function DiffBlock({ lines }) {
  const rows = []
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    rows.push(
      <div
        key={i}
        className={`px-4 py-1 font-mono text-[12.5px] md:text-[13px] leading-6 whitespace-pre-wrap break-words ${LINE_STYLES[line.type]}`}
      >
        <span aria-hidden="true">{LINE_PREFIX[line.type]}</span>
        <span className="sr-only">{LINE_LABEL[line.type]}</span>
        {line.text}
      </div>
    )
  }

  return (
    <div className="rounded-md overflow-hidden border border-c-line bg-c-bg my-5">
      {rows}
    </div>
  )
}

export default DiffBlock
