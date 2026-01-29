
        // meni 3ba & navigation
        const menuToggle = document.getElementById('menu-toggle');
        const nav = document.getElementById('nav');
        
        menuToggle.addEventListener('click', () => {
          menuToggle.classList.toggle('active');
          nav.classList.toggle('show-nav');
        });
        
        
        function toggleMenu() {
          const sideMenu = document.getElementById('sideMenu');
          const overlay = document.getElementById('overlay');
          
          sideMenu.classList.toggle('active');
          overlay.classList.toggle('active');
        }
        
        
        document.getElementById('overlay').onclick = () => {
          const sideMenu = document.getElementById('sideMenu');
          const overlay = document.getElementById('overlay');
          
          sideMenu.classList.remove('active');
          overlay.classList.remove('active');
        };
        
        function showPopup() {
          const popup = document.getElementById('popup');
          popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
        }
        
        // THEME SWITCH
        let isDark = false;
        const colors = [
          '#ffffff', '#f5f5dc', '#ccffcc', '#e0f7fa', '#ffe0b2', '#e6e6fa',
          '#d1c4e9', '#c8e6c9', '#74A0B9F7', '#fff', '#71601DF7',
          '#E3F2FD', '#FFEBEE', '#FFF3E0', '#E8F5E9', '#F3E5F5',
          '#D7CCC8', '#FBE9E7', '#F0F4C3', '#DCEDC8', '#F1F8E9',
          '#E0F7FA', '#F9FBE7', '#ECEFF1', '#FFCDD2', '#D1C4E9',
          '#C5CAE9', '#B2EBF2', '#B3E5FC', '#B2DFDB', '#DCEDC8'
        ];
        
        
        function toggleTheme() {
          document.body.classList.toggle('dark-theme');
          isDark = !isDark;
          
          const icon = document.getElementById('theme-icon');
          icon.innerHTML = isDark ?
            '<path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" stroke-width="2"/>' :
            '<path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36 6.36l-1.41-1.41M6.05 6.05L4.64 4.64m0 14.72l1.41-1.41M17.95 6.05l1.41-1.41M12 7a5 5 0 100 10 5 5 0 000-10z" stroke-width="2"/>';
          
          const title = document.querySelector('.title');
          title.classList.toggle('title-dark', isDark);
        }
        
        // CHANJE KOULÈ ARYÈPLAN AK NIVO YO
        function randomBg() {
          if (!isDark) {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor;
            levels.forEach(level => {
              level.style.backgroundColor = randomColor;
            });
          } else {
            alert("Ou pa ka chanje koulè a nan tèm sonm. Tanpri désactive lalin nan pou w chanje koulè aryèplan an.");
          }
        }
        // --- OBSERVER TIT MENI ---
        const titles = document.querySelectorAll('.menu-title');
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              titles.forEach(t => t.classList.remove('active-title'));
              entry.target.classList.add('active-title');
            }
          });
        }, { threshold: 0.5 });
        
        titles.forEach(title => observer.observe(title));
        
        // --- ENKÒRAYMAN ALEATWA ---
        // Yon seri mesaj pou ankouraje itilizatè a pandan ke yo ap avanse nan nivo yo.
        // --- ENKÒRAYMAN ALEATWA ---
        // Lis ankourajman pou Ayisyen ap aprann Pwogramasyon
        
        const encouragements = [
          "Woy! Sa w sot fè la a, se pa ti bèl bagay!",
          "Ou gen limyè nan tèt ou, kontinye konsa!",
          "Pinga w lage! Ou pi pre objektif ou chak fwa!",
          "Yon lòt etap franchi! Ou fò anpil!",
          "Bravo! Travay ou bay rezilta, pa kanpe!",
          "Ou ap monte tankou rakèt!",
          "Se pou tèt ou sa! Kontinye klere!",
          "Ou merite tout lwanj yo! Ann avanse!",
          "Bèl pa sa a! Men gen lòt ankò!",
          "Nivo sa a pa pou nenpòt moun — ou fè l!",
          "Ou se yon eksepsyon! Pa gen bagay sa a pou ou!",
          "Santi w fè sa byen! Pa lage, ou se yon gayan!",
          "Avanse nan pwogrè sa a! Pa kanpe!",
          "Ou se yon avanseè! Kontinye vwayaj la!",
          "Bèl travay! Ou p ap janm regrete efò ou!",
          "Chak jou se yon nouvo chans pou aprann!",
          "Ou gen kapasite pou fè sa! Fè l!",
          "Gade kijan ou ap grandi! Pa janm abandone!",
          "Ou mete travay nan sa! Kontinye konsa!",
          "Se pa sèlman sa ou konnen, men kijan ou devlope sa!",
          "Ou ka fè l! Pa gen anyen ki difisil ase pou ou!",
          "Avanse plis toujou! Ou pwogrese chak jou!",
          "Li ka difisil, men ou ap fòme kòm yon pwofesyonèl!",
          "Chak nivo se yon souflè nan direksyon w ap chèche!",
          "Tout sa w ap aprann se yon envestisman nan avni ou!",
          "Ou ap pwogrese, kontinye fè sa!",
          "Mwen kwè nan ou, ou ka fè sa!",
          "Nou se pwogramè! Nou se vanyan!",
          "Ou gen kapasite pou fè nenpòt bagay!",
          "Kontinye ak sa w ap fè a! Ou se yon modèl!",
          "Fò w sa a! Avanse pi devan!",
          "Ou fè sa konsa fasil! Kenbe fò!",
          "Ou se yon esansyèl nan sa w ap fè!",
          "Chak etap mennen ou pi pre objektif ou!",
          "Fè sa k ap fè ou pi bon toujou!",
          "Pa pè leve defi sa yo! Ou pare!",
          "Lavi se yon vwayaj aprantisaj, epi ou fè l byen!",
          "Bravo! Ou pral rive pi lwen!",
          "Fò w sa! Ou se yon devlopè nan kè ou!",
          "Pa kite anyen kanpe sou wout ou!",
          "Tèt ou nan jwèt la! Ou se yon gayan!",
          "Ou se pwograme! Se yon aptitid, ou gen l!",
          "Kontinye batay! Se ou k'ap briye!",
          "Avanse ak tout fòs ou!",
          "Ou ap fè bagay sa yo san pèdi tan!",
          "Sa w ap fè la a, se yon gwo bagay!",
          "Kontinye travay di, ou se yon lejand!",
          "Pou pi devan toujou! Ou ka fè sa!",
          "Ou gen pouvwa pou chanje sa a!",
          "Mwen kwè nan kapasite ou!",
          "Jou sa a ap sèlman pi bon toujou!",
          "Ou nan yon chemen ki fè sans!",
          "Rete konsantre, ou pi pre chak jou!",
          "Anpil travay, anpil siksè!",
          "Ou se yon modèl pou lòt moun!",
          "Jou a ap mache pi byen avèk ou!",
          "Ou gen kapasite pou jwenn pi bon rezilta!",
          "Pa janm abandone, ou se yon siksè!",
          "Ou se youn nan moun ki gen kapasite pou avanse!",
          "Sa w ap fè la a ap bay plis nan tan kap vini an!",
          "Fè yon lòt etap! Ou byen lwen!",
          "Pa gen anyen ou pa ka fè!",
          "Ou gen tout sa ou bezwen pou reyisi!",
          "Siksè ou depann de travay ou fè!",
          "Avanse nan pwogramasyon an! Ou byen mache!",
          "Pa gen limit pou sa ou kapab reyalize!",
          "Rete fò! Ou se yon lidè nan sa w ap fè!",
          "Se nan difikilte yo ou devlope fòs ou!",
          "Bravo! Chak jou w ap avanse!",
          "Ou se yon devlopè nan tout sans!",
          "Sa w ap aprann ap chanje lavi ou!",
          "Avanse ak kouraj, ou nan chemen pou reyisi!",
          "Chak nouvo etap, yon nouvo posiblite!",
          "Ou gen anpil kapasite, pa sispann aprann!",
          "Kontinye mete efò, ou nan bon direksyon!",
          "Sa w ap fè la a se yon gwo etap!",
          "Pa janm bliye, ou pi fò pase ou panse!",
          "Ou ap grandi! Pa kanpe!",
          "Pwen fòs ou se nan travay ou!",
          "Fè sa ou renmen, epi bagay yo pral mache!",
          "Koumanse piti, men avanse san limit!",
          "Pandan ou avanse, ou ap devlope kapasite nouvo!",
          "Ou se fò! Ou se yon modèl!",
          "Pou chak difikilte, ou jwenn yon solisyon!",
          "Pa gen anyen ki ka kanpe devan ou!",
          "Avanse! Ou se yon gayan!",
          "Sa a se sèlman kòmansman an!",
          "Bòn chans pou chak etap!",
          "Pa gen bagay ki pi bèl pase fè sa ou renmen!",
          "Li pa fasil, men ou ka fè l!",
          "Pandan ou avanse, ou ap kreye avni ou!",
          "Pa janm sispann kwè nan tèt ou!",
          "Ou ap grandi nan chak etap!",
          "Pa janm sispann pwogrese!",
          "Kite kapasite ou briye!",
          "Ou se nan bon chemen, pa sispann!",
          "Kontinye ap chèche bon rezilta!",
          "Ou se yon gayan! Kenbe fò!",
          "Chak nouvo eksperyans se yon avansman!",
          "Wout ou ap mache pi byen chak jou!",
          "Ou ap fè sa a tankou yon pwogramè!",
          "Avanse avèk pasyon!",
          "Bati lavi ou sou konesans ou!",
          "Ou ap tounen pi fò chak jou!",
          "Tout sa ou aprann ap sèvi ou!",
          "Sa w ap fè la a ap pote gwo rezilta!",
          "Ou ap fè bagay yo san erè!",
          "Fò! Fò! Fò! Ou ka fè l!",
          "Pa gen anyen ki pral kanpe devan ou!",
          "Ou merite tout bon bagay sa yo!",
          "Avanse tankou yon pwofesyonèl!",
          "Sa ou ap fè a se pa ti bagay!",
          "Ou ap fè pwogrè nan tout sa w ap fè!",
          "Kontinye, paske ou se yon modèl!",
          "Siklòn nan pwojè a se ou menm!",
          "Pa janm sispann devlope kapasite ou!",
          "Tout bagay ap mache pi byen ak travay di!",
          "Sa w ap fè la a ap chanje mond lan!",
          "Kontinye, paske ou ka rive pi lwen!",
          "Rete fèm, ou se yon gayan!",
          "Ou fò, ou gen kapasite, ou ka fè sa!",
          "Travay di ap pote siksè!",
          "Ou se yon pwofesyonèl nan sa w ap fè!",
          "Tèt ou nan jwèt la!",
          "Pa kanpe, ou sou bon chemen!",
          "Avanse pi devan, paske ou ka fè sa!",
          "Chak nouvo nivo se yon lòt viktwa!",
          "Ou ap grandi chak jou!",
          "Kontinye fè sa ki mache pou ou!",
          "Pa janm sispann kwè nan kapasite ou!",
          "Sa w ap fè la a ap pèmèt ou jwenn plis!",
          "Ou ap devlope kapasite yo chak jou!",
          "Pa kanpe! Siksè se ou ki fè l!",
          "Nou gen tout sa li pran pou rive!",
          "Kite travay ou pale pou ou!",
          "Kontinye grandi! Ou se yon eksepsyon!",
          "Ou se yon pwofesyonèl nan pwogrè sa a!",
          "Santi w fò paske ou ap fè sa!",
          "Avanse nan travay ou, ou nan bon chemen!",
          "Tout sa w ap fè gen yon siyifikasyon!",
          "Pa janm abandone sa w ap fè a!",
          "Ou fò! Ou se pwogramè!",
          "Li se sèlman kòmansman an!",
          "Chak jou se yon nouvo opòtinite!",
          "Pa kanpe, ou se nan bon direksyon!",
          "Ou kapab chanje mond lan!",
          "Kontinye fòse avanse!",
          "Sa w ap fè la a ap bay gwo rezilta!",
          "Ou se pwogramè, ou ka fè tout bagay!",
          "Pa sispann avanse, ou se yon modèl!",
          "Ou se yon egzanp pou lòt moun!",
          "Sa w ap aprann ap chanje lavi ou!",
          "Pwen fòs ou se nan pwogrè ou!",
          "Kontinye ap travay di!",
          "Ou se yon egzanp pou nenpòt moun!",
          "Sa w ap fè se esansyèl!",
          "Pa janm sispann pouswiv siksè!",
          "Ou se yon eksepsyonèl nan sa w ap fè!",
          "Chak etap mennen ou pi pre objektif ou!"
        ];
        
        // --- NIVO MANIPILASYON ---
        // Nivo yo ap jere nan domèn sa a, kote chak nivo gen yon kontni, videyo, ak lòt eleman.
        const levels = document.querySelectorAll('.level');
        let currentLevel = 0; // Nivo aktyèl la
        let canChangeLevel = true; // Si itilizatè a ka chanje nivo
        let timePerCharacter = 20; // Tan pou li chak karaktè an milisegond, men poko presize le mwn fini ak tout kou yo pou mwn metel
        let timeoutID;
        let startTime = Date.now(); // Tan kòmanse nivo a
        
        // Fonksyon sa a montre nivo aktyèl la sou paj la
        function showLevel(index) {
          levels.forEach((level, i) => {
            level.classList.toggle('active', i === index); // Chanje klas nivo aktif
          });
          window.scrollTo({ top: 0, behavior: 'smooth' }); // Defini scroll pou ale nan tèt paj la
          
          // Kalkile tan minimòm pou nivo a fini
          const levelContent = levels[index].innerText.trim();
          const charCount = levelContent.length;
          const video = levels[index].querySelector('video');
          let videoDuration = video ? Math.floor(video.duration || 0) * 1000 : 0;
          
          const minTime = (charCount * timePerCharacter) + videoDuration; // Tan minimòm total
          canChangeLevel = false; // Pa pèmèt chanjman nivo pandan nivo sa a ap fini
          startTime = Date.now(); // Rekòmanse tan
          
          clearTimeout(timeoutID); // Retire tan ki te pase avan
          timeoutID = setTimeout(() => {
            canChangeLevel = true; // Pèmèt chanjman nivo apre tan sa a
          }, minTime);
          
          updateProgressBar(); // Mete ajou bar pwogrè a
          
          const modil = Math.floor(index / 10) + 1; // Kalkile modil aktyèl la
          const mesaj = encouragements[Math.floor(Math.random() * encouragements.length)]; // Chwazi mesaj ankourajman aleatwaman
          const msg = (index === levels.length - 1) ?
            '🏁 Felisitasyon! Ou rive nan dènye nivo a! Ou met chwazi yon domèn pou ou komanse' :
            `Modil ${modil} | Nivo ${index + 1}: ${mesaj}`; // Mensaj selon nivo a
          showAlert(msg); // Montre alert ak mesaj sa a
          
          // Sove nivo nan localStorage ak cookies
          localStorage.setItem('savedLevel', currentLevel);
          setCookie("currentLevel", `Nivo ${currentLevel + 1}`, 30);
          setCookie("lastModule", `Modil ${modil}`, 30);
          setCookie("lastDate", new Date().toLocaleDateString(), 30);
          setCookie("weeklyProgress", `${currentLevel + 1} nivo fini`, 30);
          setCookie("recommendedTime", "4/+ èdtan pa semèn", 30);
          setCookie("extraInfo", "Ou kontinye ap fè pwogrè! Bravo!", 30);
          
          showProgressReport(); // Montre rapò sou pwogrè
          drawProgressChart(currentLevel, levels.length); // Desine grafik pwogrè
        }
        
        // Fonksyon sa a pèmèt itilizatè a ale nan nivo pwochen an
        function nextLevel() {
          const elapsed = Date.now() - startTime; // Tan ki pase depi nivo kòmanse
          const levelContent = levels[currentLevel].innerText.trim();
          const charCount = levelContent.length;
          const video = levels[currentLevel].querySelector('video');
          const videoDuration = video ? Math.floor(video.duration || 0) * 1000 : 0;
          const minTime = (charCount * timePerCharacter) + videoDuration;
          
          if (currentLevel < levels.length - 1) {
            if (canChangeLevel) {
              currentLevel++; // Avanse nan pwochen nivo
              showLevel(currentLevel); // Montre nivo pwochen an
            } else {
              const remaining = ((minTime - elapsed) / 1000).toFixed(1); // Tan ki rete
              showAlert(`Ou Rete: ${remaining}s  pou nivo a konplete.  !! Tann tan w fini !!`); // Afiche tan ki rete
}
          }
        }
        
        // Fonksyon sa a pèmèt itilizatè a retounen nan nivo anvan an
        function prevLevel() {
          const elapsed = Date.now() - startTime;
          const levelContent = levels[currentLevel].innerText.trim();
          const charCount = levelContent.length;
          const video = levels[currentLevel].querySelector('video');
          const videoDuration = video ? Math.floor(video.duration || 0) * 1000 : 0;
          const minTime = (charCount * timePerCharacter) + videoDuration;
          
          if (currentLevel > 0) {
            if (canChangeLevel) {
              currentLevel--; // Retounen nan nivo anvan an
              showLevel(currentLevel); // Montre nivo anvan an
            } else {
              const remaining = ((minTime - elapsed) / 1000).toFixed(1); // Tan ki rete
              showAlert(`Tann tan w fini pou konplete nivo a. Rete: ${remaining}s`); // Afiye tan ki rete
            }
          }
        }
        
        // Fonksyon pou mete ajou bar pwogrè a
        function updateProgressBar() {
          const progress = ((currentLevel + 1) / levels.length) * 100;
          document.getElementById('progress-bar').style.width = `${progress}%`;
        }
        
        // Fonksyon sa a montre yon mesaj nan yon alert
        function showAlert(message) {
          const alertBox = document.getElementById('level-alert');
          alertBox.innerText = message;
          alertBox.classList.add('show');
          setTimeout(() => alertBox.classList.remove('show'), 6300); // Fè alert la disparèt apre 6.3segonn
        }
        
        // Fonksyon sa a montre  mesaj ankourajman aleatwaman
        function showRandomMotivation() {
          const msg = encouragements[Math.floor(Math.random() * encouragements.length)];
          showAlert(msg);
        }
        
        // Fonksyon sa a kòmanse yon loop pou montre mesaj ankourajman regilyèman
        function startMotivationLoop() {
          const intervals = [3, 5, 9, ]; // Entèval tan aleatwa an minit
          const randomMinutes = intervals[Math.floor(Math.random() * intervals.length)];
          setTimeout(() => {
            showRandomMotivation(); // Montre mesaj ankourajman
            startMotivationLoop(); // Relanse loop la
          }, randomMinutes * 60 * 5000); // Tan an nan milisèkonn
        }
        
        // Fonksyon sa a mete yon cookie
        function setCookie(name, value, days = 30) {
          const d = new Date();
          d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
          const expires = "expires=" + d.toUTCString();
          document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
        }
        
        // Fonksyon sa a li yon cookie
        function getCookie(name) {
          const nameEQ = name + "=";
          const ca = document.cookie.split(';');
          for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length));
          }
          return "";
        }
        
        // Fonksyon sa a montre rapò sou pwogrè itilizatè a
        function showProgressReport() {
          document.getElementById('current-level').textContent = getCookie("currentLevel") || "Pa defini";
          document.getElementById('last-module').textContent = getCookie("lastModule") || "Pa defini";
          document.getElementById('last-date').textContent = getCookie("lastDate") || "Pa defini";
          document.getElementById('weekly-progress').textContent = getCookie("weeklyProgress") || "Pa defini";
          document.getElementById('recommended-time').textContent = getCookie("recommendedTime") || "Pa defini";
          document.getElementById('extra-info').textContent = getCookie("extraInfo") || "Pa defini";
        }
        
        // --- GRAFIK PWOGRÈ ---
        // Fonksyon pou desine yon grafik pwogrè
        let progressChartInstance = null;
        
        function drawProgressChart(currentLevel, totalLevels) {
          const ctx = document.getElementById('progressChart').getContext('2d');
          if (progressChartInstance) progressChartInstance.destroy(); // Detwi grafik anvan si li egziste
          
          progressChartInstance = new Chart(ctx, {
            type: 'doughnut', // Chwazi tip grafik Doughnut
            data: {
              labels: ['Nivo konplete', 'Rete'],
              datasets: [{
                data: [currentLevel + 1, totalLevels - (currentLevel + 1)],
                backgroundColor: ['#66cc33', '#eee'],
                borderColor: ['#66cc33', '#eee'],
                borderWidth: 1
              }]
            },
            options: {
              responsive: true, // Fè grafik la reponn
              plugins: {
                legend: {
                  position: 'bottom',
                  labels: {
                    color: '#000',
                    font: {
                      size: 14
                    }
                  }
                },
                title: {
                  display: true,
                  text: 'Grafik Pwogrè Ou',
                  color: '#000',
                  font: {
                    size: 18
                  }
                }
              }
            }
          });
        }
        
        // Fonksyon sa a ap lanse lè paj la fin chaje
        window.onload = () => {
          const saved = localStorage.getItem('savedLevel');
          if (saved !== null) currentLevel = parseInt(saved); // Chaje nivo sove a
          showLevel(currentLevel); // Montre nivo aktyèl la
          startMotivationLoop(); // Kòmanse loop ankourajman
        };
