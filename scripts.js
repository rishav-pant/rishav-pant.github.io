window.onload = function() {
    setInterval(createJugglingSkill, 1000); // Call this immediately once the page has loaded
};
const skills = ['Bash', 'C', 'Go', 'Java', 'JavaScript', 'Programming Languages', 'Python', 'Redux', 'TypeScript', 'Customer Satisfaction', 'Email', 'Forensics', 'Leadership', 'Management', 'Mentoring', 'Onboarding', 'Presence', 'Problem Solving', 'Reporting', 'Workday', 'Amazon EC2', 'Amazon Web Services', 'Analytical', 'Ansible', 'Apps', 'Automation', 'Bash Shell', 'Cloud', 'Cyber Security', 'Debugging', 'Deployment', 'DevOps', 'Django', 'Docker', 'Firebase', 'Git', 'GitHub', 'Google Cloud', 'Google Cloud Platform', 'Hibernate', 'Internet', 'JScript', 'Kubernetes', 'Linux', 'Monitoring', 'MySQL', 'Networking', 'Node.js', 'OpenCV', 'OpenStack', 'Packet Tracer', 'Performance', 'Research', 'Shell Scripting', 'Site Reliability Engineering', 'Social', 'Software Development', 'Troubleshooting', 'Unix', 'Python', 'AWS EKS', 'AWS ECS', 'Amazon Web Services'];

// Creating a container for skill lines inside the hero section
const skillContainer = document.createElement('div');
skillContainer.classList.add('skill-container');
document.querySelector('.hero').appendChild(skillContainer);
let line = 0;
let words = new Set();

function createJugglingSkill() {
    const skill = document.createElement('div');
    skill.classList.add('skill-word-'+line);
    let word = "";
    word = skills[Math.floor(Math.random() * skills.length)];
    while(word in words) {
        word = skills[Math.floor(Math.random() * skills.length)];
    }
    skill.textContent = word;
    words.add(word);
    // Set the vertical position of the skill word
    skill.style.top = `${line * 17}%`;
    
    // Append the skill to the container
    skillContainer.appendChild(skill);
    console.log(words);
    
    // Remove the word after the animation duration to clean up the DOM
    setTimeout(() => {
        skill.remove();
        words.delete(word);
    }, 3000);  // Matches animation duration (10s)
    line += 1;
    line %= 6;
}
