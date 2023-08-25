/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";

const NewArrival = ({data}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="container py-[30px]">
      <Card className="card max-w-[24rem] overflow-hidden relative">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none relative"
        >
          <img
          className="w-full"
            src={data.image}
            alt={data.name}
          />
          {data.new && <h1 className="bg-black text-white font-[500] px-4 py-1 w-fit ml-3 absolute left-1 top-4">New</h1>}
        </CardHeader>
        <CardBody>
          <div className="px-1 flex items-center justify-between">
          <Typography variant="h4" color="blue-gray" className='text-[13px] lg:text-[17px]'>
            {data.name}
          </Typography>
          <Typography variant="small" color="blue-gray">
            {data.price}$
          </Typography>
          </div>
          <Typography variant="small" color="gray" className="text-start mt-4 ml-[5px] mb-2">
            {data.color}
          </Typography>
          <div>

        {active ? (
          <div className="flex items-center flex-col w-full space-y-2">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 text-xs shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >View to Cart
            </Button>

          <Button
            ripple={false}
            fullWidth={true}
            className="text-xs bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >remove from cart
          </Button>
          </div>
        ) : (
          <Button
          onClick={() =>setActive(true)}
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >Add to Cart
        </Button>
        ) }
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default NewArrival;
