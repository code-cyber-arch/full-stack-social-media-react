import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

const LogIn = () => {
  return (
    <Layout hideNavigation={true}>
      <div className="h-screen items-center flex">
        <div className="max-w-xs mx-auto grow -mt-24">
          <Card>
            <div className="justify-center">
              <div>
                <h1 className="font-semibold text-center text-4xl mb-6">
                  Login
                </h1>
              </div>
              <div className="w-full ">
                <input
                  className="border rounded-md w-full mb-3 p-1"
                  type="email"
                  name=""
                  id=""
                  placeholder=" your email"
                />
                <input
                  className="border rounded-md w-full mb-3 p-1"
                  type="password"
                  name=""
                  id=""
                  placeholder=" your password"
                />
                <button className="bg-gray-800 text-white p-1 w-full rounded-lg hover:bg-socialBlue">
                  Login
                </button>
              </div>
            </div>
          </Card>
          <Card noPadding={true}>
            <div className="">
              <div>
                <a
                  href=""
                  className="flex gap-4 items-center justify-center p-4 border-b hover:bg-socialBlue hover:text-white hover:border-b-0 hover:scale-110 transition-all hover:rounded-md"
                >
                  <FaGoogle size={25} className="text-red-950" />
                  Login with google
                </a>
              </div>
              <div>
                <a
                  href=""
                  className="flex gap-4 items-center justify-center p-4 border-b hover:bg-socialBlue hover:text-white hover:border-b-0 hover:scale-110 transition-all hover:rounded-md"
                >
                  <FaFacebook size={25} className="text-red-950" />
                  Login with facebook
                </a>
              </div>
              <div>
                <a
                  href=""
                  className="flex gap-4 items-center justify-center p-4 border-b hover:bg-socialBlue hover:text-white hover:border-b-0 hover:scale-110 transition-all hover:rounded-md"
                >
                  <FaTwitter size={25} className="text-red-950" />
                  Login with twitter
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default LogIn;
