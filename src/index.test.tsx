import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Table from ".";
import React from "react";
import "@testing-library/jest-dom";

test("it renders", async () => {
  render(
    <Table
      getRowKey={(item) => item.id}
      columns={[{ key: "id", renderCell: (item) => item.id, label: "Id" }]}
      data={[{ id: "12345678" }]}
    />,
    { legacyRoot: true }
  );

  expect(await screen.findByText("12345678")).toBeInTheDocument();
  expect(await screen.findByText("Id")).toBeInTheDocument();
});
