import { Select, Option } from "@material-tailwind/react";
const TopRight = () => {
  return (
    <div className="flex justify-between items-center mb-6">
        <div className="space-x-2 cursor-pointer">
            <i className="fa-brands fa-buromobelexperte text-2xl"></i>
            <i className="fa-solid fa-list text-2xl"></i>
        </div>
        <div>
            <Select variant="outlined" label="Sorted By">
                <Option >Best Sellers</Option>
                <Option >New Arrival</Option>
                <Option >Featured</Option>
                <Option >Final Offers</Option>
            </Select>
        </div>
    </div>
  )
}

export default TopRight