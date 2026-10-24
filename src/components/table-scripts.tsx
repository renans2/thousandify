"use client";

import Script from "next/script";

type ListConstructor = new (
  id: string,
  options: { valueNames: string[] },
) => unknown;

type SortTable = {
  init: () => void;
  makeSortable: (table: HTMLTableElement) => void;
};

declare global {
  interface Window {
    List?: ListConstructor;
    sorttable?: SortTable;
  }
}

// onReady (unlike onLoad) also runs when the page is mounted again after a
// client-side navigation, when the scripts are already loaded but the table is new.
// The dataset flags avoid binding the same elements twice.
export default function TableScripts() {
  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/list.js/2.3.1/list.min.js"
        strategy="afterInteractive"
        onReady={() => {
          const container = document.getElementById("data");
          if (!window.List || !container || container.dataset.listReady)
            return;
          container.dataset.listReady = "true";
          new window.List("data", { valueNames: ["artist"] });
        }}
      />
      <Script
        src="/sort-table.js"
        strategy="afterInteractive"
        onReady={() => {
          const table = document.getElementById("ranking");
          if (
            !window.sorttable ||
            !(table instanceof HTMLTableElement) ||
            table.dataset.sortReady
          )
            return;
          table.dataset.sortReady = "true";
          // init only runs once and sets up internals (the table has no
          // "sortable" class, so it won't be picked up automatically)
          window.sorttable.init();
          window.sorttable.makeSortable(table);
        }}
      />
    </>
  );
}
