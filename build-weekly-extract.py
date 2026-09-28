#!/usr/bin/env python3
"""
Build js/weekly-extract.json from js/data.js for the weekly summary skill.

data.js is ~290KB and gets truncated by web_fetch in the claude.ai sandbox.
This keeps only the fields enterprise-csm-weekly-summary actually reads, and
keeps pulseNote only for Concerning/Poor opps (the ones it quotes) — about 66KB.

Run from the repo root after every pulse refresh:
    python3 build-weekly-extract.py
"""
import json, re, sys, pathlib

SRC = pathlib.Path('js/data.js')
OUT = pathlib.Path('js/weekly-extract.json')

if not SRC.exists():
    sys.exit('run this from the repo root — js/data.js not found')

raw = SRC.read_text(encoding='utf-8-sig')
m = re.search(r'const ACCOUNTS_DATA\s*=\s*(\[[\s\S]*?\]);', raw)
if not m:
    sys.exit('could not locate ACCOUNTS_DATA in js/data.js')
accounts = json.loads(m.group(1))

header = raw.split('\n')[1].strip() if '\n' in raw else ''
source_date = (re.search(r'SFDC (\d{4}-\d{2}-\d{2})', header) or [None, 'unknown'])[1]

out, kept_notes = [], 0
for a in accounts:
    opps = []
    for o in a.get('opportunities', []):
        e = {
            'contract_end': o.get('contract_end'),
            'pulse':        o.get('pulse'),
            'arr':          o.get('arr'),
        }
        # pulseNote is 64% of the file; only the at-risk opps are ever quoted
        if o.get('pulse') in ('Concerning', 'Poor'):
            e['pulseNote'] = o.get('pulseNote')
            kept_notes += 1
        opps.append(e)
    out.append({
        'accountName':   a.get('accountName'),
        'name':          a.get('accountName'),   # alias — skill reads .get('name')
        'csmKey':        a.get('csmKey'),
        'csm':           a.get('csm'),
        'opportunities': opps,
    })

payload = {
    'generated_from': 'js/data.js',
    'pulse_synced':   source_date,
    'accounts':       out,
}
OUT.write_text(json.dumps(payload, separators=(',', ':')), encoding='utf-8')

print(f'wrote {OUT}  {OUT.stat().st_size:,} bytes  (data.js is {SRC.stat().st_size:,})')
print(f'  accounts: {len(out)}   opps: {sum(len(a["opportunities"]) for a in out)}   pulseNotes kept: {kept_notes}')
print(f'  pulse synced: {source_date}')
