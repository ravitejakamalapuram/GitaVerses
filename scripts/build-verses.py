#!/usr/bin/env python3
"""Build verses.js from public-domain / openly licensed sources.

Inputs (download once, then run offline):
  1. gita/gita  data/verse.json  (The Unlicense)  - Sanskrit Devanagari text only
       gh api -H "Accept: application/vnd.github.raw" repos/gita/gita/contents/data/verse.json > verse.json
  2. Wikisource "Bhagavad-Gita (Besant 4th)" discourses 1-18 (Annie Besant, 1922; public domain)
       for i in $(seq 1 18); do curl -sS --get --data-urlencode "page=Bhagavad-Gita (Besant 4th)/Discourse $i" \
         "https://en.wikisource.org/w/api.php?action=parse&prop=text&format=json&redirects=1" -o besant/d$i.json; sleep 5; done

Usage: python3 scripts/build-verses.py verse.json besant/ verses.js   (needs beautifulsoup4)

The transliteration is generated here, character by character, from the Devanagari (IAST).
Nothing is translated by this script.
"""
import json, re, sys

def parse_besant(besant_dir):
    """Parse Wikisource 'Bhagavad-Gita (Besant 4th)/Discourse N' API responses into {chapter: [english verse, ...]}.

    Each English verse on Wikisource ends with a right-floated "(n)" marker; Sanskrit blocks
    (lang="sa"), footnote references and page markers are removed before splitting on those markers.
    """
    from bs4 import BeautifulSoup
    out = {}
    for ch in range(1, 19):
        h = json.load(open(f'{besant_dir}/d{ch}.json'))['parse']['text']['*']
        soup = BeautifulSoup(h, 'html.parser')
        for sel in ['sup.reference', 'style', 'link', 'span.ws-pagenum', '.mw-references-wrap', 'ol.references',
                    'div.ws-noexport', '#headertemplate', '.wst-header-structure', 'table', '[lang=sa]']:
            for t in soup.select(sel):
                t.decompose()
        prev = 0
        for sp in soup.select('span.wst-floatright'):
            m = re.search(r'\d+', sp.get_text(strip=True))
            n = int(m.group()) if m else None
            if n != prev + 1:  # a handful of markers are mis-transcribed on Wikisource; they are sequential
                print(f'  ch{ch}: marker {sp.get_text(strip=True)!r} -> {prev + 1}', file=sys.stderr)
                n = prev + 1
            prev = n
            sp.replace_with(f' §§{n}§§ ')
        parts = re.split(r'§§(\d+)§§', soup.get_text(' ').replace('\u200b', ''))
        verses = []
        for i in range(1, len(parts), 2):
            body = re.sub(r'\s+', ' ', parts[i - 1]).strip()
            if i == 1:
                body = re.sub(r'^.*?DISCOURSE\.?\s*', '', body)
            verses.append(body)
        out[str(ch)] = verses
    return out

VERSE_JSON, BESANT_DIR, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
g = json.load(open(VERSE_JSON))
b = parse_besant(BESANT_DIR)

V={'अ':'a','आ':'ā','इ':'i','ई':'ī','उ':'u','ऊ':'ū','ऋ':'ṛ','ॠ':'ṝ','ऌ':'ḷ','ॡ':'ḹ','ए':'e','ऐ':'ai','ओ':'o','औ':'au'}
M={'ा':'ā','ि':'i','ी':'ī','ु':'u','ू':'ū','ृ':'ṛ','ॄ':'ṝ','ॢ':'ḷ','ॣ':'ḹ','े':'e','ै':'ai','ो':'o','ौ':'au'}
C=dict(zip('क ख ग घ ङ च छ ज झ ञ ट ठ ड ढ ण त थ द ध न प फ ब भ म य र ल ळ व श ष स ह'.split(),
 'k kh g gh ṅ c ch j jh ñ ṭ ṭh ḍ ḍh ṇ t th d dh n p ph b bh m y r l ḷ v ś ṣ s h'.split()))
O={'ं':'ṃ','ः':'ḥ','ँ':'m̐','ऽ':"'",'ॐ':'oṃ','।':'','॥':''}
def iast(s):
    out=[];i=0
    while i<len(s):
        ch=s[i]
        if ch in C:
            out.append(C[ch]); j=i+1
            if j<len(s) and s[j]=='़': j+=1
            if j<len(s) and s[j] in M: out.append(M[s[j]]); j+=1
            elif j<len(s) and s[j]=='्': j+=1
            else: out.append('a')
            i=j; continue
        if ch in V: out.append(V[ch])
        elif ch in O: out.append(O[ch])
        elif ch=='़' or ch=='‌' or ch=='‍': pass
        elif 'ऀ'<=ch<='ॿ': raise ValueError(f'unmapped {ch!r} U+{ord(ch):04X}')
        else: out.append(ch)
        i+=1
    t=''.join(out)
    t='\n'.join(re.sub(r'\s+',' ',l).strip() for l in t.split('\n'))
    return t.strip()

SPK=re.compile(r'^\s*((?:धृतराष्ट्र|सञ्जय|संजय|अर्जुन) उवाच|श्री ?भगवानुवाच)\s*')
def clean_sa(t):
    # fix legacy-font artefact: i-matra misplaced inside a conjunct (e.g. श्िच -> श्चि)
    t=re.sub(r'्ि((?:[कखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसह]्)*[कखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसह])',r'्\1ि',t)
    t=re.sub(r'।+\s*\d+\.\d+\s*।*',' ॥',t)
    t=t.replace('।।','॥')
    t=re.sub(r'।(?=\S)','।\n',t)
    t=re.sub(r'।[ \t]+(?=\S)','।\n',t)
    m=SPK.match(t)
    if m: t=m.group(1)+'\n'+t[m.end():]
    lines=[re.sub(r'[ \t]+',' ',l).strip() for l in t.split('\n')]
    return '\n'.join(l for l in lines if l)

def clean_en(t):
    t=re.sub(r'(\w) -(\w)',r'\1-\2',t)
    t=re.sub(r'\s+([,;:.!?])',r'\1',t)
    t=t.replace('INDESCTRUCTIBLE','INDESTRUCTIBLE')
    return re.sub(r'\s+',' ',t).strip()

TITLES={1:"The Despondency of Arjuna",2:"Yoga by the Sankhya",3:"The Yoga of Action",4:"The Yoga of Wisdom",
5:"The Yoga of the Renunciation of Action",6:"The Yoga of Self-Subdual",7:"The Yoga of Discriminative Knowledge",
8:"The Yoga of the Indestructible Supreme Eternal",9:"The Yoga of the Kingly Science and the Kingly Secret",
10:"The Yoga of Sovereignty",11:"The Yoga of the Vision of the Universal Form",12:"The Yoga of Devotion",
13:"The Yoga of the Distinction between the Field and the Knower of the Field",14:"The Yoga of Separation from the Three Qualities",
15:"The Yoga of Attaining the Supreme Spirit",16:"The Yoga of Division between the Divine and the Demoniacal",
17:"The Yoga of the Division of Threefold Faith",18:"The Yoga of Liberation by Renunciation"}

rows=[]
for v in sorted(g,key=lambda x:(x['chapter_number'],x['verse_number'])):
    c,n=v['chapter_number'],v['verse_number']
    sa=clean_sa(v['text'])
    en=clean_en(b[str(c)][n-1])
    rows.append([c,n,sa,iast(sa),en])
assert len(rows)==701

hdr='''// Bhagavad Gita - complete text bundled offline (18 chapters, 701 verses).
//
// Sanskrit (Devanagari): from the gita/gita dataset (https://github.com/gita/gita),
//   released under The Unlicense (public-domain dedication). Only the Sanskrit
//   "text" field is used; verse-number markers were normalised to "॥".
// Transliteration (IAST): generated mechanically from the Devanagari above by
//   scripts/build-verses.py (a character-by-character transliteration, not a translation).
// English: Annie Besant, "The Bhagavad-Gita" (4th ed., 1922), public domain,
//   as transcribed on Wikisource: https://en.wikisource.org/wiki/Bhagavad-Gita_(Besant_4th)
//   Footnotes omitted. Chapter titles are Besant's colophon titles.
// See CREDITS.md for full source and licence details.
//
// Generated file - edit scripts/build-verses.py instead.
'''
js=hdr+'\nconst GITA_CHAPTER_TITLES = '+json.dumps({str(k):v for k,v in TITLES.items()},ensure_ascii=False,indent=2)+';\n\n'
js+='// [chapter, verse, sanskrit, transliteration, english]\nconst GITA_VERSE_ROWS = [\n'+',\n'.join(json.dumps(r,ensure_ascii=False) for r in rows)+'\n];\n\n'
js+='''const GITA_VERSES = GITA_VERSE_ROWS.map(([chapter, verse, sanskrit, transliteration, en]) => ({
  chapter,
  verse,
  theme: GITA_CHAPTER_TITLES[chapter],
  sanskrit,
  transliteration,
  translation: { en }
}));
'''
open(OUT,'w').write(js)
print(len(js.encode()),'bytes')
