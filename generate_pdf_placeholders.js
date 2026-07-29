import fs from 'fs';
import path from 'path';

// Valid minimal PDF 1.4 binary structure
function createMinimalPdf(title, author) {
  const content = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 4 0 R >> >> /MediaBox [0 0 612 792] /Contents 5 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
5 0 obj
<< /Length 120 >>
stream
BT
/F1 18 Tf
50 720 Td
(${title}) Tj
/F1 12 Tf
0 -30 Td
(Auteur: ${author}) Tj
0 -20 Td
(Rapport technique - Remplacez ce fichier par votre document PDF original.) Tj
ET
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
00000000115 00000 n 
0000000244 00000 n 
0000000315 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
485
%%EOF`;
  return content;
}

const docsDir = 'C:/Users/HP-PC/.gemini/antigravity/scratch/embedded-portfolio/public/docs';
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

fs.writeFileSync(path.join(docsDir, 'Rapport_de_stage_LPCA.pdf'), createMinimalPdf('Rapport de Stage LPCA - CNRS', 'Fatima Elkhadiri'));
fs.writeFileSync(path.join(docsDir, 'Rapport_projet_Miroir_Pepper_GE5A.pdf'), createMinimalPdf('Rapport Projet Miroir Pepper GE5A', 'Fatima Elkhadiri'));

console.log('Placeholder PDFs created successfully!');
