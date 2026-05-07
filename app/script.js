
'use strict';

if(!localStorage.getItem("username")){
    window.location.href = "../loginSignup/index.html";
}
const TRACKS = [
  /* ── TELUGU ─────────────────────────────── */
  { id: 1, lang: "telugu", mood: "melody",
    title: "Inkem Inkem Inkem Kaavaale", artist: "Sid Sriram",
    album: "Geetha Govindam", duration: "4:27",
    cover: "https://i.pinimg.com/736x/ad/04/3d/ad043d41b4f950033203c64503416cf0.jpg",
    src: "songs/Inkem Inkem Inkem Kaavaale - NaaSongs.mp3",
    colors: ["#c8102e","#ff6b35","#ffd700"]
  },
  { id: 2, lang: "telugu", mood: "sad",
    title: "Oosupudu", artist: "Hemachandra",
    album: "Fidaa", duration: "4:33",
    cover: "https://i.pinimg.com/736x/68/a9/b9/68a9b960bca8920a061def864d294849.jpg",
    src: "songs/Oosupodu - NaaSongs.mp3",
    colors: ["#1a3a5c","#2563eb","#93c5fd"]
  },
  { id: 3, lang: "telugu", mood: "party",
    title: "Naatu Naatu", artist: "Kaala Bhairava & Rahul Sipligunj",
    album: "RRR", duration: "3:41",
    cover: "https://i.pinimg.com/736x/12/e5/e3/12e5e345d31643cfb692a8b1ef6013fa.jpg",
    src: "songs/Naatu Naatu - NaaSongs.mp3",
    colors: ["#7f1d1d","#dc2626","#fca5a5"]
  },
  { id: 4, lang: "telugu", mood: "happy",
    title: "Samajavaragamana", artist: "Sid Sriram",
    album: "Ala Vaikunthapurramuloo", duration: "4:15",
    cover: "https://i.pinimg.com/1200x/43/29/fa/4329fa0beda067bbca5e7838f786e307.jpg",
    src: "songs/Samajavaragamana - NaaSongs.mp3",
    colors: ["#713f12","#d97706","#fde68a"]
  },
  { id: 5, lang: "telugu", mood: "melody",
    title: "Chuttamalle", artist: "Shilpa Rao",
    album: "Devara", duration: "3:42",
    cover: "https://i.pinimg.com/1200x/bc/ca/57/bcca57c5746d7b57d8815d81a5f3dfda.jpg",
    src: "songs/Chuttamalle - NaaSongs.mp3",
    colors: ["#4a044e","#a21caf","#e879f9"]
  },

  /* ── HINDI ─────────────────────────────── */
  { id: 6, lang: "hindi", mood: "sad",
    title: "Bulleya", artist: "Papon",
    album: "Sultan", duration: "5:57",
    cover: "https://lh3.googleusercontent.com/9qFfsVs_ZuwP2kEk0VAiOVgmgPyRmiCIzAon1WTD4PpRGeGp-cLYQR8vkmO8Bo3zRpIpi893w3hpayp8",
    src: "songs/Bulleya 128 Kbps.mp3",
    colors: ["#172554","#2563eb","#bfdbfe"]
  },
  { id: 7, lang: "hindi", mood: "party",
    title: "Badtameez Dil", artist: "Benny Dayal",
    album: "YJHD", duration: "4:12",
    cover: "https://i.pinimg.com/736x/12/a2/bb/12a2bb97f2783446056b1557c8033e9b.jpg",
    src: "songs/Badtameez Dil(PagaiWorld.com).mp3",
    colors: ["#450a0a","#dc2626","#fca5a5"]
  },
  { id: 8, lang: "hindi", mood: "happy",
    title: "Blue Eyes", artist: "YO Yo Honey Singh",
    album: "Album", duration: "3:40",
    cover: "https://i.pinimg.com/736x/75/fd/d3/75fdd39f9609ca3b971cf4d806c7784f.jpg",
    src: "songs/Blue Eyes(PagaiWorld.com).mp3",
    colors: ["#422006","#f59e0b","#fde68a"]
  },
  { id: 9, lang: "hindi", mood: "melody",
    title: "Chaleya", artist: "Arijit Singh",
    album: "Jawan", duration: "3:20",
    cover: "https://i.pinimg.com/1200x/80/ab/ae/80abae7fadd1b61de5ab9e0a09124e8d.jpg",
    src: "songs/Chaleya From Jawan(PagaiWorld.com).mp3",
    colors: ["#2e1065","#a855f7","#e9d5ff"]
  },
  { id: 10, lang: "hindi", mood: "sad",
    title: "Bekhayali", artist: "Sachet Tandon",
    album: "Kabir Singh", duration: "6:11",
    cover: "https://i.pinimg.com/736x/9a/6d/18/9a6d184f814dd708d0dc5cd24686f5e6.jpg",
    src: "songs/Bekhayali.mp3",
    colors: ["#1e3a5f","#3b82f6","#93c5fd"]
  },

  /* ── ENGLISH ───────────────────────────── */
  { id: 11, lang: "english", mood: "sad",
    title: "Moral of the Story", artist: "Ashe",
    album: "Ashlyn", duration: "3:21",
    cover: "https://i.pinimg.com/736x/4e/50/d6/4e50d604174f29ecf21ceab4ccd10d6a.jpg",
    src: "songs/Moral-Of-The-Story.mp3",
    colors: ["#1e2a4a","#3b82f6","#bfdbfe"]
  },
  { id: 12, lang: "english", mood: "party",
    title: "Gasolina", artist: "Daddy Yankee",
    album: "Barrio Fino", duration: "3:12",
    cover: "https://i.pinimg.com/736x/00/d0/60/00d06097dcb62050796314b3956c3135.jpg",
    src: "songs/Daddy Yankee - Gasolina.mp3",
    colors: ["#5c0c35","#db2777","#fbcfe8"]
  },
  { id: 13, lang: "english", mood: "happy",
    title: "Shape of You", artist: "Ed Sheeran",
    album: "Divide", duration: "3:53",
    cover: "https://i.pinimg.com/736x/4e/47/85/4e478569fdfaa9c611aafeaa14891d85.jpg",
    src: "songs/Ed Sheeran Shape Of You(PagaiWorld.com).mp3",
    colors: ["#451a03","#d97706","#fde68a"]
  },
  { id: 14, lang: "english", mood: "melody",
    title: "Perfect", artist: "Ed Sheeran",
    album: "Divide", duration: "4:23",
    cover: "https://i.pinimg.com/1200x/4a/59/6f/4a596f18b830eda187d2cdb38046f560.jpg",
    src: "songs/Perfect (Originally Performed by Ed Sheeran)(M4A_128K).mp3",
    colors: ["#3b0764","#9333ea","#ddd6fe"]
  },
  { id: 15, lang: "english", mood: "party",
    title: "Hurts So Good", artist: "Astrid S",
    album: "Astrid S", duration: "3:28",
    cover: "https://i.pinimg.com/1200x/ce/1e/2d/ce1e2d321bbf1898caf63d5e9023b075.jpg",
    src: "songs/Hurts So Good - Astrid S.mp3",
    colors: ["#5c0c35","#db2777","#fbcfe8"]
  },

  /* ── TAMIL ─────────────────────────────── */
  { id: 16, lang: "tamil", mood: "sad",
    title: "Kanave Kanave", artist: "Anirudh",
    album: "David", duration: "4:44",
    cover: "https://i.pinimg.com/736x/0f/a1/2a/0fa12a382d3150995d95660e5c04d691.jpg",
    src: "songs/Kanave Kanave From David(PagaiWorld.com).mp3",
    colors: ["#0f2744","#2563eb","#93c5fd"]
  },
  { id: 17, lang: "tamil", mood: "party",
    title: "Monica", artist: "Anirudh",
    album: "Coolie", duration: "3:37",
    cover: "https://i.pinimg.com/1200x/a7/a3/85/a7a385c7d39162c502581edeb269e98d.jpg",
    src: "songs/Monica(PagaiWorld.com).mp3",
    colors: ["#450a0a","#b91c1c","#fca5a5"]
  },
  { id: 18, lang: "tamil", mood: "happy",
    title: "Yaakkai Thiri", artist: "A.R. Rahman",
    album: "Aayitha Ezhuthu", duration: "4:33",
    cover: "https://i.ytimg.com/vi/ANu1s39BQq8/maxresdefault.jpg",
    src: "songs/Yakkai-Thiri.mp3",
    colors: ["#422006","#b45309","#fcd34d"]
  },
  { id: 19, lang: "tamil", mood: "melody",
    title: "Adiye", artist: "Kapil Kapilan",
    album: "Bachelor", duration: "4:32",
    cover: "https://i.pinimg.com/736x/7a/ec/15/7aec15188163648ac82204258ae71b44.jpg",
    src: "songs/Adiye - NaaSongs.mp3",
    colors: ["#3b0764","#9333ea","#e9d5ff"]
  },
  { id: 20, lang: "tamil", mood: "sad",
    title: "Kadhal Oru Aagayam", artist: "Hiphop Tamizha",
    album: "Imaikkaa Nodigal", duration: "2:41",
    cover: "https://i.pinimg.com/736x/b7/86/57/b7865718fcef7abc20fcee607f0a6113.jpg",
    src: "songs/Kadhal Oru Aagayam.mp3",
    colors: ["#172554","#1e40af","#bfdbfe"]
  }
];
/* ─────────────────────────────────────────────────────
   MOOD CONFIG
   ───────────────────────────────────────────────────── */
const MOOD_CONFIG = {
  all:    { emoji:'✦', label:'All Moods',       bg:null },
  sad:    { emoji:'💙', label:'Sad / Emotional', bg:'sad' },
  happy:  { emoji:'☀️', label:'Happy / Chill',   bg:'happy' },
  party:  { emoji:'🔥', label:'Party / Hype',    bg:'party' },
  melody: { emoji:'🎵', label:'Melody / Romantic',bg:'melody' },
};

/* ─────────────────────────────────────────────────────
   DOM REFERENCES
   ───────────────────────────────────────────────────── */
const audio       = document.getElementById('audio');
const playBtn     = document.getElementById('playBtn');
const playIcon    = document.getElementById('playIcon');
const prevBtn     = document.getElementById('prevBtn');
const nextBtn     = document.getElementById('nextBtn');
const shuffleBtn  = document.getElementById('shuffleBtn');
const repeatBtn   = document.getElementById('repeatBtn');
const progTrack   = document.getElementById('progTrack');
const progFill    = document.getElementById('progFill');
const progThumb   = document.getElementById('progThumb');
const tCurrent    = document.getElementById('tCurrent');
const tTotal      = document.getElementById('tTotal');
const volSlider   = document.getElementById('volSlider');
const volFill     = document.getElementById('volFill');
const volThumb    = document.getElementById('volThumb');
const volNum      = document.getElementById('volNum');
const muteBtn     = document.getElementById('muteBtn');
const volIcon     = document.getElementById('volIcon');
const npArtInner  = document.getElementById('npArtInner');
const npGlow      = document.getElementById('npGlow');
const npVis       = document.getElementById('npVis');
const npTitle     = document.getElementById('npTitle');
const npArtist    = document.getElementById('npArtist');
const npAlbum     = document.getElementById('npAlbum');
const npLangBadge = document.getElementById('npLangBadge');
const npMoodIcon  = document.getElementById('npMoodIcon');
const npMoodText  = document.getElementById('npMoodText');
const loveBtn     = document.getElementById('loveBtn');
const heartIcon   = document.getElementById('heartIcon');
const trackContainer = document.getElementById('trackContainer');
const sectionTitle   = document.getElementById('sectionTitle');
const sectionSub     = document.getElementById('sectionSub');
const searchInput    = document.getElementById('searchInput');
const themeBtn       = document.getElementById('themeBtn');
const shuffleTopBtn  = document.getElementById('shuffleTopBtn');
const moodBadge      = document.getElementById('moodBadge');
const moodEmoji      = document.getElementById('moodEmoji');
const moodLabel      = document.getElementById('moodLabel');
// Mini / Mobile
const miniArt    = document.getElementById('miniArt');
const miniTitle  = document.getElementById('miniTitle');
const miniArtist = document.getElementById('miniArtist');
const miniPlayBtn= document.getElementById('miniPlayBtn');
const miniPlayIcon=document.getElementById('miniPlayIcon');
const mpArt      = document.getElementById('mpArt');
const mpTitle    = document.getElementById('mpTitle');
const mpArtist   = document.getElementById('mpArtist');
const mpPlayBtn  = document.getElementById('mpPlayBtn');
const mpIcon     = document.getElementById('mpIcon');
const mpNextBtn  = document.getElementById('mpNextBtn');

/* ─────────────────────────────────────────────────────
   STATE
   ───────────────────────────────────────────────────── */
let currentIdx   = -1;
let isPlaying    = false;
let isShuffle    = false;
let repeatMode   = 0;
let isMuted      = false;
let lastVol      = 0.8;
let currentLang  = 'all';
let currentMood  = 'all';
let currentView  = 'list';
let likedTracks  = new Set();
let filteredList = [...TRACKS];
let isDragProg   = false;
let isDragVol    = false;
let theme        = 'dark';
let searchQuery  = '';

/* ─────────────────────────────────────────────────────
   ALBUM ART — Canvas-based generative art per song
   ───────────────────────────────────────────────────── */
function drawArt(canvas, colors, mood, size = 200) {
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const [c1, c2, c3] = colors;

  // Background gradient
  const bg = ctx.createLinearGradient(0, 0, size, size);
  bg.addColorStop(0, c1);
  bg.addColorStop(1, c2);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, size, size);

  if (mood === 'sad') {
    // Falling rain-like lines
    ctx.strokeStyle = c3 + '60';
    ctx.lineWidth = 1;
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * size;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x - 10, size);
      ctx.stroke();
    }
    // Soft circle
    const gr = ctx.createRadialGradient(size/2, size/2, 10, size/2, size/2, size/2);
    gr.addColorStop(0, c3 + '50');
    gr.addColorStop(1, 'transparent');
    ctx.fillStyle = gr;
    ctx.beginPath();
    ctx.arc(size/2, size/2, size/2, 0, Math.PI*2);
    ctx.fill();
  } else if (mood === 'happy') {
    // Sun rays / bursts
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      ctx.strokeStyle = c3 + '60';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(size/2, size/2);
      ctx.lineTo(size/2 + Math.cos(angle)*size/2, size/2 + Math.sin(angle)*size/2);
      ctx.stroke();
    }
    // Center bright circle
    const gr = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/3);
    gr.addColorStop(0, c3 + '90');
    gr.addColorStop(1, 'transparent');
    ctx.fillStyle = gr;
    ctx.beginPath();
    ctx.arc(size/2, size/2, size/3, 0, Math.PI*2);
    ctx.fill();
    // Floating dots
    for (let i = 0; i < 8; i++) {
      ctx.fillStyle = c3 + '80';
      ctx.beginPath();
      ctx.arc(Math.random()*size, Math.random()*size, 3+Math.random()*5, 0, Math.PI*2);
      ctx.fill();
    }
  } else if (mood === 'party') {
    // Diagonal neon stripes
    ctx.save();
    ctx.translate(size/2, size/2);
    ctx.rotate(Math.PI/4);
    for (let i = -size; i < size; i += 20) {
      ctx.fillStyle = (i%40===0 ? c3 : c2) + '55';
      ctx.fillRect(i, -size, 10, size*2);
    }
    ctx.restore();
    // Glowing center
    const gr = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
    gr.addColorStop(0, c3 + '40');
    gr.addColorStop(0.5, 'transparent');
    ctx.fillStyle = gr;
    ctx.fillRect(0, 0, size, size);
  } else if (mood === 'melody') {
    // Flowing wave arcs
    ctx.strokeStyle = c3 + '60';
    ctx.lineWidth = 2;
    for (let w = 0; w < 5; w++) {
      ctx.beginPath();
      ctx.moveTo(0, size/2 + w*15 - 30);
      for (let x = 0; x < size; x += 5) {
        ctx.lineTo(x, size/2 + Math.sin((x + w*30)/30)*25 + w*15 - 30);
      }
      ctx.stroke();
    }
    const gr = ctx.createRadialGradient(size*0.7, size*0.3, 0, size*0.7, size*0.3, size*0.5);
    gr.addColorStop(0, c3 + '50');
    gr.addColorStop(1, 'transparent');
    ctx.fillStyle = gr;
    ctx.fillRect(0, 0, size, size);
  }

  // Subtle vignette
  const vg = ctx.createRadialGradient(size/2, size/2, size*0.3, size/2, size/2, size*0.75);
  vg.addColorStop(0, 'transparent');
  vg.addColorStop(1, 'rgba(0,0,0,0.45)');
  ctx.fillStyle = vg;
  ctx.fillRect(0, 0, size, size);
}

function createArtCanvas(track, size) {
  const canvas = document.createElement('canvas');
  drawArt(canvas, track.colors, track.mood, size);
  return canvas;
}

/* ─────────────────────────────────────────────────────
   RENDER TRACKS
   ───────────────────────────────────────────────────── */
const MOOD_LABELS = { sad:'Sad', happy:'Happy', party:'Party', melody:'Melody' };
const MOOD_CLASSES = { sad:'mood-tag-sad', happy:'mood-tag-happy', party:'mood-tag-party', melody:'mood-tag-melody' };
const MOOD_EMOJIS  = { sad:'💙', happy:'☀️', party:'🔥', melody:'🎵' };

function renderTracks() {
  trackContainer.innerHTML = '';

  if (filteredList.length === 0) {
    trackContainer.innerHTML = `<div style="text-align:center;padding:60px 20px;color:var(--text3);font-size:14px">No tracks found</div>`;
    return;
  }

  if (currentView === 'list') {
    // Header
    const hdr = document.createElement('div');
    hdr.className = 'track-list-header';
    hdr.innerHTML = `
      <div class="tlh-cell">#</div>
      <div class="tlh-cell">TITLE</div>
      <div class="tlh-cell">ALBUM</div>
      <div class="tlh-cell">MOOD</div>
      <div class="tlh-cell">LANG</div>
      <div class="tlh-cell" style="text-align:right">⏱</div>
    `;
    trackContainer.appendChild(hdr);

    filteredList.forEach((t, i) => {
      const row = document.createElement('div');
      row.className = 'track-row' + (t.id === TRACKS[currentIdx]?.id ? ' active' + (isPlaying ? ' playing' : '') : '');
      row.dataset.id = t.id;
      row.style.animationDelay = (i * 0.02) + 's';

      const moodClass = MOOD_CLASSES[t.mood];

      row.innerHTML = `
        <div class="tr-num">${i + 1}</div>
        <div class="tr-play-icon"><i class="fa-solid ${t.id===TRACKS[currentIdx]?.id&&isPlaying?'fa-pause':'fa-play'}"></i></div>
        <div class="tr-info">
          <div class="tr-thumb"><canvas></canvas></div>
          <div class="tr-details">
            <div class="tr-title">${t.title}</div>
            <div class="tr-artist">${t.artist}</div>
          </div>
        </div>
        <div class="tr-album">${t.album}</div>
        <div class="tr-mood-tag ${moodClass}">${MOOD_EMOJIS[t.mood]} ${MOOD_LABELS[t.mood]}</div>
        <div class="tr-duration">${t.duration}</div>
      `;

      const thumb = row.querySelector('.tr-thumb');
thumb.innerHTML = `<img src="${t.cover}" alt="${t.title}" />`;

      row.addEventListener('click', () => {
        const realIdx = TRACKS.indexOf(t);
        if (realIdx === currentIdx) { togglePlay(); }
        else { currentIdx = realIdx; loadTrack(true); }
      });

      trackContainer.appendChild(row);
    });
  } else {
    // Grid view
    const grid = document.createElement('div');
    grid.className = 'track-grid';

    filteredList.forEach((t, i) => {
      const card = document.createElement('div');
      card.className = 'track-card' + (t.id === TRACKS[currentIdx]?.id ? ' active' + (isPlaying ? ' playing' : '') : '');
      card.dataset.id = t.id;
      card.style.animationDelay = (i * 0.025) + 's';

      const moodClass = MOOD_CLASSES[t.mood];

      card.innerHTML = `
  <div class="tc-art">
    <img src="${t.cover}" alt="${t.title}" />
    <div class="tc-play-overlay">
      <i class="fa-solid ${t.id===TRACKS[currentIdx]?.id && isPlaying ? 'fa-pause':'fa-play'}"></i>
    </div>
  </div>
  <div class="tc-title">${t.title}</div>
  <div class="tc-artist">${t.artist}</div>
  <div class="tc-mood ${moodClass}">
    ${MOOD_EMOJIS[t.mood]} ${MOOD_LABELS[t.mood]}
  </div>
`;

      const art = card.querySelector('.tc-art');
      art.innerHTML = `<img src="${t.cover}" alt="${t.title}" />`;

      card.addEventListener('click', () => {
        const realIdx = TRACKS.indexOf(t);
        if (realIdx === currentIdx) { togglePlay(); }
        else { currentIdx = realIdx; loadTrack(true); }
      });

      grid.appendChild(card);
    });

    trackContainer.appendChild(grid);
  }
}

/* ─────────────────────────────────────────────────────
   FILTERS
   ───────────────────────────────────────────────────── */
function applyFilters() {
  filteredList = TRACKS.filter(t => {
    const langOk = currentLang === 'all' || t.lang === currentLang;
    const moodOk = currentMood === 'all' || t.mood === currentMood;
    const searchOk = !searchQuery ||
      t.title.toLowerCase().includes(searchQuery) ||
      t.artist.toLowerCase().includes(searchQuery) ||
      t.album.toLowerCase().includes(searchQuery);
    return langOk && moodOk && searchOk;
  });

  // Update section heading
  const langMap = { all:'All Songs', telugu:'Telugu', hindi:'Hindi', english:'English', tamil:'Tamil' };
  const moodMap = { all:'', sad:' · Sad', happy:' · Happy', party:' · Party', melody:' · Melody' };
  sectionTitle.textContent = langMap[currentLang] + (currentMood !== 'all' ? moodMap[currentMood] : '');
  sectionSub.textContent   = `${filteredList.length} tracks`;

  // Update mood background
  if (currentMood !== 'all') {
    document.documentElement.setAttribute('data-mood', currentMood);
  } else if (currentIdx >= 0) {
    document.documentElement.setAttribute('data-mood', TRACKS[currentIdx].mood);
  } else {
    document.documentElement.removeAttribute('data-mood');
  }

  // Update mood badge
  const mc = MOOD_CONFIG[currentMood];
  moodEmoji.textContent = mc.emoji;
  moodLabel.textContent = mc.label;

  renderTracks();
}

/* ─────────────────────────────────────────────────────
   LOAD TRACK
   ───────────────────────────────────────────────────── */
function loadTrack(autoPlay = false) {
  if (currentIdx < 0 || currentIdx >= TRACKS.length) return;
  const t = TRACKS[currentIdx];

  // NP Panel
  npTitle.style.animation = 'none';
  void npTitle.offsetWidth;
  npTitle.style.animation = '';
  npTitle.textContent    = t.title;
  npArtist.textContent   = t.artist;
  npAlbum.textContent    = t.album;
  npLangBadge.textContent = t.lang.toUpperCase();
  npMoodIcon.textContent  = MOOD_EMOJIS[t.mood];
  npMoodText.textContent  = MOOD_LABELS[t.mood];

  // NP art canvas
  npArtInner.innerHTML = '';
  const bigCanvas = createArtCanvas(t, 300);
  npArtInner.innerHTML = `<img src="${t.cover}" alt="${t.title}" />`;

  // NP glow color
  npGlow.style.background = `radial-gradient(circle, ${t.colors[1]}40, transparent 70%)`;

  // Heart
  heartIcon.className = likedTracks.has(t.id) ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
  loveBtn.classList.toggle('liked', likedTracks.has(t.id));

  // Mini sidebar
  miniTitle.textContent  = t.title;
  miniArtist.textContent = t.artist;
  miniArt.innerHTML = '';
  miniArt.innerHTML = `<img src="${t.cover}" />`;

  // Mobile
  mpTitle.textContent  = t.title;
  mpArtist.textContent = t.artist;
  mpArt.innerHTML = '';
  mpArt.appendChild(createArtCanvas(t, 80));

  // Progress reset
  progFill.style.width  = '0%';
  progThumb.style.left  = '0%';
  tCurrent.textContent  = '0:00';
  tTotal.textContent    = t.duration;

  // Mood background
  document.documentElement.setAttribute('data-mood', t.mood);

  // Audio
  audio.src = t.src;

  if (autoPlay) {
    audio.play().catch(() => setPlayState(false));
    setPlayState(true);
  }

  // Re-render list for active state
  renderTracks();
  document.title = `▶ ${t.title} — NOVA`;
}

/* ─────────────────────────────────────────────────────
   PLAY STATE
   ───────────────────────────────────────────────────── */
function setPlayState(playing) {
  isPlaying = playing;
  const icon = playing ? 'fa-pause' : 'fa-play';
  playIcon.className       = `fa-solid ${icon}`;
  miniPlayIcon.className   = `fa-solid ${icon}`;
  mpIcon.className         = `fa-solid ${icon}`;

  if (playing) {
    npVis.classList.add('active');
    document.title = `▶ ${TRACKS[currentIdx]?.title || ''} — NOVA`;
  } else {
    npVis.classList.remove('active');
    if (currentIdx >= 0) document.title = `${TRACKS[currentIdx].title} — NOVA`;
  }

  renderTracks();
}

function togglePlay() {
  if (currentIdx < 0) { currentIdx = 0; loadTrack(true); return; }
  if (isPlaying) { audio.pause(); setPlayState(false); }
  else { audio.play().catch(() => setPlayState(false)); setPlayState(true); }
}

/* ─────────────────────────────────────────────────────
   NEXT / PREV
   ───────────────────────────────────────────────────── */
function nextTrack() {
  if (TRACKS.length === 0) return;
  let next;
  if (isShuffle) {
    const others = TRACKS.map((_, i) => i).filter(i => i !== currentIdx);
    next = others[Math.floor(Math.random() * others.length)] ?? 0;
  } else {
    next = (currentIdx + 1) % TRACKS.length;
  }
  currentIdx = next;
  loadTrack(isPlaying);
}

function prevTrack() {
  if (audio.currentTime > 3) { audio.currentTime = 0; return; }
  currentIdx = (currentIdx - 1 + TRACKS.length) % TRACKS.length;
  loadTrack(isPlaying);
}

/* ─────────────────────────────────────────────────────
   AUDIO EVENTS
   ───────────────────────────────────────────────────── */
audio.addEventListener('ended', () => {
  if (repeatMode === 2) { audio.currentTime = 0; audio.play(); }
  else if (repeatMode === 1) { nextTrack(); }
  else {
    if (currentIdx < TRACKS.length - 1 || isShuffle) nextTrack();
    else setPlayState(false);
  }
});

audio.addEventListener('timeupdate', () => {
  if (isDragProg || !audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  progFill.style.width = pct + '%';
  progThumb.style.left = pct + '%';
  tCurrent.textContent = fmt(audio.currentTime);
});

audio.addEventListener('loadedmetadata', () => {
  tTotal.textContent = fmt(audio.duration);
});
audio.addEventListener('play',  () => setPlayState(true));
audio.addEventListener('pause', () => setPlayState(false));

/* ─────────────────────────────────────────────────────
   PROGRESS SEEK
   ───────────────────────────────────────────────────── */
function seekTo(e) {
  const r = progTrack.getBoundingClientRect();
  const x = Math.max(0, Math.min((e.clientX || e.touches?.[0]?.clientX || 0) - r.left, r.width));
  const pct = x / r.width;
  progFill.style.width = (pct*100)+'%';
  progThumb.style.left = (pct*100)+'%';
  if (audio.duration) { audio.currentTime = pct * audio.duration; tCurrent.textContent = fmt(audio.currentTime); }
}
progTrack.addEventListener('mousedown',  e => { isDragProg = true; seekTo(e); });
progTrack.addEventListener('touchstart', e => { isDragProg = true; seekTo(e); }, {passive:true});
progTrack.addEventListener('click', seekTo);

/* ─────────────────────────────────────────────────────
   VOLUME
   ───────────────────────────────────────────────────── */
function setVol(v) {
  v = Math.max(0, Math.min(1, v));
  audio.volume = v;
  volFill.style.width = (v*100)+'%';
  volThumb.style.left = (v*100)+'%';
  volNum.textContent  = Math.round(v*100);
  if (v > 0) { isMuted = false; lastVol = v; }
  volIcon.className = v === 0 ? 'fa-solid fa-volume-xmark' : v < 0.4 ? 'fa-solid fa-volume-low' : 'fa-solid fa-volume-high';
}
function volDrag(e) {
  const r = volSlider.getBoundingClientRect();
  const x = Math.max(0, Math.min((e.clientX || e.touches?.[0]?.clientX || 0) - r.left, r.width));
  setVol(x / r.width);
}
volSlider.addEventListener('mousedown',  e => { isDragVol = true; volDrag(e); });
volSlider.addEventListener('touchstart', e => { isDragVol = true; volDrag(e); }, {passive:true});
volSlider.addEventListener('click', volDrag);
muteBtn.addEventListener('click', () => {
  if (isMuted) { isMuted = false; setVol(lastVol || 0.8); }
  else { isMuted = true; audio.volume = 0; volFill.style.width = '0%'; volThumb.style.left = '0%'; volNum.textContent='0'; volIcon.className='fa-solid fa-volume-xmark'; }
});

/* Global drag release */
document.addEventListener('mousemove', e => { if (isDragProg) seekTo(e); if (isDragVol) volDrag(e); });
document.addEventListener('mouseup',  () => { isDragProg = false; isDragVol = false; });
document.addEventListener('touchmove', e => { if (isDragProg) seekTo(e); if (isDragVol) volDrag(e); }, {passive:true});
document.addEventListener('touchend', () => { isDragProg = false; isDragVol = false; });

/* ─────────────────────────────────────────────────────
   CONTROLS
   ───────────────────────────────────────────────────── */
playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);
miniPlayBtn.addEventListener('click', togglePlay);
mpPlayBtn.addEventListener('click', togglePlay);
mpNextBtn.addEventListener('click', nextTrack);

shuffleBtn.addEventListener('click', () => {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle('active', isShuffle);
  shuffleTopBtn.classList.toggle('active', isShuffle);
});
shuffleTopBtn.addEventListener('click', () => shuffleBtn.click());

repeatBtn.addEventListener('click', () => {
  repeatMode = (repeatMode + 1) % 3;
  repeatBtn.classList.toggle('active', repeatMode > 0);
  const icon = repeatMode === 2 ? 'fa-solid fa-repeat-1' : 'fa-solid fa-repeat';
  repeatBtn.querySelector('i').className = icon;
});

loveBtn.addEventListener('click', () => {
  if (currentIdx < 0) return;
  const id = TRACKS[currentIdx].id;
  if (likedTracks.has(id)) { likedTracks.delete(id); loveBtn.classList.remove('liked'); heartIcon.className = 'fa-regular fa-heart'; }
  else { likedTracks.add(id); loveBtn.classList.add('liked'); heartIcon.className = 'fa-solid fa-heart'; }
});

/* ─────────────────────────────────────────────────────
   LANGUAGE & MOOD FILTERS
   ───────────────────────────────────────────────────── */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentLang = btn.dataset.lang;
    applyFilters();
  });
});

document.querySelectorAll('.mood-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentMood = btn.dataset.mood;
    applyFilters();
  });
});

/* ─────────────────────────────────────────────────────
   VIEW TOGGLE
   ───────────────────────────────────────────────────── */
document.querySelectorAll('.vt-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.vt-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentView = btn.dataset.view;
    renderTracks();
  });
});

/* ─────────────────────────────────────────────────────
   SEARCH
   ───────────────────────────────────────────────────── */
searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value.toLowerCase().trim();
  applyFilters();
});

/* ─────────────────────────────────────────────────────
   THEME
   ───────────────────────────────────────────────────── */
themeBtn.addEventListener('click', () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme === 'light' ? 'light' : '');
  themeBtn.classList.toggle('active', theme === 'light');
});

/* ─────────────────────────────────────────────────────
   KEYBOARD SHORTCUTS
   ───────────────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') return;
  switch(e.code) {
    case 'Space':     e.preventDefault(); togglePlay(); break;
    case 'ArrowRight':e.preventDefault(); nextTrack(); break;
    case 'ArrowLeft': e.preventDefault(); prevTrack(); break;
    case 'ArrowUp':   e.preventDefault(); setVol(audio.volume + 0.05); break;
    case 'ArrowDown': e.preventDefault(); setVol(audio.volume - 0.05); break;
    case 'KeyM':      muteBtn.click(); break;
    case 'KeyS':      shuffleBtn.click(); break;
    case 'KeyR':      repeatBtn.click(); break;
  }
});

/* ─────────────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────────────── */
function fmt(s) {
  if (!s || isNaN(s)) return '0:00';
  return `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,'0')}`;
}

/* ─────────────────────────────────────────────────────
   BOOT
   ───────────────────────────────────────────────────── */
audio.volume = 0.8;
setVol(0.8);
applyFilters();
document.querySelectorAll('.vt-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // remove active from all
    document.querySelectorAll('.vt-btn').forEach(b => b.classList.remove('active'));

    // add active to clicked
    btn.classList.add('active');

    // update view
    currentView = btn.dataset.view;

    // re-render
    renderTracks();
  });
});
// GET USERNAME
const savedUsername = localStorage.getItem("username");

if(savedUsername){
    document.getElementById("profileName").textContent = savedUsername;
}
// LOGOUT
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {

    // remove saved username
    localStorage.removeItem("username");

    // go back to login page
    window.location.href = "../loginSignup/index.html";
});