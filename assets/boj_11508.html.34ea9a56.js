import{_ as p,r as t,o as e,c as o,a as n,b as c,F as l,d as s,e as u}from"./app.b98cd4dd.js";const i={},r={id:"_2-1-\u1109\u1166\u110B\u1175\u11AF",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#_2-1-\u1109\u1166\u110B\u1175\u11AF","aria-hidden":"true"},"#",-1),b=s(),d={href:"https://www.acmicpc.net/problem/11508",target:"_blank",rel:"noopener noreferrer"},_=s("2+1 \uC138\uC77C"),m=u(`<p>\uAC00\uB2A5\uD55C \uBE44\uC2FC \uAC00\uACA9\uC758 \uBB3C\uAC74\uC744 2+1 \uD61C\uD0DD\uC73C\uB85C \uBB34\uB8CC\uB85C \uBC1B\uC544\uAC00\uB294 \uAC83\uC774 \uCD5C\uC18C\uD55C\uC758 \uAC00\uACA9\uC774 \uB420 \uAC83\uC774\uB77C\uACE0 \uC0DD\uAC01\uD558\uC600\uB2E4.<br> \uADF8\uB798\uC11C \uC785\uB825\uBC1B\uC740 \uAC00\uACA9 \uB9AC\uC2A4\uD2B8\uB97C \uB0B4\uB9BC\uCC28\uC21C \uC815\uB82C\uD55C \uB4A4 3\uBC88\uC9F8 \uB9C8\uB2E4\uC758 \uAC00\uACA9\uC744 \uC81C\uC678\uD55C \uAC00\uACA9\uC758 \uD569\uC744 \uBC18\uD658\uD558\uC600\uB2E4.</p><br><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> sys
<span class="token keyword">def</span> <span class="token function">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">return</span> sys<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># N: \uC720\uC81C\uD488 \uAC1C\uC218</span>
N <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

price_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
final_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">:</span>
  price_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

price_list <span class="token operator">=</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>price_list<span class="token punctuation">,</span> reverse<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>price_list<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  final_list <span class="token operator">+=</span> price_list<span class="token punctuation">[</span>i<span class="token punctuation">:</span>i<span class="token operator">+</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">(</span>final_list<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,3);function h(f,y){const a=t("ExternalLinkIcon");return e(),o(l,null,[n("h1",r,[k,b,n("a",d,[_,c(a)])]),m],64)}var g=p(i,[["render",h],["__file","boj_11508.html.vue"]]);export{g as default};
