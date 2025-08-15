import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Code, Zap, Shield, Smartphone, GitBranch, Monitor, CheckCircle, Eye } from 'lucide-react';
import awLogo from '../assets/aw-only.png';

interface Slide {
                id: string;
                title: string;
                component: React.ComponentType;
}

// Code Block Component
const CodeBlock = ({ children, title }: { children: string; title?: string }) => (
                <div className="bg-primary-900 border border-primary-700 rounded-lg overflow-hidden">
                        {title && (
                                <div className="bg-primary-800 px-4 py-2 border-b border-primary-700">
                                        <span className="text-accent-400 text-sm font-medium">{title}</span>
                                </div>
                        )}
                        <pre className="p-4 overflow-x-auto">
                                <code className="text-highlight-400 font-mono text-sm leading-relaxed">
                                        {children}
                                </code>
                        </pre>
                </div>
);

// Slide Components
const TitleSlide = () => (
                <div className="text-center max-w-5xl mx-auto">
                        <div className="mb-8">
                                <h1 className="text-6xl font-bold bg-gradient-to-r text-highlight-300 mb-4">
                                        FutureFocus
                                </h1>
                                <p className="text-2xl text-accent-400 font-medium mb-8">Eye on Technology</p>
                                <h2 className="text-3xl font-semibold text-accent-500 mb-8">
                                        Modernizing our Frontend and Development Process
                                </h2>
                        </div>
                        
                        
                </div>
);

const ThreeAreasSlide = () => (
                <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-highlight-300">
                                Three Main Focus Areas
                        </h2>
                        
                        <div className="grid lg:grid-cols-3 gap-8">
                                <div className="bg-primary-700 border border-primary-600 p-8 rounded-xl">
                                        <div className="text-center mb-6">
                                                <Code className="w-16 h-16 text-highlight-500 mx-auto mb-4" />
                                                <h3 className="text-2xl font-semibold text-accent-500">Frontend Tech Stack</h3>
                                        </div>
                                        <div className="space-y-4">
                                                <div className="bg-primary-800 p-4 rounded-lg">
                                                    <h4 className="font-semibold text-highlight-400 mb-2">Current: jQuery + Bootstrap</h4>
                                                    <ul className="text-sm text-accent-400 space-y-1 list-disc pl-5">
                                                        <li>Bloated and complex (larger footprint/longer load times</li>
                                                        <li>Reliance on libraries/plugins</li>
                                                        <li>Bootstrap can have a more generic style at times</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-primary-800 p-4 rounded-lg">
                                                    <h4 className="font-semibold text-highlight-400 mb-2">Future: React + TypeScript</h4>
                                                    <ul className="text-sm text-accent-400 space-y-1 list-disc pl-5">
                                                        <li>Component based</li>
                                                        <li>Out-of-the-box functionality</li>
                                                        <li>Much quicker/smoother UX</li>
                                                    </ul>
                                                </div>
                                        </div>
                                </div>

                                <div className="bg-primary-700 border border-primary-600 p-8 rounded-xl">
                                        <div className="text-center mb-6">
                                                <GitBranch className="w-16 h-16 text-highlight-500 mx-auto mb-4" />
                                                <h3 className="text-2xl font-semibold text-accent-500">Development/Documentation</h3>
                                        </div>
                                        <div className="space-y-4">
                                                <div className="bg-primary-800 p-4 rounded-lg">
                                                    <h4 className="font-semibold text-highlight-400 mb-2">Current: Manual Process</h4>
                                                    <ul className="text-sm text-accent-400 space-y-1 list-disc pl-5">
                                                        <li>FTP deployments</li>
                                                        <li>Manual testing</li>
                                                        <li>No automated checks</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-primary-800 p-4 rounded-lg">
                                                    <h4 className="font-semibold text-highlight-400 mb-2">Future: CI/CD Pipeline</h4>
                                                    <ul className="text-sm text-accent-400 space-y-1 list-disc pl-5">
                                                        <li>Automated testing</li>
                                                        <li>Git-based deployments</li>
                                                        <li>Staging environments/workflows</li>
                                                    </ul>
                                                </div>
                                        </div>
                                </div>

                                <div className="bg-primary-700 border border-primary-600 p-8 rounded-xl">
                                        <div className="text-center mb-6">
                                                <Monitor className="w-16 h-16 text-highlight-500 mx-auto mb-4" />
                                                <h3 className="text-2xl font-semibold text-accent-500">Mobile-First & Future Updates</h3>
                                        </div>
                                        <div className="space-y-4">
                                                <div className="bg-primary-800 p-4 rounded-lg">
                                                    <h4 className="font-semibold text-highlight-400 mb-2">Additional Opportunities</h4>
                                                    <ul className="text-sm text-accent-400 space-y-1 list-disc pl-5">
                                                        <li>Mobile-First Design</li>
                                                        <li>Progressive Web Apps</li>
                                                        <li>Backend frameworks (e.g. next.js)</li>
                                                        <li>Modern hosting: Vercel, Netlify, Supabase, etc.</li>
                                                    </ul>
                                                </div>
                                                
                                        </div>
                                </div>
                        </div>
                </div>
);

const FrontendIntroSlide = () => (
                <div className="text-center max-w-5xl mx-auto">
                        <div className="mb-8">
                                <h2 className="text-3xl font-semibold text-accent-500 mb-8">
                                        Eliminate jQuery/Bootstrap from frontend buildouts
                                </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6 mt-8">
                                <div className="grid md:grid-cols-1 gap-6 mt-8">
                                        <div className="bg-primary-700 border border-primary-600 p-8 rounded-xl mb-8">
                                                <p className="text-2xl text-accent-800 mb-3 border-b border-accent-400 pb-3 font-bold">jQuery</p>
                                                <ul className="text-start list-disc pl-5">
                                                    <li>Bloated and complex</li>
                                                    <li>Requires manual JavaScript coding</li>
                                                    <li>Relies on third-party plugins for animations/carousels/other dynamic features</li>
                                                </ul>
                                        </div>
                                        <div className="bg-primary-700 border border-primary-600 p-8 rounded-xl mb-8">
                                                <p className="text-2xl text-accent-800 mb-3 border-b border-accent-400 pb-3 font-bold">Bootstrap</p>
                                                <ul className="text-start list-disc pl-5">
                                                    <li>Depends on jQuery</li>
                                                    <li>Can sometimes have a generic visual style</li>
                                                    <li>The 12-column grid can also be limiting</li>
                                                </ul>
                                        </div>
                                </div>
                                <img src="src/assets/trash.png" className="w-full" />
                        </div>
                </div>
);

const WhatIsReactSlide = () => (
                <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-accent-500">
                                What is React?
                        </h2>
                        
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                                <div className="space-y-6">
                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                    <Code className="w-8 h-8 text-highlight-500 mr-3" />
                                                    <h3 className="text-xl font-semibold text-accent-500">Component-based UI framework</h3>
                                                </div>
                                                <p className="text-accent-400">Each component is a self-contained module that manages its own data and UI</p>
                                        </div>

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                    <Zap className="w-8 h-8 text-highlight-500 mr-3" />
                                                    <h3 className="text-xl font-semibold text-accent-500">Quick and Seamless frontend updates</h3>
                                                </div>
                                                <p className="text-accent-400">Can make complex pages that feel fast and more dynamic</p>
                                        </div>

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                    <GitBranch className="w-8 h-8 text-highlight-500 mr-3" />
                                                    <h3 className="text-xl font-semibold text-accent-500">Minimal additional scripting</h3>
                                                </div>
                                                <p className="text-accent-400">Most functionality can be achieved with built-in features</p>
                                        </div>
                                </div>

                                <div className="space-y-6 flex flex-col h-full">
                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                    <Shield className="w-8 h-8 text-highlight-500 mr-3" />
                                                    <h3 className="text-xl font-semibold text-accent-500">Easy API integration</h3>
                                                </div>
                                                <p className="text-accent-400">Built-in functions allow fetching data easily</p>
                                        </div>

                                        <div className="bg-primary-800 border border-primary-700 p-6 rounded-xl text-center flex-grow">
                                                <div className="text-3xl font-bold text-highlight-500 mb-3">Benefits</div>
                                                <ul className="text-xl text-start list-disc pl-5">
                                                    <li>Buildouts are simpler/quicker</li>
                                                    <li>Allows more dynamic features</li>
                                                    <li>Smaller footprint</li>
                                                    <li>Quick/seamless loading and re-rendering</li>
                                                    <li>Built-in functions allow fetching data easily</li>
                                                </ul>
                                        </div>
                                </div>
                        </div>
                </div>
);

const WhatIsTypeScriptSlide = () => (
                <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-accent-500">
                                What is TypeScript?
                        </h2>
                        
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                                <div className="space-y-6">
                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                    <Code className="w-8 h-8 text-highlight-500 mr-3" />
                                                    <h3 className="text-xl font-semibold text-accent-500">Different type of JavaScript</h3>
                                                </div>
                                                <p className="text-accent-400">All JavaScript code is valid TypeScript code</p>
                                        </div>

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                    <Shield className="w-8 h-8 text-highlight-500 mr-3" />
                                                    <h3 className="text-xl font-semibold text-accent-500">Strict type-based variables and objects</h3>
                                                </div>
                                                <p className="text-accent-400">Prevents errors at compile time, before uploaded</p>
                                        </div>

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                    <Monitor className="w-8 h-8 text-highlight-500 mr-3" />
                                                    <h3 className="text-xl font-semibold text-accent-500">Improves code readability & maintainability</h3>
                                                </div>
                                                <p className="text-accent-400">Code is self-documenting and easier to understand at a glance</p>
                                        </div>
                                </div>

                                <div className="space-y-6 flex flex-col h-full">
                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                    <Zap className="w-8 h-8 text-highlight-500 mr-3" />
                                                    <h3 className="text-xl font-semibold text-accent-500">Better IDE autocomplete & refactoring</h3>
                                                </div>
                                                <p className="text-accent-400">With defined types, IDEs can provide more accurate autocomplete suggestions, speeding up dev times</p>
                                        </div>

                                        <div className="bg-primary-800 border border-primary-700 p-6 rounded-xl text-center flex-grow">
                                                <div className="text-3xl font-bold text-highlight-500 mb-3">Benefits</div>
                                                <ul className="text-xl text-start list-disc pl-5">
                                                    <li>Reduces bugs uploaded to production</li>
                                                    <li>Improves maintenance times because it's simpler to read</li>
                                                    <li>Standard structure improves dev speeds</li>
                                                </ul>
                                        </div>
                                </div>
                        </div>
                </div>
);

const ReactExample1 = () => (
                <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-accent-500">
                                React vs jQuery
                        </h2>
                        <img src="src/assets/counter.PNG" className="w-full my-4" />
                        <div className="grid lg:grid-cols-2 gap-8">
                                <div>
                                        <h3 className="text-2xl font-semibold text-accent-500 mb-6 flex items-center">
                                                <span className="w-4 h-4 bg-red-500 rounded-full mr-3"></span>
                                                jQuery Approach
                                        </h3>
                                        <CodeBlock title="Stat Blocks (jQuery)">
{`<div id="stats">
                <div class="stat-block" data-target="500">
                        <h2>0</h2>
                        <p>Monthly Users</p>
                </div>
                <div class="stat-block" data-target="79">
                        <h2>0</h2>
                        <p>Retention Rate (%)</p>
                </div>
                <div class="stat-block" data-target="1200">
                        <h2>0</h2>
                        <p>Downloads</p>
                </div>
                <div class="stat-block" data-target="42">
                        <h2>0</h2>
                        <p>Projects Completed</p>
                </div>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
function animateValue($el, target) {
                let start = 0;
                const duration = 1500;
                const stepTime = Math.abs(Math.floor(duration / target));
                const timer = setInterval(function() {
                        start++;
                        $el.text(start);
                        if (start >= target) clearInterval(timer);
                }, stepTime);
}

function elementInView(el) {
                const rect = el.getBoundingClientRect();
                return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

$(window).on('scroll load', function() {
                $('.stat-block').each(function() {
                        if (!$(this).data('animated') && elementInView(this)) {
                                $(this).data('animated', true);
                                animateValue($(this).find('h2'), $(this).data('target'));
                        }
                });
});
</script>`}
                                        </CodeBlock>
                                </div>

                                <div>
                                        <h3 className="text-2xl font-semibold text-accent-500 mb-6 flex items-center">
                                                <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                                                React Approach
                                        </h3>
                                        <CodeBlock title="Stat Block Component (React + TypeScript)">
{`import { useState, useEffect } from "react";

type StatBlockProps = {
    label: string;
    value: number;
};

export function StatBlock({ label, value }: StatBlockProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 1500;
        const stepTime = Math.abs(Math.floor(duration / value));
        const timer = setInterval(() => {
            start++;
            setCount(start);
            if (start >= value) clearInterval(timer);
        }, stepTime);
        return () => clearInterval(timer);
    }, [value]);

    return (
        <div className="stat-block">
            <h2>{count}</h2>
            <p>{label}</p>
        </div>
    );
}`}
                                        </CodeBlock>
                                        <CodeBlock title="Stat Block Usage (React + TypeScript)">
{`import { StatBlock } from "./StatBlock";

export default function App() {
    const stats = [
        { label: "Monthly Users", value: 500 },
        { label: "Retention Rate (%)", value: 79 },
        { label: "Downloads", value: 1200 },
        { label: "Projects Completed", value: 42 },
    ];

    return (
        <div id="stats" style={{ display: "flex", gap: "20px" }}>
            {stats.map((s) => (
                <StatBlock key={s.label} label={s.label} value={s.value} />
            ))}
        </div>
    );
}`}
                                        </CodeBlock>
                                </div>
                        </div>
                </div>
);


const TypeScriptBenefitsSlide = () => (
                <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-accent-500">
                                TypeScript: Catching Bugs Before They Ship
                        </h2>
                        
                        <div className="grid lg:grid-cols-2 gap-8 mb-8">
                                <div>
                                        <h3 className="text-2xl font-semibold text-accent-500 mb-6">Without TypeScript</h3>
                                        <CodeBlock title="Runtime Errors Waiting to Happen">
{`// JavaScript - No compile-time safety
function calculateTotal(items) {
                return items.reduce((sum, item) => {
                        return sum + item.price * item.quantity;
                }, 0);
}

// This will crash at runtime if data is malformed
const cart = [
                { name: "Laptop", price: 999.99 }, // Missing quantity!
                { name: "Mouse", price: "29.99", quantity: 2 } // String price!
];

const total = calculateTotal(cart); // Runtime error!`}
                                        </CodeBlock>
                                </div>

                                <div>
                                        <h3 className="text-2xl font-semibold text-accent-500 mb-6">With TypeScript</h3>
                                        <CodeBlock title="Compile-Time Safety">
{`// TypeScript - Errors caught during development
interface CartItem {
                name: string;
                price: number;
                quantity: number;
}

function calculateTotal(items: CartItem[]): number {
                return items.reduce((sum, item) => {
                        return sum + item.price * item.quantity;
                }, 0);
}

// TypeScript catches these errors in your editor:
const cart: CartItem[] = [
                { name: "Laptop", price: 999.99 }, // ❌ Missing quantity
                { name: "Mouse", price: "29.99", quantity: 2 } // ❌ Wrong type
];`}
                                        </CodeBlock>
                                </div>
                        </div>

                        <div className="bg-primary-700 border border-primary-600 p-8 rounded-xl">
                                <h3 className="text-2xl font-semibold text-highlight-500 mb-6">Real-World Impact</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                                <h4 className="text-lg font-semibold text-accent-500">Development Experience</h4>
                                                <ul className="space-y-2 text-accent-400">
                                                    <li className="flex items-start">
                                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                        IntelliSense and auto-completion in editors
                                                    </li>
                                                    <li className="flex items-start">
                                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                        Immediate feedback on API changes
                                                    </li>
                                                    <li className="flex items-start">
                                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                        Safer refactoring with confidence
                                                    </li>
                                                </ul>
                                        </div>
                                        <div className="space-y-4">
                                                <h4 className="text-lg font-semibold text-accent-500">Production Quality</h4>
                                                <ul className="space-y-2 text-accent-400">
                                                    <li className="flex items-start">
                                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                        Fewer runtime errors and crashes
                                                    </li>
                                                    <li className="flex items-start">
                                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                        Self-documenting code interfaces
                                                    </li>
                                                    <li className="flex items-start">
                                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                        Better team collaboration
                                                    </li>
                                                </ul>
                                        </div>
                                </div>
                        </div>
                </div>
);

const Aurora4IntegrationSlide = () => (
                <div className="max-w-6xl mx-auto">
                        
                        <div className="grid lg:grid-cols-1 gap-8 items-center">
                                <div className="space-y-6">
                                        <div className="bg-primary-800 border border-primary-700 p-8 rounded-xl text-center">
                                                <img src="src/assets/aurora.png" alt="Aurora4 Logo" className="w-48 h-auto mx-auto mb-6" />
                                                <h3 className="text-2xl font-semibold text-accent-500 mb-4">Aurora4 Integration</h3>
                                        </div>
                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Code className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Components map well to Aurora4 modules</h3>
                                                </div>
                                                <p className="text-accent-400">React components can directly correspond to Aurora4 content modules for clean architecture</p>
                                        </div>

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <GitBranch className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">API-driven content updates</h3>
                                                </div>
                                                <p className="text-accent-400">Content managed in Aurora4 flows seamlessly to React frontend via REST APIs</p>
                                        </div>

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Shield className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">More secure separation of admin & frontend</h3>
                                                </div>
                                                <p className="text-accent-400">Admin interface isolated from public frontend for enhanced security</p>
                                        </div>

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Zap className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Real-time, no-refresh updates</h3>
                                                </div>
                                                <p className="text-accent-400">Dynamic content updates without page reloads for better user experience</p>
                                        </div>
                                </div>

                                <div className="flex flex-col items-center space-y-8">

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl text-center w-full">
                                                <h4 className="text-lg font-semibold text-highlight-500 mb-4">Architecture Benefits</h4>
                                                <div className="grid grid-cols-1 gap-3 text-sm text-accent-400">
                                                        <div>
                                                                <strong className="text-accent-500">Decoupled:</strong> Frontend and backend can evolve independently
                                                        </div>
                                                        <div>
                                                                <strong className="text-accent-500">Scalable:</strong> Multiple frontends can consume the same Aurora4 API
                                                        </div>
                                                        <div>
                                                                <strong className="text-accent-500">Modern:</strong> Dynamic and seamless functionality and data presentation
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
);

const ModernFrontendFrameworksSlide = () => (
                <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-accent-500">
                                Modern Frontend Frameworks
                        </h2>
                        
                        <div className="grid lg:grid-cols-2 gap-8">
                                <div className="bg-primary-700 border border-primary-600 p-8 rounded-xl">
                                        <div className="text-center mb-6">
                                                <div className="w-16 h-16 bg-highlight-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                                                        <Code className="w-10 h-10 text-white" />
                                                </div>
                                                <h3 className="text-2xl font-semibold text-accent-500">TailwindCSS</h3>
                                        </div>
                                        
                                        <div className="space-y-4">
                                                <div className="bg-primary-800 p-4 rounded-lg">
                                                        <div className="flex items-center mb-2">
                                                                <Zap className="w-5 h-5 text-highlight-500 mr-2" />
                                                                <h4 className="font-semibold text-highlight-400">Utility-first</h4>
                                                        </div>
                                                        <p className="text-sm text-accent-400">Build designs directly in markup with utility classes</p>
                                                </div>
                                                
                                                <div className="bg-primary-800 p-4 rounded-lg">
                                                        <div className="flex items-center mb-2">
                                                                <Shield className="w-5 h-5 text-highlight-500 mr-2" />
                                                                <h4 className="font-semibold text-highlight-400">Predefined colors/fonts for consistency</h4>
                                                        </div>
                                                        <p className="text-sm text-accent-400">Design system built-in with consistent spacing and typography</p>
                                                </div>
                                                
                                                <div className="bg-primary-800 p-4 rounded-lg">
                                                        <div className="flex items-center mb-2">
                                                                <CheckCircle className="w-5 h-5 text-highlight-500 mr-2" />
                                                                <h4 className="font-semibold text-highlight-400">Inline styles avoid CSS caching issues</h4>
                                                        </div>
                                                        <p className="text-sm text-accent-400">No external CSS files to manage or cache</p>
                                                </div>
                                        </div>
                                </div>

                                <div className="bg-primary-700 border border-primary-600 p-8 rounded-xl">
                                        <div className="text-center mb-6">
                                                <div className="w-16 h-16 bg-highlight-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                                                        <Smartphone className="w-10 h-10 text-white" />
                                                </div>
                                                <h3 className="text-2xl font-semibold text-accent-500">Material UI</h3>
                                        </div>
                                        
                                        <div className="space-y-4">
                                                <div className="bg-primary-800 p-4 rounded-lg">
                                                        <div className="flex items-center mb-2">
                                                                <Code className="w-5 h-5 text-highlight-500 mr-2" />
                                                                <h4 className="font-semibold text-highlight-400">Prebuilt React components</h4>
                                                        </div>
                                                        <p className="text-sm text-accent-400">Complete library of ready-to-use UI components</p>
                                                </div>
                                                
                                                <div className="bg-primary-800 p-4 rounded-lg">
                                                        <div className="flex items-center mb-2">
                                                                <GitBranch className="w-5 h-5 text-highlight-500 mr-2" />
                                                                <h4 className="font-semibold text-highlight-400">Theming support</h4>
                                                        </div>
                                                        <p className="text-sm text-accent-400">Customizable themes with consistent design language</p>
                                                </div>
                                                
                                                <div className="bg-primary-800 p-4 rounded-lg">
                                                        <div className="flex items-center mb-2">
                                                                <Monitor className="w-5 h-5 text-highlight-500 mr-2" />
                                                                <h4 className="font-semibold text-highlight-400">Faster dev but risks "generic" look</h4>
                                                        </div>
                                                        <p className="text-sm text-accent-400">Quick development but may appear similar to other sites</p>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        <div className="mt-8 bg-primary-800 border border-primary-700 p-6 rounded-xl">
                                <h3 className="text-xl font-semibold text-highlight-500 mb-4 text-center">Tailwind Utility Example</h3>
                                <CodeBlock title="TailwindCSS Button Example">
                                  {`<button class="bg-blue-500 hover:bg-[#1E40AF] text-white font-bold py-2 px-[10px] lg:px-[24px] rounded shadow-lg">
  Click Me
</button>
`}
                                </CodeBlock>
                        </div>
                </div>
);

const FrontendWrapUpSlide = () => (
                <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-accent-500">
                                Frontend Wrap-Up
                        </h2>
                        
                        <div className="grid lg:grid-cols-1 gap-8 items-center">
                                <div className="space-y-6">
                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Code className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Move to React + TypeScript</h3>
                                                </div>
                                                <p className="text-accent-400">Modern component-based architecture with type safety</p>
                                        </div>

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Zap className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Replace Bootstrap/jQuery with Tailwind or Material UI</h3>
                                                </div>
                                                <p className="text-accent-400">Choose between utility-first styling or component libraries</p>
                                        </div>

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <GitBranch className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Aligns with Aurora4 structure</h3>
                                                </div>
                                                <p className="text-accent-400">Seamless integration with existing CMS architecture</p>
                                        </div>

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <CheckCircle className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Improves speed, design flexibility, and maintainability</h3>
                                                </div>
                                                <p className="text-accent-400">Better performance, easier updates, and cleaner codebase</p>
                                        </div>
                                </div>
                        </div>
                </div>
);

const DevelopmentDocumentationIntroSlide = () => (
                <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-accent-500">
                                Development/Documentation
                        </h2>
                        
                        <div className="mb-8">
                                <h3 className="text-2xl font-semibold text-accent-500 mb-6 text-center">Current workflow:</h3>
                        </div>
                        
                        <div className="grid lg:grid-cols-3 gap-6">
                                <div className="bg-red-900/20 border border-red-600 p-6 rounded-xl">
                                        <div className="text-center mb-4">
                                                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                                        <GitBranch className="w-10 h-10 text-white" />
                                                </div>
                                                <h3 className="text-xl font-semibold text-red-400">Manual FTP uploads to production</h3>
                                        </div>
                                        <p className="text-accent-400 text-center">Direct file transfers without version control</p>
                                </div>

                                <div className="bg-red-900/20 border border-red-600 p-6 rounded-xl">
                                        <div className="text-center mb-4">
                                                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                                        <Monitor className="w-10 h-10 text-white" />
                                                </div>
                                                <h3 className="text-xl font-semibold text-red-400">No staging environment</h3>
                                        </div>
                                        <p className="text-accent-400 text-center">Changes go directly to live site</p>
                                </div>

                                <div className="bg-red-900/20 border border-red-600 p-6 rounded-xl">
                                        <div className="text-center mb-4">
                                                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                                        <Shield className="w-10 h-10 text-white" />
                                                </div>
                                                <h3 className="text-xl font-semibold text-red-400">High risk of overwriting changes & pushing bugs</h3>
                                        </div>
                                        <p className="text-accent-400 text-center">No safety net for errors</p>
                                </div>
                        </div>

                        <div className="mt-8 bg-primary-800 border border-primary-700 p-6 rounded-xl text-center">
                                <h3 className="text-xl font-semibold text-highlight-500 mb-2">The Problem</h3>
                                <p className="text-accent-400">Without proper development workflows, every change is a risk to the live site</p>
                        </div>
                </div>
);

const CurrentDevelopmentWorkflowSlide = () => (
                <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-accent-500">
                                Current Process
                        </h2>
                        
                        <div className="grid lg:grid-cols-1 gap-8 items-center">
                                <div className="space-y-6">
                                        <div className="bg-red-900/20 border border-red-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Code className="w-8 h-8 text-red-400 mr-3" />
                                                        <h3 className="text-xl font-semibold text-red-400">Local development only</h3>
                                                </div>
                                                <p className="text-accent-400">No shared development environment</p>
                                        </div>

                                        <div className="bg-red-900/20 border border-red-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <CheckCircle className="w-8 h-8 text-red-400 mr-3" />
                                                        <h3 className="text-xl font-semibold text-red-400">Manual testing</h3>
                                                </div>
                                                <p className="text-accent-400">No automated quality checks</p>
                                        </div>

                                        <div className="bg-red-900/20 border border-red-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <GitBranch className="w-8 h-8 text-red-400 mr-3" />
                                                        <h3 className="text-xl font-semibold text-red-400">FTP to live site</h3>
                                                </div>
                                                <p className="text-accent-400">Direct production deployment</p>
                                        </div>

                                        <div className="bg-red-900/20 border border-red-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Zap className="w-8 h-8 text-red-400 mr-3" />
                                                        <h3 className="text-xl font-semibold text-red-400">Fix bugs directly in production</h3>
                                                </div>
                                                <p className="text-accent-400">No safe development environment</p>
                                        </div>
                                </div>

                            
                        </div>
                </div>
);

const ProposedProcessImprovementsSlide = () => (
                <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-accent-500">
                                Proposed Process Improvements
                        </h2>
                        
                        <div className="grid lg:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                        <div className="bg-green-900/20 border border-green-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <GitBranch className="w-8 h-8 text-green-400 mr-3" />
                                                        <h3 className="text-xl font-semibold text-green-400">GitHub Version Control</h3>
                                                </div>
                                                <p className="text-accent-400">Track all changes, collaborate safely, and maintain complete project history</p>
                                        </div>

                                        <div className="bg-green-900/20 border border-green-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
                                                        <h3 className="text-xl font-semibold text-green-400">Automated Testing</h3>
                                                </div>
                                                <p className="text-accent-400">Run tests automatically on every code change to catch issues early</p>
                                        </div>

                                        <div className="bg-green-900/20 border border-green-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Zap className="w-8 h-8 text-green-400 mr-3" />
                                                        <h3 className="text-xl font-semibold text-green-400">CI/CD Pipelines</h3>
                                                </div>
                                                <p className="text-accent-400">Automated deployment process that builds, tests, and deploys code safely</p>
                                        </div>

                                        <div className="bg-green-900/20 border border-green-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Monitor className="w-8 h-8 text-green-400 mr-3" />
                                                        <h3 className="text-xl font-semibold text-green-400">Staging Servers</h3>
                                                </div>
                                                <p className="text-accent-400">Safe testing environment that mirrors production for quality assurance</p>
                                        </div>
                                </div>

                                <div className="bg-primary-700 border border-primary-600 p-8 rounded-xl">
                                        <h3 className="text-2xl font-semibold text-highlight-500 mb-6 text-center">Benefits</h3>
                                        
                                        <div className="space-y-4">
                                                <div className="bg-green-900/20 border border-green-600 p-4 rounded-lg text-center">
                                                        <div className="text-sm text-accent-400 mt-1">Reduces number of bugs on live sites</div>
                                                </div>
                                                <div className="bg-green-900/20 border border-green-600 p-4 rounded-lg text-center">
                                                        <div className="text-sm text-accent-400 mt-1">Automation speeds up production time</div>
                                                </div>
                                                <div className="bg-green-900/20 border border-green-600 p-4 rounded-lg text-center">
                                                        <div className="text-sm text-accent-400 mt-1">Integrated tools can scan for security, ADA Compliance, etc.</div>
                                                </div>
                                                <div className="bg-green-900/20 border border-green-600 p-4 rounded-lg text-center">
                                                        <div className="text-sm text-accent-400 mt-1">Can safely test changes without causing issues on the live site</div>
                                                </div>
                                                <div className="bg-green-900/20 border border-green-600 p-4 rounded-lg text-center">
                                                        <div className="text-sm text-accent-400 mt-1">Github branches and versioning prevents multiple devs from saving over each other's work</div>
                                                </div>
                                                <div className="bg-green-900/20 border border-green-600 p-4 rounded-lg text-center">
                                                        <div className="text-sm text-accent-400 mt-1">Deployment workflow can automatically update site files, reducing the need for FTP accounts</div>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        
                </div>
);

const BenefitsOfGitHubSlide = () => (
                <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-accent-500">
                                Benefits of GitHub
                        </h2>
                        
                        <div className="grid lg:grid-cols-1 gap-8">
                                <div className="space-y-6">
                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <GitBranch className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Version control & rollback</h3>
                                                </div>
                                                <p className="text-accent-400">Track every change and easily revert if needed</p>
                                        </div>

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Code className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Collaboration without overwrites</h3>
                                                </div>
                                                <p className="text-accent-400">Multiple developers can work safely on the same project</p>
                                        </div>

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Shield className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Secure storage for API keys/passwords</h3>
                                                </div>
                                                <p className="text-accent-400">Encrypted secrets management for sensitive data</p>
                                        </div>

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Zap className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Easy branching for parallel work</h3>
                                                </div>
                                                <p className="text-accent-400">Work on multiple features simultaneously</p>
                                        </div>
                                </div>

                                
                        </div>
                </div>
);

const BenefitsOfCICDPipelinesSlide = () => (
                <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-accent-500">
                                Benefits of CI/CD Pipelines
                        </h2>
                        
                        <div className="grid lg:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Zap className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Automated deployments</h3>
                                                </div>
                                                <p className="text-accent-400">Push code and let the system handle deployment</p>
                                        </div>

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Monitor className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Staging environment for QA</h3>
                                                </div>
                                                <p className="text-accent-400">Test changes before they go live</p>
                                        </div>
                                </div>

                                <div className="bg-primary-700 border border-primary-600 p-8 rounded-xl">
                                        <h3 className="text-2xl font-semibold text-highlight-500 mb-6">Automated:</h3>
                                        
                                        <div className="space-y-4">
                                                <div className="bg-primary-800 p-4 rounded-lg">
                                                        <div className="flex items-center mb-2">
                                                                <CheckCircle className="w-5 h-5 text-highlight-500 mr-2" />
                                                                <h4 className="font-semibold text-accent-500">Unit testing</h4>
                                                        </div>
                                                        <p className="text-sm text-accent-400">Automatic code validation before deployment</p>
                                                </div>
                                                
                                                <div className="bg-primary-800 p-4 rounded-lg">
                                                        <div className="flex items-center mb-2">
                                                                <Shield className="w-5 h-5 text-highlight-500 mr-2" />
                                                                <h4 className="font-semibold text-accent-500">Security scans</h4>
                                                        </div>
                                                        <p className="text-sm text-accent-400">Identify vulnerabilities before they reach production</p>
                                                </div>
                                                
                                                <div className="bg-primary-800 p-4 rounded-lg">
                                                        <div className="flex items-center mb-2">
                                                                <Smartphone className="w-5 h-5 text-highlight-500 mr-2" />
                                                                <h4 className="font-semibold text-accent-500">ADA compliance checks</h4>
                                                        </div>
                                                        <p className="text-sm text-accent-400">Ensure accessibility standards are met</p>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        
                </div>
);

const ProposedDevelopmentWorkflowSlide = () => (
                <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-accent-500">
                                Proposed Workflow
                        </h2>
                        
                        <div className="grid lg:grid-cols-1 gap-8">
                                <div className="space-y-6">
                                        <h3 className="text-2xl font-semibold text-highlight-500 mb-6">New Project Setup</h3>
                                        
                                        <div className="space-y-4">
                                                <div className="bg-primary-700 border border-primary-600 p-4 rounded-lg">
                                                        <div className="flex items-center mb-2">
                                                                <GitBranch className="w-5 h-5 text-highlight-500 mr-2" />
                                                                <h4 className="font-semibold text-accent-500">1. Create new Github Repo for project</h4>
                                                        </div>
                                                        <p className="text-sm text-accent-400">Initialize version control for the project</p>
                                                </div>
                                                
                                                <div className="bg-primary-700 border border-primary-600 p-4 rounded-lg">
                                                        <div className="flex items-center mb-2">
                                                                <Monitor className="w-5 h-5 text-highlight-500 mr-2" />
                                                                <h4 className="font-semibold text-accent-500">2. Create Production and Staging Environments</h4>
                                                        </div>
                                                        <p className="text-sm text-accent-400">Connect environments to repo for automated deployment</p>
                                                </div>
                                                
                                                <div className="bg-primary-700 border border-primary-600 p-4 rounded-lg">
                                                        <div className="flex items-center mb-2">
                                                                <Code className="w-5 h-5 text-highlight-500 mr-2" />
                                                                <h4 className="font-semibold text-accent-500">3. Install boilerplate to 'main' branch</h4>
                                                        </div>
                                                        <p className="text-sm text-accent-400">Push initial project structure to repository</p>
                                                </div>
                                                <div className="bg-primary-700 border border-primary-600 p-4 rounded-lg">
                                                        <div className="flex items-center mb-2">
                                                                <GitBranch className="w-5 h-5 text-highlight-500 mr-2" />
                                                                <h4 className="font-semibold text-accent-500">4. Clone 'main' branch and develop</h4>
                                                        </div>
                                                        <p className="text-sm text-accent-400">e.g. Create 'Matt's Development' branch</p>
                                                </div>
                                                
                                                <div className="bg-primary-700 border border-primary-600 p-4 rounded-lg">
                                                        <div className="flex items-center mb-2">
                                                                <Zap className="w-5 h-5 text-highlight-500 mr-2" />
                                                                <h4 className="font-semibold text-accent-500">5. Deploy branch to repo</h4>
                                                        </div>
                                                        <p className="text-sm text-accent-400">This triggers any automation we have set up</p>
                                                </div>
                                                
                                                <div className="bg-primary-700 border border-primary-600 p-4 rounded-lg">
                                                        <div className="flex items-center mb-2">
                                                                <Monitor className="w-5 h-5 text-highlight-500 mr-2" />
                                                                <h4 className="font-semibold text-accent-500">6. Auto-deploy to staging</h4>
                                                        </div>
                                                        <p className="text-sm text-accent-400">New/changed files automatically deployed to staging</p>
                                                </div>
                                                
                                                <div className="bg-primary-700 border border-primary-600 p-4 rounded-lg">
                                                        <div className="flex items-center mb-2">
                                                                <CheckCircle className="w-5 h-5 text-highlight-500 mr-2" />
                                                                <h4 className="font-semibold text-accent-500">7. Manual testing</h4>
                                                        </div>
                                                        <p className="text-sm text-accent-400">Quality assurance on staging environment</p>
                                                </div>
                                                <div className="bg-primary-700 border border-primary-600 p-4 rounded-lg">
                                        <div className="flex items-center mb-4">
                                                <Shield className="w-5 h-5 text-highlight-500 mr-2" />
                                                <h3 className="font-semibold text-accent-500">8. If all looks good, merge branch into 'main'</h3>
                                        </div>
                                        <p className="text-sm text-accent-400">Approved changes get merged to main branch</p>
                                </div>

                                <div className="bg-primary-700 border border-primary-600 p-4 rounded-lg">
                                        <div className="flex items-center mb-4">
                                                <Zap className="w-5 h-5 text-highlight-500 mr-2" />
                                                <h3 className="font-semibold text-accent-500">9. Auto-deploy to production</h3>
                                        </div>
                                        <p className="text-sm text-accent-400">New/changed files automatically deployed to production</p>
                                </div>
                                        </div>
                                </div>
                        </div>

                        

                        <div className="mt-8 bg-primary-800 border border-primary-700 p-6 rounded-xl text-center">
                                <h3 className="text-xl font-semibold text-highlight-500 mb-4">Future Updates</h3>
                                <p className="text-accent-400">
                                        Making site updates or changes would follow a similar workflow, but the main branch and environments are already set up
                                </p>
                        </div>
                </div>
);

const PossibleToolsToIntegrateSlide = () => (
                <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-accent-500">
                                Possible Tools to Integrate
                        </h2>
                        
                        <div className="grid lg:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <CheckCircle className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Testing</h3>
                                                </div>
                                                <div className="space-y-2 text-accent-400">
                                                        <div>• <strong>Jest</strong> - JavaScript unit testing</div>
                                                        <div>• <strong>PHPUnit</strong> - PHP backend testing</div>
                                                        <div>• <strong>Cypress</strong> - End-to-end testing</div>
                                                        <div>• <strong>Playwright</strong> - Browser automation</div>
                                                </div>
                                        </div>

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Zap className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Performance</h3>
                                                </div>
                                                <div className="space-y-2 text-accent-400">
                                                        <div>• <strong>Lighthouse</strong> - Performance audits</div>
                                                        <div>• Automated speed testing</div>
                                                        <div>• Core Web Vitals monitoring</div>
                                                </div>
                                        </div>
                                </div>

                                <div className="space-y-6">
                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Shield className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Security</h3>
                                                </div>
                                                <div className="space-y-2 text-accent-400">
                                                        <div>• <strong>OWASP scanners</strong> - Security vulnerability detection</div>
                                                        <div>• Dependency vulnerability checks</div>
                                                        <div>• Code security analysis</div>
                                                </div>
                                        </div>

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Smartphone className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Accessibility</h3>
                                                </div>
                                                <div className="space-y-2 text-accent-400">
                                                        <div>• <strong>axe-core</strong> - Automated accessibility testing</div>
                                                        <div>• WCAG compliance checks</div>
                                                        <div>• Screen reader compatibility</div>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        
                </div>
);

const DocumentationImprovementsSlide = () => (
                <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-accent-500">
                                Documentation Improvements
                        </h2>
                        
                        <div className="grid lg:grid-cols-2 gap-8">
                                <div className="bg-primary-700 border border-primary-600 p-8 rounded-xl">
                                        <div className="text-center mb-6">
                                                <div className="w-16 h-16 bg-highlight-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                                                        <Code className="w-10 h-10 text-white" />
                                                </div>
                                                <h3 className="text-2xl font-semibold text-accent-500">Storybook</h3>
                                        </div>
                                        
                                        <div className="space-y-4">
                                                <div className="bg-primary-800 p-4 rounded-lg">
                                                        <div className="flex items-center mb-2">
                                                                <Monitor className="w-5 h-5 text-highlight-500 mr-2" />
                                                                <h4 className="font-semibold text-highlight-400">Visual library of UI components</h4>
                                                        </div>
                                                        <p className="text-sm text-accent-400">Interactive showcase of all React components</p>
                                                </div>
                                                
                                                <div className="bg-primary-800 p-4 rounded-lg">
                                                        <div className="flex items-center mb-2">
                                                                <CheckCircle className="w-5 h-5 text-highlight-500 mr-2" />
                                                                <h4 className="font-semibold text-highlight-400">Built-in component testing</h4>
                                                        </div>
                                                        <p className="text-sm text-accent-400">Test components in isolation</p>
                                                </div>
                                                
                                                <div className="bg-primary-800 p-4 rounded-lg">
                                                        <div className="flex items-center mb-2">
                                                                <GitBranch className="w-5 h-5 text-highlight-500 mr-2" />
                                                                <h4 className="font-semibold text-highlight-400">Reusable modules across projects</h4>
                                                        </div>
                                                        <p className="text-sm text-accent-400">Component library for consistent design</p>
                                                </div>
                                        </div>
                                </div>

                                <div className="bg-primary-700 border border-primary-600 p-8 rounded-xl">
                                        <div className="text-center mb-6">
                                                <div className="w-16 h-16 bg-highlight-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                                                        <Shield className="w-10 h-10 text-white" />
                                                </div>
                                                <h3 className="text-2xl font-semibold text-accent-500">Wiki</h3>
                                        </div>
                                        
                                        <div className="space-y-4">
                                                <div className="bg-primary-800 p-4 rounded-lg">
                                                        <div className="flex items-center mb-2">
                                                                <Zap className="w-5 h-5 text-highlight-500 mr-2" />
                                                                <h4 className="font-semibold text-highlight-400">Document Aurora4 architecture</h4>
                                                        </div>
                                                        <p className="text-sm text-accent-400">Complete system documentation</p>
                                                </div>
                                                
                                                <div className="bg-primary-800 p-4 rounded-lg">
                                                        <div className="flex items-center mb-2">
                                                                <Smartphone className="w-5 h-5 text-highlight-500 mr-2" />
                                                                <h4 className="font-semibold text-highlight-400">Process guides</h4>
                                                        </div>
                                                        <p className="text-sm text-accent-400">Step-by-step guides for team members</p>
                                                </div>
                                                
                                                <div className="bg-primary-800 p-4 rounded-lg">
                                                        <div className="flex items-center mb-2">
                                                                <Code className="w-5 h-5 text-highlight-500 mr-2" />
                                                                <h4 className="font-semibold text-highlight-400">Public & internal documentation</h4>
                                                        </div>
                                                        <p className="text-sm text-accent-400">API docs, user guides, and developer resources</p>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        
                </div>
);

const DevDocumentationWrapUpSlide = () => (
                <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-accent-500">
                                Dev/Documentation Wrap-Up
                        </h2>
                        
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                                <div className="space-y-6">
                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <GitBranch className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Version control + pipelines = fewer bugs</h3>
                                                </div>
                                                <p className="text-accent-400">Systematic approach to code management and deployment</p>
                                        </div>

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Shield className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Staging prevents accidental live breakages</h3>
                                                </div>
                                                <p className="text-accent-400">Safe testing environment before production deployment</p>
                                        </div>

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Code className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Centralized knowledge = more consistency and quicker updates</h3>
                                                </div>
                                                <p className="text-accent-400">Documentation and processes that scale with the team</p>
                                        </div>
                                </div>

                                <div className="bg-primary-700 border border-primary-600 p-8 rounded-xl">
                                        <h3 className="text-2xl font-semibold text-highlight-500 mb-6 text-center">Development Transformation</h3>
                                        
                                        <div className="space-y-6">
                                                <div className="bg-red-900/20 border border-red-600 p-4 rounded-lg">
                                                        <h4 className="font-semibold text-red-400 mb-2">Current Risk Factors:</h4>
                                                        <ul className="text-sm text-accent-400 space-y-1">
                                                                <li>• Manual deployments</li>
                                                                <li>• No staging environment</li>
                                                                <li>• Direct production fixes</li>
                                                                <li>• No version control</li>
                                                        </ul>
                                                </div>
                                                
                                                <div className="bg-green-900/20 border border-green-600 p-4 rounded-lg">
                                                        <h4 className="font-semibold text-green-400 mb-2">Proposed Safety Measures:</h4>
                                                        <ul className="text-sm text-accent-400 space-y-1">
                                                                <li>• Automated CI/CD pipelines</li>
                                                                <li>• Staging environment</li>
                                                                <li>• Version control with GitHub</li>
                                                                <li>• Comprehensive documentation</li>
                                                        </ul>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
);

const MobileFirstDesignSlide = () => (
                <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-accent-500">
                                Mobile-First Design
                        </h2>
                        
                        <div className="grid lg:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Smartphone className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Prioritize mobile UX from the start</h3>
                                                </div>
                                                <p className="text-accent-400">Design for mobile devices first, then scale up to desktop</p>
                                        </div>

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Zap className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Faster load times on mobile</h3>
                                                </div>
                                                <p className="text-accent-400">Optimized performance for mobile networks and devices</p>
                                        </div>
                                </div>

                                <div className="space-y-6">
                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <CheckCircle className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Improved SEO rankings</h3>
                                                </div>
                                                <p className="text-accent-400">Google prioritizes mobile-friendly sites in search results</p>
                                        </div>

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Shield className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Higher accessibility</h3>
                                                </div>
                                                <p className="text-accent-400">Mobile-first design naturally improves accessibility standards</p>
                                        </div>
                                </div>
                        </div>

                        <div className="mt-8 bg-primary-800 border border-primary-700 p-6 rounded-xl text-center">
                                <h3 className="text-xl font-semibold text-highlight-500 mb-4">Mobile-First Benefits</h3>
                                <p className="text-accent-400">
                                        Starting with mobile constraints forces better design decisions and creates a more focused user experience
                                </p>
                        </div>
                </div>
);

const ProgressiveWebAppsSlide = () => (
                <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-accent-500">
                                Progressive Web Apps (PWAs)
                        </h2>
                        
                        <div className="grid lg:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Code className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Built with React</h3>
                                                </div>
                                                <p className="text-accent-400">Leverage existing React knowledge to create app-like experiences</p>
                                        </div>

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Smartphone className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Add to home screen like a native app</h3>
                                                </div>
                                                <p className="text-accent-400">Users can install your web app directly on their device</p>
                                        </div>

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Shield className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Offline access</h3>
                                                </div>
                                                <p className="text-accent-400">Service workers enable functionality even without internet</p>
                                        </div>
                                </div>

                                <div className="space-y-6">
                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Zap className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Push notifications</h3>
                                                </div>
                                                <p className="text-accent-400">Engage users with native-like notifications</p>
                                        </div>

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <GitBranch className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Data syncing</h3>
                                                </div>
                                                <p className="text-accent-400">Synchronize data when connection is restored</p>
                                        </div>

                                        <div className="bg-primary-800 border border-primary-700 p-6 rounded-xl text-center">
                                                <h3 className="text-xl font-semibold text-highlight-500 mb-4">PWA Advantages</h3>
                                                <p className="text-accent-400">
                                                        Combine the best of web and mobile apps without app store distribution
                                                </p>
                                        </div>
                                </div>
                        </div>
                </div>
);

const FutureOpportunitiesSlide = () => (
                <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-accent-500">
                                Other Future Opportunities
                        </h2>
                        
                        <div className="grid lg:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Zap className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Next.js for SSR & faster performance</h3>
                                                </div>
                                                <p className="text-accent-400">Server-side rendering for improved SEO and initial load times</p>
                                        </div>

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <Code className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Supabase for backend as a service</h3>
                                                </div>
                                                <p className="text-accent-400">Modern alternative to Firebase with PostgreSQL database</p>
                                        </div>
                                </div>

                                <div className="space-y-6">
                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <GitBranch className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">More CI/CD integrations</h3>
                                                </div>
                                                <p className="text-accent-400">Enhanced automation and deployment pipelines</p>
                                        </div>

                                        <div className="bg-primary-700 border border-primary-600 p-6 rounded-xl">
                                                <div className="flex items-center mb-4">
                                                        <CheckCircle className="w-8 h-8 text-highlight-500 mr-3" />
                                                        <h3 className="text-xl font-semibold text-accent-500">Advanced testing frameworks</h3>
                                                </div>
                                                <p className="text-accent-400">Comprehensive testing strategies for better code quality</p>
                                        </div>
                                </div>
                        </div>

                        <div className="mt-8 bg-primary-800 border border-primary-700 p-6 rounded-xl text-center">
                                <h3 className="text-xl font-semibold text-highlight-500 mb-4">Future Vision</h3>
                                <p className="text-accent-400">
                                        Continuous evolution of our development stack to stay current with modern web standards
                                </p>
                        </div>
                </div>
);

const ClosingSlide = () => (
                <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-12 text-accent-500">
                                Implementation
                        </h2>
                        
                        <div className="space-y-8">
                                <div className="bg-primary-700 border border-primary-600 p-8 rounded-xl">
                                        <div className="flex items-center mb-6">
                                                <div className="w-12 h-12 bg-highlight-500 rounded-lg flex items-center justify-center mr-4">
                                                        <span className="text-white font-bold text-xl">1</span>
                                                </div>
                                                <h3 className="text-2xl font-semibold text-accent-500">Phase 1: Standardize GitHub + CI/CD</h3>
                                        </div>
                                        <p className="text-accent-400 ml-16">Establish version control and automated deployment pipelines</p>
                                </div>

                                <div className="bg-primary-700 border border-primary-600 p-8 rounded-xl">
                                        <div className="flex items-center mb-6">
                                                <div className="w-12 h-12 bg-highlight-500 rounded-lg flex items-center justify-center mr-4">
                                                        <span className="text-white font-bold text-xl">2</span>
                                                </div>
                                                <h3 className="text-2xl font-semibold text-accent-500">Phase 2: Replace Bootstrap/jQuery with React + TypeScript</h3>
                                        </div>
                                        <p className="text-accent-400 ml-16">Modernize frontend development with component-based architecture</p>
                                </div>

                                <div className="bg-primary-700 border border-primary-600 p-8 rounded-xl">
                                        <div className="flex items-center mb-6">
                                                <div className="w-12 h-12 bg-highlight-500 rounded-lg flex items-center justify-center mr-4">
                                                        <span className="text-white font-bold text-xl">3</span>
                                                </div>
                                                <h3 className="text-2xl font-semibold text-accent-500">Future: PWAs, Next.js, enhanced tooling</h3>
                                        </div>
                                        <p className="text-accent-400 ml-16">Advanced features and performance optimizations</p>
                                </div>
                        </div>

                        
                </div>
);













const Presentation = () => {
                const [currentSlide, setCurrentSlide] = useState(0);

                const slides: Slide[] = [
                        { id: 'title', title: 'Title', component: TitleSlide },
                        { id: 'three-areas', title: 'Three Key Areas', component: ThreeAreasSlide },
                        { id: 'intro', title: 'Frontend Intro', component: FrontendIntroSlide },
                        { id: 'what-is-react', title: 'What is React?', component: WhatIsReactSlide },
                        { id: 'what-is-typescript', title: 'What is TypeScript?', component: WhatIsTypeScriptSlide },
                        { id: 'react-example-1', title: 'React Example', component: ReactExample1 },
                        { id: 'typescript', title: 'TypeScript Benefits', component: TypeScriptBenefitsSlide },
                        { id: 'aurora4-integration', title: 'Aurora4 Integration', component: Aurora4IntegrationSlide },
                        { id: 'modern-frameworks', title: 'Modern Frontend Frameworks', component: ModernFrontendFrameworksSlide },
                        { id: 'frontend-wrap-up', title: 'Frontend Wrap-Up', component: FrontendWrapUpSlide },
                        { id: 'dev-doc-intro', title: 'Development/Documentation Intro', component: DevelopmentDocumentationIntroSlide },
                        { id: 'current-workflow', title: 'Current Development Workflow', component: CurrentDevelopmentWorkflowSlide },
                        { id: 'proposed-improvements', title: 'Proposed Process Improvements', component: ProposedProcessImprovementsSlide },
                        { id: 'github-benefits', title: 'Benefits of GitHub', component: BenefitsOfGitHubSlide },
                        { id: 'cicd-benefits', title: 'Benefits of CI/CD Pipelines', component: BenefitsOfCICDPipelinesSlide },
                        { id: 'proposed-workflow', title: 'Proposed Development Workflow', component: ProposedDevelopmentWorkflowSlide },
                        { id: 'tools-integration', title: 'Possible Tools to Integrate', component: PossibleToolsToIntegrateSlide },
                        { id: 'documentation-improvements', title: 'Documentation Improvements', component: DocumentationImprovementsSlide },
                        { id: 'dev-doc-wrap-up', title: 'Dev/Documentation Wrap-Up', component: DevDocumentationWrapUpSlide },
                        { id: 'mobile-first', title: 'Mobile-First Design', component: MobileFirstDesignSlide },
                        { id: 'progressive-web-apps', title: 'Progressive Web Apps (PWAs)', component: ProgressiveWebAppsSlide },
                        { id: 'future-opportunities', title: 'Other Future Opportunities', component: FutureOpportunitiesSlide },
                        { id: 'closing', title: 'Implementation Roadmap', component: ClosingSlide },
                ];

                const nextSlide = () => {
                        setCurrentSlide((prev) => (prev + 1) % slides.length);
                };

                const prevSlide = () => {
                        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
                };

                const goToSlide = (index: number) => {
                        setCurrentSlide(index);
                };

                const CurrentSlideComponent = slides[currentSlide].component;

                return (
                        <div className="h-screen bg-primary-800 text-accent-500 flex flex-col">
                                {/* Header */}
                                <header className="bg-primary-700 border-b border-primary-600 shadow-xl">
                                        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                                                <div className="flex items-center space-x-3">
                                                    <Eye className="w-20 h-20 text-highlight-500 mx-auto" />
                                                    <div>
                                                        <h1 className="text-2xl font-bold bg-gradient-to-r text-accent-700 bg-clip-text">
                                                            FutureFocus
                                                        </h1>
                                                        <p className="text-sm text-accent-600">Eye on Technology</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <img src={awLogo} alt="AW Logo" className="h-12 w-auto" />
                                                </div>
                                        </div>
                                </header>

                                {/* Main Content */}
                                <div className="flex-grow flex items-center overflow-auto py-20">
                                  <main className="max-w-7xl mx-auto px-4 py-12 max-h-full mb-10">
                                          <CurrentSlideComponent />
                                  </main>
                                </div>

                                {/* Navigation */}
                                <footer className="bg-primary-700 border-t border-primary-600 p-4 mt-auto">
                                        <div className="max-w-7xl mx-auto flex justify-between items-center">
                                                <button
                                                    onClick={prevSlide}
                                                    disabled={currentSlide === 0}
                                                    className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-accent-400 rounded-lg hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                                >
                                                    <ChevronLeft className="w-5 h-5" />
                                                    <span>Previous</span>
                                                </button>
                                                
                                                <div className="flex space-x-2">
                                                    {slides.map((_, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => goToSlide(index)}
                                                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                                                index === currentSlide 
                                                                    ? 'bg-highlight-500 shadow-lg shadow-highlight-500/50' 
                                                                    : 'bg-primary-600 hover:bg-primary-500'
                                                            }`}
                                                        />
                                                    ))}
                                                </div>

                                                <button
                                                    onClick={nextSlide}
                                                    disabled={currentSlide === slides.length - 1}
                                                    className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-accent-400 rounded-lg hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                                >
                                                    <span>Next</span>
                                                    <ChevronRight className="w-5 h-5" />
                                                </button>
                                        </div>
                                </footer>
                        </div>
                );
};

export default Presentation;
