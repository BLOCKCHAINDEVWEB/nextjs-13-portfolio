import Image from 'next/image'

const TaskDetails = ({ imgFile }: { imgFile: string }) => (
  <div className="mx-auto w-[800px] overflow-hidden bg-white">
    <div className="float-left h-[600px] w-[600px]">
      <Image
        src={`/img/${imgFile}`}
        alt="project tasks image"
        width={1800}
        height={1800}
      />
    </div>

    <div className="float-right h-full w-[200px] p-2">
      <h3 className="text-2xl font-semibold text-gray-800">Task</h3>
      <h4 className="text-lg font-normal text-gray-600">
        Taken by{' '}
        <a
          href={`https://www.instagram.com/`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-gray-700"
        >
          {`@Task`}
        </a>
      </h4>
    </div>
  </div>
)

export default TaskDetails
