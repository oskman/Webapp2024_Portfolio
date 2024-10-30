import { useState, FormEvent } from "react";
import { ContactForm } from "./types";

export default function CreateContact() {
 
  const [formData, setFormData] = useState<ContactForm>({
    id: crypto.randomUUID(),
    senderName: "",
    message: "",
  });

  
  const [error, setError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<ContactForm | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.senderName || !formData.message) {
      setError("Navn og melding må fylles ut!");
      return;
    }
    setError(null);
    setSubmittedData(formData);
    setFormData({
        id: crypto.randomUUID(),
        senderName: "",
        message: "",
    });
  };

  return (
    <aside id="contactForm">
      <h3>Kontakt meg</h3>

      <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Navn:</label>
        <input
          type="text"
          id="name"
          name="senderName" 
          value={formData.senderName}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Melding:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
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
