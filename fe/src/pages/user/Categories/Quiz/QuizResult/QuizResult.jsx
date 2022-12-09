/* eslint-disable react/style-prop-object */
import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import Card from "../../../../../shared/components/Card/Card";
import Container from "../../../../../shared/components/Layout/Container/Container";
import LayoutAroundChildren from "../../../../../shared/components/Layout/Positioning/LayoutAroundChildren";
import LayoutSpacer from "../../../../../shared/components/Layout/Positioning/LayoutSpacer";
import Table from "../../../../../shared/components/Table/Table";

import { useQuizResult } from "./hooks/useQuizResult";

function QuizResult() {
  const { score, result, category } = useQuizResult();

  return (
    <Fragment>
      <ToastContainer />
      <Container>
        <LayoutSpacer>
          <LayoutAroundChildren>
            <h5>{category.title}</h5>
            <h5>{score} out of 20</h5>
          </LayoutAroundChildren>
        </LayoutSpacer>

        <Card style={"w-75 mx-auto"}>
          <Table
            style={"table table-borderless"}
            tableHeader={["", "Word", "Translation"]}
          >
            {result?.map((item) => (
              <tr key={item.word_id}>
                <th scope="row">
                  {item.remark === "1" ? (
                    <span>&#9989;</span>
                  ) : (
                    <span>&#10060;</span>
                  )}
                </th>
                <td>{item.word}</td>
                <td>{item.translation}</td>
              </tr>
            ))}
          </Table>
        </Card>
      </Container>
    </Fragment>
  );
}

export default QuizResult;
