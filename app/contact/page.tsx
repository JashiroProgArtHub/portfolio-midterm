import ContactForm from "@/components/feature/contact/ContactForm"

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-4 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary/90">
            Contact
          </p>
          <h1 className="text-4xl font-semibold sm:text-5xl">Start a conversation</h1>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            Have a project, question, or just want to say hello? Send a message below and I&apos;ll
            follow up with a quick reply.
          </p>
        </div>

        <ContactForm />
      </div>
    </main>
  )
}
