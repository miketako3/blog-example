import m2h from "zenn-markdown-html";

export default async function markdownToHtml(markdown: string) {
  return m2h(markdown)
}
