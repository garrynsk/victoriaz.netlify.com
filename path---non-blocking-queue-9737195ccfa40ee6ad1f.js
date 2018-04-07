webpackJsonp([0xd0992fe20d81],{765:function(a,n){a.exports={data:{site:{siteMetadata:{disqusShortname:"garrynsk",siteUrlShort:"victoriaz.netlify.com",siteUrl:"https://victoriaz.netlify.com",siteTitle:"VictoriaZ programming sketches",siteLogo:"/img/twitterImg.jpg"}},markdownRemark:{html:'<div style="text-align: center; width: 100%; margin-bottom: 50px;">\n    <img src="/queue-ad096102018e606977143785d91ef139.gif" width="80%">\n</div>\n<p>Non-blocking algorithms allows threads to access shared state without blocking: locks, mutexes, semaphores etc. A blocking concurrency algorithm is an algorithm which can block the thread until the action can be performed safely.</p>\n<div class="gatsby-highlight">\n      <pre class="language-scalascala"><code class="language-scalascala"><span class="token keyword">package</span> architect\n<span class="token keyword">package</span> duna\n<span class="token keyword">package</span> kernel\n\n<span class="token keyword">import</span> java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Throwable\n<span class="token keyword">import</span> scala<span class="token punctuation">.</span>util<span class="token punctuation">.</span><span class="token punctuation">{</span> Either<span class="token punctuation">,</span> Left<span class="token punctuation">,</span> Right <span class="token punctuation">}</span>\n<span class="token keyword">import</span> scala<span class="token punctuation">.</span>runtime<span class="token punctuation">.</span>ScalaRunTime<span class="token punctuation">.</span>_\n<span class="token keyword">import</span> scala<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span>ClassTag \n<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>ConcurrentLinkedQueue\n<span class="token keyword">import</span> scala<span class="token punctuation">.</span>collection<span class="token punctuation">.</span>immutable<span class="token punctuation">.</span>SortedMap\n\n<span class="token keyword">trait</span> QueueIssue<span class="token punctuation">{</span>\n\n    <span class="token keyword">val</span> message<span class="token operator">:</span> <span class="token builtin">String</span>\n\n<span class="token punctuation">}</span>\n\n<span class="token keyword">case</span> <span class="token keyword">class</span> CantDequeueEmptyQueue<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">extends</span> QueueIssue<span class="token punctuation">{</span>\n\n    <span class="token keyword">override</span> <span class="token keyword">val</span> message<span class="token operator">:</span> <span class="token builtin">String</span> <span class="token operator">=</span> <span class="token string">"Can\'t dequeue for an empty queue."</span>\n\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>  The queue is actually a circular buffer and two pointers, which point to the next writable element and the next readable element.</p>\n<div class="gatsby-highlight">\n      <pre class="language-scalascala"><code class="language-scalascala"><span class="token keyword">case</span> <span class="token keyword">class</span> Queue<span class="token punctuation">[</span>\n\n        <span class="token annotation punctuation">@specialized</span><span class="token punctuation">(</span><span class="token builtin">Short</span><span class="token punctuation">,</span> <span class="token builtin">Char</span><span class="token punctuation">,</span> <span class="token builtin">Int</span><span class="token punctuation">,</span> <span class="token builtin">Float</span><span class="token punctuation">,</span> <span class="token builtin">Long</span><span class="token punctuation">,</span> <span class="token builtin">Double</span><span class="token punctuation">,</span> <span class="token builtin">AnyRef</span><span class="token punctuation">)</span> A<span class="token operator">:</span> ClassTag\n\n    <span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">val</span> size<span class="token operator">:</span> <span class="token builtin">Int</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">self</span> <span class="token keyword">=></span>\n</code></pre>\n      </div>\n<p>Both pointers start from the zero element. They have <a href="http://tutorials.jenkov.com/java-concurrency/volatile.html">@volatile</a> annotation, because we need every thread to have an access to the newest value of the variable.\nHere is the write pointer.</p>\n<div class="gatsby-highlight">\n      <pre class="language-scalascala"><code class="language-scalascala"><span class="token annotation punctuation">@volatile</span> <span class="token keyword">private</span> <span class="token keyword">var</span> writePointer<span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token number">0</span>\n</code></pre>\n      </div>\n<p>And the read pointer.</p>\n<div class="gatsby-highlight">\n      <pre class="language-scalascala"><code class="language-scalascala"><span class="token annotation punctuation">@volatile</span> <span class="token keyword">private</span> <span class="token keyword">var</span> readPointer<span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token number">0</span>\n</code></pre>\n      </div>\n<p>We calculate an array size available on the machine. </p>\n<div class="gatsby-highlight">\n      <pre class="language-scalascala"><code class="language-scalascala"><span class="token keyword">private</span> <span class="token keyword">val</span> availableSize <span class="token operator">=</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">val</span> runtime <span class="token operator">=</span> Runtime<span class="token punctuation">.</span>getRuntime<span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token comment">// Hard coded values are: 32bits is Int size, 4 - memory share</span>\n    <span class="token comment">// TODO: change integer zite to A size</span>\n    <span class="token punctuation">(</span>runtime<span class="token punctuation">.</span>freeMemory<span class="token operator">/</span><span class="token number">4</span><span class="token operator">/</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">.</span>toInt \n\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>We check the input size. If it is less than one, we make 100000 array (because I want so). </p>\n<div class="gatsby-highlight">\n      <pre class="language-scalascala"><code class="language-scalascala"><span class="token keyword">val</span> actualSize <span class="token operator">=</span> size <span class="token keyword">match</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">case</span> number <span class="token keyword">if</span><span class="token punctuation">(</span>number <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">=></span> <span class="token number">100000</span>\n\n    <span class="token keyword">case</span> number <span class="token keyword">if</span><span class="token punctuation">(</span>number <span class="token operator">></span> availableSize<span class="token punctuation">)</span> <span class="token keyword">=></span> availableSize\n\n    <span class="token keyword">case</span> number <span class="token keyword">=></span> number\n\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Then we calculate physical location of the pointers in the array buffer. It should be from 0 to actual array size. So we need to find a reminder of current pointer position and actual array size. </p>\n<div class="gatsby-highlight">\n      <pre class="language-scalascala"><code class="language-scalascala"><span class="token keyword">private</span> <span class="token keyword">def</span> physicalReadPointer<span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n\n    readPointer  <span class="token operator">%</span> actualSize\n\n<span class="token punctuation">}</span>\n\n<span class="token keyword">private</span> <span class="token keyword">def</span> physicalWritePointer<span class="token operator">:</span> <span class="token builtin">Int</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n\n    writePointer  <span class="token operator">%</span> actualSize\n\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Here is a buffer array, where we keep all the data.</p>\n<div class="gatsby-highlight">\n      <pre class="language-scalascala"><code class="language-scalascala"><span class="token keyword">private</span> <span class="token keyword">val</span> store<span class="token operator">:</span> Array<span class="token punctuation">[</span>A<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> Array<span class="token punctuation">[</span>A<span class="token punctuation">]</span><span class="token punctuation">(</span>actualSize<span class="token punctuation">)</span> \n</code></pre>\n      </div>\n<p>And the next one is for backpressure. I’ll write about it below…</p>\n<div class="gatsby-highlight">\n      <pre class="language-scalascala"><code class="language-scalascala"><span class="token keyword">private</span> <span class="token keyword">val</span> tmpStore<span class="token operator">:</span> ConcurrentLinkedQueue<span class="token punctuation">[</span>A<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> ConcurrentLinkedQueue<span class="token punctuation">[</span>A<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Whenever a write pointer is bigger than array size, we put next elements into the tmpStore. It is a backpressure strategy. If a producer is faster than consumer, then the default array is not enough. We start using tmpStore, which help us under heavy load. But it can cause an OutOfMemoryException exeption. Type of the tmpStore is ConcurrentLinkedQueue, so it is not limited and can be dynamically resized. Why we didn’t do it before?\nBecause any linked list based data structure with unknown length at runtime replaces itself with a new allocated structure when the capacity is exceeded. A new structure is allocated and a previous one is collected multiple times. This process can generate a lot of garbage and lead to memory leak.</p>\n<div class="gatsby-highlight">\n      <pre class="language-scalascala"><code class="language-scalascala"><span class="token keyword">def</span> enqueue<span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token keyword">=></span> A<span class="token punctuation">)</span><span class="token operator">:</span> Either<span class="token punctuation">[</span>A<span class="token punctuation">,</span> QueueIssue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token comment">// The queue is full, can\'t rewrite an element which hasn\'t been read</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>writePointer <span class="token operator">>=</span> actualSize<span class="token punctuation">)</span><span class="token punctuation">{</span> \n\n        tmpStore<span class="token punctuation">.</span>add<span class="token punctuation">(</span>value<span class="token punctuation">)</span>\n\n    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n        <span class="token comment">// Enqueue a new element</span>\n        store<span class="token punctuation">.</span>update<span class="token punctuation">(</span>phisicalWritePointer<span class="token punctuation">,</span> value<span class="token punctuation">)</span> \n\n    <span class="token punctuation">}</span>\n     <span class="token comment">// Move writePointer to the next slot</span>\n    <span class="token keyword">val</span> newWritePointer <span class="token operator">=</span> writePointer <span class="token operator">+</span> <span class="token number">1</span>\n\n    writePointer <span class="token operator">=</span> newWritePointer\n\n    Left<span class="token punctuation">(</span>value<span class="token punctuation">)</span>\n\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>The next method extracts next value from the queue.</p>\n<div class="gatsby-highlight">\n      <pre class="language-scalascala"><code class="language-scalascala"><span class="token keyword">def</span> dequeue<span class="token operator">:</span> Either<span class="token punctuation">[</span>A<span class="token punctuation">,</span> QueueIssue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">if</span><span class="token punctuation">(</span>isEmpty<span class="token punctuation">)</span><span class="token punctuation">{</span> \n    \n        Right<span class="token punctuation">{</span>CantDequeueEmptyQueue<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n\n    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n\n        <span class="token keyword">val</span> res <span class="token operator">=</span> <span class="token keyword">if</span><span class="token punctuation">(</span>readPointer <span class="token operator">&lt;</span> actualSize <span class="token operator">||</span> tmpStore<span class="token punctuation">.</span>isEmpty<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n            <span class="token keyword">val</span> value <span class="token operator">=</span> store<span class="token punctuation">(</span>phisicalReadPointer<span class="token punctuation">)</span> \n\n            value\n\n        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n            \n            <span class="token keyword">val</span> dec <span class="token operator">=</span> tmpStore<span class="token punctuation">.</span>poll\n\n            store<span class="token punctuation">(</span>phisicalReadPointer<span class="token punctuation">)</span> <span class="token operator">=</span> dec\n\n            dec\n\n        <span class="token punctuation">}</span>\n        \n        <span class="token keyword">val</span> newReadPointer <span class="token operator">=</span> readPointer <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">// the next pointer can point at an empty slot, will check on the next dequeue</span>\n        \n        readPointer <span class="token operator">=</span> newReadPointer\n\n        Left<span class="token punctuation">(</span>res<span class="token punctuation">)</span>\n\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>The queue is empty or the next pointer points to an empty slot.</p>\n<div class="gatsby-highlight">\n      <pre class="language-scalascala"><code class="language-scalascala"><span class="token keyword">def</span> isEmpty<span class="token operator">:</span> <span class="token builtin">Boolean</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n\n    readPointer <span class="token operator">==</span> writePointer\n\n<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',shortExcerpt:"Non-blocking algorithms allows threads to access shared state without…",longExcerpt:"Non-blocking algorithms allows threads to access shared state without blocking: locks, mutexes, semaphores etc. A blocking concurrency algorithm is an algorithm which can block the thread until the action can be performed safely.   The queue is actually a circular buffer and two pointers, which point to the next writable element and the next readable element. Both pointers start from the zero…",frontmatter:{date:"March 16, 2018",path:"/non-blocking-queue",title:"Non blocking single producer many consumers queue",tags:["non-blocking","queue","Scala"],featuredImage:{name:"queue-front",childImageSharp:{sizes:{src:"/static/queue-front-28ea9a56b136e978bf9a1a653fdc6965-d447e.jpg",srcSet:"/static/queue-front-28ea9a56b136e978bf9a1a653fdc6965-eed67.jpg 475w,\n/static/queue-front-28ea9a56b136e978bf9a1a653fdc6965-f26f9.jpg 950w,\n/static/queue-front-28ea9a56b136e978bf9a1a653fdc6965-d447e.jpg 1900w,\n/static/queue-front-28ea9a56b136e978bf9a1a653fdc6965-3d50f.jpg 1920w",base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQL/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAYm0aTTo0f/EABgQAAMBAQAAAAAAAAAAAAAAAAABEQIS/9oACAEBAAEFAudGE73qRCgmj//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABgQAAIDAAAAAAAAAAAAAAAAAAAyAiCh/9oACAEBAAY/Al0UaVP/xAAbEAEAAgIDAAAAAAAAAAAAAAABABEhQTFhgf/aAAgBAQABPyHrQVO5XMoGDGmJeRXgDBP/2gAMAwEAAgADAAAAECvf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFREBAQAAAAAAAAAAAAAAAAAAECH/2gAIAQIBAT8Qp//EABwQAQEAAgIDAAAAAAAAAAAAAAERADEhUWGBof/aAAgBAQABPxApRgdu33yY7lKhPe8BJDE4jJFIcgzYKvvBJAz/2Q==",aspectRatio:1.3333333333333333,sizes:"(max-width: 1900px) 100vw, 1900px"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---non-blocking-queue-9737195ccfa40ee6ad1f.js.map