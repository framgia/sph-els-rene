/* eslint-disable react/style-prop-object */
import React, { Fragment } from "react";
import Button from "shared/components/Button/Button";
import { OUTLINE_RED } from "shared/components/Button/buttonType";
import Card from "shared/components/Card/Card";
import GridColumn from "shared/components/Layout/Grid/GridColumn";
import GridRow from "shared/components/Layout/Grid/GridRow";
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
          <GridColumn style="lg:col-span-2 md:col-span-3 col-span-6" key={w.id}>
            <Card title={w.title} subtitle={w.lesson.title}>
              <div className="mt-5">
                <h6>Options: </h6>
                <GridRow style="grid-cols-2">
                  {w.choices.map((option) => (
                    <GridColumn style="col-span-1" key={option.id}>
                      <div className="flex justify-center">{option.word}</div>
                    </GridColumn>
                  ))}
                </GridRow>
              </div>
              <div className="flex justify-around mt-5">
                <EditWord id={w.id} />
                {!w.lesson.user_words.length > 0 && (
                  <Button
                    text="Delete"
                    style={OUTLINE_RED}
                    handler={() => handleDelete(w.id, w.title)}
                  />
                )}
              </div>
            </Card>
          </GridColumn>
        ))}
    </Fragment>
  );
}

export default ListWord;
