// Chinese source copy lives in index.html so the page also works without JavaScript.
const english = {
  "skip": "Skip to projects",
  "nav.roadmap": "Directions", "nav.projects": "Selected work", "nav.stack": "Capabilities", "nav.contact": "Contact",
  "hero.art": "Mio Akiyama, Bruno Bucciarati and Sticky Fingers",
  "hero.role": "Robotics Algorithm Engineer",
  "hero.title": "Manipulator control & robot learning",
  "hero.lead": "I develop dynamics identification, bilateral force-feedback control and contact-rich policies for manipulators. My work starts with friction, tracking error and limited observations on hardware, and extends to actuator modeling and policy training in simulation.",
  "hero.a": "Low-resistance guiding & bilateral force feedback",
  "hero.b": "Dynamics identification & Real-to-Sim",
  "hero.c": "Contact-rich bimanual manipulation",
  "hero.work": "Read the case studies",
  "scope": "Hardware problems define the model. Error analysis guides the next iteration.",
  "roadmap.title": "Two directions, a shared dynamics foundation",
  "roadmap.lead": "Gravity and friction identification supports both lines of work: improving physical interaction, and modeling simulation dynamics for contact-rich learning.",
  "roadmap.base": "Gravity & harmonic-drive friction identification",
  "roadmap.basecopy": "Excitation design · Bidirectional data separation · Weighted regression & regularization · Current-feedforward validation",
  "roadmap.astate": "Closed-loop hardware validation",
  "roadmap.a": "Bilateral force-feedback teleoperation",
  "roadmap.acopy": "Use identified models for feedforward compensation on both arms, tuning control for low guiding resistance, joint synchronization and contact feedback.",
  "roadmap.apath": "Identification → Current feedforward → Bilateral control → Hardware tests",
  "roadmap.alink": "Read the control case ↗",
  "roadmap.bstate": "Modeling & simulation research",
  "roadmap.b": "Real-to-Sim & contact-rich manipulation",
  "roadmap.bcopy": "Learn actuator residuals around a physics-based model to reduce transition mismatch, with a further research focus on bimanual non-prehensile manipulation.",
  "roadmap.bpath": "Dynamics priors → Residual modeling → Contact tasks → Transfer evaluation",
  "roadmap.blink": "Read the modeling & learning cases ↗",
  "roadmap.note": "This map describes the methodological links and research direction. Task-level benefits from integrating actuator residuals into contact policies, and hardware transfer, still require validation.",
  "projects.title": "Problems I work on",
  "projects.lead": "My work spans data collection, system identification, control implementation, simulation training and error diagnosis at the algorithm–hardware interface.",
  "label.problem": "Problem",
  "label.contribution": "My implementation & key methods",
  "label.evidence": "Evidence & scope",
  "label.ability": "Capabilities demonstrated",
  "teleop.title": "Low-resistance guiding & bilateral feedback with harmonic-drive arms",
  "teleop.state": "Hardware control loop",
  "teleop.problem": "Stiction and reversal hysteresis increase breakaway effort and cause low-speed stick-slip. Under-compensation leaves resistance; over-compensation can cause drift or oscillation. Bilateral synchronization and contact feedback further couple these effects.",
  "teleop.m1": "Identify gravity and friction separately on the leader and follower arms; apply current feedforward to compensate the robot's own load and low-speed resistance.",
  "teleop.m2": "Implement bilateral PD synchronization and damping, with a follower-side disturbance-observer residual term for tracking error.",
  "teleop.m3": "Tune velocity dead zones, filtering and compensation limits around start–stop, reversal and contact tests; analyze the coupling between stiction, timing and control parameters.",
  "teleop.rate": "Compensation and command update rate, not force-feedback bandwidth.",
  "teleop.resulttitle": "Behaviors validated on hardware",
  "teleop.result": "Gravity balance, low-resistance guiding, joint synchronization and contact-resistance feedback.",
  "teleop.boundary": "PD-only stationary tracking error is approximately 1°–2°. Low-speed stiction and reversal feel remain optimization targets.",
  "teleop.ability": "Non-ideal dynamics analysis · Feedforward/feedback co-design · Hardware debugging",
  "r2s.title": "Physical parameter identification & learned actuator residuals",
  "r2s.state": "Trajectory replay evaluation",
  "r2s.problem": "URDF parameters and ideal PD alone do not reproduce real actuator friction and response. A small one-step fitting error does not guarantee consistent multi-step closed-loop trajectories.",
  "r2s.m1": "Design low-speed bidirectional and multi-velocity constant-speed data collection; separate gravity and directional friction, using WLS, regularization and static anchors to address parameter coupling and insufficient excitation.",
  "r2s.m2": "Build an explicit PD baseline plus a history-conditioned neural residual torque model, integrating the physics prior and learned component into Isaac Lab's actuator interface.",
  "r2s.m3": "Optimize joint-state errors through multi-step PPO rollouts; compare position and velocity trajectories to diagnose accumulated closed-loop error.",
  "r2s.position": "Approximately 23.5% relative reduction in position RMSE.",
  "r2s.boundary": "These results measure simulation replay alignment on existing test trajectories. They assess model consistency, not hardware policy success.",
  "r2s.ability": "Identifiability & experiment design · Physics/neural modeling · Multi-step dynamics evaluation",
  "rl.title": "Contact coordination & stable release in bimanual box reorientation",
  "rl.state": "Simulation policy research",
  "rl.problem": "Reaching the target box angle does not complete the task. A policy can exploit table friction instead of bimanual support, or destabilize the box during withdrawal. Contact transitions, landing and release require distinct models and acceptance criteria.",
  "rl.m1": "Build dual-arm pushing, support and tipping tasks in Isaac Lab, using PPO and a 30°→50°→90° staged curriculum.",
  "rl.m2": "Design contact and geometric constraints, withdrawal gates and termination conditions; adjust rewards for failures such as a correct angle with residual contact.",
  "rl.m3": "Evaluate angle error, landing stability, end-effector clearance and release separately; continue testing robustness to friction, dimensions and initial-pose randomization.",
  "rl.envs": "Training configuration: parallel Isaac Lab simulation environments.",
  "rl.resulttitle": "Task acceptance criteria",
  "rl.check1": "Target pose & stable landing",
  "rl.check2": "Contact release & arm withdrawal",
  "rl.check3": "Randomized conditions & failure distribution",
  "rl.boundary": "Fixed-initial-state results do not establish success under randomized conditions. Domain randomization and limited observations remain research topics; hardware transfer is not yet validated.",
  "rl.ability": "Contact-task abstraction · Curriculum & reward design · Policy failure diagnosis",
  "demos.title": "Planning & collision checking",
  "demos.lead": "Motion generation and geometry checks for dual-arm systems.",
  "demos.planning.title": "14-DoF joint-space motion planning",
  "demos.planning.copy": "Use cuRobo to address two end-effector targets and collision constraints in joint configuration space, demonstrating coordinated bimanual trajectories.",
  "demos.collision.title": "Dual-arm self-collision checking",
  "demos.collision.copy": "Visualize collision-geometry checks during arm motion to investigate link interference and model-configuration issues.",
  "demos.fallback": "Open video",
  "demos.open": "Play separately ↗",
  "demos.button": "Button pressing: combine visual lateral alignment, incremental depth exploration and end-effector F/T-triggered contact in a closed-loop state machine.",
  "stack.title": "Between models, algorithms & hardware",
  "stack.lead": "Turn observed behavior into identifiable models, executable controllers and testable task conditions.",
  "stack.model": "Diagnose models through data",
  "stack.modelcopy": "Use bidirectional sampling, static anchors and error decomposition to distinguish gravity bias, asymmetric friction and parameter coupling.",
  "stack.modelref": "Case: system identification ↗",
  "stack.control": "Close the loop on hardware",
  "stack.controlcopy": "Tune feedforward, feedback gains and damping alongside current control, communication timing and sensor noise.",
  "stack.controlref": "Case: bilateral teleoperation ↗",
  "stack.learning": "Read training defects in policy behavior",
  "stack.learningcopy": "Translate support failures, early withdrawal and residual contact into changes to curricula, rewards and acceptance criteria.",
  "stack.learningref": "Case: contact-rich manipulation ↗",
  "focus.title": "Questions still under investigation",
  "focus.one": "Stiction compensation: further improve low-speed start–stop and reversal behavior.",
  "focus.two": "Domain randomization: distinguish training coverage from actual policy generalization.",
  "focus.three": "Partial observability: evaluate missing object velocity, angular velocity and continuous pose measurements.",
  "contact.title": "Discuss the model. And the failure cases.",
  "contact.copy": "I welcome research and engineering discussions on manipulator control, dynamics identification and robot learning.",
  "contact.note": "Friction does not read papers. It does check our models.",
  "footer.top": "Back to top ↑"
};

const root = document.documentElement;
const languageButton = document.querySelector("#language-toggle");
const themeButton = document.querySelector("#theme-toggle");
const copyNodes = Array.from(document.querySelectorAll("[data-i18n]"));
const altNodes = Array.from(document.querySelectorAll("[data-i18n-alt]"));
const chinese = Object.fromEntries([
  ...copyNodes.map(node => [node.dataset.i18n, node.textContent]),
  ...altNodes.map(node => [node.dataset.i18nAlt, node.alt])
]);
const descriptions = {
  zh: "Erwin · 机器人算法工程师。聚焦谐波减速器摩擦辨识、双边力反馈遥操作、残差执行器 Real-to-Sim 与双臂接触操作。",
  en: "Erwin · Robotics Algorithm Engineer. Harmonic-drive friction identification, bilateral force-feedback control, residual actuator modeling and contact-rich bimanual learning."
};

function readPreference(key, fallback) {
  try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
}
function savePreference(key, value) {
  try { localStorage.setItem(key, value); } catch { /* The page remains usable without storage. */ }
}
function updateThemeLabel() {
  const dark = root.dataset.theme === "dark";
  const zh = root.lang === "zh-CN";
  themeButton.setAttribute("aria-pressed", String(dark));
  themeButton.setAttribute("aria-label", zh ? (dark ? "切换为浅色模式" : "切换为深色模式") : (dark ? "Use light theme" : "Use dark theme"));
}
function setLanguage(value) {
  const language = value === "en" ? "en" : "zh";
  const dictionary = language === "en" ? english : chinese;
  copyNodes.forEach(node => { node.textContent = dictionary[node.dataset.i18n] ?? chinese[node.dataset.i18n]; });
  altNodes.forEach(node => { node.alt = dictionary[node.dataset.i18nAlt] ?? chinese[node.dataset.i18nAlt]; });
  root.lang = language === "en" ? "en" : "zh-CN";
  languageButton.textContent = language === "en" ? "中" : "EN";
  languageButton.setAttribute("aria-label", language === "en" ? "切换到中文" : "Switch to English");
  document.querySelector('meta[name="description"]').content = descriptions[language];
  savePreference("erwin-language", language);
  updateThemeLabel();
}
function setTheme(value) {
  const theme = value === "dark" ? "dark" : "light";
  root.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#101d35" : "#ffffff";
  savePreference("erwin-theme", theme);
  updateThemeLabel();
}
languageButton.addEventListener("click", () => setLanguage(root.lang === "en" ? "zh" : "en"));
themeButton.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));
setLanguage(readPreference("erwin-language", "zh"));
setTheme(readPreference("erwin-theme", "light"));
document.querySelector("#year").textContent = new Date().getFullYear();
