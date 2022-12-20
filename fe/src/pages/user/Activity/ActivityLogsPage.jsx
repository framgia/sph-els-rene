import React from "react";
import Container from "shared/components/Layout/Container/Container";
import ActivityLogs from "./components/ActivityLogs";
import Card from "shared/components/Card/Card";

function ActivityLogsPage() {
  return (
    <Container>
      <Card>
        <ActivityLogs />
      </Card>
    </Container>
  );
}

export default ActivityLogsPage;
