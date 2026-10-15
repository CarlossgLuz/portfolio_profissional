const {test, after, before} = require('node:test');
const assert = require('node:assert/strict');
const {chromium} = require('playwright');
const {spawn} = require('node:child_process');
const path = require('node:path');
let server, browser;
before(async () => {
  server = spawn('python3', ['-m', 'http.server', '4173', '--bind', '127.0.0.1'], {cwd:path.join(__dirname,'..'),stdio:'ignore'});
  browser = await chromium.launch({headless:true, ...(process.env.CHROMIUM_EXECUTABLE ? {executablePath:process.env.CHROMIUM_EXECUTABLE} : {})});
  for(let i=0;i<30;i++){try{await fetch('http://127.0.0.1:4173');break}catch{await new Promise(r=>setTimeout(r,100))}}
});
after(async () => {await browser?.close();server?.kill();});
test('visitor sees AppSec positioning and relevant projects in every language', async () => {
  for (const lang of ['pt-BR','en','es']) {
    const page = await browser.newPage({reducedMotion:'reduce'});
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.goto('http://127.0.0.1:4173/?lang='+lang);
    assert.match(await page.locator('.hero__role').innerText(), /AppSec/);
    assert.equal(await page.getByRole('heading',{name:'Vaultin',exact:true}).count(),1);
    assert.equal(await page.getByRole('heading',{name:/QA/}).count(),1);
    for(const link of await page.locator('.resume-link').all()) {
      const response=await page.request.get(new URL(await link.getAttribute('href'),page.url()).href);
      assert.equal(response.status(),200);
      assert.match(response.headers()['content-type'],/pdf/);
    }
    assert.deepEqual(errors,[]);await page.close();
  }
});
test('mobile layout fits, navigation closes on Escape and locale controls work', async () => {
  for(const width of [320,375,430,768,1024,1440,1920]) {
    const page=await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'});
    await page.goto('http://127.0.0.1:4173');
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`overflow at ${width}`);
    if(width<=940) {
      await page.locator('#ham').click();
      assert.equal(await page.locator('#ham').getAttribute('aria-expanded'),'true');
      await page.keyboard.press('Escape');
      assert.equal(await page.locator('#ham').getAttribute('aria-expanded'),'false');
      assert.equal(await page.evaluate(()=>document.activeElement.id),'ham');
      await page.locator('#ham').click();
    }
    await page.locator(width<=940?'#mob .lang-btn[data-lang="en"]':'.nav-actions .lang-btn[data-lang="en"]').click();
    assert.equal(await page.locator('html').getAttribute('lang'),'en');
    assert.equal(await page.locator('.theme-toggle').count(),0);
    assert.equal(await page.locator('html').getAttribute('data-theme'),'dark');
    await page.close();
  }
});
test('reduced motion displays the brand without running visual animation', async () => {
  const page=await browser.newPage({reducedMotion:'reduce'});
  await page.goto('http://127.0.0.1:4173');
  assert.equal(await page.locator('#intro').isVisible(),false);
  assert.equal(await page.locator('html').getAttribute('data-theme'),'dark');
  assert.equal(await page.locator('.brand-mark').isVisible(),true);
  assert.equal(await page.evaluate(()=>document.querySelector('.motion-film').paused),true);
  await page.close();
});
test('contact remains readable against its background in the dark theme', async () => {
  const page=await browser.newPage({reducedMotion:'reduce'});
  await page.goto('http://127.0.0.1:4173');
  const contrast=await page.locator('#contact h2').evaluate(el=>{
    const rgb=x=>x.match(/[\d.]+/g).slice(0,3).map(Number);
    const luminance=c=>c.map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4}).reduce((a,v,i)=>a+v*[.2126,.7152,.0722][i],0);
    const a=luminance(rgb(getComputedStyle(el).color)),b=luminance(rgb(getComputedStyle(el.closest('section')).backgroundColor));
    return (Math.max(a,b)+.05)/(Math.min(a,b)+.05);
  });
  assert.ok(contrast>=3,`heading contrast ${contrast}`);await page.close();
});
test('WCAG A/AA automated checks pass in the dark theme', async () => {
  const AxeBuilder=require('@axe-core/playwright').default;
  for(const theme of ['dark']) {
    const context=await browser.newContext({reducedMotion:'reduce'});
    const page=await context.newPage();
    await page.goto('http://127.0.0.1:4173');
    const result=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
    assert.deepEqual(result.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})),[],theme);
    await page.close();
  }
});
test('motion control pauses and resumes the visible film without changing navigation', async () => {
  const page=await browser.newPage({viewport:{width:1440,height:900}});
  await page.addInitScript(()=>sessionStorage.setItem('portfolio-intro-seen','true'));
  await page.goto('http://127.0.0.1:4173');
  await page.locator('.motion-interlude').scrollIntoViewIfNeeded();
  await page.waitForFunction(()=>document.querySelector('.motion-film').readyState>=2);
  await page.waitForFunction(()=>!document.querySelector('.motion-film').paused);
  // The effect control is at the end of the hero; its user setting governs all scenes.
  await page.locator('#motion-toggle').click();
  assert.equal(await page.locator('#motion-toggle').getAttribute('aria-pressed'),'true');
  assert.equal(await page.evaluate(()=>document.querySelector('.motion-film').paused),true);
  await page.reload();await page.locator('.motion-interlude').scrollIntoViewIfNeeded();
  assert.equal(await page.evaluate(()=>document.querySelector('.motion-film').paused),true);
  await page.locator('#motion-toggle').click();
  await page.locator('.motion-interlude').scrollIntoViewIfNeeded();
  await page.waitForFunction(()=>!document.querySelector('.motion-film').paused);
  await page.close();
});
test('pause restores the native cursor and stops its decorative loop', async () => {
  const page=await browser.newPage({viewport:{width:1440,height:900}});
  await page.addInitScript(()=>sessionStorage.setItem('portfolio-intro-seen','true'));
  await page.goto('http://127.0.0.1:4173');await page.mouse.move(300,300);
  await page.locator('#motion-toggle').click();
  assert.equal(await page.locator('body').evaluate(el=>el.classList.contains('cursor-ready')),false);
  await page.close();
});

test('legacy light preference cannot override dark-only presentation and copy stays neutral',async()=>{
 for(const lang of ['pt-BR','en','es']) {
  const page=await browser.newPage({reducedMotion:'reduce'});
  await page.addInitScript(()=>localStorage.setItem('portfolio-theme','light'));
  await page.goto('http://127.0.0.1:4173/?lang='+lang);
  assert.equal(await page.locator('html').getAttribute('data-theme'),'dark');
  assert.equal(await page.locator('.theme-toggle').count(),0);
  assert.equal(await page.locator('[data-i18n="hero.availability"], [data-i18n="hero.workMode"]').count(),0);
  assert.doesNotMatch(await page.locator('#contact').innerText(),/Busco oportunidades|seeking junior|Busco oportunidades júnior/i);
  await page.close();
 }
});
test('small screens keep secondary information readable and links easy to tap',async()=>{
 for(const width of [320,390,768]){
  const page=await browser.newPage({viewport:{width,height:844},reducedMotion:'reduce'});
  await page.goto('http://127.0.0.1:4173');
  assert.ok(await page.locator('.hero__meta').evaluate(el=>parseFloat(getComputedStyle(el).fontSize)>=10),'hero metadata minimum 10px');
  for(const link of await page.locator('.hero__social a').all())assert.ok((await link.boundingBox()).height>=44,'social link touch target minimum 44px');
  await page.locator('#ham').click();
  for(const link of await page.locator('#mob .lang-btn').all()){
   const box=await link.boundingBox();assert.ok(box.width>=44&&box.height>=44,'language touch target minimum 44px');
  }
  await page.close();
 }
});
test('signal banner joins identical groups at the loop seam without a gap',async()=>{
 for(const width of [320,768,1440,2560]){
  const page=await browser.newPage({viewport:{width,height:900}});
  await page.addInitScript(()=>sessionStorage.setItem('portfolio-intro-seen','true'));
  await page.goto('http://127.0.0.1:4173');
  assert.equal(await page.locator('.signal-group').count(),2);
  const result=await page.locator('.signal-track').evaluate(track=>{
   const [a,b]=track.children;const animation=track.getAnimations()[0];
   animation.pause();animation.currentTime=0;
   const start=a.getBoundingClientRect().left;
   const firstWidth=a.getBoundingClientRect().width;
   const gap=b.getBoundingClientRect().left-a.getBoundingClientRect().right;
   animation.currentTime=animation.effect.getTiming().duration-1;
   return {gap,width:firstWidth,end:b.getBoundingClientRect().left,start,same:a.textContent===b.textContent};
  });
  assert.equal(result.same,true);assert.ok(Math.abs(result.gap)<.5);assert.ok(result.width>=width);
  assert.ok(Math.abs(result.end-result.start)<1,'loop boundary aligned');await page.close();
 }
});
