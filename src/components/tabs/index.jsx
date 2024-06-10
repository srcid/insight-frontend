function Tabs({
  children
}) {

  return (
    <div role="tablist" className="tabs tabs-lifted">
      {children}
    </div>
  );
}

function Tab({
  title,
  checked,
  value,
  children,
  onChange
}) {

  return (
    <>
      <input
        className="tab [--tab-border-color:oklch(var(--nc))]"
        role="tab"
        type="radio"
        value={value}
        name={title}
        aria-label={title}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
      />
      <div
        className="tab-content p-6 border-t-neutral-content"
        role="tabpanel"
      >
        {children}
      </div>
    </>
  );
}

Tabs.Tab = Tab;

export { Tabs };