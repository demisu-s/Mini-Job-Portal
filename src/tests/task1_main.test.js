import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import CandidateRegistration from "../components/CandidateRegistration";
import App from "../App";

describe("Home Component", () => {
  it("home component renders without crashing", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });

  it('displays the "Register Candidate" and "List Candidates" buttons', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText("Register Candidate")).toBeInTheDocument();
    expect(screen.getByText("List Candidates")).toBeInTheDocument();
  });

  it("should contain a specific CSS style for home element", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const homeElement = screen.getByTestId("home-component");
    expect(homeElement).toHaveStyle("textAlign:center");
  });

  it("ensures the header title is set to 'Job Portal'", () => {
    // You would repeat this for each component that should display the title
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(
      screen.getByTestId("header-title", { name: "Job Portal" })
    ).toBeInTheDocument();
  });

  it("checks that the Registration form is rendered with the correct fields", () => {
    render(
      <MemoryRouter initialEntries={["/candidate/registration"]}>
        <CandidateRegistration />
      </MemoryRouter>
    );

    expect(screen.getByTestId("submit-btn")).toBeInTheDocument();
    expect(screen.getByTestId("reset-btn")).toBeInTheDocument();
    expect(screen.getByTestId("add-btn")).toBeInTheDocument();

    // Check HTML element types
    expect(screen.getByTestId("form-input-name").tagName).toBe("INPUT");
    expect(screen.getByTestId("form-input-email").tagName).toBe("INPUT");
    expect(screen.getByTestId("form-input-role").tagName).toBe("INPUT");
    expect(screen.getByTestId("form-input-skill").tagName).toBe("INPUT");
    expect(screen.getByTestId("submit-btn").tagName).toBe("BUTTON");
    expect(screen.getByTestId("reset-btn").tagName).toBe("BUTTON");
    expect(screen.getByTestId("add-btn").tagName).toBe("BUTTON");
  });
});
