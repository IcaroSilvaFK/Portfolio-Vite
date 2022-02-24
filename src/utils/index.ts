export function DateFormat(date: string | undefined) {
  return new Intl.DateTimeFormat("pt-BR").format(new Date(date ? date : ""));
}
