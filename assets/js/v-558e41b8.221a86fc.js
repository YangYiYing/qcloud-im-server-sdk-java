"use strict";(self.webpackChunkqcloud_im_server_sdk_java=self.webpackChunkqcloud_im_server_sdk_java||[]).push([[848],{690:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-558e41b8",path:"/guide/account.html",title:"帐号管理",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"导入单个帐号",slug:"导入单个帐号",children:[]},{level:2,title:"导入多个帐号",slug:"导入多个帐号",children:[]},{level:2,title:"删除帐号",slug:"删除帐号",children:[]},{level:2,title:"查询帐号",slug:"查询帐号",children:[]},{level:2,title:"失效帐号登录状态",slug:"失效帐号登录状态",children:[]},{level:2,title:"查询帐号在线状态",slug:"查询帐号在线状态",children:[]}],filePathRelative:"guide/account.md",git:{updatedTime:1636170435e3,contributors:[{name:"Yang Libin",email:"szuyanglb@outlook.com",commits:1},{name:"怡蘅",email:"hongyihengg@gmail.com",commits:1}]}}},2813:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var t=a(6252);const p=(0,t.uE)('<h1 id="帐号管理" tabindex="-1"><a class="header-anchor" href="#帐号管理" aria-hidden="true">#</a> 帐号管理</h1><h2 id="导入单个帐号" tabindex="-1"><a class="header-anchor" href="#导入单个帐号" aria-hidden="true">#</a> 导入单个帐号</h2><p>本接口用于将 App 自有帐号导入即时通信 IM 帐号系统，为该帐号创建一个对应的内部 ID，使该帐号能够使用即时通信 IM 服务。</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>同一个帐号重复导入仅会创建 1 个内部 ID。</p></div><p>使用示例：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">AccountImportRequest</span> request <span class="token operator">=</span> <span class="token class-name">AccountImportRequest</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">identifier</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">faceUrl</span><span class="token punctuation">(</span><span class="token string">&quot;https://avatars.githubusercontent.com/u/43716716?s=200&amp;v=4&quot;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">nick</span><span class="token punctuation">(</span><span class="token string">&quot;doocs&quot;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token class-name">AccountImportResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>account<span class="token punctuation">.</span><span class="token function">accountImport</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="导入多个帐号" tabindex="-1"><a class="header-anchor" href="#导入多个帐号" aria-hidden="true">#</a> 导入多个帐号</h2><p>本接口用于批量将 App 自有帐号导入即时通信 IM 帐号系统，为该帐号创建一个对应的内部 ID，使该帐号能够使用即时通信 IM 服务。</p>',8),e=(0,t.Uk)("注意： 本接口单次最多支持导入 100 个帐号，且不支持导入帐号的昵称和头像信息。请使用 "),c=(0,t.Uk)("资料管理-设置资料"),o=(0,t.Uk)(" 设置其他信息。"),u=(0,t.uE)('<p>使用示例：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> accounts <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\naccounts<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;doocs_1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\naccounts<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;doocs_2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">MultiAccountImportRequest</span> request <span class="token operator">=</span> <span class="token class-name">MultiAccountImportRequest</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">accounts</span><span class="token punctuation">(</span>accounts<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token class-name">MultiAccountImportResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>account<span class="token punctuation">.</span><span class="token function">multiAccountImport</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="删除帐号" tabindex="-1"><a class="header-anchor" href="#删除帐号" aria-hidden="true">#</a> 删除帐号</h2><ul><li>仅支持删除套餐包类型为 IM 体验版的帐号，其他类型的账号（如：TRTC、白板、专业版、旗舰版）无法删除。</li><li>帐号删除时，该用户的关系链、资料等数据也会被删除</li><li>帐号删除后，<strong>该用户的数据将无法恢复</strong>，请谨慎使用该接口。</li></ul><p>使用示例：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">AccountDeleteItem</span> deleteAccount <span class="token operator">=</span> <span class="token class-name">AccountDeleteItem</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">userId</span><span class="token punctuation">(</span><span class="token string">&quot;doocs&quot;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">AccountDeleteRequest</span> request <span class="token operator">=</span> <span class="token class-name">AccountDeleteRequest</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">deleteItemList</span><span class="token punctuation">(</span><span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span>deleteAccount<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token class-name">AccountDeleteResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>account<span class="token punctuation">.</span><span class="token function">accountDelete</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="查询帐号" tabindex="-1"><a class="header-anchor" href="#查询帐号" aria-hidden="true">#</a> 查询帐号</h2><p>用于查询自有帐号是否已导入即时通信 IM, 支持批量查询。</p><p>使用示例：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">AccountCheckItem</span> account1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AccountCheckItem</span><span class="token punctuation">(</span><span class="token string">&quot;doocs_1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">AccountCheckItem</span> account2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AccountCheckItem</span><span class="token punctuation">(</span><span class="token string">&quot;doocs_2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">AccountCheckRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AccountCheckRequest</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>account1<span class="token punctuation">,</span> account2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token class-name">AccountCheckResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>account<span class="token punctuation">.</span><span class="token function">accountCheck</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="失效帐号登录状态" tabindex="-1"><a class="header-anchor" href="#失效帐号登录状态" aria-hidden="true">#</a> 失效帐号登录状态</h2><p>本接口适用于将 App 用户帐号的登录状态（例如 UserSig）失效。</p><p>例如，开发者判断一个用户为恶意帐号后，可以调用本接口将该用户当前的登录状态失效，这样用户使用历史 UserSig 登录即时通信 IM 会失败。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>支持一次失效一个帐号，用户可以使用重新生成的 UserSig 登录即时通信 IM</p></div><p>使用示例：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">KickRequest</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KickRequest</span><span class="token punctuation">(</span><span class="token string">&quot;doocs_1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token class-name">KickResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>account<span class="token punctuation">.</span><span class="token function">kick</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="查询帐号在线状态" tabindex="-1"><a class="header-anchor" href="#查询帐号在线状态" aria-hidden="true">#</a> 查询帐号在线状态</h2><p>获取用户当前的登录状态。</p><p>使用示例：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> toAccount <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;doocs_1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;doocs_2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">QueryOnlineStatusRequest</span> request <span class="token operator">=</span> <span class="token class-name">QueryOnlineStatusRequest</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">toAccount</span><span class="token punctuation">(</span>toAccount<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">isNeedDetail</span><span class="token punctuation">(</span><span class="token class-name">IsNeedDetail</span><span class="token punctuation">.</span>YES<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token class-name">QueryOnlineStatusResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>account<span class="token punctuation">.</span><span class="token function">queryOnlineStatus</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',20),l={},i=(0,a(3744).Z)(l,[["render",function(n,s){const a=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("p",null,[e,(0,t.Wm)(a,{to:"/guide/profile.html#%E8%AE%BE%E7%BD%AE%E8%B5%84%E6%96%99"},{default:(0,t.w5)((()=>[c])),_:1}),o]),u],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);