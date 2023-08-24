import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Headings from "../Headings";

const NewArrival = () => {
  return (
    <div className="container py-[30px]">
        <Headings heading='New Arrivals' />
      <Card className="max-w-[24rem] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="ui/ux review check"
          />
        </CardHeader>
        <CardBody>
          <CardBody className="p-2 flex items-center justify-between">
          <Typography variant="h4" color="blue-gray">
            Headphones
          </Typography>
          <Typography variant="small" color="blue-gray">
            130.05$
          </Typography>
          </CardBody>
          <Typography variant="paragraph" color="gray" className="text-start mt-4">
            black and wite
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default NewArrival;
