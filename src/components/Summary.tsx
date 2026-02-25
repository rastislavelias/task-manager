type SummaryProps = {
  total: number
  completed: number
}

export default function Summary({
  total,
  completed
}: SummaryProps) {
  return (
    <div className='summary'>
      {total} Tasks total · {completed} Completed
    </div>
  )
}
