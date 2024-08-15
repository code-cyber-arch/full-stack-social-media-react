import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Avatar from "../components/Avatar";

const NotificationPage = () => {
  return (
    <Layout>
      <Card>
        <div className="font-bold text-gray-600">Notifications</div>
      </Card>
      <Card noPadding={true}>
        <div className="">
          <div className="flex gap-3 items-center border-b border-b-gray-100 p-4">
            <Avatar />
            <div className="text-gray-600">
              <span className="font-semibold hover:underline">Abdu Mah</span>{" "}
              liked your{" "}
              <a href="" className="text-socialBlue hover:underline">
                photos
              </a>
            </div>
          </div>
          <div className="flex gap-3 items-center border-b border-b-gray-100 p-4">
            <Avatar />
            <div className="text-gray-600">
              <span className="font-semibold hover:underline">Abdu Mah</span>{" "}
              liked your{" "}
              <a href="" className="text-socialBlue hover:underline">
                photos
              </a>
            </div>
          </div>
          <div className="flex gap-3 items-center border-b border-b-gray-100 p-4">
            <Avatar />
            <div className="text-gray-600">
              <span className="font-semibold hover:underline">Abdu Mah</span>{" "}
              liked your{" "}
              <a href="" className="text-socialBlue hover:underline">
                photos
              </a>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
};

export default NotificationPage;
