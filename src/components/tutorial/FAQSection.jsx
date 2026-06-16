const FAQSection = ({ items }) => {
  if (!items?.length) return null;

  return (
    <section className="mt-12 border-t border-slate-200 pt-10 dark:border-slate-700">
      <h2 className="text-2xl font-bold text-slate-900 mb-6 dark:text-slate-100">
        Perguntas Frequentes
      </h2>
      <div className="space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-900"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 dark:text-slate-100">
              <span>{item.question}</span>
              <span className="text-blue-600 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-slate-700 leading-relaxed dark:text-slate-300">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
