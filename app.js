// ====== PLAN DEFINITION (YOUR PROGRAM) ======

const WORKOUT_PLAN = [
{
  id: "day1",
  name: "Day 1 – Full Body Strength + Conditioning",
  tag: "Full Body",
  exercises: [
    {
      id: "goblet_squat",
      name: "Goblet Squat",
      target: "3 × 10–12 · RPE ~7",
      video: "https://www.youtube.com/results?search_query=goblet+squat+exercise+tutorial",
      kind: "strength"
    },
    {
      id: "lat_pulldown",
      name: "Lat Pulldown",
      target: "3 × 10–12 · RPE ~7",
      video: "https://www.youtube.com/results?search_query=lat+pulldown+exercise+tutorial",
      kind: "strength"
    },
    {
      id: "db_chest_press",
      name: "Dumbbell Chest Press",
      target: "3 × 8–10 · RPE ~7",
      video: "https://www.youtube.com/results?search_query=dumbbell+chest+press+exercise+tutorial",
      kind: "strength"
    },
    {
      id: "rdl",
      name: "Romanian Deadlift",
      target: "3 × 10–12 · RPE ~7",
      video: "https://www.youtube.com/results?search_query=romanian+deadlift+dumbbell+exercise+tutorial",
      kind: "strength"
    },
    {
      id: "face_pull",
      name: "Cable Face Pulls",
      target: "2 × 12–15 · RPE ~6",
      video: "https://www.youtube.com/results?search_query=cable+face+pull+exercise+tutorial",
      kind: "strength"
    },
    {
      id: "incline_walk",
      name: "Incline Treadmill Walk",
      target: "10–15 min · moderate",
      video: "https://www.youtube.com/results?search_query=incline+treadmill+walk+for+fat+loss",
      kind: "treadmill"    // 👈 this tells the logger to use time/speed/incline
    }
  ]
},
  {
    id: "day2",
    name: "Day 2 – Upper Body + Core",
    tag: "Upper + Core",
    exercises: [
      {
        id: "seated_row",
        name: "Seated Row (Machine/Cable)",
        target: "3 × 10–12 · RPE ~7",
        video: "https://www.youtube.com/results?search_query=seated+row+machine+exercise+tutorial",
        kind: "strength"
      },
      {
        id: "oh_press",
        name: "Overhead Dumbbell Press",
        target: "3 × 8–10 · RPE ~7",
        video: "https://www.youtube.com/results?search_query=overhead+dumbbell+press+exercise+tutorial",
        kind: "strength"
      },
      {
        id: "db_curl",
        name: "Dumbbell Bicep Curl",
        target: "2 × 10–12 · RPE ~6",
        video: "https://www.youtube.com/results?search_query=dumbbell+bicep+curl+exercise+tutorial",
        kind: "strength"
      },
      {
        id: "tri_pushdown",
        name: "Cable Triceps Pushdown",
        target: "2 × 10–12 · RPE ~6",
        video: "https://www.youtube.com/results?search_query=cable+tricep+pushdown+exercise+tutorial",
        kind: "strength"
      },
      {
        id: "knee_raises",
        name: "Hanging Knee Raises",
        target: "3 × 10–15 · RPE ~6",
        video: "https://www.youtube.com/results?search_query=hanging+knee+raise+exercise+tutorial",
        kind: "strength"
      },
      {
        id: "woodchop",
        name: "Cable Woodchoppers",
        target: "2 × 12 / side · RPE ~6",
        video: "https://www.youtube.com/results?search_query=cable+woodchopper+exercise+tutorial",
        kind: "strength"
      }
    ]
  },
  {
    id: "day3",
    name: "Day 3 – Lower Body + Conditioning",
    tag: "Lower + Cardio",
    exercises: [
      {
        id: "leg_press",
        name: "Leg Press",
        target: "3 × 10–12 · RPE ~7",
        video: "https://www.youtube.com/results?search_query=leg+press+machine+exercise+tutorial",
        kind: "strength"
      },
      {
        id: "walking_lunge",
        name: "Walking Lunges",
        target: "2 × 12 steps / leg · RPE ~7",
        video: "https://www.youtube.com/results?search_query=walking+lunge+exercise+tutorial",
        kind: "strength"
      },
      {
        id: "ham_curl",
        name: "Seated Hamstring Curl",
        target: "3 × 10–12 · RPE ~7",
        video: "https://www.youtube.com/results?search_query=seated+hamstring+curl+exercise+tutorial",
        kind: "strength"
      },
      {
        id: "calf_raise",
        name: "Standing Calf Raises",
        target: "2 × 15 · RPE ~6",
        video: "https://www.youtube.com/results?search_query=standing+calf+raise+exercise+tutorial",
        kind: "strength"
      },
      {
        id: "intervals",
        name: "Battle Ropes / Row Intervals",
        target: "6 × 30s work / 30s rest",
        video: "https://www.youtube.com/results?search_query=battle+ropes+hiit+workout",
        kind: "strength" // keep strength-style logging for now
      }
    ]
  }
];

const STORAGE_KEY = "gymTrackerSessions_v1";
const THEME_KEY = "gymTrackerTheme";

// ====== DOM ELEMENTS ======

const dateInput = document.getElementById("session-date");
const daySelect = document.getElementById("day-select");
const loadPlanBtn = document.getElementById("load-plan-btn");

const exercisesSection = document.getElementById("exercises-section");
const exerciseListEl = document.getElementById("exercise-list");

const loggerSection = document.getElementById("logger-section");
const loggerExerciseName = document.getElementById("logger-exercise-name");
const loggerTarget = document.getElementById("logger-target");
const setWeightInput = document.getElementById("set-weight");
const setRepsInput = document.getElementById("set-reps");
const setRpeInput = document.getElementById("set-rpe");
const addSetBtn = document.getElementById("add-set-btn");
const setsListEl = document.getElementById("sets-list");

const labelWeight = document.getElementById("label-weight");
const labelReps = document.getElementById("label-reps");
const labelRpe = document.getElementById("label-rpe");

const sessionFooter = document.getElementById("session-footer");
const sessionNotes = document.getElementById("session-notes");
const saveSessionBtn = document.getElementById("save-session-btn");
const saveStatus = document.getElementById("save-status");

const toggleHistoryBtn = document.getElementById("toggle-history-btn");
const historySection = document.getElementById("history-section");
const historyListEl = document.getElementById("history-list");
const clearHistoryBtn = document.getElementById("clear-history-btn");

const themeToggleBtn = document.getElementById("theme-toggle");
const navButtons = document.querySelectorAll(".nav-btn");

// ====== STATE ======

let currentDay = null;
let currentExercise = null;
let currentSets = [];
let sessionExercises = {}; // { exerciseId: { name, sets: [] } }

// ====== INITIAL SETUP ======

function init() {
  const today = new Date().toISOString().split("T")[0];
  dateInput.value = today;

  WORKOUT_PLAN.forEach(day => {
    const opt = document.createElement("option");
    opt.value = day.id;
    opt.textContent = day.name;
    daySelect.appendChild(opt);
  });

  loadPlanBtn.addEventListener("click", onLoadPlan);
  addSetBtn.addEventListener("click", onAddSet);
  saveSessionBtn.addEventListener("click", onSaveSession);
  toggleHistoryBtn.addEventListener("click", toggleHistory);
  clearHistoryBtn.addEventListener("click", clearHistory);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme);
  }

  setupNav();
  setupTheme();
  renderHistory();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").catch(console.error);
  }
}

// ====== THEME ======

function setupTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  const prefersLight = window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;

  const mode = stored || (prefersLight ? "light" : "dark");

  if (mode === "light") {
    document.body.classList.add("light-theme");
  } else {
    document.body.classList.remove("light-theme");
  }
  updateThemeToggleIcon(mode);
}

function toggleTheme() {
  const isLight = document.body.classList.toggle("light-theme");
  const mode = isLight ? "light" : "dark";
  localStorage.setItem(THEME_KEY, mode);
  updateThemeToggleIcon(mode);
}

function updateThemeToggleIcon(mode) {
  if (!themeToggleBtn) return;
  themeToggleBtn.textContent = mode === "light" ? "☀" : "☾";
}

// ====== NAV BAR ======

function setupNav() {
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.target;
      if (!targetId) return;

      if (targetId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
}

// ====== PLAN / EXERCISE RENDERING ======

function onLoadPlan() {
  const dayId = daySelect.value;
  const selectedDay = WORKOUT_PLAN.find(d => d.id === dayId);
  if (!selectedDay) return;

  currentDay = selectedDay;
  exercisesSection.hidden = false;
  sessionFooter.hidden = false;

  sessionExercises = {};
  currentDay.exercises.forEach(ex => {
    sessionExercises[ex.id] = {
      name: ex.name,
      sets: []
    };
  });

  renderExerciseList(currentDay);
  resetLogger();
  sessionNotes.value = "";
  saveStatus.textContent = "";
}

function renderExerciseList(day) {
  exerciseListEl.innerHTML = "";
  day.exercises.forEach(ex => {
    const item = document.createElement("div");
    item.className = "exercise-item";
    item.dataset.exerciseId = ex.id;

    const main = document.createElement("div");
    main.className = "exercise-main";

    const name = document.createElement("div");
    name.className = "exercise-name";
    name.textContent = ex.name;

    const target = document.createElement("div");
    target.className = "exercise-target";
    target.textContent = ex.target;

    main.appendChild(name);
    main.appendChild(target);

    const right = document.createElement("div");
    right.className = "exercise-right";

    const tag = document.createElement("div");
    tag.className = "exercise-tag";
    tag.textContent = day.tag || "Exercise";
    right.appendChild(tag);

    const exData = sessionExercises[ex.id];
    const setCount = exData && exData.sets ? exData.sets.length : 0;
    const setsBadge = document.createElement("div");
    setsBadge.className = "exercise-sets-badge";
    setsBadge.textContent = `${setCount} set${setCount === 1 ? "" : "s"}`;
    right.appendChild(setsBadge);

    if (ex.video) {
      const videoBtn = document.createElement("button");
      videoBtn.className = "icon-button";
      videoBtn.type = "button";
      videoBtn.title = "Tutorial video";
      videoBtn.textContent = "▶";
      videoBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        window.open(ex.video, "_blank");
      });
      right.appendChild(videoBtn);
    }

    item.appendChild(main);
    item.appendChild(right);

    item.addEventListener("click", () => selectExercise(ex));

    exerciseListEl.appendChild(item);
  });
}

function selectExercise(ex) {
  currentExercise = ex;

  if (!sessionExercises[ex.id]) {
    sessionExercises[ex.id] = { name: ex.name, sets: [] };
  }

  currentSets = sessionExercises[ex.id].sets;
  loggerSection.hidden = false;

  loggerExerciseName.textContent = ex.name;
  loggerTarget.textContent = ex.target;

  // Update labels depending on exercise kind
  const kind = ex.kind || "strength";
  if (kind === "treadmill") {
    labelWeight.textContent = "Time (min)";
    labelReps.textContent = "Speed (km/h)";
    labelRpe.textContent = "Incline (%)";
  } else {
    labelWeight.textContent = "Weight (kg)";
    labelReps.textContent = "Reps";
    labelRpe.textContent = "RPE (1–10)";
  }

  setWeightInput.value = "";
  setRepsInput.value = "";
  setRpeInput.value = "";

  renderSets();
}

// ====== SET LOGGING ======

function onAddSet() {
  if (!currentExercise) {
    alert("Select an exercise first.");
    return;
  }

  const weight = parseFloat(setWeightInput.value || "0");
  const reps = parseInt(setRepsInput.value || "0", 10);
  const rpe = parseFloat(setRpeInput.value || "0");

  if (!reps && currentExercise.kind !== "treadmill") {
    alert("Please enter reps for the set.");
    return;
  }

  const newSet = {
    weight: isNaN(weight) ? null : weight,
    reps: isNaN(reps) ? null : reps,
    rpe: isNaN(rpe) ? null : rpe
  };

  currentSets.push(newSet);
  sessionExercises[currentExercise.id].sets = currentSets;

  setWeightInput.value = "";
  setRepsInput.value = "";
  setRpeInput.value = "";

  renderSets();
  renderExerciseList(currentDay);
  saveStatus.textContent = "";
}

function renderSets() {
  setsListEl.innerHTML = "";

  if (!currentSets || !currentSets.length) {
    const li = document.createElement("li");
    li.textContent = "No sets logged yet.";
    li.className = "set-meta";
    setsListEl.appendChild(li);
    return;
  }

  currentSets.forEach((s, index) => {
    const li = document.createElement("li");
    li.className = "set-item";

    const kind = currentExercise ? currentExercise.kind || "strength" : "strength";

    const text = document.createElement("div");
    const meta = document.createElement("div");
    meta.className = "set-meta";

    if (kind === "treadmill") {
      const t = s.weight != null ? `${s.weight} min` : "? min";
      const spd = s.reps != null ? `${s.reps} km/h` : "? km/h";
      const inc = s.rpe != null ? `${s.rpe}%` : "?%";
      text.textContent = `Set ${index + 1} – ${t}, ${spd}, incline ${inc}`;
      meta.textContent = "";
    } else {
      const w = s.weight != null ? `${s.weight} kg` : "BW";
      const r = s.reps != null ? `${s.reps} reps` : "reps ?";
      text.textContent = `Set ${index + 1} – ${w}, ${r}`;
      meta.textContent = s.rpe != null ? `RPE ${s.rpe}` : "RPE n/a";
    }

    li.appendChild(text);
    li.appendChild(meta);
    setsListEl.appendChild(li);
  });
}

// ====== SESSION SAVE / LOAD ======

function onSaveSession() {
  if (!currentDay) {
    alert("Select a workout day first.");
    return;
  }

  const date = dateInput.value || new Date().toISOString().split("T")[0];

  const sessions = loadSessions();
  const sessionId = `${date}_${currentDay.id}`;

  const setsByExercise = {};
  Object.entries(sessionExercises).forEach(([id, data]) => {
    if (data.sets && data.sets.length > 0) {
      setsByExercise[id] = {
        name: data.name,
        sets: data.sets
      };
    }
  });

  if (Object.keys(setsByExercise).length === 0) {
    alert("You haven't logged any sets yet.");
    return;
  }

  const notes = sessionNotes.value.trim();
  const sessionData = {
    id: sessionId,
    date,
    dayId: currentDay.id,
    dayName: currentDay.name,
    notes,
    exercises: setsByExercise,
    savedAt: new Date().toISOString()
  };

  const existingIndex = sessions.findIndex(s => s.id === sessionId);
  if (existingIndex >= 0) {
    sessions[existingIndex] = sessionData;
  } else {
    sessions.push(sessionData);
  }

  saveSessions(sessions);
  renderHistory();
  saveStatus.textContent = "Session saved ✅";
  setTimeout(() => (saveStatus.textContent = ""), 2500);
}

function loadSessions() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
  return JSON.parse(raw) || [];
  } catch (e) {
    console.error("Failed to parse sessions", e);
    return [];
  }
}

function saveSessions(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.error("Failed to save sessions", e);
  }
}

// ====== HISTORY ======

function renderHistory() {
  const sessions = loadSessions().sort((a, b) =>
    a.date < b.date ? 1 : -1
  );
  historyListEl.innerHTML = "";

  if (!sessions.length) {
    const li = document.createElement("li");
    li.className = "history-item";
    li.textContent = "No sessions saved yet.";
    historyListEl.appendChild(li);
    return;
  }

  sessions.forEach(sess => {
    const li = document.createElement("li");
    li.className = "history-item";

    const title = document.createElement("div");
    title.className = "history-item-title";
    title.textContent = `${sess.date} – ${sess.dayName}`;

    const meta = document.createElement("div");
    meta.className = "history-item-meta";

    const exerciseCount = Object.keys(sess.exercises || {}).length;
    const notesShort =
      sess.notes && sess.notes.length > 0
        ? `Notes: ${sess.notes.slice(0, 60)}${sess.notes.length > 60 ? "..." : ""}`
        : "No notes.";

    meta.textContent = `Exercises logged: ${exerciseCount} · ${notesShort}`;

    li.appendChild(title);
    li.appendChild(meta);
    historyListEl.appendChild(li);
  });
}

function toggleHistory() {
  historySection.hidden = !historySection.hidden;
}

function clearHistory() {
  if (!confirm("Delete ALL saved sessions? This cannot be undone.")) return;
  localStorage.removeItem(STORAGE_KEY);
  renderHistory();
}

// ====== UTIL ======

function resetLogger() {
  loggerSection.hidden = true;
  loggerExerciseName.textContent = "";
  loggerTarget.textContent = "";
  setsListEl.innerHTML = "";
  currentExercise = null;
  currentSets = [];
}

// ====== INIT ======
document.addEventListener("DOMContentLoaded", init);
