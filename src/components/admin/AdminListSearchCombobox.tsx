'use client';

import { useEffect, useId, useRef, useState } from 'react';

export interface AdminListSearchComboboxProps<T> {
  items: T[];
  committedValue: string;
  onCommit: (value: string) => void;
  inputId: string;
  ariaLabel: string;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  getSearchFields: (item: T) => Array<string | number | null | undefined>;
  getCommitValue: (item: T) => string;
  formatPrimary: (item: T) => string;
  formatSecondary?: (item: T) => string;
}

export default function AdminListSearchCombobox<T>({
  items,
  committedValue,
  onCommit,
  inputId,
  ariaLabel,
  placeholder,
  className = 'relative w-full max-w-xl',
  inputClassName,
  getSearchFields,
  getCommitValue,
  formatPrimary,
  formatSecondary,
}: AdminListSearchComboboxProps<T>) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(committedValue);
  const rootRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  useEffect(() => {
    setQuery(committedValue);
  }, [committedValue]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, []);

  const q = query.trim().toLowerCase();
  const matches = (q
    ? items.filter((item) =>
        getSearchFields(item).some((field) => String(field ?? '').toLowerCase().includes(q))
      )
    : items
  ).slice(0, 8);

  const commit = (value: string) => {
    setQuery(value);
    onCommit(value);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className={className}>
      <input
        id={inputId}
        type="search"
        role="combobox"
        aria-label={ariaLabel}
        aria-expanded={open}
        aria-controls={listboxId}
        aria-autocomplete="list"
        placeholder={placeholder}
        value={query}
        onChange={(e) => {
          const next = e.target.value;
          setQuery(next);
          onCommit(next);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        className={inputClassName}
      />
      {query ? (
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 px-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          aria-label="Clear search"
          onClick={() => commit('')}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      ) : null}
      {open && matches.length > 0 ? (
        <ul
          id={listboxId}
          role="listbox"
          className="absolute z-20 mt-1 max-h-64 w-full overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-800"
        >
          {matches.map((item, index) => {
            const primary = formatPrimary(item);
            const secondary = formatSecondary?.(item);
            return (
              <li key={`${primary}-${index}`} role="option">
                <button
                  type="button"
                  className="w-full px-4 py-2 text-left hover:bg-blue-50 dark:hover:bg-gray-700"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    commit(getCommitValue(item));
                  }}
                >
                  <span className="block text-sm text-gray-900 dark:text-white">{primary}</span>
                  {secondary ? (
                    <span className="block text-xs text-gray-500 dark:text-gray-400">{secondary}</span>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
