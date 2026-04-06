// src/pages/Contact.jsx
import { use, useState } from "react";
import { CLUB, ASSETS } from "../data/clubData";
import { PageHeader } from "../components/ui";
import { useScrollReveal } from "../hooks";

const inputBase = {
  borderColor:  "var(--bord)",
  fontFamily:   "'Outfit', sans-serif",
  color:        "var(--ink)",
  borderWidth:  "1.5px",
  borderStyle:  "solid",
  borderRadius: 12,
  padding:      "14px 16px",
  fontSize:     14,
  fontWeight:   500,
  width:        "100%",
  outline:      "none",
  background:   "white",
  transition:   "border-color .2s",
};

export default function Contact() {
  useScrollReveal();
  const [form, setForm] = useState({ nom: "", email: "", sujet: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = () => {
    if (form.nom.trim() && form.email.trim()) setSent(true);
  };

  return (
    <>
      <PageHeader title="CONTACT" breadcrumb={["Contact"]} />

      <section
        className="py-20 px-5 sm:px-8 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(150deg,#043018 0%,var(--g) 55%,#15C44F 100%)",
        }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Info */}
            <div className="text-white reveal from-left">
              <div
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-4"
                style={{ color: "var(--gold)" }}
              >
                <span
                  style={{
                    width: 22, height: 2, background: "var(--gold)",
                    display: "inline-block", borderRadius: 2,
                  }}
                />
                Nous contacter
              </div>
              <h2
                className="font-display leading-none mb-5"
                style={{ fontSize: "clamp(38px,5vw,64px)" }}
              >
                REJOIGNEZ
                <br />LA FAMILLE
              </h2>
              <p
                className="font-normal mb-8"
                style={{ fontSize: 16, lineHeight: 1.8, opacity: 0.75 }}
              >
                Vous souhaitez rejoindre notre club, inscrire votre enfant ou
                en savoir plus sur nos programmes ? Nous serons ravis de vous
                accueillir dans la famille SFC Tenakourou.
              </p>

              <div className="space-y-5">
                {[
                  ["📍", "Localisation", `${CLUB.city}, ${CLUB.country}`],
                  ["✉️", "Email",        CLUB.email],
                  ["📞", "Téléphone",    CLUB.phone],
                ].map(([ico, label, val]) => (
                  <div key={label} className="flex items-center gap-4">
                    <span className="text-2xl">{ico}</span>
                    <div>
                      <div
                        className="text-xs font-semibold tracking-widest uppercase"
                        style={{ opacity: 0.55 }}
                      >
                        {label}
                      </div>
                      <div className="font-semibold mt-0.5">{val}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-10 w-20 h-20 rounded-3xl overflow-hidden border-2"
                style={{ borderColor: "rgba(255,255,255,.25)" }}
              >
                <img
                  src={ASSETS.logo}
                  alt="SFC Tenakourou"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Formulaire */}
            <div className="reveal from-right">
              <div className="rounded-3xl p-7 sm:p-9" style={{ background: "white" }}>
                {!sent ? (
                  <>
                    <h3
                      className="font-display text-2xl mb-6"
                      style={{ color: "var(--ink)" }}
                    >
                      ENVOYEZ UN MESSAGE
                    </h3>
                    <div className="space-y-4">
                      {[
                        ["nom",    "Votre nom complet",     "text"],
                        ["email",  "Votre adresse email",   "email"],
                        ["sujet",  "Sujet du message",      "text"],
                      ].map(([key, ph, type]) => (
                        <input
                          key={key}
                          type={type}
                          placeholder={ph}
                          value={form[key]}
                          onChange={update(key)}
                          style={inputBase}
                          onFocus={(e) => (e.target.style.borderColor = "var(--g)")}
                          onBlur={(e)  => (e.target.style.borderColor = "var(--bord)")}
                        />
                      ))}
                      <textarea
                        placeholder="Votre message..."
                        value={form.message}
                        onChange={update("message")}
                        rows={5}
                        style={{ ...inputBase, resize: "none" }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--g)")}
                        onBlur={(e)  => (e.target.style.borderColor = "var(--bord)")}
                      />
                      <button
                        onClick={submit}
                        className="btn-primary w-full justify-center py-4"
                      >
                        Envoyer le message ✉️
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">✅</div>
                    <h3
                      className="font-display text-3xl mb-2"
                      style={{ color: "var(--g)" }}
                    >
                      MESSAGE ENVOYÉ !
                    </h3>
                    <p className="font-medium text-sm" style={{ color: "var(--muted)" }}>
                      Nous vous répondrons dans les plus brefs délais.
                      Merci de l'intérêt que vous portez au SFC Tenakourou !
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="btn-outline mt-6 text-sm py-2.5 px-5"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
