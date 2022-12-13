/* eslint-disable react/style-prop-object */
import React, { Fragment, useState } from "react";
import moment from "moment";
import { getUserId } from "utils";
import Avatar from "shared/components/Image/Avatar";
import ButtonNavLink from "shared/components/Button/ButtonNavLink";
import LoadingPlainText from "shared/components/Spinner/LoadingPlainText";
import { PLAIN_TEXT } from "shared/components/Button/buttonType";

function GuestProfile(props) {
  const [isOpenTab1, setOpenTab1] = useState(true);
  const [isOpenTab2, setOpenTab2] = useState(false);

  const handleTab1 = () => {
    setOpenTab1(true);
    setOpenTab2(false);
  };

  const handleTab2 = () => {
    setOpenTab1(false);
    setOpenTab2(true);
  };

  return (
    <Fragment>
      <div>
        <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
          <li className="w-full">
            <button
              className="inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              onClick={handleTab1}
            >
              Follows
            </button>
          </li>
          <li className="w-full">
            <button
              className="inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              onClick={handleTab2}
            >
              Learned
            </button>
          </li>
        </ul>

        <div className={`${isOpenTab1 ? "block" : "hidden"}`}>
          {props.follows.length > 0 ? (
            <ul className="bg-white rounded-lg border border-gray-200 w-full text-gray-900">
              {props.follows.map((log) => (
                <li
                  className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg "
                  key={log.id}
                >
                  <Avatar
                    img={log.avatar}
                    style={
                      "rounded-full border-2 border-gray-200 float-left mx-5"
                    }
                  />
                  <div>
                    <span>
                      <ButtonNavLink
                        style={PLAIN_TEXT}
                        text={`${props.user.first_name} `}
                      />
                      followed
                      <ButtonNavLink
                        style={PLAIN_TEXT}
                        text={` ${log.name} `}
                        link={`/user/profile/${
                          log.id === getUserId() ? "" : log.id
                        }`}
                      />
                    </span>
                    <br />
                    <span className="text-secondary" style={{ fontSize: 13 }}>
                      {moment(log.created_at).fromNow()}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <LoadingPlainText text="No available item" />
          )}
        </div>

        <div className={`${isOpenTab2 ? "block" : "hidden"}`}>
          {props.learned.length > 0 ? (
            <ul className="bg-white rounded-lg border border-gray-200 w-full text-gray-900">
              {props.learned.map((log) => (
                <li
                  className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg "
                  key={log.id}
                >
                  <Avatar
                    img={log.avatar}
                    style={
                      "rounded-full border-2 border-gray-200 float-left mx-5"
                    }
                  />

                  <div>
                    <span>
                      <ButtonNavLink
                        style={PLAIN_TEXT}
                        text={`${props.user.first_name} `}
                      />
                      learend {log.score} out of 20 words in
                      <ButtonNavLink
                        style={PLAIN_TEXT}
                        text={` ${log.category} `}
                        link={`/user/category/${log.category_id}/view`}
                      />
                    </span>
                    <br />
                    <span className="text-secondary" style={{ fontSize: 13 }}>
                      {moment(log.created_at).fromNow()}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <LoadingPlainText text="No available item" />
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default GuestProfile;
