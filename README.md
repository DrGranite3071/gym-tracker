# Gym Tracker v0.5 -- the journey --

---

### Message form our sponsor

Hey Guys, I'm Dr. Bob!

Here is my tool that i'm using to track my gym performance. Feel free to use it. Built it the good help of ChatGPT. Here you have a list of changes that i've made.

Cheers!
Dr. Bob


---

## ✅ V1 – Base App (Minimal but Functional)

* Created a **PWA** with:

  * `index.html`, `style.css`, `app.js`, `manifest.json`, `service-worker.js`
* Core features:

  * Choose **date** + **workout day** (Day 1 / 2 / 3).
  * See a **fixed program** (full-body, upper+core, lower+cardio).
  * Tap exercise → log sets with **weight / reps / RPE**.
  * **Save session** to `localStorage`.
  * View **session history** (date + day + notes).
* Service worker + manifest:

  * Installable on phone.
  * Works offline.

---

## ✅ V2 – Per-Exercise Logging + YouTube Buttons

* Changed from “only last exercise” logging → **per-exercise session logging**:

  * You can now log **sets for multiple exercises** in the same session.
  * Each exercise remembers its own sets.
* Exercise list now shows:

  * Tag (`Full Body`, `Upper + Core`, `Lower + Cardio`)
  * A **sets badge**: `0 sets`, `3 sets`, etc.
* Added a **YouTube ▶ button** next to each exercise:

  * Opens a relevant tutorial search for that movement.
* Internal structure:

  * `sessionExercises = { exerciseId: { name, sets: [...] } }`.

---

## ✅ V3 – Dark/Light Theme + Bottom Navigation

* Added **theme toggle** (☾ / ☀):

  * `light-theme` class on `<body>`.
  * Stored in `localStorage` so your preference persists.
* Full **light theme** styling: cards, inputs, history, buttons adapted.
* Added **bottom navigation bar**:

  * Buttons: **Home / Session / History**
  * Smooth scroll to the corresponding section.
* Overall app now feels much more like a **native mobile app**.

---

## ✅ V4 – About Page + Smarter Treadmill Input

* Added **About/Info card** at the top:

  * Explains:

    * Program type (beginner, 3x/week, 60–90 min).
    * Definitions: RPE, sets, reps, full body.
* Improved **Incline Treadmill Walk**:

  * Tagged as `kind: "treadmill"`.
  * Logger labels change when selected:

    * `Time (min)`
    * `Speed (km/h)`
    * `Incline (%)`
  * Sets display like:
    `12 min, 5 km/h, incline 8%`
* Strength exercises still use:

  * `Weight (kg)`, `Reps`, `RPE (1–10)`.

---

## ✅ V5–V6 – Auto Volume Tracking + Live Session Summary

**V5/V6 together introduced “your numbers actually mean something.”**

* Implemented **auto volume tracking** for strength:

  * Per set: `volume = weight × reps`.
  * Displayed in set info: `RPE X · Y kg·reps`.
* Implemented **cardio minutes tracking**:

  * For treadmill: uses `time (min)` as “minutes worked”.
* Added **Session Summary card**:

  * Updates live as you log sets.
  * Shows:

    * Total **strength sets**.
    * Total **strength volume** in `kg·reps`.
    * Total **cardio minutes** and how many cardio exercises you used.
* Sessions saved to history now include a `summary` object:

  * `totalStrengthSets`
  * `totalVolume`
  * `totalCardioMinutes`
* History view displays those summary stats per session.

---

## ✅ V7 – Mesocycle + Easy Day + Load Suggestions

This is where it starts acting more like a coach than a notebook.

### 1. Mesocycle Structure

* Added **Mesocycle Week selector** (1–4):

  * Week 1 – Foundation
  * Week 2 – Build
  * Week 3 – Peak
  * Week 4 – Deload
* Behind the scenes:

  * `MESO_FACTORS = {1: 0.95, 2: 1.0, 3: 1.05, 4: 0.9}`
    → used to gently scale suggested loads.

### 2. Easy / Normal Day Mode

* Added **Day Type** selector:

  * `Normal day`
  * `Easy / low-stress day`
* Easy day:

  * Uses `EASY_DAY_FACTOR = 0.85` → ~15% lighter suggestions.
  * Summary card marks day as **Normal** or **Easy**.

### 3. Mesocycle-Aware Load Suggestions

For **strength exercises**:

* The app looks up your last logged set for that exercise (`findLastExerciseSet`).
* Computes a **suggested weight** using:

  * last weight
  * mesocycle week factor
  * easy/normal day factor
  * rounded to **2.5 kg** steps.
* Shows a hint under the exercise name, e.g.:

> Last time: 40 kg × 10 reps (RPE 7). Suggested starting weight today: 42.5 kg, aiming for RPE ~7.

* On **Easy day**, suggestions are lighter and RPE targets are lower (RPE 6–7).

For **treadmill**:

* Suggestion text adapts:

  * Normal: 10–15 min brisk, sustainable.
  * Easy: nearer 10 min, reduced speed/incline, conversational effort.

### 4. Mesocycle Info in Summary & History

* Session summary now includes:

  * **Week X** and **Day type: Normal/Easy**.
* Saved session summary object also stores:

  * `mesoWeek`
  * `dayMode`
* History string shows:

  * Sets, volume, cardio minutes, meso week, and whether it was an **easy** or **normal** day.

---

## 🔚 Big Picture

Right now your app is:

* A **PWA** you can install on your phone and use offline.
* A structured **beginner strength + fat loss program** wrapped in code.
* A **set logger** with:

  * per-exercise tracking
  * video help
  * treadmill-specific inputs
* A **session analytics tool** with:

  * auto volume tracking
  * cardio minutes
  * per-session summary
* A **lightweight coach** that:

  * uses **mesocycle week**
  * considers **easy vs normal days**
  * suggests **starting loads** based on your past training.

---

### V8 changes due when i find problems/improvements or when i have time
