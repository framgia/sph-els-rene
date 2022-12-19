/* eslint-disable react/style-prop-object */
import React, { Fragment } from "react";
import moment from "moment";
import { getUserId } from "utils";
import Avatar from "shared/components/Image/Avatar";
import ButtonNavLink from "shared/components/Button/ButtonNavLink";
import LoadingPlainText from "shared/components/Spinner/LoadingPlainText";
import { PLAIN_TEXT } from "shared/components/Button/buttonType";
import { usePagination } from "shared/hooks/usePagination";
import Pagination from "shared/components/Pagination/Pagination";
import LayoutCenterChildren from "shared/components/Layout/Positioning/LayoutCenterChildren";
import { Link } from "react-router-dom";
import { useActivityLogs } from "../hooks/useActivityLogs";

function ActivityLogs() {
  const { activities, loading, isActivtyPage } = useActivityLogs();
  const { itemsPerPage, itemPaginated, paginate } = usePagination(
    10,
    activities
  );

  if (loading) {
    return <LoadingPlainText text={"Loading Activities . . ."} />;
  }

  return (
    <div>
      <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 text-slate-500">
        <Link to="/users/all_activity_logs">Activities</Link>
      </h4>
      <div className="flex justify-center mb-5">
        <ul className="bg-white rounded-lg border border-gray-200 w-full text-gray-900">
          {activities &&
            itemPaginated.map((log) => (
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
                  {log.category ? (
                    <Fragment>
                      <span>
                        {log.user_id === getUserId() ? (
                          <ButtonNavLink
                            link="/user/profile"
                            style={PLAIN_TEXT}
                            text={" You "}
                          />
                        ) : (
                          <ButtonNavLink
                            link={`/user/profile/${log.user_id}`}
                            style={PLAIN_TEXT}
                            text={` ${log.name} `}
                          />
                        )}
                        learend {log.score} out of 20 words in
                        <ButtonNavLink
                          link={`/user/category/${log.category_id}/view`}
                          style={PLAIN_TEXT}
                          text={` ${log.category} `}
                        />
                      </span>
                      <br />
                      <span className="text-slate-500" style={{ fontSize: 13 }}>
                        {moment(log.created_at).fromNow()}
                      </span>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <span>
                        {log.user_id === getUserId() ? (
                          <ButtonNavLink
                            link="/user/profile"
                            style={PLAIN_TEXT}
                            text={" You "}
                          />
                        ) : (
                          <ButtonNavLink
                            link={`/user/profile/${log.user_id}`}
                            style={PLAIN_TEXT}
                            text={` ${log.name} `}
                          />
                        )}
                        Followed
                        <ButtonNavLink
                          link={`/user/profile/${log.following_id}`}
                          style={PLAIN_TEXT}
                          text={` ${log.follows} `}
                        />
                      </span>
                      <br />
                      <span className="text-slate-500" style={{ fontSize: 13 }}>
                        {moment(log.created_at).fromNow()}
                      </span>
                    </Fragment>
                  )}
                </div>
              </li>
            ))}
        </ul>
      </div>
      {isActivtyPage && (
        <LayoutCenterChildren>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={activities.length}
            paginateTo={paginate}
          />
        </LayoutCenterChildren>
      )}
    </div>
  );
}

export default ActivityLogs;
