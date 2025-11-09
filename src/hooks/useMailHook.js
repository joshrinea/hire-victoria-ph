import { Email } from "../static/data/data";

export default function useMailHook() {
  const email = Email;
  window.location.href = `mailto:${email}`;
}
