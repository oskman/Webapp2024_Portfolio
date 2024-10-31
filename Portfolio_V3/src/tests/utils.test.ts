import { describe, test, expect } from "vitest";
import { formatDate } from "../utils";

describe("formatDate", () => {
  test("formaterer datoen riktig", () => {
    
    const input = "2023-04-05";
    
    
    const result = formatDate(input);

    
    expect(result).toBe("2023-04-05");
  });

  test("gir en error for feil dato-format", () => {
    
    const input = "invalid-date";
    
    
    expect(() => formatDate(input)).toThrow("Not a valid date.");
  });

  test("formaterer dato med tid riktig", () => {
    
    const input = "2023-04-05T10:00:00Z";

    
    const result = formatDate(input);

    
    expect(result).toBe("2023-04-05");
  });
});