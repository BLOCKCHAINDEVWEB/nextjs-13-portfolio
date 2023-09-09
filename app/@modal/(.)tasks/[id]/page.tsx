import { notFound } from 'next/navigation'
import Image from 'next/image'

import Modal from '@/components/Modal'
import { tasksCards } from '@/constants'

const TasksModalPage = ({ params }: { params: { id: string } }) => {
  const tasksCardsTranslated = tasksCards.en || tasksCards.fr
  const { id } = params

  if (!tasksCardsTranslated[parseInt(id)]) return notFound()

  const { imgFile } = tasksCardsTranslated[parseInt(id)] || {}

  return (
    <Modal>
      <div className="flex w-full h-full justify-center items-center">
        <Image
          src={`/img/${imgFile}`}
          alt="project tasks image"
          width={1800}
          height={1800}
        />
      </div>
    </Modal>
  )
}

export default TasksModalPage
