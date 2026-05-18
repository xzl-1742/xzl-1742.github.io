// 绑定正式域名后填这里；留空时分享链接会使用当前线上页面地址。
const PUBLIC_SITE_URL = "https://tinyurl.com/2a453bwz";

const frequencyOptions = [
  {
    id: "always-on",
    label: "睡了但没关机",
    desc: "人睡了，脑子还在夜班。梦很多，剧情还挺完整。",
  },
  {
    id: "boom",
    label: "偶尔开机就爆炸",
    desc: "平时很安静，一做梦就是大制作，醒来像刚逃出来。",
  },
  {
    id: "deny",
    label: "梦完不认账",
    desc: "感觉做过，但醒来只剩一句：刚才是不是有点事？",
  },
  {
    id: "replay",
    label: "醒了还在回味",
    desc: "梦不一定多，但你会反复琢磨，甚至想找人评评理。",
  },
];

const dimensionMeta = {
  C: { name: "梦里管事", pair: "梦里管事 C / 梦里随缘 D" },
  D: { name: "梦里随缘", pair: "梦里管事 C / 梦里随缘 D" },
  F: { name: "见怪就跑", pair: "见怪就跑 F / 非要手欠 E" },
  E: { name: "非要手欠", pair: "见怪就跑 F / 非要手欠 E" },
  A: { name: "摇人求生", pair: "摇人求生 A / 独自硬撑 S" },
  S: { name: "独自硬撑", pair: "摇人求生 A / 独自硬撑 S" },
  R: { name: "醒来审案", pair: "醒来审案 R / 醒来失忆 B" },
  B: { name: "醒来失忆", pair: "醒来审案 R / 醒来失忆 B" },
};

const questions = [
  {
    axis: "CD",
    title: "梦见明天考试，但你现在才发现自己一页没看。",
    scene: "桌上卷子厚得像砖，老师还一脸“你应该会吧”的表情。",
    options: [
      { text: "开始安排补救流程", desc: "偷看、背重点、编理由，梦里也要抢救一下。", trait: "C" },
      { text: "质疑这个剧情不合理", desc: "先跟监考老师掰扯：我根本没选这门课。", trait: "C" },
      { text: "坐下硬写", desc: "让大脑现场编答案，写到哪算哪。", trait: "D" },
      { text: "接受命运审判", desc: "梦都这么安排了，那我也不好意思反抗。", trait: "D" },
    ],
  },
  {
    axis: "CD",
    title: "梦见自己迟到了，电梯每层都停。",
    scene: "时间在跑，电梯在演，你的灵魂已经开始冒烟。",
    options: [
      { text: "狂按关门键找路线", desc: "楼梯、窗户、消防通道，全都纳入作战图。", trait: "C" },
      { text: "指挥所有人别挡路", desc: "梦里迟到已经够惨了，别再给你加群众演员。", trait: "C" },
      { text: "电梯去哪你去哪", desc: "反正梦会自己切场，先看看它想干嘛。", trait: "D" },
      { text: "站着等剧情审判", desc: "不是你不急，是你已经被梦拿捏了。", trait: "D" },
    ],
  },
  {
    axis: "CD",
    title: "梦见手机怎么都拨不出去。",
    scene: "屏幕亮着，信号满格，就是谁也联系不上。",
    options: [
      { text: "重启换卡借手机", desc: "把梦里的通信故障当成项目事故处理。", trait: "C" },
      { text: "对手机发火到它恢复", desc: "用情绪驱动电子设备，梦里说不定真有用。", trait: "C" },
      { text: "怀疑梦里不需要通讯", desc: "也许这个剧情就是想让你闭嘴。", trait: "D" },
      { text: "揣兜里交给命运", desc: "联系不上就算了，天塌了也不是第一次。", trait: "D" },
    ],
  },
  {
    axis: "FE",
    title: "梦里有个看不清的东西在追你。",
    scene: "它没有脸，没有解释，但跑得很有职业素养。",
    options: [
      { text: "先跑，绝不回头", desc: "活着才有输出，别跟未知物讲礼貌。", trait: "F" },
      { text: "找门找厕所找床底", desc: "只要能藏，垃圾桶也可以谈。", trait: "F" },
      { text: "回头看它什么配置", desc: "都追这么久了，至少得知道对手是谁。", trait: "E" },
      { text: "停下来问它追我干嘛", desc: "你不一定勇，你只是很想把事情问清楚。", trait: "E" },
    ],
  },
  {
    axis: "FE",
    title: "熟悉的小区楼道突然无限延长。",
    scene: "每上一层都像复制粘贴，声控灯还一闪一闪。",
    options: [
      { text: "立刻原路返回", desc: "不给梦加戏，楼道异常就该撤。", trait: "F" },
      { text: "随便找个门躲进去", desc: "先离开这条楼道，门后是什么以后再说。", trait: "F" },
      { text: "逐层检查", desc: "想看看梦到底能编到第几层。", trait: "E" },
      { text: "继续探路甚至有点兴奋", desc: "别人害怕，你已经把它当隐藏地图。", trait: "E" },
    ],
  },
  {
    axis: "FE",
    title: "梦里出现一间从没见过的房间，门半开。",
    scene: "里面很安静，但安静得特别像有事。",
    options: [
      { text: "关门，当没看见", desc: "成年人最重要的能力：不接奇怪支线。", trait: "F" },
      { text: "叫别人先进去", desc: "好奇是好奇，但做人不能太靠前。", trait: "F" },
      { text: "进去看看", desc: "万一里面有梦境 DLC，不看亏了。", trait: "E" },
      { text: "伸头观察还顺手翻东西", desc: "不是你胆大，是你手真的欠。", trait: "E" },
    ],
  },
  {
    axis: "AS",
    title: "梦见自己迷路了，地图像喝多了一样。",
    scene: "导航让你左转，左边是一堵墙，右边是一条河。",
    options: [
      { text: "马上找人问路", desc: "路人、保安、同学，谁看起来活着问谁。", trait: "A" },
      { text: "给所有能想到的人打电话", desc: "梦里迷路也要开通讯录盲盒。", trait: "A" },
      { text: "自己硬走", desc: "方向感没有，但尊严还在。", trait: "S" },
      { text: "假装认识路", desc: "越走越离谱，但气势不能输。", trait: "S" },
    ],
  },
  {
    axis: "AS",
    title: "全班或全公司突然要你上台发言。",
    scene: "你不知道主题，但所有人已经开始鼓掌。",
    options: [
      { text: "疯狂找熟人求救", desc: "让他先顶一下，哪怕顶三秒也行。", trait: "A" },
      { text: "拉一个人一起受难", desc: "可以社死，但不能独自社死。", trait: "A" },
      { text: "自己上去硬讲", desc: "脑内空白也要撑出一个人样。", trait: "S" },
      { text: "装作这是我的主场", desc: "不知道在讲什么，但看起来很有把握。", trait: "S" },
    ],
  },
  {
    axis: "AS",
    title: "梦里交通工具突然失控。",
    scene: "车、船、地铁、飞机，反正有一个东西开始不听话。",
    options: [
      { text: "大喊让大家一起想办法", desc: "先把恐慌外包给集体。", trait: "A" },
      { text: "找司机或看起来负责的人", desc: "梦里也得有个负责人吧。", trait: "A" },
      { text: "自己冲过去研究控制台", desc: "不懂没关系，先摸了再说。", trait: "S" },
      { text: "默默抓紧扶手", desc: "个人承包恐惧，不打扰大家。", trait: "S" },
    ],
  },
  {
    axis: "RB",
    title: "醒来后只记得梦里有一种很强烈的情绪。",
    scene: "剧情没了，但那股劲儿还黏在身上。",
    options: [
      { text: "立刻回想细节", desc: "把碎片拼回来，像侦破脑内悬案。", trait: "R" },
      { text: "打开备忘录记关键词", desc: "不让大脑把案发现场清空。", trait: "R" },
      { text: "算了，乱播而已", desc: "梦就是梦，不值得开会。", trait: "B" },
      { text: "翻身继续睡", desc: "梦是谁，不熟。", trait: "B" },
    ],
  },
  {
    axis: "RB",
    title: "梦里出现一个很久没联系的人。",
    scene: "对方像没事人一样出场，你醒来却有点懵。",
    options: [
      { text: "醒来分析他为什么出现", desc: "大脑不会无缘无故加演员，必须查。", trait: "R" },
      { text: "讲给朋友听求解", desc: "让外部陪审团也加入梦境审案。", trait: "R" },
      { text: "三秒忘掉脸", desc: "只知道好像有人来过，像快递没签收。", trait: "B" },
      { text: "只剩一句好像有点怪", desc: "剧情查无此梦，情绪略有残留。", trait: "B" },
    ],
  },
  {
    axis: "RB",
    title: "梦里发生史诗级大事，但闹钟响了。",
    scene: "世界观刚展开，现实就把你强制下线。",
    options: [
      { text: "醒后硬把结尾脑补完", desc: "大脑断更，你自己续上。", trait: "R" },
      { text: "躺着复盘像追剧", desc: "越想越觉得刚才那梦有点东西。", trait: "R" },
      { text: "刷牙时剧情已经没了", desc: "宏大叙事输给牙膏。", trait: "B" },
      { text: "只记得很累", desc: "具体发生什么不知道，反正你像上过班。", trait: "B" },
    ],
  },
];

const results = {
  CFAR: {
    name: "夜间领导",
    avatar: {
      tag: "夜间领导",
      caption: "睡衣外面套着指挥背心，拿扩音器给梦境灾难排班。",
      color: "#d7ff37",
      prop: "megaphone",
      scene: "meeting",
    },
    dream: "你梦里一出事就自动接管现场。别人还在尖叫，你已经开始分配路线、安排谁别添乱、判断哪里能撤。就算你自己也慌，梦里的你还是会把灾难当成一个需要管理的烂项目，边跑边开会，边倒霉边控场。",
    reality: "现实里你可能也很难完全撒手不管。嘴上说随便，脑子已经把流程、风险和背锅人排好了。",
    share: "你不是睡着了，你是换个地方继续非法上班。",
  },
  CFAB: {
    name: "逃生群主",
    avatar: {
      tag: "逃生群主",
      caption: "拖鞋跑到冒烟，一边拉群一边假装这事没发生过。",
      color: "#2ee7d1",
      prop: "group-chat",
      scene: "run",
    },
    dream: "你梦里逃命不是单人模式，而是边跑边摇人。看到危险第一反应不是硬刚，而是找熟人、打电话、拉人一起撤，哪怕梦里信号烂得像坏掉的对讲机。你慌，但你不想一个人慌，混乱也要凑齐群聊人数。",
    reality: "现实里你可能也习惯把焦虑外放成求助信号。你不一定脆弱，只是很清楚：倒霉可以，最好别单独倒霉。",
    share: "你梦里不是逃生，是在建临时互助群。",
  },
  CFSR: {
    name: "跑路卷王",
    avatar: {
      tag: "跑路卷王",
      caption: "背着应急包逃命，手里还攥着一份梦境事故报告。",
      color: "#ff5c45",
      prop: "emergency-kit",
      scene: "route",
    },
    dream: "你梦里逃命也要讲效率。别人慌不择路，你会找出口、算路线、判断哪里能藏，甚至在梦里形成一套临时 SOP。你不是不害怕，你只是害怕的时候也在优化方案，仿佛潜意识给你塞了一个应急管理岗位。",
    reality: "现实里你可能也习惯先处理问题，再处理情绪。别人看你冷静，其实你只是把崩溃排到了待办列表后面。",
    share: "你不是在逃命，你是在卷逃命。",
  },
  CFSB: {
    name: "硬撑黑屏",
    avatar: {
      tag: "硬撑黑屏",
      caption: "一手地图一手锅盖，做完大事以后把记录全删了。",
      color: "#ffe05c",
      prop: "shield-map",
      scene: "missing-file",
    },
    dream: "你梦里很能扛，能控场，能跑路，也能一个人把烂摊子顶住。问题是梦一结束，大脑像被拔了电源，细节直接黑屏，只剩一股疲惫感。你明明在梦里干了很多事，醒来却像没有工牌、没有记录、没有加班费。",
    reality: "现实里你可能也会把压力先吞下去，处理完再说没事。别人以为你轻松，你只是习惯不留现场。",
    share: "你梦里硬撑到关机，醒来还说没事。",
  },
  CEAR: {
    name: "开门审判",
    avatar: {
      tag: "开门审判",
      caption: "手电筒照着怪门，旁边还飘着三条群聊意见。",
      color: "#7b5cff",
      prop: "flashlight-chat",
      scene: "door",
    },
    dream: "你梦里看见怪门、怪房间、怪楼道，第一反应不是撤，而是审。你会想知道它凭什么怪、后面藏着什么、剧情还能编到什么程度。你像梦境里的质询委员，非要把支线任务问出一个说法。",
    reality: "现实里你可能也很难放过可疑细节。别人觉得算了，你会觉得不行，这个东西必须有个解释。",
    share: "别人梦里逃命，你梦里开门验货。",
  },
  CEAB: {
    name: "首摸犯",
    avatar: {
      tag: "首摸犯",
      caption: "面前写着别碰，手已经替脑子做完决定。",
      color: "#ff8ab3",
      prop: "red-button",
      scene: "warning",
    },
    dream: "你梦里的灾难，通常不是怪物先动手，而是你先伸手。门缝有光你要看，桌上有按钮你要按，陌生房间有抽屉你也很难不拉。你不是胆大，是对“别碰”两个字天然过敏，手比脑子更早提交申请。",
    reality: "现实里你可能也很难放过异常细节。嘴上说看看，身体已经参与，事后还会假装只是路过。",
    share: "你不是作死，你是梦境质检员。",
  },
  CESR: {
    name: "副本脑",
    avatar: {
      tag: "副本脑",
      caption: "左手攻略图，右手铅笔，一个人把梦境副本画成施工图。",
      color: "#8df06b",
      prop: "map-pen",
      scene: "maze",
    },
    dream: "你梦里像被丢进隐藏副本。迷路、异空间、奇怪建筑对你来说不只是恐怖场景，也是可以研究的机制。你会记路线、找规律、试规则，还经常一个人往深处走。别人等救援，你已经开始画攻略图。",
    reality: "现实里你可能也很能独自解决问题，但容易把自己变成唯一负责人，越复杂越想亲自弄懂。",
    share: "你梦里不找队友，你直接开荒。",
  },
  CESB: {
    name: "乱碰白板",
    avatar: {
      tag: "乱碰白板",
      caption: "刚按完所有开关，脸上写着：刚才不是我。",
      color: "#ff9f45",
      prop: "switch",
      scene: "spark",
    },
    dream: "你梦里很像一块会自己闯祸的白板。看到开关想按，看到门想开，看到规则想试，剧情越不正常你越容易现场发挥。最妙的是，作完以后你还不太留档，醒来只剩一句：刚才好像挺刺激。",
    reality: "现实里你可能也会在混乱里靠直觉行动，事后再补逻辑。你不一定莽，只是上头来得很安静。",
    share: "你梦里乱碰一通，醒来主打失忆无辜。",
  },
  DFAR: {
    name: "随缘报警",
    avatar: {
      tag: "随缘报警",
      caption: "身体被剧情拖走，嘴上还在广播：有人管一下吗？",
      color: "#61d8ff",
      prop: "flare",
      scene: "drag",
    },
    dream: "你梦里经常被剧情拖着走，方向不由你，节奏也不由你。但你不是安静受害者，你会喊人、求救、发信号，哪怕梦境像一个永远不在线的客服。你一边随缘漂流，一边努力证明自己有在报警。",
    reality: "现实里你可能也不太爱硬撑到底。搞不定就求助，不丢人，至少比一个人把锅炖糊强。",
    share: "你梦里不知道去哪，但知道该喊谁。",
  },
  DFAB: {
    name: "喊完失联",
    avatar: {
      tag: "喊完失联",
      caption: "警报响得很大，人跑得很快，记忆走得更快。",
      color: "#f4c542",
      prop: "alarm",
      scene: "run",
    },
    dream: "你梦里的场面通常很热闹：跑、喊、找人、求助，像一场大型混乱现场。可闹钟一响，记忆直接失联。你只知道自己刚才很忙、很急、很像在逃命，但具体为什么跑、喊了谁、结果如何，全都查无此梦。",
    reality: "现实里你可能对压力反应很快，但事后不想反刍。能翻篇就翻篇，情绪现场不宜久留。",
    share: "你睡着后很热闹，醒来后很无辜。",
  },
  DFSR: {
    name: "独逃后劲",
    avatar: {
      tag: "独逃后劲",
      caption: "抱着枕头跑路，停下来第一件事是给路线打分。",
      color: "#c6a6ff",
      prop: "pillow-clipboard",
      scene: "route",
    },
    dream: "你梦里常常是一个人面对麻烦。你会跑、会躲、会硬撑，不太依赖别人，但梦结束以后反而开始复盘：刚才为什么那样？换条路会不会好一点？怪东西到底从哪来的？梦已经停播，后劲还在你脑内续集。",
    reality: "现实里你可能也习惯独自消化问题。事情过去了，脑子却还在后台重播，顺便给自己挑刺。",
    share: "你梦里一个人逃，醒来一个人审。",
  },
  DFSB: {
    name: "白跑空号",
    avatar: {
      tag: "白跑空号",
      caption: "穿着一只拖鞋跑完全程，终点牌写着：查无此梦。",
      color: "#cde6ff",
      prop: "shoe",
      scene: "finish",
    },
    dream: "你梦里经常消耗巨大，但信息量很低。你可能跑了很久、赶了很久、找了很久，醒来却发现剧情像空号一样拨不通。只记得累，不记得值不值；只知道自己很努力，但梦境没有给你发任何有效回执。",
    reality: "现实里你可能也很能把事情扛过去，然后快速丢进回收站。不是没发生，是懒得再建档。",
    share: "你梦里跑了八百里，醒来只剩缓存。",
  },
  DEAR: {
    name: "离谱讲师",
    avatar: {
      tag: "离谱讲师",
      caption: "被梦境创飞以后，第一反应是拿麦克风讲给别人听。",
      color: "#ff6f91",
      prop: "microphone",
      scene: "story",
    },
    dream: "你对梦的离谱程度有很强表达欲。梦越怪，你越想讲给别人听。哪怕剧情没有逻辑、人物突然变形、地点乱切，你醒来后也能认真复述，并期待朋友理解你的震撼。你不是做梦，你是在收集夜间案例。",
    reality: "现实里你可能也很擅长把混乱讲成故事。别人经历事故，你负责把事故讲得像栏目。",
    share: "你的梦不一定合理，但很适合开讲座。",
  },
  DEAB: {
    name: "事故路过",
    avatar: {
      tag: "事故路过",
      caption: "举着小相机站在怪事旁边，表情像路过，身体很诚实。",
      color: "#89f7c3",
      prop: "camera",
      scene: "warning",
    },
    dream: "你梦里很容易被怪事吸引。嘴上可能说只是路过，但身体已经靠近第一现场。你不一定想负责，也不一定想解决，可只要有离谱事件发生，你就很难视而不见。梦境刚冒烟，你已经站到了围观位。",
    reality: "现实里你可能也是“我就看看”的类型。看着看着，就比当事人还了解现场。",
    share: "你梦里不是主角，是事故现场热心观众。",
  },
  DESR: {
    name: "梦渣考据",
    avatar: {
      tag: "梦渣考据",
      caption: "拿放大镜研究一扇不该出现的门，越怪越认真。",
      color: "#b7ff36",
      prop: "magnifier",
      scene: "door",
    },
    dream: "你醒来后哪怕只剩一点梦渣，也能分析很久。一个场景、一个人、一扇门、一种说不清的感觉，你都会想它是不是有什么含义。别人梦醒就算了，你梦醒像开始考古，拿着碎片硬拼潜意识遗址。",
    reality: "现实里你可能也容易被细节钩住。事情本身过去了，但你还在研究它为什么出现。",
    share: "别人梦醒翻篇，你梦醒出土文物。",
  },
  DESB: {
    name: "离线本人",
    avatar: {
      tag: "离线本人",
      caption: "脸是空白的，背景很热闹，参与感主要靠站位。",
      color: "#f7f0df",
      prop: "blank-face",
      scene: "static",
    },
    dream: "你梦里经常像没完全加载。剧情在发生，你也在场，但参与感很低，像被梦境挂在后台。别人忙着逃、查、喊、作，你可能只是站在那里，看着世界自己发疯。醒来以后也很难说清做了什么，只能确认：刚才好像有个我。",
    reality: "现实里你可能也很会顺着环境走，不急着抢控制权。很多时候你人在现场，灵魂还在缓冲。",
    share: "你梦里参与了，但没完全上线。",
  },
};

const frequencyOptionsEl = document.querySelector("#frequency-options");
const startButton = document.querySelector("#start-button");
const introScreen = document.querySelector("#intro-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const questionCountEl = document.querySelector("#question-count");
const progressFill = document.querySelector("#progress-fill");
const questionDimension = document.querySelector("#question-dimension");
const questionTitle = document.querySelector("#question-title");
const questionScene = document.querySelector("#question-scene");
const answerList = document.querySelector("#answer-list");
const prevButton = document.querySelector("#prev-button");
const resultTitle = document.querySelector("#result-title");
const resultName = document.querySelector("#result-name");
const resultCodeRow = document.querySelector("#result-code-row");
const dreamCopy = document.querySelector("#dream-copy");
const realityCopy = document.querySelector("#reality-copy");
const shareLine = document.querySelector("#share-line");
const characterCard = document.querySelector("#character-card");
const characterIllustration = document.querySelector("#character-illustration");
const characterCaption = document.querySelector("#character-caption");
const shareImagePreview = document.querySelector("#share-image-preview");
const shareUrlCopy = document.querySelector("#share-url-copy");
const shareButton = document.querySelector("#share-button");
const copyButton = document.querySelector("#copy-button");
const saveImageButton = document.querySelector("#save-image-button");
const restartButton = document.querySelector("#restart-button");
const toast = document.querySelector("#toast");

const state = {
  frequency: null,
  currentQuestion: 0,
  answers: Array(questions.length).fill(null),
  latestResult: null,
  shareImageUrl: null,
  shareImageBlob: null,
  shareImageDataUrl: null,
};

function getFrequency(frequencyId) {
  return frequencyOptions.find((option) => option.id === frequencyId) || frequencyOptions[0];
}

function normalizeBaseUrl(url) {
  const base = new URL(url);
  base.search = "";
  base.hash = "";
  return base.toString();
}

function getCurrentPageBaseUrl() {
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";
  return url.toString();
}

function getPublicBaseUrl() {
  if (PUBLIC_SITE_URL) {
    return normalizeBaseUrl(PUBLIC_SITE_URL);
  }

  return getCurrentPageBaseUrl();
}

function createLocalResultUrl(result) {
  const url = new URL(getCurrentPageBaseUrl());
  url.searchParams.set("r", result.code);
  url.searchParams.set("f", result.frequency.id);
  return url.toString();
}

function createShareUrl(result) {
  const url = new URL(getPublicBaseUrl());
  url.searchParams.set("r", result.code);
  url.searchParams.set("f", result.frequency.id);
  return url.toString();
}

function createEntryUrl() {
  return getPublicBaseUrl();
}

function buildResult(code, frequencyId) {
  const normalizedCode = String(code || "").toUpperCase();
  const result = results[normalizedCode];

  if (!result) return null;

  return {
    code: normalizedCode,
    frequency: getFrequency(frequencyId),
    ...result,
  };
}

function clearShareImageCache() {
  if (state.shareImageUrl) {
    URL.revokeObjectURL(state.shareImageUrl);
  }

  state.shareImageUrl = null;
  state.shareImageBlob = null;
  state.shareImageDataUrl = null;
}

function showScreen(screen) {
  [introScreen, quizScreen, resultScreen].forEach((item) => {
    item.classList.toggle("screen-active", item === screen);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderFrequencyOptions() {
  frequencyOptionsEl.innerHTML = frequencyOptions
    .map(
      (option) => `
        <button class="choice-button" type="button" data-frequency="${option.id}" aria-pressed="${state.frequency === option.id}">
          <span class="choice-main">
            <span class="choice-title">${option.label}</span>
            <span class="choice-desc">${option.desc}</span>
          </span>
        </button>
      `,
    )
    .join("");
}

function renderQuestion() {
  const question = questions[state.currentQuestion];
  const selectedAnswer = state.answers[state.currentQuestion];
  const progress = (state.currentQuestion / questions.length) * 100;

  questionCountEl.textContent = `第 ${state.currentQuestion + 1} / ${questions.length} 题`;
  progressFill.style.width = `${progress}%`;
  questionDimension.textContent = dimensionMeta[question.axis[0]].pair;
  questionTitle.textContent = question.title;
  questionScene.textContent = question.scene;
  prevButton.disabled = state.currentQuestion === 0;

  answerList.innerHTML = question.options
    .map(
      (option, index) => `
        <button class="choice-button" type="button" data-answer="${index}" aria-pressed="${selectedAnswer === index}">
          <span class="choice-main">
            <span class="choice-title">${option.text}</span>
            <span class="choice-desc">${option.desc}</span>
          </span>
          <span class="choice-tag">${option.trait}</span>
        </button>
      `,
    )
    .join("");
}

function calculateResult() {
  const scores = { C: 0, D: 0, F: 0, E: 0, A: 0, S: 0, R: 0, B: 0 };

  state.answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null) return;

    const trait = questions[questionIndex].options[answerIndex].trait;
    scores[trait] += 1;
  });

  const code = [
    scores.C > scores.D ? "C" : "D",
    scores.F > scores.E ? "F" : "E",
    scores.A > scores.S ? "A" : "S",
    scores.R > scores.B ? "R" : "B",
  ].join("");

  return buildResult(code, state.frequency);
}

function renderScene(scene, color) {
  const sceneMap = {
    meeting: `<path d="M52 66h54v34H52zM214 58h42v54h-42z" fill="#fff8df" stroke="#120f14" stroke-width="4"/><path d="M68 82h22M224 76h20M224 92h18" stroke="#120f14" stroke-width="4"/>`,
    run: `<path d="M38 90h74M24 130h62M236 82h48M218 128h76" stroke="${color}" stroke-width="8" stroke-linecap="round"/><path d="M248 210h44" stroke="#120f14" stroke-width="5" stroke-linecap="round"/>`,
    route: `<path d="M42 258c50-64 98 28 142-42 28-44 58-36 86-6" fill="none" stroke="${color}" stroke-width="8" stroke-linecap="round" stroke-dasharray="10 12"/><circle cx="42" cy="258" r="10" fill="#ff5c45" stroke="#120f14" stroke-width="4"/>`,
    "missing-file": `<path d="M224 56h48l28 28v76h-76z" fill="#fff8df" stroke="#120f14" stroke-width="4"/><path d="M272 56v30h28M238 116h42M238 136h24" stroke="#120f14" stroke-width="4"/>`,
    door: `<path d="M222 54h64v170h-64z" fill="#fff8df" stroke="#120f14" stroke-width="5"/><circle cx="270" cy="142" r="6" fill="${color}" stroke="#120f14" stroke-width="3"/>`,
    warning: `<path d="M250 48l44 80h-88z" fill="${color}" stroke="#120f14" stroke-width="5"/><path d="M250 78v28M250 118v6" stroke="#120f14" stroke-width="7" stroke-linecap="round"/>`,
    maze: `<path d="M38 64h94v36H76v38h76v38H58v50h108" fill="none" stroke="${color}" stroke-width="8" stroke-linejoin="round"/><path d="M230 64h50v142h-34v-80h-34" fill="none" stroke="#120f14" stroke-width="5" stroke-linejoin="round"/>`,
    spark: `<path d="M238 66l18-32 8 38 34-16-24 34 34 12-42 8 10 38-28-28-28 30 8-44-40-10 42-14z" fill="${color}" stroke="#120f14" stroke-width="4"/>`,
    drag: `<path d="M44 84c58-46 134-28 190 28" fill="none" stroke="${color}" stroke-width="9" stroke-linecap="round"/><path d="M218 82l32 38-48 4" fill="none" stroke="#120f14" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`,
    finish: `<path d="M248 58v178" stroke="#120f14" stroke-width="5"/><path d="M248 58h58v46h-58z" fill="#fff8df" stroke="#120f14" stroke-width="4"/><path d="M262 58v46M290 58v46M248 80h58" stroke="${color}" stroke-width="4"/>`,
    story: `<path d="M218 62h78v58h-28l-20 18 6-18h-36z" fill="#fff8df" stroke="#120f14" stroke-width="4"/><path d="M232 82h48M232 100h30" stroke="${color}" stroke-width="6" stroke-linecap="round"/>`,
    static: `<path d="M36 64h92M50 96h54M218 70h72M230 108h38M44 236h70M218 244h66" stroke="${color}" stroke-width="7" stroke-linecap="round" stroke-dasharray="5 11"/>`,
  };

  return sceneMap[scene] || sceneMap.static;
}

function renderProp(prop, color) {
  const propMap = {
    megaphone: `<g transform="translate(206 168) rotate(-10)"><path d="M0 18h34l50-24v70L34 42H0z" fill="${color}" stroke="#120f14" stroke-width="5"/><path d="M8 42l10 34h26L30 42z" fill="#fff8df" stroke="#120f14" stroke-width="5"/><path d="M92 18c18 10 18 28 0 40" fill="none" stroke="#120f14" stroke-width="5"/></g>`,
    "group-chat": `<g transform="translate(206 166)"><rect x="0" y="0" width="84" height="58" rx="8" fill="#fff8df" stroke="#120f14" stroke-width="5"/><circle cx="24" cy="28" r="9" fill="${color}" stroke="#120f14" stroke-width="4"/><circle cx="48" cy="28" r="9" fill="#2ee7d1" stroke="#120f14" stroke-width="4"/><circle cx="66" cy="28" r="9" fill="#ff5c45" stroke="#120f14" stroke-width="4"/><path d="M22 58l-16 18 4-18" fill="#fff8df" stroke="#120f14" stroke-width="5"/></g>`,
    "emergency-kit": `<g transform="translate(210 174)"><rect x="0" y="16" width="76" height="58" rx="8" fill="${color}" stroke="#120f14" stroke-width="5"/><path d="M24 16v-14h28v14M38 30v30M24 46h28" stroke="#120f14" stroke-width="7" stroke-linecap="round"/></g>`,
    "shield-map": `<g transform="translate(208 166)"><path d="M38 0l42 14v42c0 28-18 46-42 56C14 102-4 84-4 56V14z" fill="${color}" stroke="#120f14" stroke-width="5"/><path d="M18 34l18-10 20 14 18-8M18 56l18-10 20 14 18-8" fill="none" stroke="#120f14" stroke-width="4"/></g>`,
    "flashlight-chat": `<g transform="translate(204 168)"><path d="M12 58l38-38 24 24-38 38z" fill="${color}" stroke="#120f14" stroke-width="5"/><path d="M64 12l58-18-26 48z" fill="#fff8df" stroke="#120f14" stroke-width="4"/><path d="M84 64h46v34h-18l-14 12 4-12H84z" fill="#fff8df" stroke="#120f14" stroke-width="4"/></g>`,
    "red-button": `<g transform="translate(212 180)"><ellipse cx="42" cy="68" rx="46" ry="14" fill="#120f14" opacity=".24"/><rect x="0" y="36" width="84" height="34" rx="8" fill="#fff8df" stroke="#120f14" stroke-width="5"/><ellipse cx="42" cy="38" rx="34" ry="22" fill="#ff5c45" stroke="#120f14" stroke-width="5"/><path d="M26 38h32" stroke="#fff8df" stroke-width="5" stroke-linecap="round"/></g>`,
    "map-pen": `<g transform="translate(204 164)"><path d="M0 18l34-12 34 12 34-12v86l-34 12-34-12-34 12z" fill="#fff8df" stroke="#120f14" stroke-width="5"/><path d="M34 6v86M68 18v86M16 54c24-22 48 22 72-10" fill="none" stroke="${color}" stroke-width="5"/><path d="M90 78l30-30 16 16-30 30-22 8z" fill="${color}" stroke="#120f14" stroke-width="4"/></g>`,
    switch: `<g transform="translate(212 178)"><rect x="0" y="0" width="86" height="72" rx="12" fill="#fff8df" stroke="#120f14" stroke-width="5"/><path d="M24 36h38" stroke="#120f14" stroke-width="8" stroke-linecap="round"/><circle cx="60" cy="36" r="18" fill="${color}" stroke="#120f14" stroke-width="5"/></g>`,
    flare: `<g transform="translate(212 158)"><path d="M34 16c34 22 46 52 34 90-34-22-46-52-34-90z" fill="#ff5c45" stroke="#120f14" stroke-width="5"/><path d="M42 42c12 10 16 22 10 40-12-10-16-24-10-40z" fill="${color}" stroke="#120f14" stroke-width="4"/><path d="M18 110h64" stroke="#120f14" stroke-width="7" stroke-linecap="round"/></g>`,
    alarm: `<g transform="translate(210 162)"><circle cx="48" cy="58" r="42" fill="${color}" stroke="#120f14" stroke-width="5"/><path d="M22 18L4 0M74 18L92 0M48 58V32M48 58l22 12" stroke="#120f14" stroke-width="6" stroke-linecap="round"/><path d="M18 112h60" stroke="#120f14" stroke-width="6" stroke-linecap="round"/></g>`,
    "pillow-clipboard": `<g transform="translate(206 164)"><rect x="0" y="30" width="78" height="58" rx="18" fill="#fff8df" stroke="#120f14" stroke-width="5"/><rect x="48" y="0" width="54" height="74" rx="8" fill="${color}" stroke="#120f14" stroke-width="5"/><path d="M62 26h26M62 44h20M62 62h26" stroke="#120f14" stroke-width="4"/></g>`,
    shoe: `<g transform="translate(206 190)"><path d="M8 42c28 0 50-18 64-38l18 46h28c18 0 26 12 26 24H0c0-14 0-24 8-32z" fill="${color}" stroke="#120f14" stroke-width="5"/><path d="M56 38h26M68 28h20" stroke="#120f14" stroke-width="4" stroke-linecap="round"/></g>`,
    microphone: `<g transform="translate(216 158)"><rect x="22" y="0" width="44" height="72" rx="22" fill="${color}" stroke="#120f14" stroke-width="5"/><path d="M6 52c0 28 76 28 76 0M44 82v38M20 120h48" fill="none" stroke="#120f14" stroke-width="6" stroke-linecap="round"/></g>`,
    camera: `<g transform="translate(206 174)"><rect x="0" y="18" width="94" height="66" rx="10" fill="${color}" stroke="#120f14" stroke-width="5"/><path d="M22 18l10-16h30l10 16" fill="#fff8df" stroke="#120f14" stroke-width="5"/><circle cx="50" cy="52" r="18" fill="#fff8df" stroke="#120f14" stroke-width="5"/><circle cx="78" cy="34" r="5" fill="#120f14"/></g>`,
    magnifier: `<g transform="translate(212 164)"><circle cx="36" cy="36" r="30" fill="#fff8df" stroke="#120f14" stroke-width="6"/><path d="M58 58l42 42" stroke="#120f14" stroke-width="10" stroke-linecap="round"/><circle cx="36" cy="36" r="11" fill="${color}" stroke="#120f14" stroke-width="4"/></g>`,
    "blank-face": `<g transform="translate(208 166)"><rect x="0" y="0" width="92" height="108" rx="12" fill="#fff8df" stroke="#120f14" stroke-width="5"/><path d="M24 34h44M24 56h44M24 78h44" stroke="${color}" stroke-width="7" stroke-linecap="round"/></g>`,
  };

  return propMap[prop] || propMap["blank-face"];
}

function renderDreamAvatar(result) {
  const { avatar, code } = result;
  const color = avatar.color;
  const control = code[0] === "C";
  const flee = code[1] === "F";
  const social = code[2] === "A";
  const review = code[3] === "R";
  const tilt = control ? -2 : 7;
  const mouth = review ? "M145 96q15 10 30 0" : "M146 100h28";
  const eyes = code[3] === "B"
    ? `<path d="M132 82l12 12M144 82l-12 12M178 82l12 12M190 82l-12 12" stroke="#120f14" stroke-width="5" stroke-linecap="round"/>`
    : `<circle cx="138" cy="88" r="5" fill="#120f14"/><circle cx="184" cy="88" r="5" fill="#120f14"/>`;
  const armLeft = social ? "M126 154c-34 2-46 20-58 42" : "M126 156c-34 16-50 14-68 4";
  const armRight = control ? "M194 154c32-18 48-28 70-26" : "M194 156c30 12 44 30 54 54";
  const legLeft = flee ? "M142 220c-36 22-54 38-76 66" : "M146 220l-18 66";
  const legRight = flee ? "M178 220c34 24 58 26 88 22" : "M176 220l34 62";

  return `
    <svg xmlns="http://www.w3.org/2000/svg" class="dream-avatar" viewBox="0 0 320 320" role="img" aria-label="${result.code} ${result.name} 形象">
      <rect x="8" y="8" width="304" height="304" rx="8" fill="#fff8df" stroke="#120f14" stroke-width="5"/>
      <path d="M22 44h276M22 276h276" stroke="#120f14" stroke-width="2" opacity=".16"/>
      ${renderScene(avatar.scene, color)}
      <g transform="rotate(${tilt} 160 170)">
        <ellipse cx="160" cy="286" rx="84" ry="16" fill="#120f14" opacity=".18"/>
        <path d="M110 126c24-18 76-18 100 0l16 92c-28 18-104 18-132 0z" fill="${color}" stroke="#120f14" stroke-width="6" stroke-linejoin="round"/>
        <path d="M128 146h64M122 170h76" stroke="#fff8df" stroke-width="5" stroke-linecap="round" opacity=".72"/>
        <circle cx="160" cy="88" r="54" fill="#fff8df" stroke="#120f14" stroke-width="6"/>
        <path d="M112 78c20-44 76-48 102-6-30-12-70-10-102 6z" fill="#120f14"/>
        <path d="M118 54c22-38 62-30 84-2" fill="none" stroke="${color}" stroke-width="8" stroke-linecap="round"/>
        ${eyes}
        <path d="${mouth}" fill="none" stroke="#120f14" stroke-width="5" stroke-linecap="round"/>
        <path d="${armLeft}" fill="none" stroke="#120f14" stroke-width="12" stroke-linecap="round"/>
        <path d="${armRight}" fill="none" stroke="#120f14" stroke-width="12" stroke-linecap="round"/>
        <path d="${legLeft}" fill="none" stroke="#120f14" stroke-width="14" stroke-linecap="round"/>
        <path d="${legRight}" fill="none" stroke="#120f14" stroke-width="14" stroke-linecap="round"/>
        <path d="M70 196h-24M256 132h24" stroke="${color}" stroke-width="8" stroke-linecap="round" opacity=".86"/>
      </g>
      ${renderProp(avatar.prop, color)}
      <g transform="translate(26 24)">
        <rect x="0" y="0" width="112" height="34" rx="17" fill="#120f14"/>
        <text x="56" y="23" text-anchor="middle" fill="#fff8df" font-size="16" font-weight="900">${avatar.tag}</text>
      </g>
      <g transform="translate(26 264)">
        <rect x="0" y="0" width="86" height="34" rx="6" fill="${color}" stroke="#120f14" stroke-width="4"/>
        <text x="43" y="24" text-anchor="middle" fill="#120f14" font-size="22" font-weight="1000">${code}</text>
      </g>
    </svg>
  `;
}

function drawRoundedRect(context, x, y, width, height, radius) {
  const safeRadius = Math.min(radius, width / 2, height / 2);

  context.beginPath();
  context.moveTo(x + safeRadius, y);
  context.arcTo(x + width, y, x + width, y + height, safeRadius);
  context.arcTo(x + width, y + height, x, y + height, safeRadius);
  context.arcTo(x, y + height, x, y, safeRadius);
  context.arcTo(x, y, x + width, y, safeRadius);
  context.closePath();
}

function fillRoundedRect(context, x, y, width, height, radius) {
  drawRoundedRect(context, x, y, width, height, radius);
  context.fill();
}

function strokeRoundedRect(context, x, y, width, height, radius) {
  drawRoundedRect(context, x, y, width, height, radius);
  context.stroke();
}

function fitLineWithEllipsis(context, line, maxWidth) {
  let fitted = Array.from(line);

  while (fitted.length && context.measureText(`${fitted.join("")}...`).width > maxWidth) {
    fitted = fitted.slice(0, -1);
  }

  return `${fitted.join("")}...`;
}

function drawWrappedText(context, text, x, y, maxWidth, lineHeight, maxLines = Infinity) {
  const chars = Array.from(text);
  const lines = [];
  let line = "";
  let usedChars = 0;

  for (let index = 0; index < chars.length; index += 1) {
    const testLine = `${line}${chars[index]}`;

    if (line && context.measureText(testLine).width > maxWidth) {
      lines.push(line);
      line = chars[index];
      usedChars = index;

      if (lines.length === maxLines) {
        break;
      }
    } else {
      line = testLine;
      usedChars = index + 1;
    }
  }

  if (line && lines.length < maxLines) {
    lines.push(line);
    usedChars = chars.length;
  }

  if (usedChars < chars.length && lines.length) {
    lines[lines.length - 1] = fitLineWithEllipsis(context, lines[lines.length - 1], maxWidth);
  }

  lines.forEach((item, index) => {
    context.fillText(item, x, y + index * lineHeight);
  });

  return y + lines.length * lineHeight;
}

function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
        return;
      }

      reject(new Error("Canvas export failed"));
    }, "image/png");
  });
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => resolve(reader.result), { once: true });
    reader.addEventListener("error", () => reject(new Error("Image preview failed")), {
      once: true,
    });
    reader.readAsDataURL(blob);
  });
}

function loadAvatarImage(result) {
  return new Promise((resolve, reject) => {
    const blob = new Blob([renderDreamAvatar(result)], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const image = new Image();

    image.addEventListener(
      "load",
      () => {
        URL.revokeObjectURL(url);
        resolve(image);
      },
      { once: true },
    );

    image.addEventListener(
      "error",
      () => {
        URL.revokeObjectURL(url);
        reject(new Error("Avatar image failed to load"));
      },
      { once: true },
    );

    image.src = url;
  });
}

async function createShareImageBlob(result) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const avatarImage = await loadAvatarImage(result);
  const entryUrl = createEntryUrl().replace(/^https?:\/\//, "");
  const shareUrl = createShareUrl(result).replace(/^https?:\/\//, "");
  const accent = result.avatar.color;

  canvas.width = 1080;
  canvas.height = 1440;

  context.fillStyle = "#120f14";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.save();
  context.translate(0, 0);
  context.strokeStyle = "rgba(255, 248, 223, 0.18)";
  context.lineWidth = 2;
  for (let x = -180; x < canvas.width + 200; x += 72) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x + 300, canvas.height);
    context.stroke();
  }
  context.restore();

  context.fillStyle = "#fff8df";
  fillRoundedRect(context, 54, 54, 972, 1332, 8);
  context.strokeStyle = "#120f14";
  context.lineWidth = 8;
  strokeRoundedRect(context, 54, 54, 972, 1332, 8);

  context.fillStyle = accent;
  context.fillRect(82, 82, 916, 18);

  context.textBaseline = "top";
  context.fillStyle = "#120f14";
  context.font = '900 44px "PingFang SC", "Microsoft YaHei", sans-serif';
  context.fillText("梦批十六型黑名单", 82, 124);

  context.font = '900 28px "PingFang SC", "Microsoft YaHei", sans-serif';
  context.fillStyle = "#5a505c";
  context.fillText("鉴定你的梦中精神状态", 82, 180);

  context.fillStyle = "#120f14";
  context.font = '900 106px "PingFang SC", "Microsoft YaHei", sans-serif';
  context.fillText(result.name, 82, 230);

  context.font = '900 34px "PingFang SC", "Microsoft YaHei", sans-serif';
  context.fillStyle = "#120f14";
  fillRoundedRect(context, 82, 356, 300, 62, 8);
  context.fillStyle = "#fff8df";
  context.fillText(result.code, 110, 370);

  context.fillStyle = accent;
  fillRoundedRect(context, 400, 356, 402, 62, 8);
  context.fillStyle = "#120f14";
  drawWrappedText(context, result.frequency.label, 426, 371, 350, 36, 1);

  context.drawImage(avatarImage, 82, 454, 440, 440);

  context.strokeStyle = "#120f14";
  context.lineWidth = 6;
  strokeRoundedRect(context, 82, 454, 440, 440, 8);

  context.fillStyle = "#120f14";
  fillRoundedRect(context, 560, 454, 438, 440, 8);
  context.strokeStyle = accent;
  context.lineWidth = 6;
  strokeRoundedRect(context, 560, 454, 438, 440, 8);

  context.fillStyle = "#fff8df";
  context.font = '900 30px "PingFang SC", "Microsoft YaHei", sans-serif';
  context.fillText("别装了，你睡着后就是", 592, 492);

  context.fillStyle = accent;
  context.font = '900 66px "PingFang SC", "Microsoft YaHei", sans-serif';
  drawWrappedText(context, result.name, 592, 546, 370, 76, 2);

  context.fillStyle = "#fff8df";
  context.font = '800 30px "PingFang SC", "Microsoft YaHei", sans-serif';
  drawWrappedText(context, `“${result.share}”`, 592, 708, 356, 44, 3);

  context.save();
  context.translate(894, 798);
  context.rotate(-0.16);
  context.strokeStyle = "#ff5c45";
  context.lineWidth = 8;
  context.strokeRect(-78, -36, 156, 72);
  context.fillStyle = "#ff5c45";
  context.font = '900 38px "PingFang SC", "Microsoft YaHei", sans-serif';
  context.textAlign = "center";
  context.fillText("已收录", 0, -24);
  context.restore();

  context.textAlign = "left";
  context.fillStyle = "#120f14";
  context.font = '900 34px "PingFang SC", "Microsoft YaHei", sans-serif';
  context.fillText("黑名单解析", 82, 960);

  context.fillStyle = "#3d3440";
  context.font = '700 29px "PingFang SC", "Microsoft YaHei", sans-serif';
  drawWrappedText(context, result.dream, 82, 1016, 916, 44, 5);

  context.strokeStyle = "rgba(18, 15, 20, 0.22)";
  context.lineWidth = 3;
  context.beginPath();
  context.moveTo(82, 1254);
  context.lineTo(998, 1254);
  context.stroke();

  context.fillStyle = "#120f14";
  context.font = '900 26px "PingFang SC", "Microsoft YaHei", sans-serif';
  context.fillText("测试入口", 82, 1282);

  context.fillStyle = "#4c414e";
  context.font = '800 24px "PingFang SC", "Microsoft YaHei", sans-serif';
  drawWrappedText(context, entryUrl, 214, 1282, 784, 32, 2);

  context.fillStyle = "#6d6470";
  context.font = '700 20px "PingFang SC", "Microsoft YaHei", sans-serif';
  drawWrappedText(context, `打开分享链接可看结果，也能从入口重新测：${shareUrl}`, 82, 1344, 916, 28, 1);

  return canvasToBlob(canvas);
}

async function ensureShareImageBlob(result = state.latestResult) {
  if (!result) return null;
  if (state.shareImageBlob) {
    if (!state.shareImageDataUrl) {
      state.shareImageDataUrl = await blobToDataUrl(state.shareImageBlob);
      shareImagePreview.src = state.shareImageDataUrl;
    }

    return state.shareImageBlob;
  }

  const blob = await createShareImageBlob(result);
  const dataUrl = await blobToDataUrl(blob);

  clearShareImageCache();
  state.shareImageBlob = blob;
  state.shareImageDataUrl = dataUrl;
  shareImagePreview.src = dataUrl;

  return blob;
}

async function updateShareImagePreview(result) {
  clearShareImageCache();
  shareImagePreview.removeAttribute("src");

  try {
    const blob = await createShareImageBlob(result);
    const dataUrl = await blobToDataUrl(blob);

    if (state.latestResult !== result) return;

    state.shareImageBlob = blob;
    state.shareImageDataUrl = dataUrl;
    shareImagePreview.src = dataUrl;
  } catch (error) {
    shareImagePreview.alt = "黑名单照生成失败";
    toast.textContent = "黑名单照生成失败了，但文字结果还能分享。";
  }
}

function safelyReplaceUrl(url) {
  if (!window.history || !window.history.replaceState) return;

  try {
    window.history.replaceState(null, "", url);
  } catch (error) {
    // Local file previews can reject history changes. Sharing still uses the computed URL.
  }
}

function getMessengerName() {
  const ua = navigator.userAgent.toLowerCase();

  if (ua.includes("micromessenger")) return "微信";
  if (ua.includes(" qq/") || ua.includes("mqqbrowser")) return "QQ";

  return "";
}

function focusShareImage() {
  shareImagePreview.scrollIntoView({ behavior: "smooth", block: "center" });
}

function renderResult(resultOverride = null) {
  const result = resultOverride || calculateResult();
  if (!result) return;

  state.latestResult = result;

  progressFill.style.width = "100%";
  resultTitle.textContent = result.name;
  resultName.textContent = `${result.frequency.label} · ${result.code}`;
  characterCard.setAttribute("aria-label", `${result.code} ${result.name} 的梦批人格形象`);
  characterIllustration.innerHTML = renderDreamAvatar(result);
  characterCaption.textContent = result.avatar.caption;
  dreamCopy.textContent = result.dream;
  realityCopy.textContent = result.reality;
  shareLine.textContent = `“${result.share}”`;

  resultCodeRow.innerHTML = result.code
    .split("")
    .map(
      (letter) => `
        <div class="code-chip">
          <strong>${letter}</strong>
          <span>${dimensionMeta[letter].name}</span>
        </div>
      `,
    )
    .join("");

  const shareUrl = createShareUrl(result);
  const messengerName = getMessengerName();

  shareUrlCopy.textContent = `公开分享链接：${shareUrl}`;
  shareButton.textContent = messengerName ? "复制链接，长按保存图" : "分享黑名单照";
  saveImageButton.textContent = messengerName ? "长按保存图片" : "保存图片";
  document.title = `${result.name} · 梦批人格`;
  safelyReplaceUrl(createLocalResultUrl(result));
  updateShareImagePreview(result);
  showScreen(resultScreen);
}

function handleAnswer(answerIndex) {
  state.answers[state.currentQuestion] = answerIndex;
  renderQuestion();

  window.setTimeout(() => {
    if (state.currentQuestion < questions.length - 1) {
      state.currentQuestion += 1;
      renderQuestion();
      return;
    }

    renderResult();
  }, 220);
}

function resetTest() {
  state.frequency = null;
  state.currentQuestion = 0;
  state.answers = Array(questions.length).fill(null);
  state.latestResult = null;
  clearShareImageCache();
  shareImagePreview.removeAttribute("src");
  shareUrlCopy.textContent = "";
  toast.textContent = "";
  document.title = "梦批人格 | 鉴定你的梦中精神状态";
  safelyReplaceUrl(getCurrentPageBaseUrl());
  startButton.disabled = true;
  renderFrequencyOptions();
  showScreen(introScreen);
}

function createShareText(result) {
  return [
    `我的梦批人格：${result.code} · ${result.name}`,
    `梦频状态：${result.frequency.label}`,
    `朋友鉴定：${result.share}`,
    `围观结果/自己去测：${createShareUrl(result)}`,
  ].join("\n");
}

function fallbackCopyText(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.append(textarea);
  textarea.select();

  const copied = document.execCommand("copy");
  textarea.remove();

  return copied;
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  if (fallbackCopyText(text)) {
    return true;
  }

  throw new Error("Copy failed");
}

async function copyShareLink() {
  if (!state.latestResult) return;

  const result = state.latestResult;
  const text = createShareText(result);

  try {
    await copyText(text);
    toast.textContent = "分享链接复制好了，拿去创朋友。";
  } catch (error) {
    toast.textContent = "复制失败了，但你的梦批人格已经很努力。";
  }
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();

  window.setTimeout(() => URL.revokeObjectURL(url), 1200);
}

async function saveShareImage() {
  if (!state.latestResult) return;

  try {
    toast.textContent = "黑名单照生成中。";
    const blob = await ensureShareImageBlob();
    const messengerName = getMessengerName();

    if (messengerName) {
      await copyText(createShareText(state.latestResult)).catch(() => false);
      focusShareImage();
      toast.textContent = `${messengerName}里点按钮不能直接存图；链接已复制，长按上面的黑名单照保存后手动发。`;
      return;
    }

    downloadBlob(blob, `mengpi-blacklist-${state.latestResult.code}.png`);
    toast.textContent = "黑名单照已保存，发出去就有案底了。";
  } catch (error) {
    toast.textContent = "图片保存失败了，先复制链接也能冲。";
  }
}

async function shareResult() {
  if (!state.latestResult) return;

  const result = state.latestResult;
  const shareUrl = createShareUrl(result);
  const messengerName = getMessengerName();
  const shareData = {
    title: `${result.name} · 梦批人格`,
    text: createShareText(result),
    url: shareUrl,
  };

  try {
    const blob = await ensureShareImageBlob(result);

    if (messengerName) {
      await copyText(createShareText(result)).catch(() => false);
      focusShareImage();
      toast.textContent = `${messengerName}不支持网页直接弹出“发给谁”。链接已复制，长按上面的黑名单照保存，再发给朋友。`;
      return;
    }

    const file = new File([blob], `mengpi-blacklist-${result.code}.png`, {
      type: "image/png",
    });

    if (navigator.canShare && navigator.canShare({ ...shareData, files: [file] })) {
      await navigator.share({ ...shareData, files: [file] });
      toast.textContent = "黑名单照已递出去。";
      return;
    }

    if (navigator.share) {
      await navigator.share(shareData);
      toast.textContent = "分享链接已递出去。";
      return;
    }

    await copyText(createShareText(result));
    if (messengerName) {
      toast.textContent = `${messengerName}浏览器不让网页直接拉好友列表，链接已复制；长按黑名单照保存后手动发。`;
      return;
    }

    downloadBlob(blob, `mengpi-blacklist-${result.code}.png`);
    toast.textContent = "浏览器不支持直接发微信/QQ，链接已复制，图片也开始保存。";
  } catch (error) {
    if (error && error.name === "AbortError") {
      toast.textContent = "已取消分享。";
      return;
    }

    if (messengerName) {
      toast.textContent = `${messengerName}拦截了网页分享，点“复制分享链接”，再长按图片保存。`;
      return;
    }

    toast.textContent = "系统分享没打开，试试复制链接或保存图片。";
  }
}

function renderSharedResultFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const code = (params.get("r") || params.get("result") || "").toUpperCase();
  const frequencyId = params.get("f") || params.get("freq");
  const result = buildResult(code, frequencyId);

  if (!result) return;

  state.frequency = result.frequency.id;
  renderFrequencyOptions();
  renderResult(result);
}

frequencyOptionsEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-frequency]");
  if (!button) return;

  state.frequency = button.dataset.frequency;
  startButton.disabled = false;
  renderFrequencyOptions();
});

startButton.addEventListener("click", () => {
  if (!state.frequency) return;
  state.currentQuestion = 0;
  renderQuestion();
  showScreen(quizScreen);
});

answerList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-answer]");
  if (!button) return;

  handleAnswer(Number(button.dataset.answer));
});

prevButton.addEventListener("click", () => {
  if (state.currentQuestion === 0) return;
  state.currentQuestion -= 1;
  renderQuestion();
});

shareButton.addEventListener("click", shareResult);
copyButton.addEventListener("click", copyShareLink);
saveImageButton.addEventListener("click", saveShareImage);
restartButton.addEventListener("click", resetTest);

function setupDreamCanvas() {
  const canvas = document.querySelector("#dream-canvas");
  const context = canvas.getContext("2d");
  const shapes = Array.from({ length: 28 }, (_, index) => ({
    x: Math.random(),
    y: Math.random(),
    speed: 0.18 + Math.random() * 0.34,
    size: 18 + Math.random() * 56,
    spin: Math.random() * Math.PI,
    hue: index % 4,
  }));

  function resize() {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.floor(window.innerWidth * ratio);
    canvas.height = Math.floor(window.innerHeight * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function drawShape(shape, time) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = (shape.x * width + Math.sin(time * shape.speed + shape.spin) * 38) % width;
    const y = (shape.y * height + Math.cos(time * shape.speed * 0.8 + shape.spin) * 28) % height;
    const colors = ["#d7ff37", "#ff5c45", "#2ee7d1", "#fff8df"];

    context.save();
    context.translate(x, y);
    context.rotate(shape.spin + time * 0.22);
    context.lineWidth = 2;
    context.strokeStyle = colors[shape.hue];
    context.globalAlpha = 0.12;

    if (shape.hue === 0) {
      context.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
    } else if (shape.hue === 1) {
      context.beginPath();
      context.moveTo(0, -shape.size / 2);
      context.lineTo(shape.size / 2, shape.size / 2);
      context.lineTo(-shape.size / 2, shape.size / 2);
      context.closePath();
      context.stroke();
    } else {
      context.beginPath();
      context.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
      context.stroke();
    }

    context.restore();
  }

  function draw(timeStamp) {
    const time = timeStamp / 1000;
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    context.save();
    context.globalAlpha = 0.18;
    context.strokeStyle = "#fff8df";
    context.lineWidth = 1;
    for (let x = -80; x < window.innerWidth + 80; x += 42) {
      context.beginPath();
      context.moveTo(x + Math.sin(time + x) * 4, 0);
      context.lineTo(x + 120, window.innerHeight);
      context.stroke();
    }
    context.restore();

    shapes.forEach((shape) => drawShape(shape, time));
    window.requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  window.requestAnimationFrame(draw);
}

renderFrequencyOptions();
setupDreamCanvas();
renderSharedResultFromUrl();
