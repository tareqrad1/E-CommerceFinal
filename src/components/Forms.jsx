/* eslint-disable react/no-unescaped-entities */
import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import { Link } from 'react-router-dom'
  export function SimpleRegistrationForm() {
    return (
      <Card color="transparent" shadow={false} className="flex flex-col justify-center items-center w-full h-full">
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" />
            <Input type="password" size="lg" label="Password" />
          </div>
          <Button className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray"  className="mt-4 text-center font-normal text-">
          Don't have an Account?
            <Link to='/' className="font-medium text-gray-900">
              sign up
            </Link>
          </Typography>
        </form>
      </Card>
    );
  }