import { useEffect } from 'react';

const defaultOptions: MutationObserverInit = {
  subtree: true,
  childList: true,
  attributeFilter: ['class', 'style'],
}

export default function useMutateObserver(
  nodeOrList: HTMLElement | HTMLElement[],
  callback: MutationCallback,
  options: MutationObserverInit = defaultOptions
) {
  useEffect(() => {
    if (!nodeOrList) return;
    let instance: MutationObserver;
    const nodeList = Array.isArray(nodeOrList) ? nodeOrList : [nodeOrList];

    if (window?.MutationObserver) {
      instance = new MutationObserver(callback);

      nodeList.forEach(element => {
        instance.observe(element, options);
      })
    }
    return () => {
      instance?.takeRecords();
      instance?.disconnect();
    }
  }, [options, nodeOrList]);
}

