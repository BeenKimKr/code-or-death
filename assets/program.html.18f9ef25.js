import{_ as t,r as o,o as l,c,a as n,b as p,F as r,d as s,e}from"./app.b98cd4dd.js";const u={},i=n("h1",{id:"\u1100\u116E\u1112\u1167\u11AB",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u1100\u116E\u1112\u1167\u11AB","aria-hidden":"true"},"#"),s(" \uAD6C\uD604")],-1),k=n("h2",{id:"_720-longest-word-in-dictionary",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_720-longest-word-in-dictionary","aria-hidden":"true"},"#"),s(" 720 [Longest Word in Dictionary]")],-1),b={href:"https://leetcode.com/problems/longest-word-in-dictionary",target:"_blank",rel:"noopener noreferrer"},d=s("<\uB9C1\uD06C>"),m=e(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">leet720</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">:</span>
    dic<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    result<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> word <span class="token keyword">in</span> words<span class="token punctuation">:</span>
        dic<span class="token punctuation">[</span>word<span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span>
    <span class="token keyword">for</span> word <span class="token keyword">in</span> words<span class="token punctuation">:</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>word<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            status<span class="token operator">=</span><span class="token boolean">True</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> dic<span class="token punctuation">.</span>get<span class="token punctuation">(</span>word<span class="token punctuation">[</span><span class="token punctuation">:</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">:</span>
                    status<span class="token operator">=</span><span class="token boolean">False</span>
                    <span class="token keyword">break</span>
            <span class="token keyword">if</span> status<span class="token operator">==</span><span class="token boolean">False</span><span class="token punctuation">:</span>
                <span class="token keyword">continue</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>word<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span>
    realResult<span class="token operator">=</span><span class="token string">&#39;&#39;</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> result<span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>realResult<span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token builtin">len</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">:</span>
            realResult<span class="token operator">=</span>i
        <span class="token keyword">elif</span> <span class="token builtin">len</span><span class="token punctuation">(</span>realResult<span class="token punctuation">)</span><span class="token operator">==</span><span class="token builtin">len</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">:</span>
            realResult<span class="token operator">=</span><span class="token builtin">min</span><span class="token punctuation">(</span>realResult<span class="token punctuation">,</span>i<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>realResult<span class="token punctuation">)</span>
    <span class="token keyword">return</span> realResult
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p><em>&lt;\uD574\uC124&gt;</em></p><p><em>&quot;\uD604\uC7AC \uD53C\uBCF4\uB098\uCE58 \uC218\uB294 \uC804 \uD53C\uBCF4\uB098\uCE58\uC640 \uC804\uC804 \uD53C\uBCF4\uB098\uCE58\uC758 \uC218\uC758 \uD569\uB2C8\uB2E4&quot;\uB77C\uB294 \uB85C\uC9C1\uC744 \uADF8\uB300\uB85C f(n)=f(n-1)+f(-2)\uB85C \uC62E\uACA8\uBCF4\uBA74 return f(n-1)+f(n-2)\uAC00 \uB41C\uB2E4.</em></p><p><em>&lt;\uC608\uC678\uCF00\uC774\uC2A4&gt;0\uBC88\uCA30 \uC218\uC640 1\uBC88\uC9F8 \uC218\uB294 \uC774\uBBF8 \uC544\uB294 \uC0C1\uD0DC\uC5D0\uC11C \uC2DC\uC791\uC744 \uD558\uB294 \uAC83\uC774\uAE30 \uB54C\uBB38\uC5D0 \uBBF8\uB9AC n==0,n==1\uC774\uB77C\uB294 \uC870\uAC74\uC744 \uC8FC\uC5B4\uC57C \uD55C\uB2E4.</em></p><hr><h2 id="_9-palindrome-number" tabindex="-1"><a class="header-anchor" href="#_9-palindrome-number" aria-hidden="true">#</a> 9 [Palindrome Number]</h2>`,6),h={href:"https://leetcode.com/problems/palindrome-number",target:"_blank",rel:"noopener noreferrer"},f=s("<\uB9C1\uD06C>"),g=e(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">leet9</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> x<span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>
    sub<span class="token operator">=</span>x<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> x<span class="token operator">==</span>sub<span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
    <span class="token keyword">return</span> <span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><em>&lt;\uD574\uC124&gt;</em></p><p><em>&quot;\uD604\uC7AC \uD53C\uBCF4\uB098\uCE58 \uC218\uB294 \uC804 \uD53C\uBCF4\uB098\uCE58\uC640 \uC804\uC804 \uD53C\uBCF4\uB098\uCE58\uC758 \uC218\uC758 \uD569\uB2C8\uB2E4&quot;\uB77C\uB294 \uB85C\uC9C1\uC744 \uADF8\uB300\uB85C f(n)=f(n-1)+f(-2)\uB85C \uC62E\uACA8\uBCF4\uBA74 return f(n-1)+f(n-2)\uAC00 \uB41C\uB2E4.</em></p><p><em>&lt;\uC608\uC678\uCF00\uC774\uC2A4&gt;0\uBC88\uCA30 \uC218\uC640 1\uBC88\uC9F8 \uC218\uB294 \uC774\uBBF8 \uC544\uB294 \uC0C1\uD0DC\uC5D0\uC11C \uC2DC\uC791\uC744 \uD558\uB294 \uAC83\uC774\uAE30 \uB54C\uBB38\uC5D0 \uBBF8\uB9AC n==0,n==1\uC774\uB77C\uB294 \uC870\uAC74\uC744 \uC8FC\uC5B4\uC57C \uD55C\uB2E4.</em></p><hr><h2 id="_455-assign-cookies" tabindex="-1"><a class="header-anchor" href="#_455-assign-cookies" aria-hidden="true">#</a> 455 [Assign Cookies]</h2>`,6),w={href:"https://leetcode.com/problems/assign-cookies",target:"_blank",rel:"noopener noreferrer"},y=s("<\uB9C1\uD06C>"),_=e(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">leet455</span><span class="token punctuation">(</span>g<span class="token punctuation">,</span>s<span class="token punctuation">)</span><span class="token punctuation">:</span>
    g<span class="token operator">=</span><span class="token builtin">sorted</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
    s<span class="token operator">=</span><span class="token builtin">sorted</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    idx<span class="token operator">=</span><span class="token number">0</span>
    <span class="token keyword">for</span> cookie <span class="token keyword">in</span> s<span class="token punctuation">:</span>
        <span class="token keyword">if</span> g<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token operator">&gt;</span>cookie<span class="token punctuation">:</span>
            <span class="token keyword">continue</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            idx<span class="token operator">+=</span><span class="token number">1</span>
            <span class="token keyword">if</span> idx<span class="token operator">&gt;=</span><span class="token builtin">len</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">break</span>
    <span class="token keyword">return</span> idx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><em>&lt;\uD574\uC124&gt;</em></p><p><em>&quot;\uD604\uC7AC \uD53C\uBCF4\uB098\uCE58 \uC218\uB294 \uC804 \uD53C\uBCF4\uB098\uCE58\uC640 \uC804\uC804 \uD53C\uBCF4\uB098\uCE58\uC758 \uC218\uC758 \uD569\uB2C8\uB2E4&quot;\uB77C\uB294 \uB85C\uC9C1\uC744 \uADF8\uB300\uB85C f(n)=f(n-1)+f(-2)\uB85C \uC62E\uACA8\uBCF4\uBA74 return f(n-1)+f(n-2)\uAC00 \uB41C\uB2E4.</em></p><p><em>&lt;\uC608\uC678\uCF00\uC774\uC2A4&gt;0\uBC88\uCA30 \uC218\uC640 1\uBC88\uC9F8 \uC218\uB294 \uC774\uBBF8 \uC544\uB294 \uC0C1\uD0DC\uC5D0\uC11C \uC2DC\uC791\uC744 \uD558\uB294 \uAC83\uC774\uAE30 \uB54C\uBB38\uC5D0 \uBBF8\uB9AC n==0,n==1\uC774\uB77C\uB294 \uC870\uAC74\uC744 \uC8FC\uC5B4\uC57C \uD55C\uB2E4.</em></p><hr><h2 id="_11-container-with-most-water" tabindex="-1"><a class="header-anchor" href="#_11-container-with-most-water" aria-hidden="true">#</a> 11 [Container With Most Water]</h2>`,6),x={href:"https://leetcode.com/problems/container-with-most-water/",target:"_blank",rel:"noopener noreferrer"},v=s("<\uB9C1\uD06C>"),M=e(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">leet12</span><span class="token punctuation">(</span>height<span class="token punctuation">)</span><span class="token punctuation">:</span>
    leftX<span class="token operator">=</span><span class="token number">0</span>
    rightX<span class="token operator">=</span><span class="token builtin">len</span><span class="token punctuation">(</span>height<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span>
    leftMax<span class="token operator">=</span>height<span class="token punctuation">[</span>leftX<span class="token punctuation">]</span>
    rightMax<span class="token operator">=</span>height<span class="token punctuation">[</span>rightX<span class="token punctuation">]</span>
    maxWater<span class="token operator">=</span><span class="token number">0</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>height<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> leftMax<span class="token operator">&lt;=</span>height<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token keyword">and</span> height<span class="token punctuation">[</span>leftX<span class="token punctuation">]</span><span class="token operator">&lt;=</span>rightMax<span class="token punctuation">:</span>
            nowMaxWater<span class="token operator">=</span><span class="token builtin">min</span><span class="token punctuation">(</span>height<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>rightMax<span class="token punctuation">)</span><span class="token operator">*</span><span class="token punctuation">(</span>rightX<span class="token operator">-</span>i<span class="token punctuation">)</span>
            <span class="token keyword">if</span> maxWater<span class="token operator">&lt;=</span>nowMaxWater<span class="token punctuation">:</span>
                leftX<span class="token operator">=</span>i
                leftMax<span class="token operator">=</span>height<span class="token punctuation">[</span>leftX<span class="token punctuation">]</span>
                maxWater<span class="token operator">=</span>nowMaxWater
        <span class="token keyword">if</span> rightMax<span class="token operator">&lt;=</span>height<span class="token punctuation">[</span><span class="token builtin">len</span><span class="token punctuation">(</span>height<span class="token punctuation">)</span><span class="token operator">-</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token keyword">and</span> height<span class="token punctuation">[</span>rightX<span class="token punctuation">]</span><span class="token operator">&lt;=</span>leftMax<span class="token punctuation">:</span>
            nowMaxWater<span class="token operator">=</span><span class="token builtin">min</span><span class="token punctuation">(</span>leftMax<span class="token punctuation">,</span>height<span class="token punctuation">[</span><span class="token builtin">len</span><span class="token punctuation">(</span>height<span class="token punctuation">)</span><span class="token operator">-</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>height<span class="token punctuation">)</span><span class="token operator">-</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span>leftX<span class="token punctuation">)</span>
            <span class="token keyword">if</span> maxWater<span class="token operator">&lt;=</span>nowMaxWater<span class="token punctuation">:</span>
                rightX<span class="token operator">=</span><span class="token builtin">len</span><span class="token punctuation">(</span>height<span class="token punctuation">)</span><span class="token operator">-</span>i<span class="token operator">-</span><span class="token number">1</span>
                rightMax<span class="token operator">=</span>height<span class="token punctuation">[</span>rightX<span class="token punctuation">]</span>
                maxWater<span class="token operator">=</span>nowMaxWater
        <span class="token keyword">if</span> leftX<span class="token operator">&gt;=</span>rightX<span class="token punctuation">:</span>
            <span class="token keyword">break</span>
    <span class="token keyword">return</span> maxWater
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p><em>&lt;\uD574\uC124&gt;</em></p><p><em>&quot;\uD604\uC7AC \uD53C\uBCF4\uB098\uCE58 \uC218\uB294 \uC804 \uD53C\uBCF4\uB098\uCE58\uC640 \uC804\uC804 \uD53C\uBCF4\uB098\uCE58\uC758 \uC218\uC758 \uD569\uB2C8\uB2E4&quot;\uB77C\uB294 \uB85C\uC9C1\uC744 \uADF8\uB300\uB85C f(n)=f(n-1)+f(-2)\uB85C \uC62E\uACA8\uBCF4\uBA74 return f(n-1)+f(n-2)\uAC00 \uB41C\uB2E4.</em></p><p><em>&lt;\uC608\uC678\uCF00\uC774\uC2A4&gt;0\uBC88\uCA30 \uC218\uC640 1\uBC88\uC9F8 \uC218\uB294 \uC774\uBBF8 \uC544\uB294 \uC0C1\uD0DC\uC5D0\uC11C \uC2DC\uC791\uC744 \uD558\uB294 \uAC83\uC774\uAE30 \uB54C\uBB38\uC5D0 \uBBF8\uB9AC n==0,n==1\uC774\uB77C\uB294 \uC870\uAC74\uC744 \uC8FC\uC5B4\uC57C \uD55C\uB2E4.</em></p><hr>`,5);function W(q,X){const a=o("ExternalLinkIcon");return l(),c(r,null,[i,k,n("blockquote",null,[n("p",null,[n("a",b,[d,p(a)])])]),m,n("blockquote",null,[n("p",null,[n("a",h,[f,p(a)])])]),g,n("blockquote",null,[n("p",null,[n("a",w,[y,p(a)])])]),_,n("blockquote",null,[n("p",null,[n("a",x,[v,p(a)])])]),M],64)}var F=t(u,[["render",W],["__file","program.html.vue"]]);export{F as default};
