import fs from 'fs';
import path from 'path';

function generatePDF() {
  const content = [
    "%PDF-1.4",
    "1 0 obj",
    "<< /Type /Catalog /Pages 2 0 R >>",
    "endobj",
    "2 0 obj",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "endobj",
    "3 0 obj",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>",
    "endobj",
  ];

  // PDF stream with text commands
  const lines = [
    "BT",
    "/F1 22 Tf",
    "50 790 Td",
    "(SRUJAN K S) Tj",
    "/F2 11 Tf",
    "0 -20 Td",
    "(Bengaluru, India | srujanks0406@gmail.com | github.com/srujanks | linkedin.com/in/srujan-k-s) Tj",
    "0 -15 Td",
    "(Computer Science Engineering Student | Full-Stack & Backend Developer) Tj",
    "0 -25 Td",
    "/F1 13 Tf",
    "(EDUCATION) Tj",
    "/F2 10 Tf",
    "0 -16 Td",
    "(BMS Institute of Technology and Management - B.E. Computer Science Engineering (2023 - 2027)) Tj",
    "0 -14 Td",
    "(CGPA: 8.41 / 10 | Current Academic Standing: 9.02/10) Tj",
    "0 -14 Td",
    "(Vishwachetana Vidyaniketana PU College - Pre-University Science (93.45%) | Gurudeva Vidya SSLC (95.67%)) Tj",
    "0 -25 Td",
    "/F1 13 Tf",
    "(TECHNICAL SKILLS) Tj",
    "/F2 10 Tf",
    "0 -16 Td",
    "(Languages: C, C++, SQL, HTML, CSS, JavaScript, TypeScript) Tj",
    "0 -14 Td",
    "(Frontend: React.js, Tailwind CSS, Responsive Web Design, Component Architecture) Tj",
    "0 -14 Td",
    "(Backend: Node.js, Express.js, RESTful APIs, JWT Authentication, RBAC, Clean Architecture) Tj",
    "0 -14 Td",
    "(Databases & Tools: PostgreSQL, MySQL, MongoDB, Prisma ORM, Docker, Git, GitHub, Postman, AWS) Tj",
    "0 -14 Td",
    "(CS Concepts: Data Structures & Algorithms, OOP, Database Management Systems, Computer Networks) Tj",
    "0 -25 Td",
    "/F1 13 Tf",
    "(PROJECTS) Tj",
    "/F1 11 Tf",
    "0 -16 Td",
    "(1. AgriOS - AI-Assisted Agricultural Procurement Platform (React, Node, Express, PostgreSQL, Prisma, Docker)) Tj",
    "/F2 9.5 Tf",
    "0 -13 Td",
    "(- Built multi-role procurement ecosystem connecting Farmers, Buyers, Warehouses, Logistics, and Admins) Tj",
    "0 -12 Td",
    "(- Implemented layered architecture: Controllers, Services, Repositories, Validators, and Centralized Error Handling) Tj",
    "0 -12 Td",
    "(- Enforced JWT access tokens with HTTP-only refresh cookies and granular Role-Based Access Control (RBAC)) Tj",
    "/F1 11 Tf",
    "0 -18 Td",
    "(2. Full-Stack E-Commerce Web Application Platform (React, Node.js, Express.js, Database, REST APIs)) Tj",
    "/F2 9.5 Tf",
    "0 -13 Td",
    "(- Developed responsive shopping platform with product search, filtering, persistent cart state, and order tracking) Tj",
    "0 -12 Td",
    "(- Implemented atomic inventory management logic and secure database schema for transactions and records) Tj",
    "0 -25 Td",
    "/F1 13 Tf",
    "(CERTIFICATIONS & LEADERSHIP) Tj",
    "/F2 10 Tf",
    "0 -16 Td",
    "(- AWS Certified Cloud Practitioner - Amazon Web Services) Tj",
    "0 -14 Td",
    "(- Large Language Model Certification - NPTEL) Tj",
    "0 -14 Td",
    "(- Annual Tech Fest Coordinator & NSS Community Service Volunteer) Tj",
    "ET"
  ];

  const streamData = lines.join("\n");
  const streamLength = Buffer.byteLength(streamData, 'utf-8');

  content.push("4 0 obj");
  content.push(`<< /Length ${streamLength} >>`);
  content.push("stream");
  content.push(streamData);
  content.push("endstream");
  content.push("endobj");

  content.push("5 0 obj");
  content.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
  content.push("endobj");

  content.push("6 0 obj");
  content.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  content.push("endobj");

  let xrefOffset = 0;
  const offsets = [];
  let pdfText = "";

  for (const part of content) {
    if (part.endsWith("obj")) {
      offsets.push(Buffer.byteLength(pdfText, 'utf-8'));
    }
    pdfText += part + "\n";
  }

  xrefOffset = Buffer.byteLength(pdfText, 'utf-8');
  pdfText += "xref\n";
  pdfText += `0 ${offsets.length + 1}\n`;
  pdfText += "0000000000 65535 f \n";
  for (const offset of offsets) {
    pdfText += String(offset).padStart(10, "0") + " 00000 n \n";
  }

  pdfText += "trailer\n";
  pdfText += `<< /Size ${offsets.length + 1} /Root 1 0 R >>\n`;
  pdfText += "startxref\n";
  pdfText += `${xrefOffset}\n`;
  pdfText += "%%EOF\n";

  fs.mkdirSync(path.resolve('public'), { recursive: true });
  fs.writeFileSync(path.resolve('public', 'Srujan_K_S_Resume.pdf'), pdfText);
  console.log("Generated public/Srujan_K_S_Resume.pdf successfully!");
}

generatePDF();
