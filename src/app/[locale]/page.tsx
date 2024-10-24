import { Main } from "@/components"
import type { Metadata } from "next"
import { use } from "react"

export const metadata: Metadata = {
  title: "Jiwon Jason Choi 최지원 ",
  description: "My Personal Page",
}

export default function Index({ params }: { params: Promise<{ locale: Language }> }) {
  const { locale } = use(params)
  return <Main locale={locale} />
}
