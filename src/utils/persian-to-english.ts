export function e2p(str: string | number) {
  return str?.toString()?.replace(/\d/g, (d: any) => "۰۱۲۳۴۵۶۷۸۹"[d]); //fix:
}
