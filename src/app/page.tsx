import React from 'react';
import { Mail, ExternalLink, Code2, Code } from 'lucide-react';

export default function Home() {
  // ข้อมูลโปรเจกต์จำลองสำหรับการแสดงผลในตาราง/การ์ด
  const projects = [
    { title: "Project Alpha", desc: "Software engineering project using React and Node.js", link: "#" },
    { title: "Project Beta", desc: "Mobile application dashboard for data tracking", link: "#" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* Hero & About Section */}
      <section className="max-w-4xl mx-auto pt-20 pb-16 px-6">
        <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
          <Code2 size={20} />
          <span>Software Engineering Student</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-950 mb-4">
          สิษฐเชษฐ์ กระจายศรี
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mb-6">
          กำลังศึกษาอยู่ที่มหาวิทยาลัยบูรพา คณะวิทยาการสารสนเทศ สาขาวิศวกรรมซอฟต์แวร์ 
          มุ่งมั่นที่จะพัฒนาแอปพลิเคชันที่ตอบโจทย์ผู้ใช้งานและมีสถาปัตยกรรมโค้ดที่ดี
        </p>
        
        {/* Contact Links */}
        <div className="flex gap-4">
          <a href="#" className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition">
            <Code size={18} /> GitHub
          </a>
          <a href="mailto:your.email@email.com" className="flex items-center gap-2 border border-slate-300 px-4 py-2 rounded-lg hover:bg-slate-100 transition">
            <Mail size={18} /> ติดต่อฉัน
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto py-16 px-6 border-t border-slate-200">
        <h2 className="text-2xl font-bold text-slate-950 mb-6">ผลงานและโปรเจกต์</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-slate-600 mb-4 text-sm">{project.desc}</p>
              <a href={project.link} className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium hover:underline">
                ดูโปรเจกต์ <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}