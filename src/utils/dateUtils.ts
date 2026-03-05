export function formatCaseStudyDate(study: { date?: string; startDate?: string; endDate?: string }): string {
    if (study.startDate && study.endDate) {
        const startMonth = new Date(study.startDate).toLocaleDateString('en-US', { month: 'long' });
        const startYear = new Date(study.startDate).getFullYear();
        const endMonth = new Date(study.endDate).toLocaleDateString('en-US', { month: 'long' });
        const endYear = new Date(study.endDate).getFullYear();

        return `${startMonth}, ${startYear} - ${endMonth}, ${endYear}`;
    }

    if (study.date) {
        return new Date(study.date).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
        });
    }

    return '';
}
