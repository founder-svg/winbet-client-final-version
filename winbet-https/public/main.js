// ═══════════════════════════════════════════════════════
//  main.js — WinBet IPL 2026 Platform
// ═══════════════════════════════════════════════════════

// ── WhatsApp Popup ──────────────────────────────────────
function toggleWaPopup() {
  var card = document.getElementById('waPopupCard');
  if (!card) return;
  card.classList.toggle('wa-popup-card--open');
}
setTimeout(function () {
  var card = document.getElementById('waPopupCard');
  if (card) card.classList.add('wa-popup-card--open');
}, 5000);

// ── Navbar dropdown ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {

  var menuBtn      = document.getElementById('menuBtn');
  var dropdownMenu = document.getElementById('dropdownMenu');
  if (menuBtn && dropdownMenu) {
    menuBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdownMenu.classList.toggle('open');
      menuBtn.classList.toggle('active');
    });
    document.addEventListener('click', function () {
      dropdownMenu.classList.remove('open');
      menuBtn.classList.remove('active');
    });
  }

  // ── Hero slider ───────────────────────────────────────
  var currentSlide = 0;
  var slides = document.querySelectorAll('.hero-slide');
  var dots   = document.querySelectorAll('.slide-dot');

  window.goToSlide = function (n) {
    if (!slides.length) return;
    slides[currentSlide].classList.remove('active');
    if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
  };
  setInterval(function () { window.goToSlide(currentSlide + 1); }, 5000);

  // ── Hero countdown (5-min loop) ───────────────────────
  var mEl = document.getElementById('cdMins');
  var sEl = document.getElementById('cdSecs');
  if (mEl && sEl) {
    var total = 5 * 60;
    setInterval(function () {
      total--;
      if (total < 0) total = 5 * 60;
      mEl.textContent = String(Math.floor(total / 60)).padStart(2, '0');
      sEl.textContent = String(total % 60).padStart(2, '0');
    }, 1000);
  }

  // ── Live user count jitter ────────────────────────────
  var liveEl = document.getElementById('liveCount');
  if (liveEl) {
    var base = 130 + Math.floor(Math.random() * 30);
    setInterval(function () {
      base += Math.floor(Math.random() * 7) - 3;
      if (base < 110) base = 110;
      if (base > 200) base = 200;
      liveEl.textContent = '🔥 ' + base + ' users are online now';
    }, 4000);
  }

  // ── Ticker duplicate ──────────────────────────────────
  var track = document.getElementById('tickerTrack');
  if (track) track.innerHTML += track.innerHTML;

  // ── Gallery auto-scroll ───────────────────────────────
  var gTrack = document.getElementById('galleryTrack');
  if (gTrack) {
    var gPos = 0;
    setInterval(function () {
      var gSlides = gTrack.querySelectorAll('.gallery-slide');
      if (!gSlides.length) return;
      var sw = gSlides[0].offsetWidth + 16;
      gPos = (gPos + 1) % gSlides.length;
      gTrack.style.transform  = 'translateX(-' + (gPos * sw) + 'px)';
      gTrack.style.transition = 'transform 0.6s ease';
    }, 3500);
  }

  // ── Win popup ─────────────────────────────────────────
  var winPopup = document.getElementById('winPopup');
  if (winPopup) {
    var names   = ['Rahul K.','Priya S.','Arjun V.','Neha M.','Vikram R.','Aarti B.',
                   'Suresh T.','Kavitha N.','Ravi P.','Deepa L.','Manish G.','Pooja A.'];
    var amounts = ['₹1,200','₹3,500','₹800','₹5,000','₹2,200','₹7,500','₹1,500','₹4,200'];
    function showWin() {
      var name   = names[Math.floor(Math.random() * names.length)];
      var amount = amounts[Math.floor(Math.random() * amounts.length)];
      winPopup.querySelector('.win-popup-name').textContent   = name;
      winPopup.querySelector('.win-popup-amount').textContent = amount;
      winPopup.querySelector('.win-popup-time').textContent   = 'just now';
      winPopup.classList.add('show');
      setTimeout(function () { winPopup.classList.remove('show'); }, 3500);
    }
    setTimeout(showWin, 3000);
    setInterval(showWin, 12000);
  }

  // ── Social popup ──────────────────────────────────────
  var socialPopup  = document.getElementById('socialPopup');
  var socialClose  = document.getElementById('socialPopupClose');
  if (socialPopup) {
    setTimeout(function () { socialPopup.classList.add('show'); }, 20000);
    if (socialClose) socialClose.addEventListener('click', function () {
      socialPopup.classList.remove('show');
    });
  }

  // ── IPL 2026 Schedule ─────────────────────────────────
  var MATCHES = [
    { date:'2026-03-22', time:'19:30', team1:'MI',  team2:'CSK',  venue:'Wankhede Stadium, Mumbai',        phase:'League' },
    { date:'2026-03-23', time:'15:30', team1:'RCB', team2:'KKR',  venue:'Chinnaswamy Stadium, Bengaluru',  phase:'League' },
    { date:'2026-03-23', time:'19:30', team1:'DC',  team2:'SRH',  venue:'Arun Jaitley Stadium, Delhi',     phase:'League' },
    { date:'2026-03-24', time:'19:30', team1:'GT',  team2:'PBKS', venue:'Narendra Modi Stadium, Ahmedabad',phase:'League' },
    { date:'2026-03-25', time:'19:30', team1:'RR',  team2:'LSG',  venue:'Sawai Mansingh Stadium, Jaipur',  phase:'League' },
    { date:'2026-03-26', time:'19:30', team1:'CSK', team2:'RCB',  venue:'MA Chidambaram Stadium, Chennai', phase:'League' },
    { date:'2026-03-27', time:'19:30', team1:'KKR', team2:'MI',   venue:'Eden Gardens, Kolkata',           phase:'League' },
    { date:'2026-03-28', time:'19:30', team1:'SRH', team2:'GT',   venue:'Rajiv Gandhi Stadium, Hyderabad', phase:'League' },
    { date:'2026-03-29', time:'15:30', team1:'LSG', team2:'DC',   venue:'Ekana Stadium, Lucknow',          phase:'League' },
    { date:'2026-03-29', time:'19:30', team1:'PBKS',team2:'RR',   venue:'HPCA Stadium, Dharamsala',        phase:'League' },
    { date:'2026-03-30', time:'19:30', team1:'MI',  team2:'GT',   venue:'Wankhede Stadium, Mumbai',        phase:'League' },
    { date:'2026-03-31', time:'19:30', team1:'RCB', team2:'SRH',  venue:'Chinnaswamy Stadium, Bengaluru',  phase:'League' },
    { date:'2026-04-01', time:'19:30', team1:'CSK', team2:'KKR',  venue:'MA Chidambaram Stadium, Chennai', phase:'League' },
    { date:'2026-04-02', time:'19:30', team1:'DC',  team2:'RR',   venue:'Arun Jaitley Stadium, Delhi',     phase:'League' },
    { date:'2026-04-03', time:'19:30', team1:'GT',  team2:'LSG',  venue:'Narendra Modi Stadium, Ahmedabad',phase:'League' },
    { date:'2026-04-04', time:'15:30', team1:'PBKS',team2:'MI',   venue:'HPCA Stadium, Dharamsala',        phase:'League' },
    { date:'2026-04-04', time:'19:30', team1:'SRH', team2:'CSK',  venue:'Rajiv Gandhi Stadium, Hyderabad', phase:'League' },
    { date:'2026-04-05', time:'19:30', team1:'KKR', team2:'DC',   venue:'Eden Gardens, Kolkata',           phase:'League' },
    { date:'2026-04-06', time:'19:30', team1:'RR',  team2:'RCB',  venue:'Sawai Mansingh Stadium, Jaipur',  phase:'League' },
    { date:'2026-04-07', time:'19:30', team1:'LSG', team2:'MI',   venue:'Ekana Stadium, Lucknow',          phase:'League' },
    { date:'2026-04-08', time:'19:30', team1:'GT',  team2:'CSK',  venue:'Narendra Modi Stadium, Ahmedabad',phase:'League' },
    { date:'2026-04-09', time:'19:30', team1:'SRH', team2:'KKR',  venue:'Rajiv Gandhi Stadium, Hyderabad', phase:'League' },
    { date:'2026-04-10', time:'19:30', team1:'MI',  team2:'RR',   venue:'Wankhede Stadium, Mumbai',        phase:'League' },
    { date:'2026-04-11', time:'19:30', team1:'DC',  team2:'PBKS', venue:'Arun Jaitley Stadium, Delhi',     phase:'League' },
    { date:'2026-04-12', time:'15:30', team1:'RCB', team2:'GT',   venue:'Chinnaswamy Stadium, Bengaluru',  phase:'League' },
    { date:'2026-04-12', time:'19:30', team1:'CSK', team2:'LSG',  venue:'MA Chidambaram Stadium, Chennai', phase:'League' },
    { date:'2026-04-13', time:'19:30', team1:'KKR', team2:'RR',   venue:'Eden Gardens, Kolkata',           phase:'League' },
    { date:'2026-04-14', time:'19:30', team1:'SRH', team2:'MI',   venue:'Rajiv Gandhi Stadium, Hyderabad', phase:'League' },
    { date:'2026-04-15', time:'19:30', team1:'PBKS',team2:'LSG',  venue:'HPCA Stadium, Dharamsala',        phase:'League' },
    { date:'2026-04-16', time:'19:30', team1:'GT',  team2:'DC',   venue:'Narendra Modi Stadium, Ahmedabad',phase:'League' },
    { date:'2026-04-17', time:'19:30', team1:'RCB', team2:'CSK',  venue:'Chinnaswamy Stadium, Bengaluru',  phase:'League' },
    { date:'2026-04-18', time:'15:30', team1:'MI',  team2:'KKR',  venue:'Wankhede Stadium, Mumbai',        phase:'League' },
    { date:'2026-04-18', time:'19:30', team1:'RR',  team2:'SRH',  venue:'Sawai Mansingh Stadium, Jaipur',  phase:'League' },
    { date:'2026-04-19', time:'19:30', team1:'LSG', team2:'GT',   venue:'Ekana Stadium, Lucknow',          phase:'League' },
    { date:'2026-04-20', time:'19:30', team1:'DC',  team2:'RCB',  venue:'Arun Jaitley Stadium, Delhi',     phase:'League' },
    { date:'2026-04-21', time:'19:30', team1:'CSK', team2:'PBKS', venue:'MA Chidambaram Stadium, Chennai', phase:'League' },
    { date:'2026-04-22', time:'19:30', team1:'KKR', team2:'SRH',  venue:'Eden Gardens, Kolkata',           phase:'League' },
    { date:'2026-04-23', time:'19:30', team1:'GT',  team2:'MI',   venue:'Narendra Modi Stadium, Ahmedabad',phase:'League' },
    { date:'2026-04-24', time:'19:30', team1:'RR',  team2:'DC',   venue:'Sawai Mansingh Stadium, Jaipur',  phase:'League' },
    { date:'2026-04-25', time:'15:30', team1:'LSG', team2:'RCB',  venue:'Ekana Stadium, Lucknow',          phase:'League' },
    { date:'2026-04-25', time:'19:30', team1:'PBKS',team2:'KKR',  venue:'HPCA Stadium, Dharamsala',        phase:'League' },
    { date:'2026-04-26', time:'19:30', team1:'SRH', team2:'RR',   venue:'Rajiv Gandhi Stadium, Hyderabad', phase:'League' },
    { date:'2026-04-27', time:'19:30', team1:'MI',  team2:'CSK',  venue:'Wankhede Stadium, Mumbai',        phase:'League' },
    { date:'2026-04-28', time:'19:30', team1:'DC',  team2:'GT',   venue:'Arun Jaitley Stadium, Delhi',     phase:'League' },
    { date:'2026-04-29', time:'19:30', team1:'RCB', team2:'PBKS', venue:'Chinnaswamy Stadium, Bengaluru',  phase:'League' },
    { date:'2026-04-30', time:'19:30', team1:'KKR', team2:'LSG',  venue:'Eden Gardens, Kolkata',           phase:'League' },
    { date:'2026-05-01', time:'19:30', team1:'CSK', team2:'RR',   venue:'MA Chidambaram Stadium, Chennai', phase:'League' },
    { date:'2026-05-02', time:'19:30', team1:'SRH', team2:'DC',   venue:'Rajiv Gandhi Stadium, Hyderabad', phase:'League' },
    { date:'2026-05-03', time:'15:30', team1:'GT',  team2:'KKR',  venue:'Narendra Modi Stadium, Ahmedabad',phase:'League' },
    { date:'2026-05-03', time:'19:30', team1:'MI',  team2:'RCB',  venue:'Wankhede Stadium, Mumbai',        phase:'League' },
    { date:'2026-05-04', time:'19:30', team1:'PBKS',team2:'CSK',  venue:'HPCA Stadium, Dharamsala',        phase:'League' },
    { date:'2026-05-05', time:'19:30', team1:'RR',  team2:'GT',   venue:'Sawai Mansingh Stadium, Jaipur',  phase:'League' },
    { date:'2026-05-06', time:'19:30', team1:'LSG', team2:'SRH',  venue:'Ekana Stadium, Lucknow',          phase:'League' },
    { date:'2026-05-07', time:'19:30', team1:'DC',  team2:'MI',   venue:'Arun Jaitley Stadium, Delhi',     phase:'League' },
    { date:'2026-05-08', time:'19:30', team1:'RCB', team2:'RR',   venue:'Chinnaswamy Stadium, Bengaluru',  phase:'League' },
    { date:'2026-05-09', time:'15:30', team1:'KKR', team2:'GT',   venue:'Eden Gardens, Kolkata',           phase:'League' },
    { date:'2026-05-09', time:'19:30', team1:'CSK', team2:'SRH',  venue:'MA Chidambaram Stadium, Chennai', phase:'League' },
    { date:'2026-05-10', time:'19:30', team1:'PBKS',team2:'DC',   venue:'HPCA Stadium, Dharamsala',        phase:'League' },
    { date:'2026-05-11', time:'19:30', team1:'MI',  team2:'LSG',  venue:'Wankhede Stadium, Mumbai',        phase:'League' },
    { date:'2026-05-12', time:'19:30', team1:'RR',  team2:'KKR',  venue:'Sawai Mansingh Stadium, Jaipur',  phase:'League' },
    { date:'2026-05-13', time:'19:30', team1:'SRH', team2:'PBKS', venue:'Rajiv Gandhi Stadium, Hyderabad', phase:'League' },
    { date:'2026-05-14', time:'19:30', team1:'GT',  team2:'RCB',  venue:'Narendra Modi Stadium, Ahmedabad',phase:'League' },
    { date:'2026-05-15', time:'19:30', team1:'DC',  team2:'CSK',  venue:'Arun Jaitley Stadium, Delhi',     phase:'League' },
    { date:'2026-05-16', time:'19:30', team1:'LSG', team2:'KKR',  venue:'Ekana Stadium, Lucknow',          phase:'League' },
    { date:'2026-05-17', time:'15:30', team1:'MI',  team2:'SRH',  venue:'Wankhede Stadium, Mumbai',        phase:'League' },
    { date:'2026-05-17', time:'19:30', team1:'RCB', team2:'DC',   venue:'Chinnaswamy Stadium, Bengaluru',  phase:'League' },
    { date:'2026-05-18', time:'19:30', team1:'CSK', team2:'GT',   venue:'MA Chidambaram Stadium, Chennai', phase:'League' },
    { date:'2026-05-19', time:'19:30', team1:'PBKS',team2:'RR',   venue:'HPCA Stadium, Dharamsala',        phase:'League' },
    { date:'2026-05-20', time:'19:30', team1:'KKR', team2:'MI',   venue:'Eden Gardens, Kolkata',           phase:'League' },
    { date:'2026-05-21', time:'19:30', team1:'SRH', team2:'LSG',  venue:'Rajiv Gandhi Stadium, Hyderabad', phase:'League' },
    { date:'2026-05-27', time:'19:30', team1:'TBC', team2:'TBC',  venue:'TBD', phase:'Playoff', label:'Qualifier 1' },
    { date:'2026-05-28', time:'19:30', team1:'TBC', team2:'TBC',  venue:'TBD', phase:'Playoff', label:'Eliminator'  },
    { date:'2026-05-30', time:'19:30', team1:'TBC', team2:'TBC',  venue:'TBD', phase:'Playoff', label:'Qualifier 2' },
    { date:'2026-06-01', time:'19:30', team1:'TBC', team2:'TBC',  venue:'TBD', phase:'Playoff', label:'🏆 FINAL'    },
  ];

  var TEAM_COLORS = {
    MI:'#004BA0', CSK:'#F9CD1C', RCB:'#D4173C', KKR:'#3A225D',
    DC:'#0078BC', SRH:'#F26522', GT:'#1D2951',  PBKS:'#ED1B24',
    RR:'#254AA5', LSG:'#A4C8E1', TBC:'#84cc16'
  };

  function getTeamColor(t) { return TEAM_COLORS[t] || '#84cc16'; }

  function formatDate(ds) {
    var d = new Date(ds + 'T00:00:00');
    return d.toLocaleDateString('en-IN', { weekday:'short', day:'numeric', month:'short' });
  }

  function getMatchStatus(m) {
    var now     = new Date();
    var matchDT = new Date(m.date + 'T' + m.time + ':00');
    var endDT   = new Date(matchDT.getTime() + 4 * 3600000);
    if (now >= matchDT && now <= endDT) return 'LIVE';
    if (now > endDT) return 'COMPLETED';
    return 'UPCOMING';
  }

  function renderSchedule(filter) {
    var list = document.getElementById('scheduleList');
    if (!list) return;
    var now     = new Date();
    var today   = now.toISOString().slice(0, 10);
    var weekEnd = new Date(now);
    weekEnd.setDate(weekEnd.getDate() + 7);
    var wStr    = weekEnd.toISOString().slice(0, 10);

    var filtered = MATCHES;
    if (filter === 'TODAY')     filtered = MATCHES.filter(function (m) { return m.date === today; });
    if (filter === 'THIS_WEEK') filtered = MATCHES.filter(function (m) { return m.date >= today && m.date <= wStr; });
    if (filter === 'PLAYOFFS')  filtered = MATCHES.filter(function (m) { return m.phase === 'Playoff'; });

    if (!filtered.length) {
      list.innerHTML = '<div style="text-align:center;padding:40px;color:#8A9BB5;">No matches for this filter.</div>';
      return;
    }

    list.innerHTML = filtered.map(function (m) {
      var status = getMatchStatus(m);
      var isLive = status === 'LIVE';
      var isDone = status === 'COMPLETED';
      var c1 = getTeamColor(m.team1), c2 = getTeamColor(m.team2);
      var label = m.label || (m.team1 + ' vs ' + m.team2);
      return '<div class="schedule-row' + (isLive ? ' schedule-row--live' : '') + (isDone ? ' schedule-row--done' : '') + '">'
        + '<div class="schedule-date">' + formatDate(m.date) + '<br><span class="schedule-time">' + m.time + ' IST</span></div>'
        + '<div class="schedule-teams">'
        + '<span class="schedule-team" style="color:' + c1 + '">' + m.team1 + '</span>'
        + '<span class="schedule-vs">VS</span>'
        + '<span class="schedule-team" style="color:' + c2 + '">' + m.team2 + '</span>'
        + '</div>'
        + (m.label ? '<div class="schedule-label">' + m.label + '</div>' : '')
        + '<div class="schedule-venue">' + m.venue + '</div>'
        + '<div class="schedule-status ' + (isLive ? 'status-live' : isDone ? 'status-done' : 'status-upcoming') + '">'
        + (isLive ? '🔴 LIVE' : isDone ? '✅ Done' : '⏰ Upcoming') + '</div>'
        + '<a href="https://wa.me/918511866347?text=Tips+for+' + encodeURIComponent(m.team1 + '+vs+' + m.team2) + '" target="_blank" class="schedule-tip-btn">💬 Get Tips</a>'
        + '</div>';
    }).join('');
  }

  renderSchedule('ALL');

  document.querySelectorAll('.sch-filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.sch-filter-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      renderSchedule(btn.dataset.filter);
    });
  });

  // Next match countdown
  function updateNextMatch() {
    var now      = new Date();
    var upcoming = MATCHES.filter(function (m) { return new Date(m.date + 'T' + m.time + ':00') > now; });
    if (!upcoming.length) return;
    var next    = upcoming[0];
    var matchDT = new Date(next.date + 'T' + next.time + ':00');
    var diff    = matchDT - now;
    if (diff < 0) return;
    var h  = Math.floor(diff / 3600000);
    var mi = Math.floor((diff % 3600000) / 60000);
    var s  = Math.floor((diff % 60000) / 1000);
    var teamsEl = document.getElementById('nxmTeams');
    var metaEl  = document.getElementById('nxmMeta');
    var hEl     = document.getElementById('nxmH');
    var mEl     = document.getElementById('nxmM');
    var sEl2    = document.getElementById('nxmS');
    if (teamsEl) teamsEl.textContent = next.label || (next.team1 + ' vs ' + next.team2);
    if (metaEl)  metaEl.textContent  = formatDate(next.date) + ' · ' + next.time + ' IST · ' + next.venue;
    if (hEl)  hEl.textContent  = String(h).padStart(2, '0');
    if (mEl)  mEl.textContent  = String(mi).padStart(2, '0');
    if (sEl2) sEl2.textContent = String(s).padStart(2, '0');
  }
  updateNextMatch();
  setInterval(updateNextMatch, 1000);

  // Last updated
  var luEl = document.getElementById('scheduleLastUpdated');
  if (luEl) {
    luEl.textContent = new Date().toLocaleString('en-IN', { day:'numeric', month:'short', hour:'2-digit', minute:'2-digit' });
  }

  // ── Scroll reveal ─────────────────────────────────────
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(function (el) { obs.observe(el); });

}); // end DOMContentLoaded
