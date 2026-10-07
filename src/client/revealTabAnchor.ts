function hiddenTabPanels(target: HTMLElement): HTMLElement[] {
  const panels: HTMLElement[] = [];
  let panel = target.closest<HTMLElement>('[role="tabpanel"]');
  while (panel) {
    if (panel.hidden) panels.push(panel);
    panel = panel.parentElement?.closest<HTMLElement>('[role="tabpanel"]') ?? null;
  }
  return panels;
}

function tabForPanel(panel: HTMLElement): HTMLElement | undefined {
  const container = panel.closest<HTMLElement>(".tabs-container");
  const panels = Array.from(panel.parentElement?.children ?? []).filter((child) => child.getAttribute("role") === "tabpanel");
  const tabs = container?.querySelectorAll<HTMLElement>(':scope > [role="tablist"] > [role="tab"]');
  return tabs?.[panels.indexOf(panel)];
}

function targetFromHash(hash: string): HTMLElement | null {
  try {
    return hash.length > 1 ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
  } catch {
    return null;
  }
}

function scrollBelowNavbar(target: HTMLElement | null) {
  if (!target) return;
  const navbarHeight = document.querySelector<HTMLElement>(".navbar")?.offsetHeight ?? 0;
  window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navbarHeight - 8 });
}

export function onRouteDidUpdate({ location }: { location: { hash: string } }) {
  const target = targetFromHash(location.hash);
  if (!target) return;
  const panels = hiddenTabPanels(target);
  if (panels.length === 0) return;
  panels.forEach((panel) => tabForPanel(panel)?.click());
  window.setTimeout(() => scrollBelowNavbar(targetFromHash(location.hash)), 100);
}
