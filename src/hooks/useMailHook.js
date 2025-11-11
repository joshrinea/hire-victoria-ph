import { Email } from "../utils/contants/constants";

export default function useMailHook() {
  const email = Email;
  window.location.href = `mailto:${email}`;
}
