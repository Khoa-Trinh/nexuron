type Options = {
  translate?: number;
  scale?: number;
  speedIn?: number;
  speedOut?: number;
};

export const useParallax = <T extends HTMLElement = HTMLElement>(
  opts: Options = {}
) => {
  const { translate = 20, scale = 1.05, speedIn = 60, speedOut = 250 } = opts;

  const targetRef = ref<T | null>(null);

  const style = reactive<Record<string, string>>({
    transform: "translate(0,0) scale(1)",
    transition: `transform .2s ease`,
  });

  function onMove(e: MouseEvent) {
    const el = targetRef.value;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const rx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
    const ry = (e.clientY - (rect.top + rect.height / 2)) / rect.height;

    const dx = rx * translate;
    const dy = ry * translate;

    style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;
    style.transition = `transform ${speedIn / 1000}s ease`;
  }

  function onLeave() {
    style.transform = "translate(0,0) scale(1)";
    style.transition = `transform ${speedOut / 1000}s ease`;
  }

  return { targetRef, style, onMove, onLeave };
};
