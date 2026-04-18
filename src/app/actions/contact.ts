"use server";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function sendContactEmail(
  _prev: ContactState,
  data: FormData,
): Promise<ContactState> {
  const name = data.get("name")?.toString().trim();
  const email = data.get("email")?.toString().trim();
  const message = data.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Preencha todos os campos." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "E-mail inválido." };
  }

  try {
    /**
     * TODO: conecte aqui seu provedor de e-mail.
     * Exemplos:
     *   Resend  → await resend.emails.send({ from, to, subject, html })
     *   Nodemailer → await transporter.sendMail({ from, to, subject, text })
     *
     * Por enquanto, simula sucesso após 800ms.
     */
    await new Promise((r) => setTimeout(r, 800));

    console.log("[contact]", { name, email, message });

    return { status: "success" };
  } catch {
    return { status: "error", message: "Erro ao enviar. Tente novamente." };
  }
}
