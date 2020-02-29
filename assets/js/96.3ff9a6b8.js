(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{350:function(a,e,r){"use strict";r.r(e);var t=r(28),s=Object(t.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"v8"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#v8"}},[a._v("#")]),a._v(" V8")]),a._v(" "),r("p",[a._v("V8 是 Node 的 JavaScript 执行引擎，Node 在 JavaScript 的执行上直接受益于 V8，可以随着 V8 的升级就能享受到更好的性能或新的语言特性（如 ES5 和 ES6）等，同时也受到 V8 的一些限制。")]),a._v(" "),r("h2",{attrs:{id:"内存限制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内存限制"}},[a._v("#")]),a._v(" 内存限制")]),a._v(" "),r("p",[a._v("一般的后端开发语言，对基本的内存使用不会做限制，机器的内存有多大，我们就可以用多少内存。但是在 Node 中，我们并不能使用机器的全部内存，通常情况下只能使用 1G 左右的内存。造成这个问题的主要原因在于 Node 是基于 V8 构建的，V8 负责 Node 中内存的管理和分配。而 V8 是 Chrome 的驱动引擎，主要针对的是网页的运行环境，V8 限制的内存足以胜任前端页面中的所有需求，却对后台开发造成了一定限制。")]),a._v(" "),r("p",[a._v("在实际使用中，我们还是要注意这个限制，避免使用过大的内存导致进程异常退出。")]),a._v(" "),r("blockquote",[r("p",[r("strong",[a._v("注意")]),a._v("：V8 中可以使用的内存大小并不是固定的，可能随着 V8 的发展而调整，而不同平台的机器也是不一样的，64 位平台约为 1.4G，32 位平台约为 0.7G。")])]),a._v(" "),r("h2",{attrs:{id:"对象分配"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#对象分配"}},[a._v("#")]),a._v(" 对象分配")]),a._v(" "),r("p",[a._v("在 V8 中，所有的 JavaScript 对象都是通过堆来进行分配的。当我们在代码中声明变量并赋值时，所使用对象的内存就分配在堆中。如果已申请的堆空闲内存不够分配新的对象，将继续申请堆内存，直到堆的大小超过 V8 的限制为止。")]),a._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" node\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" process."),r("span",{pre:!0,attrs:{class:"token function-name function"}},[a._v("memoryUsage")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" rss: "),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("22011904")]),a._v(",\n  heapTotal: "),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("7684096")]),a._v(",\n  heapUsed: "),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("5027656")]),a._v(",\n  external: "),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("10491")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),r("h2",{attrs:{id:"垃圾回收算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收算法"}},[a._v("#")]),a._v(" 垃圾回收算法")]),a._v(" "),r("p",[a._v("V8 的垃圾回收策略主要基于分代式垃圾回收机制。在自动垃圾回收的演变过程中，人们发现没有一种垃圾回收算法能够胜任所有的场景。因为在实际的应用中，对象的生存周期长短不一，不同的算法只能针对特定情况具有最好的效果。为此，统计学在垃圾回收算法的发展中产生了较大的作用，现代的垃圾回收算法中按对象的存活时间将内存的垃圾回收进行不同的分代，然后分别对不同分代的内存施以更高效的算法。")]),a._v(" "),r("h3",{attrs:{id:"内存分代"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内存分代"}},[a._v("#")]),a._v(" 内存分代")]),a._v(" "),r("p",[a._v("在 V8 中，主要将内存分为新生代和老生代两代。新生代中的对象为存活时间较短的对象，老生代中的对象为存活时间较长或常驻内存的对象。默认情况下，V8 堆内存的最大值在 64 位系统上为 1464 MB，32 位系统上则为 732 MB。")]),a._v(" "),r("h3",{attrs:{id:"scavenge-算法（新生代）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scavenge-算法（新生代）"}},[a._v("#")]),a._v(" Scavenge 算法（新生代）")]),a._v(" "),r("p",[a._v("在分代的基础上，新生代中的对象主要通过 Scavenge 算法进行垃圾回收。在 Scavenge 的具体实现中，主要采用了 Cheney 算法，该算法由 C.J. Cheney 于 1970 年首次发表在 ACM 论文上。")]),a._v(" "),r("p",[a._v("Cheney 算法是一种采用复制的方式实现的垃圾回收算法。它将堆内存一分为二，每一部分空间称为 semispace。在这两个 semispace 空间中，只有一个处于使用中，另一个处于闲置状态。处于使用状态的 semispace 空间称为 From 空间，处于闲置状态的空间称为 To 空间。当我们分配对象时，先是在 From 空间中进行分配。当开始进行垃圾回收时，会检查 From 空间中的存活对象，这些存活对象将被复制到 To 空间中，而非存活对象占用的空间将会被释放。完成复制后，From 空间和 To 空间的角色发生对换。简而言之，在垃圾回收的过程中，就是通过将存活对象在两个 semispace 空间之间进行复制。")]),a._v(" "),r("p",[a._v("由于 Scavenge 是典型的牺牲空间换取时间的算法，所以无法大规模地应用到所有的垃圾回收中。")]),a._v(" "),r("p",[a._v("在单纯的 Scavenge 过程中，From 空间中的存活对象会被复制到 To 空间中去，然后对 From 空间和 To 空间进行角色对换（又称翻转）。但在分代式垃圾回收的前提下，From 空间中的存活对象在复制到 To 空间之前需要进行检查。在一定条件下，需要将存活周期长的对象移动到老生代中，也就是完成对象晋升。")]),a._v(" "),r("p",[a._v("对象晋升的条件主要有两个，一个是对象是否经历过 Scavenge 回收，一个是 To 空间的内存占用比超过限制。")]),a._v(" "),r("h3",{attrs:{id:"mark-sweep-mark-compact（老生代）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mark-sweep-mark-compact（老生代）"}},[a._v("#")]),a._v(" Mark-Sweep & Mark-Compact（老生代）")]),a._v(" "),r("p",[a._v("对于老生代中的对象，由于存活对象占较大比重，再采用 Scavenge 的方式会有两个问题：一个是存活对象较多，复制存活对象的效率将会很低；另一个问题依然是浪费一半空间的问题。因此，V8 在老生代中主要采用了 Mark-Sweep 和 Mark-Compact 相结合的方式进行垃圾回收。")]),a._v(" "),r("p",[a._v("Mark-Sweep 是标记清除的意思，它分为标记和清除两个阶段。Mark-Sweep 在标记阶段遍历堆中的所有对象，并标记活着的对象，在随后的清除阶段中，只清除没有被标记的对象。")]),a._v(" "),r("p",[a._v("Mark-Sweep 最大的问题是在进行一次标记清除回收后，内存空间会出现不连续的状态。这种内存碎片会对后续的内存分配造成问题，因为很可能出现需要分配一个大对象的情况，这时所有的碎片空间都无法完成此次分配，就会提前触发垃圾回收，而这次回收是不必要的。")]),a._v(" "),r("p",[a._v("为了解决 Mark-Sweep 的内存碎片问题，Mark-Compact 被提出来。Mark-Compact 是标记整理的意思，是在 Mark-Sweep 的基础上演变而来的。它们的差别在于对象在标记为死亡后，在整理的过程中，将活着的对象往一端移动，移动完成后，直接清理掉边界外的内存。")]),a._v(" "),r("p",[a._v("在 Mark-Sweep 和 Mark-Compact 之间，由于 Mark-Compact 需要移动对象，所以它的执行速度不可能很快，所以在取舍上，V8 主要使用 Mark-Sweep，在空间不足以对从新生代中晋升过来的对象进行分配时才使用 Mark-Compact。")]),a._v(" "),r("h3",{attrs:{id:"增量标记（incremental-marking）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#增量标记（incremental-marking）"}},[a._v("#")]),a._v(" 增量标记（Incremental Marking）")]),a._v(" "),r("p",[a._v("为了避免出现 JavaScript 应用逻辑与垃圾回收器看到的不一致的情况，垃圾回收的 3 种基本算法都需要将应用逻辑暂停下来，待执行完垃圾回收后再恢复执行应用逻辑，这种行为被称为“全停顿”（stop-the-world）。")]),a._v(" "),r("p",[a._v("为了降低全堆垃圾回收带来的停顿时间，V8 先从标记阶段入手，将原本要一口气停顿完成的动作改为增量标记（incremental marking），也就是拆分为许多小“步进”，每做完一“步进”就让 JavaScript 应用逻辑执行一小会儿，垃圾回收与应用逻辑交替执行直到标记阶段完成。V8 在经过增量标记的改进后，垃圾回收的最大停顿时间可以减少到原本的 1/6 左右。")]),a._v(" "),r("p",[a._v("V8 后续还引入了延迟清理（lazy sweeping）与增量式整理（incremental compaction），让清理与整理动作也变成增量式的。同时还计划引入并行标记与并行清理，进一步利用多核性能降低每次停顿的时间。")]),a._v(" "),r("h3",{attrs:{id:"并发标记（concurrent-marking）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#并发标记（concurrent-marking）"}},[a._v("#")]),a._v(" 并发标记（Concurrent Marking）")]),a._v(" "),r("p",[a._v("主线程不停止工作，使用辅助线程进行垃圾回收。")]),a._v(" "),r("h3",{attrs:{id:"参考文献"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[a._v("#")]),a._v(" 参考文献")]),a._v(" "),r("p",[a._v("-《深入浅出 Node.js》")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://v8.dev/blog/free-garbage-collection",target:"_blank",rel:"noopener noreferrer"}},[a._v("Getting garbage collection for free"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://v8.dev/blog/trash-talk",target:"_blank",rel:"noopener noreferrer"}},[a._v("Trash talk: the Orinoco garbage collector"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://v8.dev/blog/concurrent-marking",target:"_blank",rel:"noopener noreferrer"}},[a._v("Concurrent marking in V8"),r("OutboundLink")],1)])]),a._v(" "),r("p",[a._v("译文")]),a._v(" "),r("p",[a._v("https://zhuanlan.zhihu.com/p/55917130\nhttps://yq.aliyun.com/articles/607048")])])}),[],!1,null,null,null);e.default=s.exports}}]);