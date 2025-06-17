// src/components/Contact.jsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import TitleHeader from "../components/TitleHeader";

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    } finally {
      setLoading(false);
    }
  };

  // Objeto de traducciones de esta sección
  const c = t("contact", { returnObjects: true });

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full max-w-3xl">
        <TitleHeader
          title={c.title}
          sub={c.sub}
        />

        <div className="mt-16 flex justify-center">
          <div className="flex-center card-border rounded-xl p-10 w-full">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-7"
            >
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  {c.form.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={c.form.namePlaceholder}
                  required
                  className="w-full p-3 rounded-md border border-gray-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  {c.form.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={c.form.emailPlaceholder}
                  required
                  className="w-full p-3 rounded-md border border-gray-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  {c.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={c.form.messagePlaceholder}
                  rows="5"
                  required
                  className="w-full p-3 rounded-md border border-gray-300"
                />
              </div>

              <button type="submit" disabled={loading}>
                <div className="cta-button group">
                  <div className="bg-circle" />
                  <p className="text">
                    {loading ? c.form.sending : c.form.send}
                  </p>
                  <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                  </div>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
