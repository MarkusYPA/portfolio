document.addEventListener('DOMContentLoaded', () => {
    const config = window.portfolioConfig;
    if (!config) {
        console.error('Config not found!');
        return;
    }

    // --- Theme Colors ---
    //  Colors object not used due to compatibility with Tailwind CLI
    //  so find and replace to change theme colors
    /*  
        primary: "amber",
        background: "neutral-800",
        text: "gray-100",
    */

    document.body.className = `bg-neutral-800 text-gray-100 antialiased transition-colors duration-300`;

    // --- Profile Section ---
    const profile = config.profile || {};
    document.getElementById('profile-name').textContent = profile.name;
    document.getElementById('profile-tagline').textContent = profile.tagline;
    document.getElementById('profile-tagline').className += ` text-amber-400`;
    document.getElementById('profile-description').textContent = profile.description;

    const profilePic = document.getElementById('profile-picture');
    profilePic.src = profile.picture;
    profilePic.className += ` border-amber-500`;

    const profileGlow = document.getElementById('profile-glow');
    if (profileGlow) {
        profileGlow.classList.add(`bg-amber-500`);
    }

    // Social Links
    const socialContainer = document.getElementById('social-links');
    if (profile.email) {
        const link = document.createElement('a');
        link.href = "mailto:" + profile.email;
        link.target = '_blank';
        link.className = `px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg bg-amber-600 text-white`;
        link.textContent = "Email";
        socialContainer.appendChild(link);
    }
    if (profile.social) {
        Object.entries(profile.social).forEach(([platform, url]) => {
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.className = `px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg bg-amber-600 text-white`;
            link.textContent = platform.charAt(0).toUpperCase() + platform.slice(1);
            socialContainer.appendChild(link);
        });
    }

    // --- Skills Section ---
    const skillsContainer = document.getElementById('skills-list');
    (config.skills || []).forEach(skill => {
        const badge = document.createElement('span');
        badge.className = `px-4 py-2 rounded-full text-sm font-semibold glass-card hover:bg-white hover:bg-opacity-10 transition-colors cursor-default`;
        badge.textContent = skill;
        skillsContainer.appendChild(badge);
    });

    // --- Projects Description ---
    const projectsTitle = document.getElementById('school-projects-title');
    if (config.school_projects_title.title && projectsTitle) {
        projectsTitle.textContent = config.school_projects_title.title;
    }
    const projectsDescription = document.getElementById('school-projects-description');
    if (config.school_projects_title.description && projectsDescription) {
        projectsDescription.textContent = config.school_projects_title.description;
    }

    // --- Projects Section ---
    const projectsContainer = document.getElementById('school-projects-grid');
    (config.school_projects || []).forEach(project => {
        const card = document.createElement('div');
        card.className = `glass-card rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col`;

        const img = document.createElement('img');
        img.src = project.image || 'https://via.placeholder.com/600x400';
        img.alt = project.title;
        img.className = 'w-full h-48 object-cover';

        const content = document.createElement('div');
        content.className = 'p-6 flex-grow flex flex-col';

        const title = document.createElement('h3');
        title.className = `text-xl font-bold mb-2 text-amber-400`;
        title.textContent = project.title;

        const desc = document.createElement('p');
        desc.className = 'text-sm opacity-80 mb-6 flex-grow leading-relaxed';
        desc.textContent = project.description;

        const link = document.createElement('a');
        link.href = project.link;
        link.target = '_blank';
        link.className = 'inline-flex items-center text-sm font-semibold hover:underline mt-auto';
        link.innerHTML = `View Project <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>`;

        content.appendChild(title);
        content.appendChild(desc);
        content.appendChild(link);

        card.appendChild(img);
        card.appendChild(content);
        projectsContainer.appendChild(card);
    });

    // --- Footer ---
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('footer-name').textContent = profile.name;
});
