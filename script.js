document.addEventListener('DOMContentLoaded', () => {
    const config = window.portfolioConfig;
    if (!config) {
        console.error('Config not found!');
        return;
    }

    // --- Theme Setup ---
    const theme = config.theme || {};
    const colors = theme.colors || { primary: 'blue', background: 'gray-900', text: 'gray-100' };

    document.body.className = `bg-${colors.background} text-${colors.text} antialiased transition-colors duration-300`;

    // Helper to get primary color class
    const primaryText = `text-${colors.primary}-400`;
    const primaryBg = `bg-${colors.primary}-600`;
    const primaryBorder = `border-${colors.primary}-500`;

    // --- Profile Section ---
    const profile = config.profile || {};
    document.getElementById('profile-name').textContent = profile.name;
    document.getElementById('profile-tagline').textContent = profile.tagline;
    document.getElementById('profile-tagline').className += ` ${primaryText}`;
    document.getElementById('profile-description').textContent = profile.description;

    const profilePic = document.getElementById('profile-picture');
    profilePic.src = profile.picture;
    profilePic.className += ` ${primaryBorder}`;

    const profileGlow = document.getElementById('profile-glow');
    if (profileGlow && colors.glow) {
        profileGlow.classList.add(`bg-${colors.glow}`);
    }

    // Social Links
    const socialContainer = document.getElementById('social-links');
    if (profile.social) {
        Object.entries(profile.social).forEach(([platform, url]) => {
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.className = `px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${primaryBg} text-white`;
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
    const projectsTitle = document.getElementById('projects-title');
    if (config.projects_title.title && projectsTitle) {
        projectsTitle.textContent = config.projects_title.title;
    }
    const projectsDescription = document.getElementById('projects-description');
    if (config.projects_title.description && projectsDescription) {
        projectsDescription.textContent = config.projects_title.description;
    }

    // --- Projects Section ---
    const projectsContainer = document.getElementById('projects-grid');
    (config.projects || []).forEach(project => {
        const card = document.createElement('div');
        card.className = `glass-card rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col`;

        const img = document.createElement('img');
        img.src = project.image || 'https://via.placeholder.com/600x400';
        img.alt = project.title;
        img.className = 'w-full h-48 object-cover';

        const content = document.createElement('div');
        content.className = 'p-6 flex-grow flex flex-col';

        const title = document.createElement('h3');
        title.className = `text-xl font-bold mb-2 ${primaryText}`;
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
