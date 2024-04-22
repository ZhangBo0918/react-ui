import { useEffect, useRef, useState } from 'react';

export default function Test1() {
  const [className, setClassName] = useState('aaa');
  
  useEffect(() => {
    setTimeout(() => setClassName('bbb'), 2000);
  }, []);

  const containerRef = useRef(null)

  useEffect(() => {
    const targetNode = containerRef.current!;

    const callback = function (mutationsList: MutationRecord[]) {
      console.log('mutation', mutationsList);
    }

    const observer = new MutationObserver(callback);

    observer.observe(targetNode, {
      attributes: true,
      childList: true,
      subtree: true,
    })
  }, []);

  return (
    <div>
      <div id='container' ref={containerRef}>
        <div className={className}>
          {
            className === 'aaa' ? <div>aaa</div> : <div><span>bbb</span></div>
          }
        </div>
      </div>
    </div>
  )
}