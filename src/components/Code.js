import React, { useEffect, useRef } from "react"
import hljs from 'highlight.js/lib/highlight';
import go from 'highlight.js/lib/languages/go';

hljs.registerLanguage('go', go);

const Code = ({children}) => {

  const node = useRef()

  useEffect(() => {
   if(node !== undefined && node !== null && node.current !== null) {
     hljs.initHighlightingOnLoad();
     document.querySelectorAll("pre code").forEach(block => {
       hljs.highlightBlock(block);
     });
   }
  })

  return (
    <pre ref={node}><code>{children}</code></pre>
  )
}

export default Code
