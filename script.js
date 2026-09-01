const translations = {
  zh: {
    "nav.roadmap": "技术主线",
    "nav.projects": "项目",
    "nav.stack": "能力栈",
    "nav.contact": "联系",
    "hero.eyebrow": "机器人算法工程师 · 北京",
    "hero.title": "让机器人从<br />理解自身，走向<span>可靠操作</span>",
    "hero.lead": "聚焦机械臂动力学、执行器建模、强化学习与双边遥操作，打通从真实系统辨识、仿真训练到实机部署的完整链路。",
    "hero.viewWork": "查看核心项目",
    "metrics.position": "执行器残差模型降低关节位置 RMSE",
    "metrics.velocity": "关节速度 RMSE 进一步降低",
    "metrics.envs": "Isaac Lab 并行训练环境",
    "metrics.control": "遥操作补偿与控制下发频率",
    "roadmap.title": "一条贯穿真实与仿真的技术主线",
    "roadmap.lead": "不是彼此割裂的项目集合，而是围绕“让机器人在真实世界可靠工作”构建的闭环。",
    "roadmap.real.title": "理解真实机器人",
    "roadmap.real.copy": "采集实机轨迹，辨识重力、惯性与谐波减速器摩擦特性。",
    "roadmap.sim.title": "建立可信仿真",
    "roadmap.sim.copy": "将参数模型与学习型执行器残差注入 Isaac Lab，缩小状态转移误差。",
    "roadmap.learn.title": "学习接触操作",
    "roadmap.learn.copy": "利用 PPO、课程学习与域随机化训练双臂非抓取式操作策略。",
    "roadmap.deploy.title": "面向实机部署",
    "roadmap.deploy.copy": "处理观测缺失、噪声与动力学变化，让策略落到真实硬件。",
    "projects.title": "核心项目",
    "projects.lead": "从模型、控制到学习算法，展示可落地的机器人系统能力。",
    "projects.actuator.title": "机械臂动力学辨识与执行器残差建模",
    "projects.actuator.copy": "从激励轨迹、重力与摩擦联合辨识，到基于强化学习的多步执行器残差模型，形成完整的 Real-to-Sim 对齐链路。",
    "projects.result": "代表性结果",
    "projects.pipeline.collect": "实机采集",
    "projects.pipeline.identify": "参数辨识",
    "projects.pipeline.calibrate": "仿真标定",
    "projects.pipeline.learn": "残差学习",
    "projects.rl.title": "双臂非抓取式箱体重定向",
    "projects.rl.copy": "在 Isaac Lab 中训练双臂协同倾倒、释放、稳定落桌与撤离策略，重点解决接触探索和域随机化。",
    "projects.teleop.title": "双边力反馈遥操作",
    "projects.teleop.copy": "主从机械臂分别进行重力与谐波摩擦补偿，实现低启动力拖动、稳定跟随和接触力反馈。",
    "projects.planning.title": "运动规划与操作技能",
    "projects.planning.copy": "基于 cuRobo 构建碰撞感知的 GPU 运动规划，并开发箱体重定向、按钮按压等可复用技能。",
    "stack.title": "能力栈",
    "stack.lead": "将机器人问题拆解为可观测、可验证、可迭代的工程闭环。",
    "stack.learning": "仿真与学习",
    "stack.control": "机器人控制",
    "stack.dynamics": "动力学与优化",
    "stack.planning": "规划与部署",
    "focus.title": "当前聚焦",
    "focus.one": "接触丰富型双臂强化学习",
    "focus.two": "部分可观测条件下的实机部署",
    "focus.three": "执行器模型与 Real-to-Sim 对齐",
    "focus.four": "控制、规划与学习的融合",
    "contact.title": "一起构建真正<br /><span>可靠的机器人系统</span>",
    "contact.copy": "关注机器人学习、机械臂控制、Real-to-Sim 与接触操作，也欢迎交流相关工程与研究问题。",
    "contact.github": "访问我的 GitHub",
    "footer.note": "模型 · 控制 · 学习 · 部署"
  },
  en: {
    "nav.roadmap": "Roadmap",
    "nav.projects": "Projects",
    "nav.stack": "Capabilities",
    "nav.contact": "Connect",
    "hero.eyebrow": "Robotics Algorithm Engineer · Beijing",
    "hero.title": "From understanding<br />the robot to <span>reliable action</span>",
    "hero.lead": "I work across robot dynamics, actuator modeling, reinforcement learning and bilateral teleoperation—connecting real-system identification, simulation training and hardware deployment.",
    "hero.viewWork": "Explore selected work",
    "metrics.position": "Lower joint-position RMSE with learned actuator residuals",
    "metrics.velocity": "Further reduction in joint-velocity RMSE",
    "metrics.envs": "Parallel Isaac Lab training environments",
    "metrics.control": "Teleoperation compensation and command rate",
    "roadmap.title": "One technical path across reality and simulation",
    "roadmap.lead": "Not a list of disconnected demos, but a closed loop built around making robots work reliably in the real world.",
    "roadmap.real.title": "Understand the real robot",
    "roadmap.real.copy": "Collect hardware trajectories and identify gravity, inertia and harmonic-drive friction.",
    "roadmap.sim.title": "Build trustworthy simulation",
    "roadmap.sim.copy": "Inject identified parameters and learned actuator residuals into Isaac Lab to reduce transition error.",
    "roadmap.learn.title": "Learn contact-rich skills",
    "roadmap.learn.copy": "Train dual-arm non-prehensile policies with PPO, curricula and domain randomization.",
    "roadmap.deploy.title": "Deploy on hardware",
    "roadmap.deploy.copy": "Handle missing observations, noise and dynamics variation in real-world closed-loop execution.",
    "projects.title": "Selected projects",
    "projects.lead": "Applied robotics work spanning models, control systems and learning algorithms.",
    "projects.actuator.title": "Robot dynamics identification & actuator residual modeling",
    "projects.actuator.copy": "A complete Real-to-Sim alignment pipeline—from excitation design and gravity/friction identification to multi-step RL actuator residuals.",
    "projects.result": "Representative result",
    "projects.pipeline.collect": "Real data",
    "projects.pipeline.identify": "Identify",
    "projects.pipeline.calibrate": "Calibrate",
    "projects.pipeline.learn": "Learn residual",
    "projects.rl.title": "Dual-arm non-prehensile box reorientation",
    "projects.rl.copy": "Training coordinated tipping, release, stable landing and withdrawal in Isaac Lab, with a focus on contact exploration and domain randomization.",
    "projects.teleop.title": "Bilateral force-feedback teleoperation",
    "projects.teleop.copy": "Gravity and harmonic-drive friction compensation on both master and slave arms for low-force dragging, stable tracking and contact feedback.",
    "projects.planning.title": "Motion planning & manipulation skills",
    "projects.planning.copy": "Collision-aware GPU motion planning with cuRobo, plus reusable skills for box reorientation and contact-triggered button pressing.",
    "stack.title": "Capabilities",
    "stack.lead": "Turning robotics problems into observable, verifiable and iterative engineering loops.",
    "stack.learning": "Simulation & learning",
    "stack.control": "Robot control",
    "stack.dynamics": "Dynamics & optimization",
    "stack.planning": "Planning & deployment",
    "focus.title": "Current focus",
    "focus.one": "Contact-rich dual-arm reinforcement learning",
    "focus.two": "Real deployment under partial observation",
    "focus.three": "Actuator models and Real-to-Sim alignment",
    "focus.four": "Integrating control, planning and learning",
    "contact.title": "Let’s build robots that<br /><span>work reliably</span>",
    "contact.copy": "I’m interested in robot learning, manipulator control, Real-to-Sim and contact-rich tasks—and always open to thoughtful technical conversations.",
    "contact.github": "Visit my GitHub",
    "footer.note": "MODEL · CONTROL · LEARN · DEPLOY"
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
const preferredTheme = localStorage.getItem("erwin-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

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
