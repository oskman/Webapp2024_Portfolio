import { useState } from "react";
import { ContactForm } from "./types";
import {useForm} from "../hooks/useForm";

export default function CreateContact() {
  const [error, setError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<ContactForm | null>(null);

  const initialValues: ContactForm = {
    id: crypto.randomUUID(),
    senderName: "",
    message: "",
  };

  const { formVals, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit: async (data) => {
      if (!data.senderName || !data.message) {
        setError("Navn og melding må fylles ut!");
        return;
      }
      setError(null);
      setSubmittedData(data);
    },
  });

  return (
    <aside id="contactForm">
      <h3>Kontakt meg</h3>

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Navn:</label>
        <input
          type="text"
          id="name"
          name="senderName"
          value={formVals.senderName}
          onChange={handleChange("senderName")}
          required
        />

        <label htmlFor="message">Melding:</label>
        <textarea
          id="message"
          name="message"
          value={formVals.message}
          onChange={handleChange("message")}
          required
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Send</button>
      </form>

      {submittedData && (
        <div>
          <h4>Innsendt data:</h4>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </aside>
  );
}
