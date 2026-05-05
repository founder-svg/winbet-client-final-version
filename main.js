/* ═══════════════════════════════════════════════════════
   WinBet — IPL 2026 Gaming Platform
   main.js — All interactive functionality
   ═══════════════════════════════════════════════════════ */

// ══════════════════════════════════════════
// IPL 2026 COMPLETE SCHEDULE DATA
// Source: ESPNCricinfo / Yahoo Sports / IPLT20
// Updated: May 2026
// ══════════════════════════════════════════

const IPL_SCHEDULE = [
  // Only upcoming/future matches from today (May 3, 2026) are shown
  { date: '2026-05-03', day: 'Sun', time: '3:30 PM', teamA: 'SRH', teamB: 'KKR', teamAFull: 'Sunrisers Hyderabad', teamBFull: 'Kolkata Knight Riders', teamAEmoji: '🟠', teamBEmoji: '🟣', venue: 'Rajiv Gandhi International Stadium, Hyderabad', matchNum: 53 },
  { date: '2026-05-03', day: 'Sun', time: '7:30 PM', teamA: 'GT', teamB: 'PBKS', teamAFull: 'Gujarat Titans', teamBFull: 'Punjab Kings', teamAEmoji: '🔵', teamBEmoji: '🔴', venue: 'Narendra Modi Stadium, Ahmedabad', matchNum: 54 },
  { date: '2026-05-04', day: 'Mon', time: '7:30 PM', teamA: 'MI', teamB: 'LSG', teamAFull: 'Mumbai Indians', teamBFull: 'Lucknow Super Giants', teamAEmoji: '🔵', teamBEmoji: '🟡', venue: 'Wankhede Stadium, Mumbai', matchNum: 55 },
  { date: '2026-05-05', day: 'Tue', time: '7:30 PM', teamA: 'DC', teamB: 'CSK', teamAFull: 'Delhi Capitals', teamBFull: 'Chennai Super Kings', teamAEmoji: '🔷', teamBEmoji: '🟡', venue: 'Arun Jaitley Stadium, Delhi', matchNum: 56 },
  { date: '2026-05-06', day: 'Wed', time: '7:30 PM', teamA: 'SRH', teamB: 'PBKS', teamAFull: 'Sunrisers Hyderabad', teamBFull: 'Punjab Kings', teamAEmoji: '🟠', teamBEmoji: '🔴', venue: 'Rajiv Gandhi International Stadium, Hyderabad', matchNum: 57 },
  { date: '2026-05-07', day: 'Thu', time: '7:30 PM', teamA: 'LSG', teamB: 'RCB', teamAFull: 'Lucknow Super Giants', teamBFull: 'Royal Challengers Bengaluru', teamAEmoji: '🟡', teamBEmoji: '🔴', venue: 'Ekana Stadium, Lucknow', matchNum: 58 },
  { date: '2026-05-08', day: 'Fri', time: '7:30 PM', teamA: 'DC', teamB: 'KKR', teamAFull: 'Delhi Capitals', teamBFull: 'Kolkata Knight Riders', teamAEmoji: '🔷', teamBEmoji: '🟣', venue: 'Arun Jaitley Stadium, Delhi', matchNum: 59 },
  { date: '2026-05-09', day: 'Sat', time: '7:30 PM', teamA: 'RR', teamB: 'GT', teamAFull: 'Rajasthan Royals', teamBFull: 'Gujarat Titans', teamAEmoji: '🩷', teamBEmoji: '🔵', venue: 'Sawai Mansingh Stadium, Jaipur', matchNum: 60 },
  { date: '2026-05-10', day: 'Sun', time: '3:30 PM', teamA: 'CSK', teamB: 'LSG', teamAFull: 'Chennai Super Kings', teamBFull: 'Lucknow Super Giants', teamAEmoji: '🟡', teamBEmoji: '🟡', venue: 'MA Chidambaram Stadium, Chennai', matchNum: 61 },
  { date: '2026-05-10', day: 'Sun', time: '7:30 PM', teamA: 'RCB', teamB: 'MI', teamAFull: 'Royal Challengers Bengaluru', teamBFull: 'Mumbai Indians', teamAEmoji: '🔴', teamBEmoji: '🔵', venue: 'Shaheed Veer Narayan Singh Stadium, Raipur', matchNum: 62 },
  { date: '2026-05-11', day: 'Mon', time: '7:30 PM', teamA: 'PBKS', teamB: 'DC', teamAFull: 'Punjab Kings', teamBFull: 'Delhi Capitals', teamAEmoji: '🔴', teamBEmoji: '🔷', venue: 'HPCA Cricket Stadium, Dharamsala', matchNum: 63 },
  { date: '2026-05-12', day: 'Tue', time: '7:30 PM', teamA: 'GT', teamB: 'SRH', teamAFull: 'Gujarat Titans', teamBFull: 'Sunrisers Hyderabad', teamAEmoji: '🔵', teamBEmoji: '🟠', venue: 'Narendra Modi Stadium, Ahmedabad', matchNum: 64 },
  { date: '2026-05-13', day: 'Wed', time: '7:30 PM', teamA: 'RCB', teamB: 'KKR', teamAFull: 'Royal Challengers Bengaluru', teamBFull: 'Kolkata Knight Riders', teamAEmoji: '🔴', teamBEmoji: '🟣', venue: 'Shaheed Veer Narayan Singh Stadium, Raipur', matchNum: 65 },
  { date: '2026-05-14', day: 'Thu', time: '7:30 PM', teamA: 'PBKS', teamB: 'MI', teamAFull: 'Punjab Kings', teamBFull: 'Mumbai Indians', teamAEmoji: '🔴', teamBEmoji: '🔵', venue: 'HPCA Cricket Stadium, Dharamsala', matchNum: 66 },
  { date: '2026-05-15', day: 'Fri', time: '7:30 PM', teamA: 'LSG', teamB: 'CSK', teamAFull: 'Lucknow Super Giants', teamBFull: 'Chennai Super Kings', teamAEmoji: '🟡', teamBEmoji: '🟡', venue: 'Ekana Stadium, Lucknow', matchNum: 67 },
  { date: '2026-05-16', day: 'Sat', time: '7:30 PM', teamA: 'KKR', teamB: 'GT', teamAFull: 'Kolkata Knight Riders', teamBFull: 'Gujarat Titans', teamAEmoji: '🟣', teamBEmoji: '🔵', venue: 'Eden Gardens, Kolkata', matchNum: 68 },
  { date: '2026-05-17', day: 'Sun', time: '3:30 PM', teamA: 'PBKS', teamB: 'RCB', teamAFull: 'Punjab Kings', teamBFull: 'Royal Challengers Bengaluru', teamAEmoji: '🔴', teamBEmoji: '🔴', venue: 'HPCA Cricket Stadium, Dharamsala', matchNum: 69 },
  { date: '2026-05-17', day: 'Sun', time: '7:30 PM', teamA: 'DC', teamB: 'RR', teamAFull: 'Delhi Capitals', teamBFull: 'Rajasthan Royals', teamAEmoji: '🔷', teamBEmoji: '🩷', venue: 'Arun Jaitley Stadium, Delhi', matchNum: 70 },
  { date: '2026-05-18', day: 'Mon', time: '7:30 PM', teamA: 'CSK', teamB: 'SRH', teamAFull: 'Chennai Super Kings', teamBFull: 'Sunrisers Hyderabad', teamAEmoji: '🟡', teamBEmoji: '🟠', venue: 'MA Chidambaram Stadium, Chennai', matchNum: 71 },
  { date: '2026-05-19', day: 'Tue', time: '7:30 PM', teamA: 'RR', teamB: 'LSG', teamAFull: 'Rajasthan Royals', teamBFull: 'Lucknow Super Giants', teamAEmoji: '🩷', teamBEmoji: '🟡', venue: 'Sawai Mansingh Stadium, Jaipur', matchNum: 72 },
  { date: '2026-05-20', day: 'Wed', time: '7:30 PM', teamA: 'KKR', teamB: 'MI', teamAFull: 'Kolkata Knight Riders', teamBFull: 'Mumbai Indians', teamAEmoji: '🟣', teamBEmoji: '🔵', venue: 'Eden Gardens, Kolkata', matchNum: 73 },
  { date: '2026-05-21', day: 'Thu', time: '7:30 PM', teamA: 'CSK', teamB: 'GT', teamAFull: 'Chennai Super Kings', teamBFull: 'Gujarat Titans', teamAEmoji: '🟡', teamBEmoji: '🔵', venue: 'MA Chidambaram Stadium, Chennai', matchNum: 74 },
  { date: '2026-05-22', day: 'Fri', time: '7:30 PM', teamA: 'SRH', teamB: 'RCB', teamAFull: 'Sunrisers Hyderabad', teamBFull: 'Royal Challengers Bengaluru', teamAEmoji: '🟠', teamBEmoji: '🔴', venue: 'Rajiv Gandhi International Stadium, Hyderabad', matchNum: 75 },
  { date: '2026-05-23', day: 'Sat', time: '7:30 PM', teamA: 'LSG', teamB: 'PBKS', teamAFull: 'Lucknow Super Giants', teamBFull: 'Punjab Kings', teamAEmoji: '🟡', teamBEmoji: '🔴', venue: 'Ekana Stadium, Lucknow', matchNum: 76 },
  { date: '2026-05-24', day: 'Sun', time: '3:30 PM', teamA: 'MI', teamB: 'RR', teamAFull: 'Mumbai Indians', teamBFull: 'Rajasthan Royals', teamAEmoji: '🔵', teamBEmoji: '🩷', venue: 'Wankhede Stadium, Mumbai', matchNum: 77 },
  { date: '2026-05-24', day: 'Sun', time: '7:30 PM', teamA: 'KKR', teamB: 'DC', teamAFull: 'Kolkata Knight Riders', teamBFull: 'Delhi Capitals', teamAEmoji: '🟣', teamBEmoji: '🔷', venue: 'Eden Gardens, Kolkata', matchNum: 78 },
  // Playoffs
  { date: '2026-05-27', day: 'Wed', time: '7:30 PM', teamA: '1st', teamB: '2nd', teamAFull: '1st Place Team', teamBFull: '2nd Place Team', teamAEmoji: '🏆', teamBEmoji: '🏆', venue: 'TBD', matchNum: 'Q1', isPlayoff: true },
  { date: '2026-05-28', day: 'Thu', time: '7:30 PM', teamA: '3rd', teamB: '4th', teamAFull: '3rd Place Team', teamBFull: '4th Place Team', teamAEmoji: '⚔️', teamBEmoji: '⚔️', venue: 'TBD', matchNum: 'EL', isPlayoff: true },
  { date: '2026-05-30', day: 'Sat', time: '7:30 PM', teamA: 'Loser Q1', teamB: 'Winner EL', teamAFull: 'Loser of Qualifier 1', teamBFull: 'Winner of Eliminator', teamAEmoji: '⚔️', teamBEmoji: '⚔️', venue: 'TBD', matchNum: 'Q2', isPlayoff: true },
  { date: '2026-05-31', day: 'Sun', time: '7:30 PM', teamA: 'Winner Q1', teamB: 'Winner Q2', teamAFull: 'Winner of Qualifier 1', teamBFull: 'Winner of Qualifier 2', teamAEmoji: '🏆', teamBEmoji: '🏆', venue: 'TBD', matchNum: 'F', isPlayoff: true },
];

// Parse a date string "YYYY-MM-DD" as IST midnight
function parseISTDate(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  // IST = UTC+5:30
  return new Date(Date.UTC(y, m - 1, d, 0, 0, 0) - 5.5 * 3600000);
}

// Get match datetime in IST
function getMatchDateTime(match) {
  const [y, m, d] = match.date.split('-').map(Number);
  const [timePart, meridiem] = match.time.split(' ');
  let [h, min] = timePart.split(':').map(Number);
  if (meridiem === 'PM' && h !== 12) h += 12;
  if (meridiem === 'AM' && h === 12) h = 0;
  // IST => UTC: subtract 5h30m
  return new Date(Date.UTC(y, m - 1, d, h - 5, min - 30, 0));
}

function getTodayIST() {
  const now = new Date();
  const ist = new Date(now.getTime() + (5.5 * 3600000));
  return ist.toISOString().slice(0, 10);
}

function getTomorrowIST() {
  const now = new Date();
  const ist = new Date(now.getTime() + (5.5 * 3600000) + 86400000);
  return ist.toISOString().slice(0, 10);
}

// ══════════════════════════════════════════
// UPCOMING MATCHES SCHEDULE RENDER
// ══════════════════════════════════════════

let currentFilter = 'ALL';
let nextMatchTimer = null;

function renderSchedule(filter) {
  const list = document.getElementById('scheduleList');
  if (!list) return;

  const todayStr = getTodayIST();
  const tomorrowStr = getTomorrowIST();
  const now = new Date();

  let matches = IPL_SCHEDULE.filter(m => {
    const dt = getMatchDateTime(m);
    // Only show matches not yet started (upcoming)
    return dt > now;
  });

  if (filter === 'TODAY') {
    matches = matches.filter(m => m.date === todayStr);
  } else if (filter === 'THIS_WEEK') {
    const weekLater = new Date(now.getTime() + 7 * 86400000);
    matches = matches.filter(m => getMatchDateTime(m) <= weekLater);
  } else if (filter === 'PLAYOFFS') {
    matches = matches.filter(m => m.isPlayoff);
  }

  if (matches.length === 0) {
    list.innerHTML = `<div class="schedule-empty">No matches found for this filter. Check back soon! 🏏</div>`;
    return;
  }

  list.innerHTML = matches.map(m => {
    const isToday = m.date === todayStr;
    const isTomorrow = m.date === tomorrowStr;
    const rowClass = isToday ? 'today' : isTomorrow ? 'tomorrow' : '';
    const dateObj = parseISTDate(m.date);
    const dateLabel = isToday ? 'TODAY' : isTomorrow ? 'TOMORROW' : dateObj.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', timeZone: 'Asia/Kolkata' });
    const isPlayoff = m.isPlayoff;
    const matchLabel = isPlayoff ? `🏆 PLAYOFF · ${m.matchNum}` : `IPL 2026 · MATCH ${m.matchNum}`;
    const waMsg = encodeURIComponent(`Hi, I want to join - ${m.teamA} vs ${m.teamB} on ${m.date}`);

    return `
      <div class="schedule-row ${rowClass}">
        <div class="sch-date-col ${isToday ? 'today-date' : ''}">
          <span class="sch-date">${dateLabel}</span>
          <span class="sch-day">${m.day}</span>
          <span class="sch-time">${m.time} IST</span>
        </div>
        <div class="sch-match-col">
          <div class="sch-match-num">${matchLabel}</div>
          <div class="sch-teams">
            <span>${m.teamAEmoji} ${m.teamA}</span>
            <span class="sch-vs">vs</span>
            <span>${m.teamBEmoji} ${m.teamB}</span>
          </div>
          <div class="sch-venue">📍 ${m.venue}</div>
        </div>
        <div class="sch-cta-col">
          <a href="https://wa.me/918511866347?text=${waMsg}" target="_blank" class="sch-join-btn">
            💬 Join Now
          </a>
        </div>
      </div>
    `;
  }).join('');

  // Update last-updated time
  const lu = document.getElementById('scheduleLastUpdated');
  if (lu) {
    const now2 = new Date();
    lu.textContent = now2.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' }) + ' IST';
  }
}

function initScheduleFilters() {
  const filterBtns = document.querySelectorAll('.sch-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentFilter = this.dataset.filter;
      renderSchedule(currentFilter);
    });
  });
}

// ══════════════════════════════════════════
// NEXT MATCH COUNTDOWN
// ══════════════════════════════════════════

function initNextMatchCountdown() {
  const now = new Date();
  const upcoming = IPL_SCHEDULE.filter(m => getMatchDateTime(m) > now);
  if (!upcoming.length) return;

  const next = upcoming[0];
  const nextDt = getMatchDateTime(next);
  const todayStr = getTodayIST();

  const el_teams = document.getElementById('nxmTeams');
  const el_meta = document.getElementById('nxmMeta');
  if (el_teams) el_teams.textContent = `${next.teamAEmoji} ${next.teamA} vs ${next.teamB} ${next.teamBEmoji}`;
  if (el_meta) {
    const label = next.date === todayStr ? 'TODAY' : next.day;
    el_meta.textContent = `IPL 2026 · ${label} · ${next.time} IST · ${next.venue.split(',')[0]}`;
  }

  function tick() {
    const diff = Math.max(0, nextDt - new Date());
    const hours = Math.floor(diff / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    const h = document.getElementById('nxmH');
    const m = document.getElementById('nxmM');
    const s = document.getElementById('nxmS');
    if (h) h.textContent = String(hours).padStart(2, '0');
    if (m) m.textContent = String(mins).padStart(2, '0');
    if (s) s.textContent = String(secs).padStart(2, '0');
  }

  tick();
  nextMatchTimer = setInterval(tick, 1000);
}

// ══════════════════════════════════════════
// HERO COUNTDOWN (5-minute promo timer)
// ══════════════════════════════════════════

function initHeroCountdown() {
  let totalSecs = 5 * 60;
  const stored = sessionStorage.getItem('wb_countdown');
  if (stored) {
    const { startedAt, seconds } = JSON.parse(stored);
    const elapsed = Math.floor((Date.now() - startedAt) / 1000);
    totalSecs = Math.max(0, seconds - elapsed);
  } else {
    sessionStorage.setItem('wb_countdown', JSON.stringify({ startedAt: Date.now(), seconds: totalSecs }));
  }

  function tick() {
    if (totalSecs <= 0) {
      totalSecs = 5 * 60;
      sessionStorage.setItem('wb_countdown', JSON.stringify({ startedAt: Date.now(), seconds: totalSecs }));
    }
    const m = Math.floor(totalSecs / 60);
    const s = totalSecs % 60;
    const mEl = document.getElementById('cdMins');
    const sEl = document.getElementById('cdSecs');
    if (mEl) { mEl.textContent = String(m).padStart(2, '0'); mEl.className = 'cd-num' + (m < 2 ? ' cd-urgent' : ''); }
    if (sEl) { sEl.textContent = String(s).padStart(2, '0'); sEl.className = 'cd-num' + (m < 2 ? ' cd-urgent' : ''); }
    totalSecs--;
  }
  tick();
  setInterval(tick, 1000);
}

// ══════════════════════════════════════════
// HERO SLIDESHOW
// ══════════════════════════════════════════

function initHeroSlides() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slide-dot');
  if (!slides.length) return;

  let current = 0;
  window.goToSlide = function(n) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = n;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  };
  setInterval(() => goToSlide((current + 1) % slides.length), 5000);
}

// ══════════════════════════════════════════
// GALLERY SLIDER
// ══════════════════════════════════════════

function initGallery() {
  const track = document.getElementById('galleryTrack');
  if (!track) return;
  let idx = 0;
  const slides = track.querySelectorAll('.gallery-slide');
  setInterval(() => {
    idx = (idx + 1) % slides.length;
    track.style.transform = `translateX(-${idx * 100}%)`;
  }, 4000);
}

// ══════════════════════════════════════════
// LIVE USER COUNT
// ══════════════════════════════════════════

function initLiveUsers() {
  function update() {
    const count = Math.floor(Math.random() * 80) + 160;
    const el = document.getElementById('liveCount');
    if (el) el.textContent = `🔥 ${count} users are online now`;
  }
  update();
  setInterval(update, 7000);
}

// ══════════════════════════════════════════
// WIN POPUP (social proof)
// ══════════════════════════════════════════

const WIN_NAMES = ['Rahul K.', 'Priya S.', 'Arjun V.', 'Deepak M.', 'Sneha P.', 'Amit R.', 'Kavya L.', 'Vishal T.', 'Ananya B.', 'Ravi N.', 'Pooja D.', 'Kiran G.'];
const WIN_AMOUNTS = ['₹2,500', '₹5,000', '₹8,200', '₹12,500', '₹3,750', '₹6,000', '₹1,500', '₹4,800', '₹9,000'];
const WIN_CITIES = ['Mumbai', 'Delhi', 'Ahmedabad', 'Bangalore', 'Kolkata', 'Chennai', 'Hyderabad', 'Pune', 'Jaipur'];

function showWinPopup() {
  const popup = document.getElementById('winPopup');
  if (!popup) return;
  const name = WIN_NAMES[Math.floor(Math.random() * WIN_NAMES.length)];
  const amount = WIN_AMOUNTS[Math.floor(Math.random() * WIN_AMOUNTS.length)];
  const city = WIN_CITIES[Math.floor(Math.random() * WIN_CITIES.length)];
  popup.querySelector('.win-popup-name').textContent = name + ' · ' + city;
  popup.querySelector('.win-popup-amount').textContent = amount + ' won!';
  popup.querySelector('.win-popup-time').textContent = 'just now';
  popup.classList.add('show');
  setTimeout(() => popup.classList.remove('show'), 4500);
}

function initWinPopups() {
  setTimeout(showWinPopup, 8000);
  setInterval(showWinPopup, 18000);
}

// ══════════════════════════════════════════
// SOCIAL POPUP
// ══════════════════════════════════════════

function initSocialPopup() {
  const popup = document.getElementById('socialPopup');
  const closeBtn = document.getElementById('socialPopupClose');
  if (!popup) return;
  let shown = false;

  function show() {
    if (shown) return;
    shown = true;
    popup.classList.add('open');
    sessionStorage.setItem('wb_social_popup_shown', '1');
  }

  if (!sessionStorage.getItem('wb_social_popup_shown')) {
    setTimeout(show, 20000);
  }

  if (closeBtn) closeBtn.addEventListener('click', () => popup.classList.remove('open'));
}

// ══════════════════════════════════════════
// NAVBAR MENU
// ══════════════════════════════════════════

function initNavbar() {
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('dropdownMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('open');
  });

  document.addEventListener('click', () => menu.classList.remove('open'));
}

// ══════════════════════════════════════════
// TICKER — Dynamic IPL-related messages
// ══════════════════════════════════════════

function initTicker() {
  const todayStr = getTodayIST();
  const todayMatches = IPL_SCHEDULE.filter(m => m.date === todayStr && getMatchDateTime(m) > new Date());

  let extraItems = '';
  todayMatches.forEach(m => {
    extraItems += `<span>🏏 TODAY ${m.time} IST: ${m.teamAEmoji} ${m.teamA} vs ${m.teamB} ${m.teamBEmoji} — ${m.venue.split(',')[0]}</span>`;
  });

  const track = document.getElementById('tickerTrack');
  if (track && extraItems) {
    track.innerHTML = extraItems + track.innerHTML;
  }
}

// ══════════════════════════════════════════
// LEAD FORM SUBMISSION
// ══════════════════════════════════════════

window.handleFormSubmit = function() {
  const first = document.getElementById('f_first')?.value.trim();
  const last = document.getElementById('f_last')?.value.trim();
  const phone = document.getElementById('f_phone')?.value.trim();
  const age = parseInt(document.getElementById('f_age')?.value);
  const state = document.getElementById('f_state')?.value;

  if (!first || !last || !phone || !age || !state) {
    alert('Please fill in all required fields.');
    return;
  }
  if (age < 18) { alert('You must be 18+ to join.'); return; }
  if (phone.replace(/\D/g, '').length < 10) { alert('Please enter a valid phone number.'); return; }

  const btn = document.getElementById('submitBtn');
  if (btn) { btn.textContent = '⏳ Processing...'; btn.disabled = true; }

  // EmailJS integration (if configured)
  if (typeof emailjs !== 'undefined') {
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      from_name: `${first} ${last}`,
      phone, age, state,
      email: document.getElementById('f_email')?.value || '',
      city: document.getElementById('f_city')?.value || '',
    }).catch(() => {});
  }

  setTimeout(() => {
    document.getElementById('formContent').style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';

    // WhatsApp auto-redirect
    const msg = encodeURIComponent(`Hi, I want to join WinBet!\n\nName: ${first} ${last}\nPhone: ${phone}\nState: ${state}\nAge: ${age}`);
    setTimeout(() => window.open(`https://wa.me/918511866347?text=${msg}`, '_blank'), 1500);
  }, 900);
};

// ══════════════════════════════════════════
// LIVE SCORE SIMULATION (for existing match cards)
// ══════════════════════════════════════════

function initLiveScores() {
  const scoreEls = {
    s1a: ['180/3 (18.2)', '182/3 (18.4)', '185/4 (19.0)', '188/4 (19.2)', '191/4 (19.4)'],
    s1b: ['165/6 (20.0)'],
    o1a: ['1.72', '1.68', '1.74', '1.70'],
    o1b: ['2.10', '2.15', '2.08', '2.12'],
  };
  let tick = 0;
  setInterval(() => {
    tick++;
    const s1a = document.getElementById('s1a');
    const o1a = document.getElementById('o1a');
    const o1b = document.getElementById('o1b');
    if (s1a) s1a.textContent = scoreEls.s1a[tick % scoreEls.s1a.length];
    if (o1a) o1a.textContent = scoreEls.o1a[tick % scoreEls.o1a.length];
    if (o1b) o1b.textContent = scoreEls.o1b[tick % scoreEls.o1b.length];
  }, 8000);
}

// ══════════════════════════════════════════
// AUTO-REFRESH SCHEDULE every 5 mins
// ══════════════════════════════════════════

function scheduleAutoRefresh() {
  setInterval(() => {
    renderSchedule(currentFilter);
  }, 5 * 60 * 1000);
}

// ══════════════════════════════════════════
// INIT ALL
// ══════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
  initNavbar();
  initHeroSlides();
  initHeroCountdown();
  initGallery();
  initLiveUsers();
  initWinPopups();
  initSocialPopup();
  initLiveScores();
  initTicker();

  // Upcoming matches schedule
  renderSchedule('ALL');
  initScheduleFilters();
  initNextMatchCountdown();
  scheduleAutoRefresh();

  // Update "last updated" on load
  const lu = document.getElementById('scheduleLastUpdated');
  if (lu) {
    const now = new Date();
    lu.textContent = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' }) + ' IST';
  }
});

// ══════════════════════════════════════════
// WHATSAPP POPUP TOGGLE
// ══════════════════════════════════════════

window.toggleWaPopup = function() {
  const card = document.getElementById('waPopupCard');
  const btn  = document.getElementById('waPopupBtn');
  if (!card) return;
  const isOpen = card.classList.contains('open');
  card.classList.toggle('open');
  // Remove notification badge once opened
  if (!isOpen) btn.classList.add('no-badge');
};

// Auto-open once after 12 seconds if not dismissed
document.addEventListener('DOMContentLoaded', function() {
  if (!sessionStorage.getItem('wb_wa_popup_seen')) {
    setTimeout(function() {
      const card = document.getElementById('waPopupCard');
      const btn  = document.getElementById('waPopupBtn');
      if (card && !card.classList.contains('open')) {
        card.classList.add('open');
        if (btn) btn.classList.add('no-badge');
        sessionStorage.setItem('wb_wa_popup_seen', '1');
      }
    }, 12000);
  }
});
