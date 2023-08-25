/* eslint-disable react/prop-types */
const Headings = ({heading}) => {
  return (
    <div className="container">
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-black relative inline-block">
          <span className="relative text-white text-[24px] font-bold capitalize">{heading}</span>
        </span>
    </div>
  )
}

export default Headings