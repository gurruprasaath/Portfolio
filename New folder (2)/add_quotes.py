import sys

with open(r'd:\New folder (2)\portfolio-app\src\pages\index.astro', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Section HTML
old_about_start = '''    <!-- About Section -->
    <section class="py-24 scroll-section relative overflow-hidden bg-muted/30" id="about">
      <!-- Decorative background blur -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-12 gap-16 items-center">
            
            <!-- Creative Visual Side -->'''

new_about_start = '''    <!-- About Section (Quote Deck Scroll Interaction) -->
    <section class="h-[300vh] relative bg-muted/30" id="about">
      <div class="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
      
      <!-- Decorative background blur -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-12 gap-16 items-center">
            
            <!-- Creative Visual Quote Cards -->'''

content = content.replace(old_about_start, new_about_start)

# 2. Re-write the visual side (The Deck)
old_visual_side = '''            <!-- Creative Visual Side -->
            <div class="md:col-span-5 relative observe-sweep">
              <!-- Animated floating frames (Deck of Cards) -->
              <div class="relative w-full aspect-[4/5] max-w-sm mx-auto" id="about-deck">
                <!-- Card 4 (Deepest) -->
                <div class="absolute inset-0 bg-primary/10 rounded-3xl transform transition-transform duration-100 ease-out will-change-transform deck-card" data-base-rotate="-8" data-base-scale="1.08" data-spread-multi="2.5"></div>
                <!-- Card 3 -->
                <div class="absolute inset-0 border-2 border-secondary/20 rounded-3xl transform transition-transform duration-100 ease-out backdrop-blur-sm will-change-transform deck-card" data-base-rotate="6" data-base-scale="1.06" data-spread-multi="-2.0"></div>
                <!-- Card 2 -->
                <div class="absolute inset-0 bg-secondary/5 rounded-3xl transform transition-transform duration-100 ease-out will-change-transform deck-card" data-base-rotate="-4" data-base-scale="1.04" data-spread-multi="1.5"></div>
                <!-- Card 1 (Closest to Main) -->
                <div class="absolute inset-0 border-2 border-primary/20 rounded-3xl transform transition-transform duration-100 ease-out backdrop-blur-md will-change-transform deck-card" data-base-rotate="2" data-base-scale="1.02" data-spread-multi="-1.0"></div>
                
                <!-- Main Glass Card -->
                <div class="absolute inset-0 bg-background/80 backdrop-blur-xl border border-border/60 rounded-3xl p-8 shadow-2xl flex flex-col justify-between group overflow-hidden">
                  <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  <div class="relative z-10">
                    <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 shadow-inner">
                      <svg class="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </div>
                    <h3 class="text-2xl font-bold font-heading mb-3">Code is Poetry</h3>
                    <p class="text-muted-foreground text-sm leading-relaxed">
                      I believe in writing code that isn't just functional, but clean, scalable, and human-readable. Every line is a step toward building something that truly matters.
                    </p>
                  </div>
                  
                  <div class="relative z-10 flex gap-2 flex-wrap">
                    <span class="px-3 py-1 bg-muted rounded-full border border-border/50 text-xs font-medium shadow-sm">Problem Solver</span>
                    <span class="px-3 py-1 bg-muted rounded-full border border-border/50 text-xs font-medium shadow-sm">Continuous Learner</span>
                  </div>
                </div>
              </div>
            </div>'''
            
# I need to match the previous replacement perfectly, wait, I already replaced it to output "<!-- Animated floating frames (Deck of Cards) -->" previously, 
# But in step 1, I changed the `<!-- Creative Visual Side -->` text to `<!-- Creative Visual Quote Cards -->`.
# The previous string matches in index.astro: `<!-- Creative Visual Side -->\n            <div class="md:col-span-5 relative observe-sweep">`
# Oh wait, using Python `.replace` is safer if I use string indexing or clear blocks.
# Let's cleanly grab everything between `<div class="md:col-span-5 relative observe-sweep">` and `<!-- Text Content Side -->`

import re
pattern = r'            <!-- Creative Visual Side -->\s*<div class="md:col-span-5 relative observe-sweep">.*?<!-- Text Content Side -->'

new_visual_logic = '''            <!-- Creative Visual Quote Cards -->
            <div class="md:col-span-5 relative observe-sweep">
              <div class="relative w-full aspect-[4/5] max-w-sm mx-auto perspective-1000" id="quote-deck">
              
                <!-- Quote Card 3 (Bottom) -->
                <div class="absolute inset-0 bg-background/95 backdrop-blur-xl border border-border/60 rounded-3xl p-8 shadow-2xl flex flex-col justify-between overflow-hidden quote-card transition-all duration-300 ease-out origin-bottom will-change-transform" data-index="2">
                  <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                  <div class="relative z-10">
                    <div class="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6 shadow-inner">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                    </div>
                    <h3 class="text-2xl font-bold font-heading mb-3">Architecture First</h3>
                    <p class="text-muted-foreground text-sm leading-relaxed">
                      Rigorous system design dictates that scalability must never be an afterthought. By adopting AI-driven, loosely coupled microservices, we build platforms designed to inherently sustain exponential load.
                    </p>
                  </div>
                  <div class="relative z-10 flex gap-2 flex-wrap">
                    <span class="px-3 py-1 bg-background rounded-full border border-border/50 text-xs font-medium shadow-sm">Scalability</span>
                    <span class="px-3 py-1 bg-background rounded-full border border-border/50 text-xs font-medium shadow-sm">AI Infrastructure</span>
                  </div>
                </div>

                <!-- Quote Card 2 (Middle) -->
                <div class="absolute inset-0 bg-background/95 backdrop-blur-xl border border-border/60 rounded-3xl p-8 shadow-2xl flex flex-col justify-between overflow-hidden quote-card transition-all duration-300 ease-out origin-bottom will-change-transform" data-index="1">
                  <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                  <div class="relative z-10">
                    <div class="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 shadow-inner">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                    </div>
                    <h3 class="text-2xl font-bold font-heading mb-3">Pixel Perfect</h3>
                    <p class="text-muted-foreground text-sm leading-relaxed">
                      Micro-interactions and absolute design fidelity separate decent projects from world-class platforms. An interface isn't just about rendering data, it's about making the user feel a physical connection.
                    </p>
                  </div>
                  <div class="relative z-10 flex gap-2 flex-wrap">
                    <span class="px-3 py-1 bg-background rounded-full border border-border/50 text-xs font-medium shadow-sm">UI Engineering</span>
                    <span class="px-3 py-1 bg-background rounded-full border border-border/50 text-xs font-medium shadow-sm">Physics & Motion</span>
                  </div>
                </div>

                <!-- Quote Card 1 (Top/Initial) -->
                <div class="absolute inset-0 bg-background/95 backdrop-blur-xl border border-border/60 rounded-3xl p-8 shadow-2xl flex flex-col justify-between overflow-hidden quote-card transition-all duration-300 ease-out origin-bottom will-change-transform" data-index="0">
                  <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                  <div class="relative z-10">
                    <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 shadow-inner">
                      <svg class="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </div>
                    <h3 class="text-2xl font-bold font-heading mb-3">Code is Poetry</h3>
                    <p class="text-muted-foreground text-sm leading-relaxed">
                      I believe in writing code that isn't just functional, but clean, scalable, and human-readable. Every line is a step toward building something that truly matters.
                    </p>
                  </div>
                  <div class="relative z-10 flex gap-2 flex-wrap">
                    <span class="px-3 py-1 bg-background rounded-full border border-border/50 text-xs font-medium shadow-sm">Problem Solver</span>
                    <span class="px-3 py-1 bg-background rounded-full border border-border/50 text-xs font-medium shadow-sm">Continuous Learner</span>
                  </div>
                </div>

              </div>
            </div>

            <!-- Text Content Side -->'''

content = re.sub(pattern, new_visual_logic, content, flags=re.DOTALL)

# Close the sticky container properly
# The About Section previously ended like:
#               </div>
#             </div>
#           </div>
#         </div>
#       </div>
#     </section>
close_pattern = r'              </div>\s*</div>\s*</div>\s*</div>\s*</section>'
new_close = '''              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>'''
content = re.sub(close_pattern, new_close, content, flags=re.DOTALL)

# Replace Javascript logic for the Deck Cards
js_old = '''        // 2. About Deck Scroll Parallax (Fans/Shuffles Background Cards)
        if (aboutDeck && deckCards.length > 0) {
          const rect = aboutDeck.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          if (rect.top < windowHeight && rect.bottom > 0) {
            // Calculate progress (0 = bottom edge, 1 = top edge)
            const progress = 1 - (rect.top / windowHeight);
            const clampedProgress = Math.min(Math.max(progress, 0), 1);
            
            deckCards.forEach((card) => {
              const baseScale = parseFloat(card.getAttribute('data-base-scale'));
              const baseRotate = parseFloat(card.getAttribute('data-base-rotate'));
              const spreadMulti = parseFloat(card.getAttribute('data-spread-multi'));
              
              // Dynamic shuffle strength based on scroll position!
              const factor = clampedProgress * 1.5;
              const currentRotate = baseRotate * factor;
              const translateX = spreadMulti * factor * 10;
              
              card.style.transform = `scale(${baseScale}) rotate(${currentRotate}deg) translateX(${translateX}px)`;
            });
          }
        }'''

js_new_overlay = '''        // 2. 300vh Quote Deck Swap Scroll Logic
        const aboutSection = document.getElementById('about');
        const quoteCards = document.querySelectorAll('.quote-card');
        
        if (aboutSection && quoteCards.length > 0) {
          const rect = aboutSection.getBoundingClientRect();
          const sectionHeight = aboutSection.offsetHeight;
          const windowHeight = window.innerHeight;
          
          // Calculate scroll progress exclusively over the 300vh space (0 to 1)
          // `rect.top` starts at 0 when the sticky container just hits the screen top.
          // It scales out to highly negative as you scroll down.
          const maxScroll = sectionHeight - windowHeight;
          const scrollPx = Math.max(0, -rect.top); // Only count when pinned
          const progress = Math.min(scrollPx / maxScroll, 1);
          
          // The total cards minus 1
          const maxIndex = quoteCards.length - 1;
          
          // Current precise float index
          const activeFloat = progress * maxIndex;
          
          quoteCards.forEach((card) => {
            const index = parseInt(card.getAttribute('data-index'));
            
            // Calculate difference from the current active floating point
            const diff = index - activeFloat;
            
            // If diff > 0: The card is coming up in the future (Behind)
            // If diff == 0: The card is exactly currently active
            // If diff < -1: The card is far in the past (Disappeared completely up)
            
            let scale = 1;
            let opacity = 1;
            let translateY = 0;
            let rotateZ = 0;
            
            if (diff > 0) {
              // Card is behind
              scale = 1 - (diff * 0.05);
              opacity = 1 - (diff * 0.3);
              translateY = diff * 20; // Pushed down visually
              rotateZ = diff * 2; // Slight twist
            } else if (diff < 0) {
              // Card has passed (Slides UP and fades out)
              scale = 1 + (Math.abs(diff) * 0.05); // slight pop
              opacity = 1 - Math.abs(diff) * 2; // Fades aggressively 
              translateY = diff * 150; // Sweeps furiously UP
              rotateZ = diff * -5;
            }
            
            // Clamp opacity safely
            opacity = Math.max(0, Math.min(1, opacity));
            
            // Apply physics! Add minor Z-translate for true 3d layer effect
            card.style.transform = `translateY(${translateY}px) scale(${scale}) rotateZ(${rotateZ}deg) translateZ(0)`;
            card.style.opacity = opacity;
            card.style.zIndex = quoteCards.length - index;
          });
        }'''
        
content = content.replace(js_old, js_new_overlay)

with open(r'd:\New folder (2)\portfolio-app\src\pages\index.astro', 'w', encoding='utf-8') as f:
    f.write(content)
