import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, easeInOut } from "framer-motion";

const Services = () => {
  const services = [
    {
      svg: (
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="funnelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
          </defs>
          <path d="M50,20 L70,40 L70,70 L30,70 L30,40 Z" fill="url(#funnelGradient)" opacity="0.8" />
          <circle cx="35" cy="30" r="4" fill="#60a5fa">
            <animate attributeName="cy" values="30;35;30" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="65" cy="28" r="4" fill="#3b82f6">
            <animate attributeName="cy" values="28;33;28" dur="2s" repeatCount="indefinite" begin="0.3s" />
          </circle>
          <circle cx="50" cy="75" r="6" fill="#10b981">
            <animate attributeName="r" values="6;8;6" dur="1.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      ),
      title: "Lead Generation Services",
      description: "Power your pipeline with end-to-end lead generation covering data enrichment, precise appointment setting, and delivery of BANT-qualified leads that boost conversions.",
      gradient: "from-blue-500 to-blue-600",
      fullSvg: (
        <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ebeef3" />
              <stop offset="100%" stopColor="#e8eaf1" />
            </linearGradient>
            <linearGradient id="funnelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
            <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#f1f5f9" />
            </linearGradient>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
            </marker>
            <marker id="greenArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
            </marker>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.15"/>
            </filter>
          </defs>
          
          <rect width="800" height="400" fill="url(#bgGradient)" />
          
          {/* Main Funnel */}
          <path d="M350,150 L450,230 L450,350 L250,350 L250,230 Z" fill="url(#funnelGradient)" opacity="0.8" />
          <path d="M350,150 L450,230 L450,350 L250,350 L250,230 Z" fill="none" stroke="#1e3a8a" strokeWidth="2" />
          
          {/* Left side circles */}
          <circle cx="200" cy="170" r="12" fill="#60a5fa" />
          <circle cx="230" cy="150" r="12" fill="#3b82f6" />
          <circle cx="260" cy="180" r="12" fill="#1e40af" />
          
          {/* Right side circles */}
          <circle cx="500" cy="160" r="12" fill="#60a5fa" />
          <circle cx="530" cy="180" r="12" fill="#3b82f6" />
          <circle cx="560" cy="150" r="12" fill="#1e40af" />
          
          {/* Connection lines */}
          <path d="M200,170 L250,220" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <path d="M230,150 L270,200" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <path d="M260,180 L280,210" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <path d="M500,160 L450,220" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <path d="M530,180 L470,220" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <path d="M560,150 L460,220" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
          
          {/* Bottom results */}
          <circle cx="350" cy="400" r="16" fill="#10b981" />
          <circle cx="320" cy="380" r="16" fill="#10b981" />
          <circle cx="380" cy="380" r="16" fill="#10b981" />
          
          {/* Process cards */}
          <g transform="translate(150, 320)">
            <rect x="-40" y="-20" width="80" height="60" rx="8" fill="url(#cardGradient)" filter="url(#shadow)" />
            <circle cx="0" cy="-5" r="12" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2" />
            <text x="0" y="0" textAnchor="middle" fill="#0ea5e9" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold">DE</text>
            <text x="0" y="20" textAnchor="middle" fill="#1e3a8a" fontFamily="Arial, sans-serif" fontSize="8">Data Enrichment</text>
          </g>
          
          <g transform="translate(650, 320)">
            <rect x="-40" y="-20" width="80" height="60" rx="8" fill="url(#cardGradient)" filter="url(#shadow)" />
            <rect x="-8" y="-8" width="16" height="16" rx="2" fill="none" stroke="#0ea5e9" strokeWidth="2" />
            <line x1="-8" y1="0" x2="8" y2="0" stroke="#0ea5e9" strokeWidth="2" />
            <line x1="0" y1="-8" x2="0" y2="8" stroke="#0ea5e9" strokeWidth="2" />
            <text x="0" y="20" textAnchor="middle" fill="#1e3a8a" fontFamily="Arial, sans-serif" fontSize="8">Appointments</text>
          </g>
          
          {/* BANT Qualification */}
          <rect x="370" y="230" width="50" height="30" rx="5" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <text x="395" y="248" textAnchor="middle" fill="#15803d" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold">BANT</text>
        </svg>
      ),
    },
    {
      svg: (
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" fill="#f0f9ff" stroke="#3b82f6" strokeWidth="2" />
          <circle cx="30" cy="40" r="8" fill="#3b82f6">
            <animate attributeName="cy" values="40;45;40" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="35" r="6" fill="#0ea5e9">
            <animate attributeName="cy" values="35;40;35" dur="2s" repeatCount="indefinite" begin="0.2s" />
          </circle>
          <circle cx="70" cy="45" r="7" fill="#1d4ed8">
            <animate attributeName="cy" values="45;50;45" dur="2s" repeatCount="indefinite" begin="0.4s" />
          </circle>
          <path d="M30,65 Q50,75 70,65" stroke="#10b981" strokeWidth="3" fill="none">
            <animate attributeName="stroke-dasharray" values="0,100;100,0;0,100" dur="3s" repeatCount="indefinite" />
          </path>
        </svg>
      ),
      title: "Omni-channel Outreach",
      description: "Engage a larger audience through a coordinated approach that includes email, phone, social platforms, and digital touchpoints.",
      gradient: "from-green-500 to-green-600",
      fullSvg: (
        <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f0f9ff" />
              <stop offset="100%" stopColor="#e0f2fe" />
            </linearGradient>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.15"/>
            </filter>
            <path id="journeyPath" d="M50 300 Q200 150 400 250 Q600 350 750 170" fill="none" />
          </defs>
          
          <rect width="800" height="400" fill="url(#bgGradient)" />
          
          <path d="M50 300 Q200 150 400 250 Q600 350 750 170" 
                fill="none" stroke="#cbd5e1" strokeWidth="6" strokeDasharray="8 4" />
          
          <circle r="10" fill="#3b82f6" stroke="white" strokeWidth="2">
            <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
              <mpath href="#journeyPath"/>
            </animateMotion>
            <animate attributeName="r" values="10;14;10" dur="2s" repeatCount="indefinite" />
          </circle>
          
          {/* Channel Cards */}
          <g transform="translate(150, 180)">
            <rect x="-40" y="-30" width="80" height="60" rx="8" fill="white" filter="url(#shadow)" />
            <circle cx="0" cy="-5" r="12" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2"/>
            <path d="M-6 -10h12v8h-12z" fill="none" stroke="#3b82f6" strokeWidth="2"/>
            <path d="M-6 -10l6 4 6-4" fill="none" stroke="#3b82f6" strokeWidth="2"/>
            <text x="0" y="20" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="#1e40af">Email</text>
          </g>
          
          <g transform="translate(300, 120)">
            <rect x="-40" y="-30" width="80" height="60" rx="8" fill="white" filter="url(#shadow)" />
            <circle cx="0" cy="-5" r="12" fill="#eff6ff" stroke="#0A66C2" strokeWidth="2"/>
            <text x="0" y="0" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="#0A66C2">in</text>
            <text x="0" y="20" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="#0A66C2">LinkedIn</text>
          </g>
          
          <g transform="translate(500, 200)">
            <rect x="-40" y="-30" width="80" height="60" rx="8" fill="white" filter="url(#shadow)" />
            <circle cx="0" cy="-5" r="12" fill="#f0fdf4" stroke="#10B981" strokeWidth="2"/>
            <path d="M-4 -8c6 8 12 8 16 3" stroke="#10B981" strokeWidth="2" fill="none"/>
            <text x="0" y="20" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="#047857">Phone</text>
          </g>
          
          <g transform="translate(700, 100)">
            <rect x="-40" y="-30" width="80" height="60" rx="8" fill="white" filter="url(#shadow)" />
            <circle cx="0" cy="-5" r="12" fill="#fffbeb" stroke="#F59E0B" strokeWidth="2"/>
            <circle cx="-3" cy="-8" r="2" fill="#F59E0B"/>
            <circle cx="3" cy="-8" r="2" fill="#F59E0B"/>
            <rect x="-5" y="-2" width="10" height="2" rx="1" fill="#F59E0B"/>
            <text x="0" y="20" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="#92400e">Social</text>
          </g>
          
          {/* Connection lines */}
          <path d="M150 180 L300 120" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 2" opacity="0.6" />
          <path d="M300 120 L500 200" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 2" opacity="0.6" />
          <path d="M500 200 L700 100" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 2" opacity="0.6" />
        </svg>
      ),
    },
    {
      svg: (
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="60" height="60" rx="5" fill="#f8fafc" stroke="#8b5cf6" strokeWidth="2" />
          <rect x="25" y="30" width="50" height="5" rx="2" fill="#8b5cf6">
            <animate attributeName="width" values="50;40;50" dur="2s" repeatCount="indefinite" />
          </rect>
          <rect x="25" y="45" width="45" height="5" rx="2" fill="#a855f7">
            <animate attributeName="width" values="45;35;45" dur="2s" repeatCount="indefinite" begin="0.2s" />
          </rect>
          <rect x="25" y="60" width="40" height="5" rx="2" fill="#c084fc">
            <animate attributeName="width" values="40;30;40" dur="2s" repeatCount="indefinite" begin="0.4s" />
          </rect>
          <circle cx="80" cy="35" r="3" fill="#10b981">
            <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      ),
      title: "Global Sales Pre-Packed Lists",
      description: "Access ready-to-use, segmented lead lists tailored to your industry and target markets with verified contact information.",
      gradient: "from-purple-500 to-purple-600",
      fullSvg: (
        <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#f1f5f9" />
            </linearGradient>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.15"/>
            </filter>
          </defs>
          
          <rect width="800" height="400" fill="url(#bgGradient)" />
          
          {/* Main data table */}
          <g transform="translate(100, 80)">
            {/* Table header */}
            <rect x="0" y="0" width="600" height="40" fill="#2c3e50" rx="4"/>
            <rect x="0" y="40" width="600" height="2" fill="#1a252f"/>
            
            {/* Column separators */}
            <line x1="200" y1="0" x2="200" y2="200" stroke="#bdc3c7" strokeWidth="1"/>
            <line x1="400" y1="0" x2="400" y2="200" stroke="#bdc3c7" strokeWidth="1"/>
            
            {/* Header text */}
            <text x="100" y="25" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold">NAME</text>
            <text x="300" y="25" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold">COMPANY</text>
            <text x="500" y="25" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold">DESIGNATION</text>
            
            {/* Row separators */}
            <line x1="0" y1="40" x2="600" y2="40" stroke="#1a252f" strokeWidth="2"/>
            <line x1="0" y1="80" x2="600" y2="80" stroke="#ecf0f1" strokeWidth="1"/>
            <line x1="0" y1="120" x2="600" y2="120" stroke="#ecf0f1" strokeWidth="1"/>
            <line x1="0" y1="160" x2="600" y2="160" stroke="#ecf0f1" strokeWidth="1"/>
            
            {/* Data rows */}
            <rect x="0" y="40" width="600" height="40" fill="#f8f9fa"/>
            <text x="100" y="65" textAnchor="middle" fill="#2c3e50" fontFamily="Arial, sans-serif" fontSize="11">Alice Chen</text>
            <text x="300" y="65" textAnchor="middle" fill="#2c3e50" fontFamily="Arial, sans-serif" fontSize="11">Innovate Corp</text>
            <text x="500" y="65" textAnchor="middle" fill="#2c3e50" fontFamily="Arial, sans-serif" fontSize="11">CMO</text>
            
            <rect x="0" y="80" width="600" height="40" fill="white"/>
            <text x="100" y="105" textAnchor="middle" fill="#2c3e50" fontFamily="Arial, sans-serif" fontSize="11">Ben Carter</text>
            <text x="300" y="105" textAnchor="middle" fill="#2c3e50" fontFamily="Arial, sans-serif" fontSize="11">Nexus Tech</text>
            <text x="500" y="105" textAnchor="middle" fill="#2c3e50" fontFamily="Arial, sans-serif" fontSize="11">CTO</text>
            
            <rect x="0" y="120" width="600" height="40" fill="#f8f9fa"/>
            <text x="100" y="145" textAnchor="middle" fill="#2c3e50" fontFamily="Arial, sans-serif" fontSize="11">Sarah Lee</text>
            <text x="300" y="145" textAnchor="middle" fill="#2c3e50" fontFamily="Arial, sans-serif" fontSize="11">Global Solutions</text>
            <text x="500" y="145" textAnchor="middle" fill="#2c3e50" fontFamily="Arial, sans-serif" fontSize="11">CMO</text>
          </g>
          
          {/* Stats cards */}
          <g transform="translate(100, 300)">
            <rect x="0" y="0" width="120" height="60" rx="8" fill="white" filter="url(#shadow)" />
            <text x="60" y="25" textAnchor="middle" fill="#8b5cf6" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold">10K+</text>
            <text x="60" y="45" textAnchor="middle" fill="#6b7280" fontFamily="Arial, sans-serif" fontSize="10">Verified Leads</text>
          </g>
          
          <g transform="translate(250, 300)">
            <rect x="0" y="0" width="120" height="60" rx="8" fill="white" filter="url(#shadow)" />
            <text x="60" y="25" textAnchor="middle" fill="#10b981" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold">95%</text>
            <text x="60" y="45" textAnchor="middle" fill="#6b7280" fontFamily="Arial, sans-serif" fontSize="10">Accuracy Rate</text>
          </g>
          
          <g transform="translate(400, 300)">
            <rect x="0" y="0" width="120" height="60" rx="8" fill="white" filter="url(#shadow)" />
            <text x="60" y="25" textAnchor="middle" fill="#3b82f6" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold">50+</text>
            <text x="60" y="45" textAnchor="middle" fill="#6b7280" fontFamily="Arial, sans-serif" fontSize="10">Industries</text>
          </g>
          
          <g transform="translate(550, 300)">
            <rect x="0" y="0" width="120" height="60" rx="8" fill="white" filter="url(#shadow)" />
            <text x="60" y="25" textAnchor="middle" fill="#f59e0b" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold">Global</text>
            <text x="60" y="45" textAnchor="middle" fill="#6b7280" fontFamily="Arial, sans-serif" fontSize="10">Coverage</text>
          </g>
        </svg>
      ),
    },
    {
      svg: (
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="25" width="50" height="50" rx="8" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
          <path d="M40,35 L60,35 L60,55 L40,55 Z" fill="#fef3c7" />
          <path d="M45,40 L55,40 L55,50 L45,50 Z" fill="#f59e0b" />
          <path d="M35,65 L65,65" stroke="#10b981" strokeWidth="3" strokeLinecap="round">
            <animate attributeName="d" values="M35,65 L65,65; M35,65 L45,60 L55,70 L65,65; M35,65 L65,65" dur="3s" repeatCount="indefinite" />
          </path>
          <circle cx="50" cy="70" r="3" fill="#10b981">
            <animate attributeName="cy" values="70;65;70" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      ),
      title: "E-Commerce Consultancy",
      description: "Drive growth with tailored strategies for conversion optimization, platform planning, and store scaling.",
      gradient: "from-orange-500 to-orange-600",
      fullSvg: (
        <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fffbeb" />
              <stop offset="100%" stopColor="#fef3c7" />
            </linearGradient>
            <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#f1f5f9" />
            </linearGradient>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.15"/>
            </filter>
          </defs>
          
          <rect width="800" height="400" fill="url(#bgGradient)" />
          
          {/* Main store preview */}
          <g transform="translate(400, 200)">
            <rect x="-60" y="-50" width="120" height="160" rx="12" fill="white" stroke="#f59e0b" strokeWidth="2" filter="url(#shadow)" />
            
            <rect x="-50" y="-40" width="100" height="100" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            
            {/* Product grid */}
            <rect x="-45" y="-35" width="40" height="30" rx="2" fill="#3b82f6" opacity="0.7" />
            <rect x="5" y="-35" width="40" height="30" rx="2" fill="#10b981" opacity="0.7" />
            <rect x="-45" y="5" width="40" height="30" rx="2" fill="#f59e0b" opacity="0.7" />
            <rect x="5" y="5" width="40" height="30" rx="2" fill="#ef4444" opacity="0.7" />
            
            {/* Progress bar */}
            <rect x="-45" y="45" width="90" height="6" rx="3" fill="#10b981" />
            <text x="0" y="65" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="8" fill="#64748b">Conversion: +42%</text>
          </g>
          
          {/* Service cards */}
          <g transform="translate(150, 100)">
            <rect x="-40" y="-30" width="80" height="60" rx="8" fill="url(#cardGradient)" stroke="#10b981" strokeWidth="2" filter="url(#shadow)" />
            <path d="M-15 -5 L0 10 L15 -5" stroke="#10b981" strokeWidth="2" fill="none" />
            <text x="0" y="25" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="#065f46">Conversion</text>
          </g>
          
          <g transform="translate(650, 100)">
            <rect x="-40" y="-30" width="80" height="60" rx="8" fill="url(#cardGradient)" stroke="#3b82f6" strokeWidth="2" filter="url(#shadow)" />
            <rect x="-12" y="-8" width="24" height="16" rx="2" fill="none" stroke="#3b82f6" strokeWidth="2" />
            <line x1="-8" y1="-2" x2="8" y2="-2" stroke="#3b82f6" strokeWidth="2" />
            <line x1="-8" y1="2" x2="8" y2="2" stroke="#3b82f6" strokeWidth="2" />
            <line x1="-8" y1="6" x2="8" y2="6" stroke="#3b82f6" strokeWidth="2" />
            <text x="0" y="25" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="#1e40af">Platform</text>
          </g>
          
          <g transform="translate(150, 300)">
            <rect x="-40" y="-30" width="80" height="60" rx="8" fill="url(#cardGradient)" stroke="#f59e0b" strokeWidth="2" filter="url(#shadow)" />
            <path d="M-20 -5 L0 15 L20 -5" stroke="#f59e0b" strokeWidth="2" fill="none" />
            <path d="M-12 5 L12 5" stroke="#f59e0b" strokeWidth="2" />
            <text x="0" y="25" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="#92400e">Scaling</text>
          </g>
          
          <g transform="translate(650, 300)">
            <rect x="-40" y="-30" width="80" height="60" rx="8" fill="url(#cardGradient)" stroke="#8b5cf6" strokeWidth="2" filter="url(#shadow)" />
            <path d="M-15 5 L0 -10 L15 5" stroke="#8b5cf6" strokeWidth="2" fill="none" />
            <circle cx="0" cy="0" r="6" fill="none" stroke="#8b5cf6" strokeWidth="2" />
            <text x="0" y="25" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="#5b21b6">Analytics</text>
          </g>
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeInOut }
    }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background pulse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, scale: 1.2 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)]"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your partner in revenue-focused{" "}
            <span className="text-primary">B2B lead generation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We help businesses connect with their best-fit customers through data-driven strategies
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-full"
            >
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/70 backdrop-blur-md rounded-3xl overflow-hidden">
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-4 md:gap-8`}
                >
                  {/* SVG container - properly sized */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className="flex-1 w-full h-[300px] md:h-[400px] p-4"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      {service.fullSvg}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8">
                    <CardHeader className="space-y-4 p-0">
                      {/* <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg`}
                      >
                        {service.svg}
                      </motion.div> */}
                      <CardTitle className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 pt-4">
                      <motion.p
                        className="text-base md:text-lg text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {service.description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-6"
                      >
<button className="group relative inline-flex items-center justify-center px-6 py-3 font-medium text-white bg-orange-500 rounded-[5px] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
  <span className="relative z-10">Learn More</span>
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
</button>
                      </motion.div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;