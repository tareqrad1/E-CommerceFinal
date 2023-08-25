/* eslint-disable react/prop-types */
const Headings = ({heading}) => {
  return (
    <div className="container">
      <h1 className="text-[40px] font-bold capitalize mb-1">
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-black relative inline-block">
          <span className="relative text-white">{heading}</span>
        </span>
      </h1>
    </div>
  )
}

export default Headings