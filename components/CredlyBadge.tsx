import React, { useEffect } from 'react';

interface CredlyBadgeProps {
    badgeId: string;
    width?: number;
    height?: number;
}

const CredlyBadge: React.FC<CredlyBadgeProps> = ({ badgeId, width = 250, height = 200 }) => {
    useEffect(() => {
        // Load Credly script if it's not already loaded
        const scriptId = 'credly-embed-js';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.type = 'text/javascript';
            script.async = true;
            script.src = '//cdn.credly.com/assets/utilities/embed.js';
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div
                data-iframe-width={width}
                data-iframe-height={height}
                data-share-badge-id={badgeId}
            ></div>
            <p className="mt-2 text-xs font-bold text-slate-400 uppercase tracking-widest text-center">
                AWS Certified
            </p>
        </div>
    );
};

export default CredlyBadge;
