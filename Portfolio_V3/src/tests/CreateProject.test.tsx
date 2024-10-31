import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, test } from "vitest";
import CreateProject from "../frontend/components/CreateProject";
import '@testing-library/jest-dom';

describe("CreateProjectComponent", () => {
  test("renders all form fields correctly", () => {
    render(<CreateProject onAdd={vi.fn()} />);

    //får ikke expect til å fungere, fatter ikke hvorfor når den fungerer fint i utils.test.ts
    
    expect(screen.getByLabelText("Navn:")).toBeInTheDocument();
    expect(screen.getByLabelText("Beskrivelse:")).toBeInTheDocument();
    expect(screen.getByLabelText("StartDato: yyyy-mm-dd")).toBeInTheDocument();
    
    expect(screen.getByLabelText("SluttDato: yyyy-mm-dd")).toBeInTheDocument();
    expect(screen.getByLabelText("Teknologier:")).toBeInTheDocument();
    expect(screen.getByLabelText("RepositoryURL:")).toBeInTheDocument();
    expect(screen.getByLabelText("Status:")).toBeInTheDocument();
  });

  it("calls onAdd with the correct data when the form is submitted", () => {
    const mockOnAdd = vi.fn();
    render(<CreateProject onAdd={mockOnAdd} />);

    fireEvent.change(screen.getByLabelText("Navn:"), { target: { value: "Testprosjekt" } });
    fireEvent.change(screen.getByLabelText("Beskrivelse:"), { target: { value: "Dette er en testbeskrivelse" } });
    fireEvent.change(screen.getByLabelText("StartDato: yyyy-mm-dd"), { target: { value: "2024-01-01" } });
    fireEvent.change(screen.getByLabelText("SluttDato: yyyy-mm-dd"), { target: { value: "2024-12-31" } });
    fireEvent.change(screen.getByLabelText("Teknologier:"), { target: { value: "React, TypeScript" } });
    fireEvent.change(screen.getByLabelText("RepositoryURL:"), { target: { value: "https://github.com/testrepo" } });
    fireEvent.change(screen.getByLabelText("Status:"), { target: { value: "In progress" } });

    fireEvent.click(screen.getByText("Legg til"));

    expect(mockOnAdd).toHaveBeenCalledWith({
      id: expect.any(String),
      name: "Testprosjekt",
      description: "Dette er en testbeskrivelse",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      technologies: "React, TypeScript",
      repositoryURL: "https://github.com/testrepo",
      status: "In progress",
      isPublic: true,
    });
  });
});