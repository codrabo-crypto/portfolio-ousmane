import json
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.platypus import SimpleDocTemplate,Paragraph,Spacer,PageBreak,KeepTogether
from reportlab.lib.styles import getSampleStyleSheet,ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
root=Path(__file__).resolve().parents[1]
font='/System/Library/Fonts/Supplemental/Arial.ttf'
pdfmetrics.registerFont(TTFont('Body',font))
pdfmetrics.registerFont(TTFont('BodyBold','/System/Library/Fonts/Supplemental/Arial Bold.ttf'))
styles=getSampleStyleSheet()
styles.add(ParagraphStyle(name='Text',fontName='Body',fontSize=10,leading=15,textColor=HexColor('#20303a'),spaceAfter=9))
styles.add(ParagraphStyle(name='TitleNew',parent=styles['Text'],fontName='BodyBold',fontSize=24,leading=29,spaceAfter=20))
styles.add(ParagraphStyle(name='SectionNew',parent=styles['Text'],fontName='BodyBold',fontSize=13,leading=18,textColor=HexColor('#98412d'),spaceBefore=14,spaceAfter=8))
styles.add(ParagraphStyle(name='SmallNew',parent=styles['Text'],fontSize=8,leading=12))
def p(t,style='Text'):return Paragraph(escape(t),styles[style])
def foot(c,d):
 c.setStrokeColor(HexColor('#ddd4ca'));c.line(48,43,547,43);c.setFont('Body',8);c.setFillColor(HexColor('#52616a'));c.drawString(48,29,'Support informatique · Fiche de réalisation · 25 octobre 2026');c.drawRightString(547,29,str(d.page))
for case in json.loads((root/'data/projets.json').read_text()):
 story=[p(case['category'].upper(),'SmallNew'),p(case['title'],'TitleNew'),p(case['context']+' · '+case['period'],'SmallNew')]
 for title,body in [('Contexte et besoin',case['need']),('Rôle',case['role']),('Environnement',case['environment'])]:story += [p(title,'SectionNew'),p(body)]
 story += [p('Démarche','SectionNew')]
 for i,(title,body) in enumerate(case['steps'],1):story +=[p(str(i)+'. '+title,'SectionNew'),p(body)]
 story +=[p('Difficulté rencontrée','SectionNew'),p(case['difficulty']),PageBreak(),p('Preuves, résultats et limites','TitleNew'),p('Élément consultable','SectionNew'),p(case['proof']),p(case['evidence_note']),p('Résultat documenté','SectionNew'),p(case['result']),p('Vérifications','SectionNew')]
 for check,result in case['tests']:story +=[p(check+' : '+result)]
 story +=[p('Limites','SectionNew')]+[p('• '+x) for x in case['limits']]
 story +=[p('Suite proposée','SectionNew')]+[p('• '+x) for x in case['next']]
 story +=[p('Repères du référentiel','SectionNew'),p(', '.join(case['mapping'])+'. Rattachements indicatifs ; ne constituent pas une validation de compétences.','SmallNew'),p('Captures, schémas et liens complémentaires : fiche HTML correspondante dans le site.','SmallNew')]
 doc=SimpleDocTemplate(str(root/'documents'/f"{case['id']}.pdf"),pagesize=(595.28,841.89),rightMargin=48,leftMargin=48,topMargin=48,bottomMargin=58,title=case['title'],author='',subject='Fiche technique anonymisée',pageCompression=1)
 doc.build(story,onFirstPage=foot,onLaterPages=foot)
 print(case['id'])
