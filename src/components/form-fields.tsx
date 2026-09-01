export function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
  required,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const id = `field-${name}`;
  const inputClass =
    "w-full rounded-xl border bg-surface px-4 py-3 text-sm outline-none transition-colors placeholder:text-ink-muted focus:border-ember " +
    (error ? "border-red-400" : "border-border");

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
        {required && <span className="text-ember-strong"> *</span>}
      </label>
      {textarea ? (
        <textarea id={id} name={name} placeholder={placeholder} rows={3} className={inputClass} />
      ) : (
        <input id={id} name={name} type={type} placeholder={placeholder} className={inputClass} />
      )}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

export function SelectField({
  label,
  name,
  options,
  error,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  error?: string;
  required?: boolean;
}) {
  const id = `field-${name}`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
        {required && <span className="text-ember-strong"> *</span>}
      </label>
      <select
        id={id}
        name={name}
        defaultValue=""
        className={
          "w-full appearance-none rounded-xl border bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-ember " +
          (error ? "border-red-400" : "border-border")
        }
      >
        <option value="" disabled>
          —
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
