/* eslint-disable react/style-prop-object */
import React, { Fragment } from "react";
import Card from "../../../../../shared/components/Card/Card";
import GridColumn from "../../../../../shared/components/Layout/Grid/GridColumn";
import EditWord from "../../Edit/EditWord";

function ListWord({ itemPaginated, search, handleDelete }) {
  return (
    <Fragment>
      {itemPaginated
        .filter((word) => {
          return search.toString().toLowerCase() === ""
            ? word
            : word.title.toString().toLowerCase().includes(search) ||
                word.lesson.title.toString().toLowerCase().includes(search);
        })
        .map((w) => (
          <GridColumn style={"col-sm-12 col-md-6 col-lg-4 p-3"} key={w.id}>
            <Card title={w.title} subtitle={w.lesson.title}>
              <div className="mt-5">
                <h6>Options: </h6>
                <div className="row mb-5">
                  {w.choices.map((option) => (
                    <div
                      className="col-6 d-flex justify-content-center mb-2 mt-2"
                      key={option.id}
                    >
                      {option.word}
                    </div>
                  ))}
                </div>
              </div>
              <div className="d-flex justify-content-around">
                <EditWord id={w.id} />
                {!w.lesson.user_words.length > 0 && (
                  <button
                    type="button"
                    className="btn btn-outline-danger mx-1"
                    onClick={() => handleDelete(w.id, w.title)}
                  >
                    Delete
                  </button>
                )}
              </div>
            </Card>
          </GridColumn>
        ))}
    </Fragment>
  );
}

export default ListWord;
