export const formatDate = (dateTimeString) => {
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };
    return new Date(dateTimeString).toLocaleString(undefined, options);
};