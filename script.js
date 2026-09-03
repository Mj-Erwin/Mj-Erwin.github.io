const translations = {
  zh: {
    "nav.roadmap": "技术主线",
    "nav.projects": "项目",
    "nav.stack": "能力栈",
    "nav.contact": "联系",
    "hero.eyebrow": "机器人算法工程师 · 北京",
    "hero.title": "机械臂动力学辨识<br />控制与<span>接触策略学习</span>",
    "hero.lead": "面向 7-DoF 机械臂，开展重力与谐波减速器摩擦辨识、残差执行器建模、双边力反馈遥操作及双臂接触丰富型强化学习，并以量化误差与实机闭环结果验证算法。",
    "hero.viewWork": "查看核心项目",
    "metrics.position": "关节位置 RMSE 相对下降",
    "metrics.velocity": "关节速度 RMSE 相对下降",
    "metrics.envs": "Isaac Lab 并行环境数",
    "metrics.control": "补偿计算与控制指令频率",
    "roadmap.title": "Real-to-Sim 建模与实机闭环验证",
    "roadmap.lead": "以实机数据辨识物理参数和执行器残差，缩小仿真—实机状态转移差异，并在控制与接触操作任务中验证模型有效性。",
    "roadmap.real.title": "实机动力学与摩擦辨识",
    "roadmap.real.copy": "基于激励轨迹、电流与关节状态数据，分离辨识刚体重力项及谐波减速器摩擦参数。",
    "roadmap.sim.title": "仿真动力学对齐",
    "roadmap.sim.copy": "将辨识参数与残差执行器模型嵌入 Isaac Lab，以多步关节状态误差评价模型一致性。",
    "roadmap.learn.title": "接触丰富型策略优化",
    "roadmap.learn.copy": "针对双臂非抓取式箱体重定向，采用 PPO、阶段式课程与动力学参数随机化训练策略。",
    "roadmap.deploy.title": "部分可观测实机部署",
    "roadmap.deploy.copy": "针对状态不可直接测量、传感噪声与模型偏差，设计可部署观测空间和闭环安全约束。",
    "projects.title": "核心项目",
    "projects.lead": "按照问题定义、算法方法和量化结果组织项目，而不是简单罗列工具栈。",
    "projects.actuator.title": "7-DoF 机械臂动力学辨识与残差执行器模型",
    "projects.actuator.copy": "设计低速重力与多速度匀速激励，分离辨识重力和谐波减速器摩擦参数；在 Isaac Lab 中以多步状态误差优化残差模型。",
    "projects.result": "代表性结果",
    "projects.pipeline.collect": "实机采集",
    "projects.pipeline.identify": "参数辨识",
    "projects.pipeline.calibrate": "仿真标定",
    "projects.pipeline.learn": "残差学习",
    "projects.rl.title": "双臂非抓取式箱体翻转与稳定释放",
    "projects.rl.copy": "在 Isaac Lab 中建模推顶、支撑、几何释放与撤离阶段；使用 PPO、阶段式课程、接触约束和域随机化优化翻转成功率与落桌稳定性。",
    "projects.teleop.title": "基于重力/摩擦前馈的双边力反馈遥操作",
    "projects.teleop.copy": "主从 7-DoF 机械臂分别进行重力与谐波减速器摩擦补偿，从臂采用 PD 与扰动观测残差校正；以 200 Hz 执行补偿与控制指令。",
    "projects.planning.title": "GPU 加速碰撞约束运动规划与接触技能",
    "projects.planning.copy": "使用 cuRobo 完成 IK 可达性筛选、图搜索初始化与轨迹优化，并构建基于末端 F/T 触发的按钮按压闭环技能。",
    "demos.lead": "直接展示规划结果与碰撞几何验证，视频默认仅加载元数据，点击后播放。",
    "demos.planning.title": "双臂协同运动规划",
    "demos.planning.copy": "在 14 维联合空间内同步规划双臂轨迹，验证双目标约束、IK 可达性与碰撞约束下的协同运动生成。",
    "demos.collision.title": "双臂自碰撞检测",
    "demos.collision.copy": "可视化并验证双臂连杆间的碰撞几何与距离约束，为轨迹有效性判定和碰撞约束规划提供基础。",
    "stack.title": "能力栈",
    "stack.lead": "覆盖模型辨识、实时控制、策略优化、运动规划和硬件验证。",
    "stack.learning": "仿真与策略优化",
    "stack.control": "机械臂控制与实时通信",
    "stack.dynamics": "动力学辨识与数值优化",
    "stack.planning": "运动规划与实机部署",
    "focus.title": "当前聚焦",
    "focus.one": "双臂接触丰富型非抓取操作",
    "focus.two": "部分可观测条件下的策略部署",
    "focus.three": "残差执行器模型与状态转移对齐",
    "focus.four": "控制、规划与学习策略的混合架构",
    "contact.title": "机器人算法与<br /><span>实机系统交流</span>",
    "contact.copy": "关注机械臂动力学、接触丰富型强化学习、双边遥操作与 Real-to-Sim。欢迎讨论可复现实验和实机问题——毕竟仿真通过，只算完成了一半。",
    "contact.github": "访问我的 GitHub",
    "footer.note": "辨识 · 控制 · 优化 · 验证"
  },
  en: {
    "nav.roadmap": "Roadmap",
    "nav.projects": "Projects",
    "nav.stack": "Capabilities",
    "nav.contact": "Connect",
    "hero.eyebrow": "Robotics Algorithm Engineer · Beijing",
    "hero.title": "Robot dynamics,<br />control & <span>contact-rich learning</span>",
    "hero.lead": "I develop and validate algorithms for 7-DoF manipulators, spanning gravity and harmonic-drive friction identification, residual actuator modeling, bilateral force-feedback teleoperation, and dual-arm contact-rich reinforcement learning.",
    "hero.viewWork": "Explore selected work",
    "metrics.position": "Relative reduction in joint-position RMSE",
    "metrics.velocity": "Relative reduction in joint-velocity RMSE",
    "metrics.envs": "Parallel Isaac Lab environments",
    "metrics.control": "Compensation and command frequency",
    "roadmap.title": "Real-to-Sim modeling and closed-loop hardware validation",
    "roadmap.lead": "Identify physical parameters and actuator residuals from hardware data, reduce simulation-to-hardware transition mismatch, and validate the resulting models in control and contact-rich manipulation tasks.",
    "roadmap.real.title": "Dynamics and friction identification",
    "roadmap.real.copy": "Estimate rigid-body gravity terms and harmonic-drive friction parameters from excitation trajectories, motor current, and joint-state measurements.",
    "roadmap.sim.title": "Simulation dynamics alignment",
    "roadmap.sim.copy": "Embed identified parameters and a residual actuator model in Isaac Lab, using multi-step joint-state error as the consistency metric.",
    "roadmap.learn.title": "Contact-rich policy optimization",
    "roadmap.learn.copy": "Train dual-arm non-prehensile box-reorientation policies with PPO, staged curricula, and randomized dynamics parameters.",
    "roadmap.deploy.title": "Deployment under partial observability",
    "roadmap.deploy.copy": "Design deployable observations and closed-loop safety constraints for unmeasured states, sensor noise, and model mismatch.",
    "projects.title": "Selected projects",
    "projects.lead": "Projects are organized by problem definition, algorithmic method, and quantitative result—not by a list of tools.",
    "projects.actuator.title": "7-DoF dynamics identification & residual actuator modeling",
    "projects.actuator.copy": "Design low-speed gravity and multi-velocity constant-speed excitation, separate gravity and harmonic-drive friction terms, and optimize a residual actuator model against multi-step state error in Isaac Lab.",
    "projects.result": "Representative result",
    "projects.pipeline.collect": "Real data",
    "projects.pipeline.identify": "Identify",
    "projects.pipeline.calibrate": "Calibrate",
    "projects.pipeline.learn": "Learn residual",
    "projects.rl.title": "Dual-arm non-prehensile box tipping and stable release",
    "projects.rl.copy": "Model coordinated pushing, support, geometric release, and arm withdrawal in Isaac Lab; optimize tipping success and landing stability with PPO, staged curricula, contact constraints, and domain randomization.",
    "projects.teleop.title": "Bilateral teleoperation with gravity/friction feedforward",
    "projects.teleop.copy": "Apply gravity and harmonic-drive friction compensation to both 7-DoF arms, with PD tracking and disturbance-observer residual correction on the slave at a 200 Hz command rate.",
    "projects.planning.title": "GPU-accelerated collision-constrained planning and contact skills",
    "projects.planning.copy": "Use cuRobo for IK feasibility screening, graph-search initialization, and trajectory optimization, plus end-effector F/T-triggered closed-loop button pressing.",
    "demos.lead": "Direct demonstrations of planned motion and collision-geometry validation. Videos load metadata only until playback starts.",
    "demos.planning.title": "Coordinated dual-arm motion planning",
    "demos.planning.copy": "Plan both arms jointly in a 14-dimensional configuration space and evaluate coordinated motion generation under dual-target, IK-feasibility, and collision constraints.",
    "demos.collision.title": "Dual-arm self-collision checking",
    "demos.collision.copy": "Visualize and validate inter-link collision geometry and distance constraints for trajectory validity checks and collision-constrained planning.",
    "stack.title": "Capabilities",
    "stack.lead": "Coverage across system identification, real-time control, policy optimization, motion planning, and hardware validation.",
    "stack.learning": "Simulation & policy optimization",
    "stack.control": "Manipulator control & real-time communication",
    "stack.dynamics": "Dynamics identification & numerical optimization",
    "stack.planning": "Motion planning & hardware deployment",
    "focus.title": "Current focus",
    "focus.one": "Dual-arm contact-rich non-prehensile manipulation",
    "focus.two": "Policy deployment under partial observability",
    "focus.three": "Residual actuator models and transition alignment",
    "focus.four": "Hybrid control, planning, and learning architectures",
    "contact.title": "Robotics algorithms &<br /><span>hardware systems</span>",
    "contact.copy": "I work on manipulator dynamics, contact-rich reinforcement learning, bilateral teleoperation, and Real-to-Sim. I welcome reproducible experiments and real hardware problems—simulation success is only half the job.",
    "contact.github": "Visit my GitHub",
    "footer.note": "IDENTIFY · CONTROL · OPTIMIZE · VALIDATE"
  }
};

const root = document.documentElement;
const languageButton = document.querySelector("#language-toggle");
const themeButton = document.querySelector("#theme-toggle");

function setLanguage(language) {
  const dictionary = translations[language];
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = dictionary[element.dataset.i18nHtml];
    if (value) element.innerHTML = value;
  });

  root.lang = language === "zh" ? "zh-CN" : "en";
  languageButton.textContent = language === "zh" ? "EN" : "中";
  languageButton.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换到中文");
  localStorage.setItem("erwin-language", language);
}

function setTheme(theme) {
  root.dataset.theme = theme;
  themeButton.setAttribute("aria-label", theme === "light" ? "Use dark theme" : "Use light theme");
  localStorage.setItem("erwin-theme", theme);
}

languageButton.addEventListener("click", () => {
  setLanguage(root.lang.startsWith("zh") ? "en" : "zh");
});

themeButton.addEventListener("click", () => {
  setTheme(root.dataset.theme === "light" ? "dark" : "light");
});

const preferredLanguage = localStorage.getItem("erwin-language") || "zh";
const preferredTheme = localStorage.getItem("erwin-theme") || "light";

setLanguage(preferredLanguage);
setTheme(preferredTheme);
document.querySelector("#year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
