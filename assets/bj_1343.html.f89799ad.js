import{_ as n,e as s}from"./app.b98cd4dd.js";const a={},p=s(`<h1 id="\u1107\u1162\u11A8\u110C\u116E\u11AB-1343\u1107\u1165\u11AB-\u1111\u1169\u11AF\u1105\u1175\u110B\u1169\u1106\u1175\u1102\u1169" tabindex="-1"><a class="header-anchor" href="#\u1107\u1162\u11A8\u110C\u116E\u11AB-1343\u1107\u1165\u11AB-\u1111\u1169\u11AF\u1105\u1175\u110B\u1169\u1106\u1175\u1102\u1169" aria-hidden="true">#</a> [\uBC31\uC900 1343\uBC88] \uD3F4\uB9AC\uC624\uBBF8\uB178</h1><blockquote><p>\uADF8\uB9AC\uB514</p></blockquote><h2 id="\u{1F4CB}-\u1106\u116E\u11AB\u110C\u1166" tabindex="-1"><a class="header-anchor" href="#\u{1F4CB}-\u1106\u116E\u11AB\u110C\u1166" aria-hidden="true">#</a> \u{1F4CB} \uBB38\uC81C</h2><p>\uBBFC\uC2DD\uC774\uB294 AAAA\uC640 BB\uC758 \uD3F4\uB9AC\uC624\uBBF8\uB178 2\uAC1C\uB97C \uBB34\uD55C\uAC1C\uB9CC\uD07C \uAC00\uC9C0\uACE0 \uC788\uB2E4. \uC774\uC81C &#39;.&#39;\uC640 &#39;X&#39;\uB85C \uC774\uB8E8\uC5B4\uC9C4 \uBCF4\uB4DC\uD310\uC774 \uC8FC\uC5B4\uC84C\uC744 \uB54C, \uBBFC\uC2DD\uC774\uB294 \uACB9\uCE68\uC5C6\uC774 &#39;X&#39;\uB97C \uBAA8\uB450 \uD3F4\uB9AC\uC624\uBBF8\uB178\uB85C \uB36E\uC73C\uB824\uACE0 \uD55C\uB2E4. \uC774\uB54C, &#39;.&#39;\uB294 \uD3F4\uB9AC\uC624\uBBF8\uB178\uB85C \uB36E\uC73C\uBA74 \uC548 \uB41C\uB2E4.</p><p>\uD3F4\uB9AC\uC624\uBBF8\uB178\uB85C \uBAA8\uB450 \uB36E\uC740 \uBCF4\uB4DC\uD310\uC744 \uCD9C\uB825\uD558\uB294 \uD504\uB85C\uADF8\uB7A8\uC744 \uC791\uC131\uD558\uC2DC\uC624.</p><h2 id="\u{1F449}-\u110B\u1175\u11B8\u1105\u1167\u11A8" tabindex="-1"><a class="header-anchor" href="#\u{1F449}-\u110B\u1175\u11B8\u1105\u1167\u11A8" aria-hidden="true">#</a> \u{1F449} \uC785\uB825</h2><p>\uCCAB\uC9F8 \uC904\uC5D0 \uBCF4\uB4DC\uD310\uC774 \uC8FC\uC5B4\uC9C4\uB2E4. \uBCF4\uB4DC\uD310\uC758 \uD06C\uAE30\uB294 \uCD5C\uB300 50\uC774\uB2E4.</p><h2 id="\u{1F448}-\u110E\u116E\u11AF\u1105\u1167\u11A8" tabindex="-1"><a class="header-anchor" href="#\u{1F448}-\u110E\u116E\u11AF\u1105\u1167\u11A8" aria-hidden="true">#</a> \u{1F448} \uCD9C\uB825</h2><p>\uCCAB\uC9F8 \uC904\uC5D0 \uC0AC\uC804\uC21C\uC73C\uB85C \uAC00\uC7A5 \uC55E\uC11C\uB294 \uB2F5\uC744 \uCD9C\uB825\uD55C\uB2E4. \uB9CC\uC57D \uB36E\uC744 \uC218 \uC5C6\uC73C\uBA74 -1\uC744 \uCD9C\uB825\uD55C\uB2E4.</p><h2 id="\u{1F4DD}-\u1111\u116E\u11AF\u110B\u1175" tabindex="-1"><a class="header-anchor" href="#\u{1F4DD}-\u1111\u116E\u11AF\u110B\u1175" aria-hidden="true">#</a> \u{1F4DD} \uD480\uC774</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>board <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
arr <span class="token operator">=</span> board<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">poly</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">:</span>
  string <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
  <span class="token keyword">for</span> item <span class="token keyword">in</span> arr<span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
      <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>

    numA <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">4</span>
    numB <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">4</span>
    string <span class="token operator">+=</span> <span class="token string">&#39;AAAA&#39;</span> <span class="token operator">*</span> numA <span class="token operator">+</span> <span class="token string">&#39;BB&#39;</span><span class="token operator">*</span><span class="token punctuation">(</span>numB<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;.&#39;</span>

  <span class="token keyword">return</span> string<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>poly<span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\uD3F4\uB9AC\uC624\uBBF8\uB178\uB85C \uB36E\uB294 \uAC83\uC774 \uBD88\uAC00\uB2A5\uD55C \uACBD\uC6B0 \uBC14\uB85C -1\uC744 \uB9AC\uD134\uD558\uAE30 \uC704\uD574 \uD568\uC218\uB85C \uAD6C\uD604\uD588\uB2E4.<br> &#39;.&#39;\uC740 \uD3F4\uB9AC\uC624\uBBF8\uB178\uB85C \uB36E\uC73C\uBA74 \uC548\uB418\uAE30 \uB54C\uBB38\uC5D0 board\uB97C &#39;.&#39;\uC744 \uAE30\uC900\uC73C\uB85C split\uD558\uACE0 \uC774\uB4E4\uC744 arr\uC5D0 \uC800\uC7A5\uD588\uB2E4.</p><p>poly \uD568\uC218\uC5D0\uC11C\uB294 \uBA3C\uC800 \uC815\uB2F5\uC744 \uB2F4\uC744 \uBE48 \uBB38\uC790\uC5F4 string\uC744 \uC120\uC5B8\uD55C\uB2E4.<br> \uC774\uD6C4 for\uBB38\uC5D0\uC11C arr\uC758 \uC694\uC18C\uB4E4\uC744 \uD558\uB098\uC529 \uC0B4\uD3B4\uBCF8\uB2E4.</p><p>\uD3F4\uB9AC\uC624\uBBF8\uB178\uAC00 AAAA\uC640 BB\uB85C \uC8FC\uC5B4\uC84C\uAE30 \uB54C\uBB38\uC5D0 item\uC758 \uAE38\uC774\uAC00 \uD640\uC218\uC77C \uACBD\uC6B0\uC5D0\uB294 \uD3F4\uB9AC\uC624\uBBF8\uB178\uB85C \uB36E\uB294 \uAC83\uC774 \uBD88\uAC00\uB2A5\uD558\uB2E4.<br> \uC774 \uACBD\uC6B0 \uBC14\uB85C -1\uC744 \uB9AC\uD134\uD574\uC900\uB2E4.</p><p>\uC704 \uC870\uAC74\uC5D0 \uAC78\uB9AC\uC9C0 \uC54A\uC558\uB2E4\uBA74 \uD3F4\uB9AC\uC624\uBBF8\uB178\uB85C \uB36E\uB294 \uAC83\uC774 \uAC00\uB2A5\uD558\uB2E4.<br> \uC0AC\uC804\uC21C\uC73C\uB85C \uAC00\uC7A5 \uC55E\uC11C\uB294 \uB2F5\uC744 \uCD9C\uB825\uD558\uAE30 \uC704\uD574\uC11C\uB294 AAAA\uC758 \uB4F1\uC7A5 \uD69F\uC218\uAC00 BB\uBCF4\uB2E4 \uB9CE\uC544\uC57C \uD55C\uB2E4.<br> AAAA\uB97C \uB354 \uB9CE\uC774 \uCC44\uC6B0\uAE30 \uC704\uD574\uC11C\uB294 AAAA\uBD80\uD130 \uCC44\uC6B0\uACE0 \uB098\uBA38\uC9C0 \uBE48 \uACF5\uAC04\uC744 BB\uB85C \uCC44\uC6B0\uBA74 \uB41C\uB2E4.<br> \uB530\uB77C\uC11C AAAA\uB294 item\uC758 \uAE38\uC774\uC5D0\uC11C 4\uB97C \uB098\uB208 \uBAAB\uC73C\uB85C \uCC44\uC6B0\uACE0 \uB098\uBA38\uC9C0 \uACF5\uAC04\uC774 \uC874\uC7AC\uD560 \uACBD\uC6B0 BB\uB97C \uB123\uB294\uB2E4.<br> \uC774\uB54C split \uACFC\uC815\uC5D0\uC11C \uC5C6\uC5B4\uC9C4 &#39;.&#39;\uB3C4 \uAC19\uC774 \uB354\uD574\uC900\uB2E4.</p>`,15);function e(t,o){return p}var c=n(a,[["render",e],["__file","bj_1343.html.vue"]]);export{c as default};
